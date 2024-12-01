import NextAuth, { NextAuthOptions, Session, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";
import UserModel from "../../../../models/User"; // Your Mongoose User model
import bcrypt from "bcrypt";

// Define the JWT type for callbacks
interface JWT {
  id?: string;
  name?: string;
  email?: string;
}

// Define authOptions with type safety
export const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    // Google OAuth provider
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
    // Credentials provider for email/password login
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Credentials not provided");
        }

        const { email, password } = credentials;

        // Find the user by email in the database
        const user = await UserModel.findOne({ email });

        if (!user) {
          throw new Error("No user found with this email");
        }

        // Validate the password using bcrypt
        const isValidPassword = await bcrypt.compare(password, user.password);
        if (!isValidPassword) {
          throw new Error("Incorrect password");
        }

        return {
          id: user._id.toString(), // Convert ObjectId to string
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    // Include user ID in the session
    async session({ session, token }: { session: Session; token: JWT }) {
      if (token?.id) {
        session.user = { ...session.user, id: token.id }; // Attach user ID to session
      }
      return session;
    },
    // Include user ID in the JWT token
    async jwt({ token, user }: { token: JWT; user?: User }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ensure you have this in your .env
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
import NextAuth, { NextAuthOptions, Session } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../../lib/mongodb";
import UserModel from "../../../../models/User";
import bcrypt from "bcrypt";
import { JWT } from "next-auth/jwt"; // Import JWT type from next-auth/jwt

const authOptions: NextAuthOptions = {
  adapter: MongoDBAdapter(clientPromise),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
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
          id: user._id.toString(),
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
    async session({ session, token }: { session: Session;token: JWT }) {
      if (token?.id) {
        session.user = { ...session.user, id: token.id };
      }
      return session;
    },
    async jwt({ token, user }: { token: JWT;user ? : { id: string } }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

// Export the handler function for GET and POST requests
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
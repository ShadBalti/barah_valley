import mongoose, { Mongoose } from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable");
}

// Declare global mongoose property using a module declaration instead of namespace
declare global {
  let mongoose: {
    conn: Mongoose | null;
    promise: Promise<Mongoose> | null;
  };
}

let cached = global.mongoose;

// Ensure proper typing for the cached variable
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise<Mongoose> {
  // Return the cached connection if it exists
  if (cached.conn) {
    return cached.conn;
  }

  // Ensure the connection is created only once
  if (!cached.promise) {
    cached.promise = mongoose.connect(MONGODB_URI).then((mongooseInstance) => mongooseInstance);
  }

  // Await the promise and store the connection in the cache
  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;

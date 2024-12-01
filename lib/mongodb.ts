import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable");
}

// Define the cached global variable with proper typing
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDatabase(): Promise < MongoClient > {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI).then((mongoClient) => {
      cached.conn = mongoClient;
      return mongoClient;
    });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDatabase;
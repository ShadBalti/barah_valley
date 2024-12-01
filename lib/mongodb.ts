import { MongoClient } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("Define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

// Ensure proper typing for the cached variable
if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

let client: MongoClient | null = null;

async function connectToDatabase() {
  if (client) return client;

  // Return the cached connection if it exists
  if (!cached.promise) {
    cached.promise = MongoClient.connect(MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }).then((mongoClient) => {
      client = mongoClient;
      return mongoClient;
    });
  }

  return cached.promise;
}

export default connectToDatabase;

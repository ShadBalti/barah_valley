import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/mongodb';
import bcrypt from 'bcryptjs';

interface RegisterRequestBody {
  name: string;
  email: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const { name, email, password }: RegisterRequestBody = await request.json();

    // Validate input
    if (!name || !email || !password) {
      console.error('Validation Error: Missing fields');
      return NextResponse.json({ message: 'All fields are required.' }, { status: 400 });
    }

    const db = await connectToDatabase();
    const usersCollection = db.collection('user');

    // Check if user already exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      console.error('Registration Error: Email already exists');
      return NextResponse.json({ message: 'Email is already registered.' }, { status: 400 });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Save user to database
    const newUser = {
      name,
      email,
      password: hashedPassword,
      createdAt: new Date(),
    };

    const result = await usersCollection.insertOne(newUser);
    if (!result.acknowledged) {
      console.error('Database Error: Failed to insert user');
      throw new Error('Failed to register user');
    }

    return NextResponse.json({ message: 'User registered successfully.' }, { status: 201 });
  } catch (error) {
    console.error('Internal Server Error:', error);
    return NextResponse.json({ message: 'Internal Server Error.' }, { status: 500 });
  }
}
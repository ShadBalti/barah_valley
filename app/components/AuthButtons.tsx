'use client';

import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';

export default function AuthButtons() {
  const router = useRouter();

  return (
    <div className="flex items-center space-x-4">
      {/* Sign Up Button */}
      <button
        onClick={() => router.push('/auth/signup')}
        className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded hover:bg-blue-600 transition"
      >
        Sign Up
      </button>

      {/* Sign In Button */}
      <button
        onClick={() => signIn()} // Default SignIn (Shows the providers modal)
        className="px-4 py-2 text-sm font-medium text-blue-500 border border-blue-500 rounded hover:bg-blue-500 hover:text-white transition"
      >
        Sign In
      </button>
    </div>
  );
}
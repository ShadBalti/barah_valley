'use client';

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const { data: session } = useSession();
  const router = useRouter();

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-2xl font-bold">Welcome, {session.user?.name}!</h1>
      <p className="text-gray-600">Email: {session.user?.email}</p>
      <button
        onClick={() => signOut()}
        className="px-4 py-2 mt-4 text-white bg-red-500 rounded hover:bg-red-600"
      >
        Sign Out
      </button>
    </div>
  );
}


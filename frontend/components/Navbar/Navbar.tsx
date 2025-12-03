import Link from 'next/link';
import React from 'react'


export default function Navbar() {
  return (
    <div className="flex justify-center gap-3 mt-4 mb-4">
      <Link
        href="/auth/login"
        className="px-4 py-2 rounded bg-blue-600 text-white"
      >
        Login
      </Link>
      <Link
        href="/auth/signup"
        className="px-4 py-2 rounded bg-green-600 text-white"
      >
        Signup
      </Link>
    </div>
  );
}

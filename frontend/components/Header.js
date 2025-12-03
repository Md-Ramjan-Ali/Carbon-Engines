'use client';
import Link from 'next/link';
import { getUserFromStorage, logout } from '../lib/authClient';
import { useRouter } from 'next/navigation';


export default function Header() {
const router = useRouter();
const user = typeof window !== 'undefined' ? getUserFromStorage() : null;


return (
<header className="flex items-center justify-between mb-6">
<div className="flex items-center gap-4">
<Link href="/"> <div className="text-lg font-semibold">Carbon Engines</div> </Link>
</div>
<div className="text-sm">
{user ? (
<div className="flex items-center gap-3">
<img src={user.avatarUrl} alt="avatar" className="w-8 h-8 rounded-full" />
<div>{user.name || user.email}</div>
<button onClick={() => { logout(); router.push('/auth/login'); }} className="px-3 py-1 border rounded">Logout</button>
</div>
) : (
<div className="flex gap-2">
<Link href="/auth/login" className="px-3 py-1 border rounded">Login</Link>
<Link href="/auth/signup" className="px-3 py-1 rounded bg-green-600 text-white">Sign up</Link>
</div>
)}
</div>
</header>
)
}
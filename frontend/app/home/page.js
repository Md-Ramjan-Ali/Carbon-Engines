'use client';
import { useEffect, useState } from 'react'
import ProtectedRouteClient from '../../components/ProtectedRouteClient'
import { getUserFromStorage, fetchWithAuth, logout } from '../../lib/authClient'
import { useRouter } from 'next/navigation'


export default function HomePage() {
const router = useRouter();
const [user, setUser] = useState(() => getUserFromStorage());


useEffect(() => {
// optional: refresh profile from backend
fetchWithAuth('/user/profile').then(async res => {
if (!res.ok) { logout(); router.push('/auth/login'); return; }
const data = await res.json();
setUser(data.user || user);
}).catch(() => {});
}, [router, user]);


return (
<ProtectedRouteClient>
<div className="max-w-2xl mx-auto">
<div className="flex justify-between items-center">
<h1 className="text-2xl font-bold">Home</h1>
<button onClick={() => { logout(); router.push('/auth/login'); }} className="px-3 py-1 rounded border">Logout</button>
</div>
<div className="mt-6">{user ? <pre>{JSON.stringify(user, null, 2)}</pre> : 'Loading...'}</div>
</div>
</ProtectedRouteClient>
)
}
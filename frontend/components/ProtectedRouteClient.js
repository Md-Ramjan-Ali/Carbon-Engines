'use client';
import { useEffect } from 'react';
import { getToken } from '../lib/authClient';
import { useRouter } from 'next/navigation';


export default function ProtectedRouteClient({ children }) {
const router = useRouter();
useEffect(() => {
const token = getToken();
if (!token) router.push('/auth/login');
}, []);


return <>{children}</>;
}
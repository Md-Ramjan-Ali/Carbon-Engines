'use client';
import { useEffect, useState } from 'react'
import { useRouter, useParams } from 'next/navigation'
import { verifyEmail } from '../../../../lib/authClient'


export default function VerifyEmailPage() {
const router = useRouter();
const params = useParams();
const token = params?.token;
const [status, setStatus] = useState('Verifying...');


useEffect(() => {
if (!token) return setStatus('Invalid token');
verifyEmail(token).then(res => {
setStatus(res?.message || 'Email verified');
if (res) setTimeout(() => router.push('/home'), 1200);
}).catch(() => setStatus('Verification failed'));
}, [token]);


return <div className="max-w-md mx-auto">{status}</div>
}
'use client';
import { useRouter, useParams } from 'next/navigation'
import AuthForm from '../../../../components/AuthForm'
import { resetPassword } from '../../../../lib/authClient'


export default function ResetPage() {
const router = useRouter();
const params = useParams();
const token = params?.token;


return (
<div className="max-w-md mx-auto">
<AuthForm
title="Reset password"
fields={[{ name: 'password', label: 'New password', type: 'password' }]}
submitLabel="Reset password"
onSubmit={async (values) => {
await resetPassword(token, values.password);
router.push('/auth/login');
}}
/>
</div>
)
}
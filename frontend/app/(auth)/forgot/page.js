'use client';
import { useRouter } from 'next/navigation'
import AuthForm from '../../../components/AuthForm'
import { requestPasswordReset } from '../../../lib/authClient'


export default function ForgotPage() {
const router = useRouter();
return (
<div className="max-w-md mx-auto">
<AuthForm
title="Forgot password"
fields={[{ name: 'email', label: 'Email' }]}
submitLabel="Send reset link"
onSubmit={async (values) => {
await requestPasswordReset(values.email);
router.push('/auth/login');
}}
/>
</div>
)
}
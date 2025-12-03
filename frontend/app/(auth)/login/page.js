'use client';
import { useRouter } from 'next/navigation'
import AuthForm from '../../../components/AuthForm'
import { login } from '../../../lib/authClient'
import { isEmail, isStrongPassword } from '../../../lib/validators'


export default function LoginPage() {
const router = useRouter();


return (
<div className="max-w-md mx-auto">
<AuthForm
title="Login"
fields={[{ name: 'email', label: 'Email' }, { name: 'password', label: 'Password', type: 'password' }]}
submitLabel="Login"
onSubmit={async (values) => {
if (!isEmail(values.email)) throw new Error('Invalid email');
if (!isStrongPassword(values.password)) throw new Error('Password too short');
await login(values.email, values.password);
router.push('/home');
}}
/>
<div className="mt-4 text-sm">
<a href="/auth/forgot">Forgot password?</a>
</div>
</div>
)
}
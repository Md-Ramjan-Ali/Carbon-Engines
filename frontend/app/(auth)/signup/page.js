'use client';
import { useRouter } from 'next/navigation'
import AuthForm from '../../../components/AuthForm'
import { signup } from '../../../lib/authClient'
import { isEmail, isStrongPassword } from '../../../lib/validators'


export default function SignupPage() {
const router = useRouter();
return (
<div className="max-w-md mx-auto">
<AuthForm
title="Sign up"
fields={[{ name: 'name', label: 'Full name' }, { name: 'email', label: 'Email' }, { name: 'password', label: 'Password', type: 'password' }]}
submitLabel="Create account"
onSubmit={async (values) => {
if (!values.name) throw new Error('Name required');
if (!isEmail(values.email)) throw new Error('Invalid email');
if (!isStrongPassword(values.password)) throw new Error('Password too short');
await signup(values.name, values.email, values.password);
router.push('/home');
}}
/>
</div>
);
}
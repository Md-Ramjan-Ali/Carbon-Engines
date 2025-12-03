import Link from 'next/link'


export default function Landing() {
return (
<main className="text-center mt-12">
<h1 className="text-3xl font-bold mb-4">Welcome to Carbon Engines</h1>
<p className="mb-6">Frontend auth demo UI</p>
<div className="flex justify-center gap-3">
<Link href="/auth/login" className="px-4 py-2 rounded bg-blue-600 text-white">Login</Link>
<Link href="/auth/signup" className="px-4 py-2 rounded bg-green-600 text-white">Signup</Link>
</div>
</main>
)
}
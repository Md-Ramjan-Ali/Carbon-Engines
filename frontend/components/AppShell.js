'use client';
import Header from './Header';


export default function AppShell({ children }) {
return (
<div className="max-w-3xl mx-auto p-6">
<Header />
<main>{children}</main>
</div>
)
}
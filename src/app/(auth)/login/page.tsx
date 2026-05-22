import type { Metadata } from 'next';
import Login from '@/components/frontend/Auth/Login';

export default function LoginPage() { return <Login />; }

export const metadata: Metadata = { title: 'Login' };

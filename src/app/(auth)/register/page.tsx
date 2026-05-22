import type { Metadata } from 'next';
import Register from '@/components/frontend/Auth/Register';

export default function RegisterPage() { return <Register />; }

export const metadata: Metadata = { title: 'Register' };

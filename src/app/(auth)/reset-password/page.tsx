import type { Metadata } from 'next';
import ResetPassword from '@/components/frontend/Auth/ResetPassword';

export default function ResetPasswordPage() { return <ResetPassword />; }

export const metadata: Metadata = { title: 'ResetPassword' };

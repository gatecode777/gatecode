import type { Metadata } from 'next';
import ForgetPassword from '@/components/frontend/Auth/ForgetPassword';

export default function ForgetPasswordPage() { return <ForgetPassword />; }

export const metadata: Metadata = { title: 'ForgetPassword' };

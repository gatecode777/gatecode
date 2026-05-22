import type { Metadata } from 'next';
import VerifyOTP from '@/components/frontend/Auth/VerifyOTP';

export default function VerifyOTPPage() { return <VerifyOTP />; }

export const metadata: Metadata = { title: 'VerifyOTP' };

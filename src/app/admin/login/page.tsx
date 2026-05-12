import type { Metadata } from 'next';
import LoginPageClient from '@/components/admin/LoginPageClient';

export const metadata: Metadata = {
  title: 'Sign In',
  description: 'Admin login — authorized access only',
};

export default function LoginPage() {
  return <LoginPageClient />;
}

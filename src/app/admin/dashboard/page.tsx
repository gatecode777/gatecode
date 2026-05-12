import type { Metadata } from 'next';
import { headers } from 'next/headers';
import DashboardClient from '@/components/admin/DashboardClient';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import type { AdminUser } from '@/types';

export const metadata: Metadata = {
  title: 'Dashboard',
};

async function getAdminData(adminId: string): Promise<AdminUser | null> {
  try {
    await connectDB();
    const admin = await Admin.findById(adminId).lean();
    if (!admin) return null;

    return {
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: admin.lastLogin?.toISOString() ?? null,
      createdAt: admin.createdAt.toISOString(),
    };
  } catch {
    return null;
  }
}

export default async function DashboardPage() {
  const headersList = await headers();
  const adminId = headersList.get('x-admin-id');

  let admin: AdminUser | null = null;
  if (adminId) {
    admin = await getAdminData(adminId);
  }

  return <DashboardClient admin={admin} />;
}

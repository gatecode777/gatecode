import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import type { ApiResponse, AdminUser } from '@/types';

export async function GET(request: NextRequest) {
  try {
    const token = request.cookies.get(COOKIE_NAME)?.value;

    if (!token) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Not authenticated' },
        { status: 401 }
      );
    }

    const payload = verifyToken(token);
    if (!payload) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Invalid or expired token' },
        { status: 401 }
      );
    }

    await connectDB();

    const admin = await Admin.findById(payload.id);
    if (!admin || !admin.isActive) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Admin not found or inactive' },
        { status: 404 }
      );
    }

    const adminData: AdminUser = {
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: admin.lastLogin?.toISOString() ?? null,
      createdAt: admin.createdAt.toISOString(),
    };

    return NextResponse.json<ApiResponse<AdminUser>>(
      { success: true, message: 'Admin retrieved', data: adminData },
      { status: 200 }
    );
  } catch (error) {
    console.error('[API] Me error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

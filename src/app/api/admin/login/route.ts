import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Admin from '@/models/Admin';
import { IAdmin } from '@/models/Admin';
import { signToken, COOKIE_NAME, COOKIE_OPTIONS } from '@/lib/jwt';
import { isValidEmail } from '@/lib/utils';
import type { ApiResponse, AdminUser } from '@/types';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, password } = body as { email: string; password: string };

    if (!email || !password) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Email and password are required' },
        { status: 400 }
      );
    }

    if (!isValidEmail(email)) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Invalid email format' },
        { status: 400 }
      );
    }

    await connectDB();

    const admin: IAdmin | null = await Admin.findOne({
      email: email.toLowerCase(),
    }).select('+password');

    if (!admin) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    if (!admin.isActive) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Account is deactivated. Contact support.' },
        { status: 403 }
      );
    }

    const isPasswordValid = await admin.comparePassword(password);
    if (!isPasswordValid) {
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Invalid email or password' },
        { status: 401 }
      );
    }

    admin.lastLogin = new Date();
    await admin.save();

    const token = signToken({
      id: admin._id.toString(),
      email: admin.email,
      role: 'admin',
    });

    const adminData: AdminUser = {
      id: admin._id.toString(),
      email: admin.email,
      name: admin.name,
      role: admin.role,
      isActive: admin.isActive,
      lastLogin: admin.lastLogin?.toISOString() ?? null,
      createdAt: admin.createdAt.toISOString(),
    };

    const response = NextResponse.json<ApiResponse<AdminUser>>(
      { success: true, message: 'Login successful', data: adminData },
      { status: 200 }
    );

    response.cookies.set(COOKIE_NAME, token, COOKIE_OPTIONS);

    return response;
  } catch (error) {
    console.error('[API] Login error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

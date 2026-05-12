import { NextResponse } from 'next/server';
import { COOKIE_NAME } from '@/lib/jwt';
import type { ApiResponse } from '@/types';

export async function POST() {
  try {
    const response = NextResponse.json<ApiResponse>(
      { success: true, message: 'Logged out successfully' },
      { status: 200 }
    );

    // Clear the auth cookie
    response.cookies.set(COOKIE_NAME, '', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 0,
      path: '/',
    });

    return response;
  } catch (error) {
    console.error('[API] Logout error:', error);
    return NextResponse.json<ApiResponse>(
      { success: false, message: 'Internal server error' },
      { status: 500 }
    );
  }
}

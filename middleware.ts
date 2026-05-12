import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const PUBLIC_ADMIN_ROUTES = ['/admin/login'];
const ADMIN_PREFIX = '/admin';
const COOKIE_NAME = 'admin_token';

// Encode secret as Uint8Array for jose (Web Crypto compatible)
function getSecret(): Uint8Array {
  const secret = process.env.JWT_SECRET ?? 'fallback-secret-change-me';
  return new TextEncoder().encode(secret);
}

async function verifyEdgeToken(token: string): Promise<{ id: string; email: string } | null> {
  try {
    const { payload } = await jwtVerify(token, getSecret());
    if (typeof payload.id !== 'string' || typeof payload.email !== 'string') return null;
    return { id: payload.id, email: payload.email };
  } catch {
    return null;
  }
}

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only handle /admin routes
  if (!pathname.startsWith(ADMIN_PREFIX)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(COOKIE_NAME)?.value;

  // Public route: /admin/login
  if (PUBLIC_ADMIN_ROUTES.includes(pathname)) {
    if (token) {
      const payload = await verifyEdgeToken(token);
      if (payload) {
        return NextResponse.redirect(new URL('/admin/dashboard', request.url));
      }
    }
    return NextResponse.next();
  }

  // Protected routes — token required
  if (!token) {
    const loginUrl = new URL('/admin/login', request.url);
    loginUrl.searchParams.set('from', pathname);
    return NextResponse.redirect(loginUrl);
  }

  const payload = await verifyEdgeToken(token);
  if (!payload) {
    const response = NextResponse.redirect(new URL('/admin/login', request.url));
    response.cookies.set(COOKIE_NAME, '', { maxAge: 0, path: '/' });
    return response;
  }

  // Inject admin info into request headers for server components
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set('x-admin-id', payload.id);
  requestHeaders.set('x-admin-email', payload.email);

  return NextResponse.next({
    request: { headers: requestHeaders },
  });
}

export const config = {
  matcher: ['/admin/:path*'],
};

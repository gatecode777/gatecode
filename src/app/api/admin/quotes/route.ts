import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import connectDB from '@/lib/db';
import QuoteRequest from '@/models/QuoteRequest';

function auth(req: NextRequest) {
  const t = req.cookies.get(COOKIE_NAME)?.value;
  return t ? verifyToken(t) : null;
}

export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json({ success: false, message: 'Unauthorized' }, { status: 401 });
  try {
    await connectDB();
    const sp = req.nextUrl.searchParams;
    const filter: Record<string, unknown> = {};
    const status = sp.get('status');
    if (status && status !== 'all') filter.status = status;
    const search = sp.get('search')?.trim();
    if (search) {
      const rx = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'i');
      filter.$or = [{ fullName: rx }, { companyName: rx }, { email: rx }, { mobileNumber: rx }];
    }
    const quotes = await QuoteRequest.find(filter).sort({ createdAt: -1 }).lean();
    return NextResponse.json({ success: true, data: quotes, total: quotes.length });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}

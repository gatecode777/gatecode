import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { findOrCreateTEPage } from '@/lib/services/technicalExpertiseService';
import type { ApiResponse } from '@/types';
function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
export async function POST(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  try {
    const { expertiseId, slug } = await req.json() as { expertiseId: string; slug: string };
    if (!expertiseId?.trim() || !slug?.trim())
      return NextResponse.json<ApiResponse>({ success:false, message:'expertiseId and slug required' }, { status:422 });
    const { page } = await findOrCreateTEPage(expertiseId, slug);
    return NextResponse.json({ success:true, message:'OK', data:page });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}

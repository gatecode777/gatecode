import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { listTEPages } from '@/lib/services/technicalExpertiseService';
import { clamp } from '@/lib/validations/shared';
import type { ApiResponse } from '@/types';
function auth(req: NextRequest) { const t = req.cookies.get(COOKIE_NAME)?.value; return t ? verifyToken(t) : null; }
export async function GET(req: NextRequest) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success:false, message:'Unauthorized' }, { status:401 });
  const sp = req.nextUrl.searchParams;
  try {
    const result = await listTEPages({
      page: clamp(Number(sp.get('page')??1),1,9999), limit: clamp(Number(sp.get('limit')??20),1,1000),
      search: sp.get('search')??undefined, status: (sp.get('status')??'all') as 'active'|'inactive'|'all',
    });
    return NextResponse.json({ success:true, message:'OK', ...result });
  } catch(e) { console.error(e); return NextResponse.json<ApiResponse>({ success:false, message:'Server error' }, { status:500 }); }
}

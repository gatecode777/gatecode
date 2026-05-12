import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { reorderCategories } from '@/lib/services/categoryService';
import type { ApiResponse } from '@/types';

export async function POST(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  if (!token || !verifyToken(token))
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  try {
    const { items } = await req.json() as { items: Array<{ id: string; order: number }> };
    if (!Array.isArray(items) || items.some(i => !i.id || typeof i.order !== 'number'))
      return NextResponse.json<ApiResponse>({ success: false, message: 'items must be array of {id, order}' }, { status: 400 });

    await reorderCategories(items);
    return NextResponse.json({ success: true, message: 'Reordered' });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

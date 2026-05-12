import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateSliderInput } from '@/lib/validations/slider';
import { listSliders, createSlider } from '@/lib/services/sliderService';
import { clamp } from '@/lib/validations/shared';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(request: NextRequest) {
  if (!auth(request)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const sp = request.nextUrl.searchParams;
  const page  = clamp(Number(sp.get('page')  ?? 1), 1, 9999);
  const limit = clamp(Number(sp.get('limit') ?? 10), 1, 100);
  const search = sp.get('search') ?? undefined;
  const status = (sp.get('status') ?? 'all') as 'active' | 'inactive' | 'all';

  try {
    const result = await listSliders({ page, limit, search, status });
    return NextResponse.json({ success: true, message: 'OK', ...result }, { status: 200 });
  } catch (err) {
    console.error('[API slider GET]', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  if (!auth(request)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  try {
    const body = await request.json();
    const { valid, errors } = validateSliderInput(body);
    if (!valid) return NextResponse.json<ApiResponse>({ success: false, message: 'Validation failed', error: JSON.stringify(errors) }, { status: 422 });

    const slider = await createSlider(body);
    return NextResponse.json({ success: true, message: 'Slider created', data: slider }, { status: 201 });
  } catch (err) {
    console.error('[API slider POST]', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

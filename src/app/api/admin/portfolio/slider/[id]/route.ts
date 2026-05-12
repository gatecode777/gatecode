import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateSliderInput } from '@/lib/validations/slider';
import { getSliderById, updateSlider, deleteSlider } from '@/lib/services/sliderService';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const slider = await getSliderById(id);
    if (!slider) return NextResponse.json<ApiResponse>({ success: false, message: 'Slider not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'OK', data: slider });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const body = await req.json();
    const { valid, errors } = validateSliderInput(body, true);
    if (!valid) return NextResponse.json<ApiResponse>({ success: false, message: 'Validation failed', error: JSON.stringify(errors) }, { status: 422 });

    const updated = await updateSlider(id, body);
    if (!updated) return NextResponse.json<ApiResponse>({ success: false, message: 'Slider not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Slider updated', data: updated });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!auth(req)) return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });
  const { id } = await params;
  try {
    const ok = await deleteSlider(id);
    if (!ok) return NextResponse.json<ApiResponse>({ success: false, message: 'Slider not found' }, { status: 404 });
    return NextResponse.json({ success: true, message: 'Slider deleted' });
  } catch {
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { verifyToken, COOKIE_NAME } from '@/lib/jwt';
import { validateCaseStudyInput } from '@/lib/validations/caseStudy';
import {
  getCaseStudyById,
  getCaseStudyBySlug,
  updateCaseStudy,
  deleteCaseStudy,
} from '@/lib/services/caseStudyService';
import type { ApiResponse } from '@/types';

function auth(req: NextRequest) {
  const token = req.cookies.get(COOKIE_NAME)?.value;
  return token ? verifyToken(token) : null;
}

type Ctx = { params: Promise<{ id: string }> };

export async function GET(req: NextRequest, { params }: Ctx) {
  if (!auth(req))
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  try {
    // Support fetch by MongoDB ObjectId OR by slug
    const isObjectId = /^[a-f\d]{24}$/i.test(id);
    const study = isObjectId
      ? await getCaseStudyById(id)
      : await getCaseStudyBySlug(id);

    if (!study)
      return NextResponse.json<ApiResponse>({ success: false, message: 'Case study not found' }, { status: 404 });

    return NextResponse.json({ success: true, message: 'OK', data: study });
  } catch (err) {
    console.error('[API case-study GET]', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

export async function PATCH(req: NextRequest, { params }: Ctx) {
  if (!auth(req))
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  try {
    const body = await req.json();
    const { valid, errors } = validateCaseStudyInput(body, true);
    if (!valid)
      return NextResponse.json<ApiResponse>(
        { success: false, message: 'Validation failed', error: JSON.stringify(errors) },
        { status: 422 }
      );

    const updated = await updateCaseStudy(id, body);
    if (!updated)
      return NextResponse.json<ApiResponse>({ success: false, message: 'Case study not found' }, { status: 404 });

    return NextResponse.json({ success: true, message: 'Case study updated', data: updated });
  } catch (err) {
    const msg  = err instanceof Error ? err.message : 'Internal server error';
    const code = msg.includes('Slug') ? 409 : 500;
    return NextResponse.json<ApiResponse>({ success: false, message: msg }, { status: code });
  }
}

export async function DELETE(req: NextRequest, { params }: Ctx) {
  if (!auth(req))
    return NextResponse.json<ApiResponse>({ success: false, message: 'Unauthorized' }, { status: 401 });

  const { id } = await params;

  try {
    const ok = await deleteCaseStudy(id);
    if (!ok)
      return NextResponse.json<ApiResponse>({ success: false, message: 'Case study not found' }, { status: 404 });

    return NextResponse.json({ success: true, message: 'Case study deleted' });
  } catch (err) {
    console.error('[API case-study DELETE]', err);
    return NextResponse.json<ApiResponse>({ success: false, message: 'Internal server error' }, { status: 500 });
  }
}

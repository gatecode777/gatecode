import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();
    const study = await CaseStudy.findOne({ slug, isActive: true }).lean();
    if (!study) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    return NextResponse.json({ success: true, data: study });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

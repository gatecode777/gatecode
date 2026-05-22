import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import { TEPage } from '@/models/TechnicalExpertise';
import TechnicalExpertise from '@/models/TechnicalExpertise';

type Ctx = { params: Promise<{ slug: string }> };

export async function GET(_req: NextRequest, { params }: Ctx) {
  const { slug } = await params;
  try {
    await connectDB();
    // Find TE item by slug first
    const teItem = await TechnicalExpertise.findOne({ slug: slug.toLowerCase(), isActive: true }).lean();
    if (!teItem) return NextResponse.json({ success: false, message: 'Not found' }, { status: 404 });
    // Find its page
    const page = await TEPage.findOne({ expertiseId: teItem._id, isActive: true }).lean();
    return NextResponse.json({ success: true, data: { teItem, page: page ?? null } });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

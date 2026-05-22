import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

export async function GET() {
  try {
    await connectDB();
    const studies = await CaseStudy.find({ isActive: true })
      .sort({ order: 1, createdAt: -1 })
      .select('title slug shortDesc thumbnail isFeatured order')
      .lean();
    return NextResponse.json({ success: true, data: studies });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}

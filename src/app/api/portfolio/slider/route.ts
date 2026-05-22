import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import PortfolioSlider from '@/models/PortfolioSlider';

export async function GET() {
  try {
    await connectDB();
    const slides = await PortfolioSlider.find({ isActive: true })
      .sort({ order: 1 })
      .select('desktopImage altText order')
      .lean();
    return NextResponse.json({ success: true, data: slides });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, data: [] }, { status: 500 });
  }
}

import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import TeamMember from '@/models/TeamMember';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    await connectDB();
    const members = await TeamMember.find({ isActive: true }).sort({ order:1, createdAt:1 }).select('name designation image stars order').lean();
    return NextResponse.json(
      { success:true, data:members },
      { headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  } catch(e) {
    console.error(e);
    return NextResponse.json(
      { success:false, data:[] },
      { status:500, headers: { 'Cache-Control': 'no-store, max-age=0' } }
    );
  }
}

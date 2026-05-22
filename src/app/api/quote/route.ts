import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import QuoteRequest from '@/models/QuoteRequest';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { fullName, companyName, mobileNumber, email, additionalDetail } = body;

    if (!fullName?.trim())     return NextResponse.json({ success: false, message: 'Full name is required' }, { status: 400 });
    if (!companyName?.trim())  return NextResponse.json({ success: false, message: 'Company name is required' }, { status: 400 });
    if (!mobileNumber?.trim()) return NextResponse.json({ success: false, message: 'Mobile number is required' }, { status: 400 });
    if (!email?.trim())        return NextResponse.json({ success: false, message: 'Email is required' }, { status: 400 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, message: 'Invalid email' }, { status: 400 });

    const quote = await QuoteRequest.create({
      fullName: fullName.trim(),
      companyName: companyName.trim(),
      mobileNumber: mobileNumber.trim(),
      email: email.trim().toLowerCase(),
      additionalDetail: additionalDetail?.trim() || '',
    });

    return NextResponse.json({ success: true, data: { _id: quote._id } }, { status: 201 });
  } catch (e) { console.error(e); return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 }); }
}

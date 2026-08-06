import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ClientInquiry from '@/models/ClientInquiry';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { name, phone, email, requirement, budget } = await req.json();

    if (!name?.trim())        return NextResponse.json({ success: false, message: 'Name is required' }, { status: 422 });
    if (!phone?.trim())       return NextResponse.json({ success: false, message: 'Phone is required' }, { status: 422 });
    if (!/^[6-9]\d{9}$/.test(phone.trim())) return NextResponse.json({ success: false, message: 'Enter a valid 10-digit mobile number starting with 6–9' }, { status: 422 });
    if (!email?.trim())       return NextResponse.json({ success: false, message: 'Email is required' }, { status: 422 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 422 });
    if (!requirement?.trim()) return NextResponse.json({ success: false, message: 'Please select what you need' }, { status: 422 });
    if (!budget?.trim())      return NextResponse.json({ success: false, message: 'Please select a budget range' }, { status: 422 });

    const entry = await ClientInquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      requirement: requirement.trim(),
      budget: budget.trim(),
    });

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', data: { _id: entry._id } },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

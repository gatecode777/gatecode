import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ClientInquiry from '@/models/ClientInquiry';
import { sendClientInquiryEmail } from '@/lib/sendClientInquiryEmail';

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

    // Save to MongoDB
    const entry = await ClientInquiry.create({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim().toLowerCase(),
      requirement: requirement.trim(),
      budget: budget.trim(),
    });

    // Send email notification (non-blocking — don't fail the response if email fails)
    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });

    sendClientInquiryEmail({
      name: name.trim(),
      phone: phone.trim(),
      email: email.trim(),
      requirement: requirement.trim(),
      budget: budget.trim(),
      submittedAt,
    }).catch(err => console.error('[ClientInquiry] Email send failed:', err));

    return NextResponse.json(
      { success: true, message: 'Inquiry submitted successfully', data: { _id: entry._id } },
      { status: 201 }
    );
  } catch (e) {
    console.error('[ClientInquiry] Error:', e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import ContactRequest from '@/models/ContactRequest';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { projectDetails, name, email, phone, agreePrivacy, requestNda } = await req.json();

    // Validation
    if (!projectDetails?.trim()) return NextResponse.json({ success: false, message: 'Project details are required' }, { status: 422 });
    if (!name?.trim()) return NextResponse.json({ success: false, message: 'Name is required' }, { status: 422 });
    if (!email?.trim()) return NextResponse.json({ success: false, message: 'Email is required' }, { status: 422 });
    if (!phone?.trim()) return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 422 });

    const cleanPhone = phone.trim().replace(/[-\s()]+/g, '');
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json({ success: false, message: 'Invalid phone number' }, { status: 422 });
    }
    if (!agreePrivacy) return NextResponse.json({ success: false, message: 'You must agree to the Privacy Policy' }, { status: 422 });

    const entry = await ContactRequest.create({
      projectDetails: projectDetails.trim(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      agreePrivacy: Boolean(agreePrivacy),
      requestNda: Boolean(requestNda),
    });

    return NextResponse.json({ success: true, message: 'Request submitted successfully', data: { _id: entry._id } }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
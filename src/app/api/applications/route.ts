import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import JobApplication from '@/models/JobApplication';

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const body = await req.json();
    const { applicationType, fullName, email, phone, position, resumeUrl, resumeOriginalName } = body;

    // Validation
    if (!applicationType || !['job', 'internship'].includes(applicationType))
      return NextResponse.json({ success: false, message: 'Invalid application type' }, { status: 422 });
    if (!fullName?.trim())
      return NextResponse.json({ success: false, message: 'Full name is required' }, { status: 422 });
    if (!email?.trim())
      return NextResponse.json({ success: false, message: 'Email is required' }, { status: 422 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))
      return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 422 });
    if (!phone?.trim())
      return NextResponse.json({ success: false, message: 'Phone number is required' }, { status: 422 });

    const cleanPhone = phone.trim().replace(/[-\s()]+/g, '');
    if (!/^(?:\+91|91|0)?[6-9]\d{9}$/.test(cleanPhone)) {
      return NextResponse.json({ success: false, message: 'Invalid phone number' }, { status: 422 });
    }
    if (!position?.trim())
      return NextResponse.json({ success: false, message: 'Position is required' }, { status: 422 });
    if (!resumeUrl?.trim())
      return NextResponse.json({ success: false, message: 'Resume is required' }, { status: 422 });

    const entry = await JobApplication.create({
      applicationType,
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      position: position.trim(),
      resumeUrl: resumeUrl.trim(),
      resumeOriginalName: resumeOriginalName?.trim() || '',
    });

    return NextResponse.json({ success: true, message: 'Application submitted successfully', data: { _id: entry._id } }, { status: 201 });
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error. Please try again.' }, { status: 500 });
  }
}
import { NextRequest, NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import CompanyContactMessage from '@/models/CompanyContactMessage';

const SUBJECT_LABELS: Record<string, string> = {
  web: 'Web Development',
  app: 'App Development',
  marketing: 'Digital Marketing',
  consultancy: 'Business Consultancy',
  other: 'Other Inquiry',
};

export async function POST(req: NextRequest) {
  try {
    await connectDB();
    const { firstName, lastName, email, phone = '', subject, message } = await req.json();

    if (!firstName?.trim()) return NextResponse.json({ success: false, message: 'First name is required' }, { status: 422 });
    if (!lastName?.trim()) return NextResponse.json({ success: false, message: 'Last name is required' }, { status: 422 });
    if (!email?.trim()) return NextResponse.json({ success: false, message: 'Email is required' }, { status: 422 });
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return NextResponse.json({ success: false, message: 'Invalid email address' }, { status: 422 });
    if (!subject?.trim()) return NextResponse.json({ success: false, message: 'Subject is required' }, { status: 422 });
    if (!message?.trim()) return NextResponse.json({ success: false, message: 'Message is required' }, { status: 422 });

    const entry = await CompanyContactMessage.create({
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      subject: SUBJECT_LABELS[subject] ?? subject.trim(),
      message: message.trim(),
    });

    return NextResponse.json(
      { success: true, message: 'Message submitted successfully', data: { _id: entry._id } },
      { status: 201 }
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}

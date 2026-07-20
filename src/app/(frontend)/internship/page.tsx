// @ts-nocheck
import type { Metadata } from 'next';
import InternshipHero from '@/components/frontend/InternshipHero/InternshipHero';
import InternshipInfo from '@/components/frontend/InternshipInfo/InternshipInfo';
import CareerSuccess from '@/components/frontend/CareerSuccess/CareerSuccess';
import ApplicationForm from '@/components/frontend/ApplicationForm/ApplicationForm';

export const metadata: Metadata = {
  title: 'Internship Opportunities | Gatecode Technologies',
  description: 'Start your career with Gatecode Technologies. Join our internship program to gain real-world project experience, industry mentorship, and hands-on skill development.',
  keywords: [
    'Gatecode Technologies',
    'internship program',
    'real project experience',
    'live projects',
    'mentorship and guidance',
    'skill development',
    'certificate of completion',
    'start your career',
    'fresher internship',
    'student internships'
  ],
  alternates: {
    canonical: '/internship',
  },
};

export default function InternshipPage() {
  return (
    <>
      <InternshipHero />
      <InternshipInfo />
      <CareerSuccess />
      <ApplicationForm />
    </>
  );
}

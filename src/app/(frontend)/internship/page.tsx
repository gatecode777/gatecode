// @ts-nocheck
import type { Metadata } from 'next';
import InternshipHero from '@/components/frontend/InternshipHero/InternshipHero';
import InternshipInfo from '@/components/frontend/InternshipInfo/InternshipInfo';
import CareerSuccess from '@/components/frontend/CareerSuccess/CareerSuccess';
import ApplicationForm from '@/components/frontend/ApplicationForm/ApplicationForm';

export const metadata: Metadata = { title: 'Internship' };

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

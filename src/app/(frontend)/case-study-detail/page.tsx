// @ts-nocheck
'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CaseStudyDetailRedirect() {
  const router = useRouter();
  useEffect(() => { router.replace('/case-study'); }, [router]);
  return null;
}

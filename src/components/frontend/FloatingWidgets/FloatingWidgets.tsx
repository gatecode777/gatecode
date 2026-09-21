'use client';

import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';

import ScrollToTop from '@/components/frontend/ScrollToTop/ScrollToTop';

const Chatbot = dynamic(() => import('@/components/frontend/Chatbot/Chatbot'));

export default function FloatingWidgets() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      <ScrollToTop />
      {mounted && <Chatbot />}
    </>
  );
}

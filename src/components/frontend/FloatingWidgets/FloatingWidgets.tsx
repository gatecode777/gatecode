'use client';

import dynamic from 'next/dynamic';

const ScrollToTop = dynamic(() => import('@/components/frontend/ScrollToTop/ScrollToTop'), { ssr: false });
const Chatbot = dynamic(() => import('@/components/frontend/Chatbot/Chatbot'), { ssr: false });

export default function FloatingWidgets() {
  return (
    <>
      <ScrollToTop />
      <Chatbot />
    </>
  );
}

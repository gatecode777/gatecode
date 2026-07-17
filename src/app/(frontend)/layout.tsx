import type { Metadata } from 'next';
import Navbar from '@/components/frontend/Navbar/Navbar';
import Footer from '@/components/frontend/Footer/Footer';
import ScrollToTop from '@/components/frontend/ScrollToTop/ScrollToTop';
import Chatbot from '@/components/frontend/Chatbot/Chatbot';

export const metadata: Metadata = {
  title: 'Gatecode Technologies',
  description: 'Empowering businesses with technology driven solutions, operational excellence, and strategic expertise.',
};

export default function FrontendLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="">
      <Navbar />
      {children}
      <Footer />
      <ScrollToTop />
      <Chatbot />
    </div>
  );
}

import Navbar from '@/components/frontend/Navbar/Navbar';
import Footer from '@/components/frontend/Footer/Footer';
import NotFoundContent from '@/components/frontend/NotFound/NotFoundContent';

export default function NotFound() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main id="main-content" style={{ flex: 1, display: 'flex', width: '100%' }}>
        <NotFoundContent />
      </main>
      <Footer />
    </div>
  );
}

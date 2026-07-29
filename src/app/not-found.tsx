import Link from 'next/link';
import Navbar from '@/components/frontend/Navbar/Navbar';
import Footer from '@/components/frontend/Footer/Footer';

export default function NotFound() {
  return (
    <div>
      <Navbar />
      <main
        style={{
          minHeight: '70vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#0a0f1d',
          color: '#ffffff',
          padding: '80px 20px',
          textAlign: 'center',
        }}
      >
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <span
            style={{
              fontSize: '14px',
              fontWeight: '700',
              letterSpacing: '3px',
              textTransform: 'uppercase',
              color: '#0fb9b1',
              display: 'block',
              marginBottom: '16px',
            }}
          >
            404 Error - Page Not Found
          </span>
          <h1
            style={{
              fontSize: '64px',
              fontWeight: '800',
              margin: '0 0 20px 0',
              background: 'linear-gradient(135deg, #ffffff 0%, #0fb9b1 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              lineHeight: '1.1',
            }}
          >
            Lost in Cyberspace?
          </h1>
          <p
            style={{
              fontSize: '18px',
              color: '#a0aec0',
              lineHeight: '1.6',
              marginBottom: '36px',
            }}
          >
            The page you are looking for does not exist, has been moved, or is temporarily unavailable. Let us guide you back to safety.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '16px',
              justifyContent: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Link
              href="/"
              style={{
                padding: '14px 28px',
                backgroundColor: '#0fb9b1',
                color: '#ffffff',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                boxShadow: '0 10px 25px rgba(15, 185, 177, 0.3)',
              }}
            >
              Return to Home
            </Link>
            <Link
              href="/services"
              style={{
                padding: '14px 28px',
                backgroundColor: 'transparent',
                color: '#ffffff',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Explore Services
            </Link>
            <Link
              href="/contact"
              style={{
                padding: '14px 28px',
                backgroundColor: 'transparent',
                color: '#0fb9b1',
                border: '1px solid #0fb9b1',
                borderRadius: '30px',
                fontWeight: '600',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
              }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

import Link from 'next/link';
import Navbar from '@/components/frontend/Navbar/Navbar';
import Footer from '@/components/frontend/Footer/Footer';

export default function NotFound() {
  return (
    <div style={{ background: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />

      <main style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '80px 24px',
        background: 'linear-gradient(160deg, #f0fffe 0%, #ffffff 50%, #f8fafc 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}>

        {/* Background decoration circles */}
        <div aria-hidden="true" style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '480px', height: '480px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,185,177,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div aria-hidden="true" style={{
          position: 'absolute', bottom: '-100px', left: '-100px',
          width: '360px', height: '360px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(15,185,177,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>

          {/* Big 404 Number */}
          <div style={{
            fontSize: 'clamp(100px, 20vw, 160px)',
            fontWeight: 900,
            lineHeight: 1,
            marginBottom: '8px',
            background: 'linear-gradient(135deg, #0fb9b1 0%, #0ca39c 60%, #0e3a5d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
            letterSpacing: '-4px',
          }}>
            404
          </div>

          {/* Badge */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            background: 'rgba(15,185,177,0.1)',
            border: '1px solid rgba(15,185,177,0.3)',
            borderRadius: '100px',
            padding: '6px 16px',
            fontSize: '13px',
            fontWeight: 700,
            color: '#0ca39c',
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            marginBottom: '24px',
          }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#0fb9b1', display: 'inline-block' }} />
            Page Not Found
          </div>

          {/* Heading */}
          <h1 style={{
            fontSize: 'clamp(28px, 5vw, 42px)',
            fontWeight: 800,
            color: '#0f172a',
            marginBottom: '16px',
            lineHeight: 1.25,
            letterSpacing: '-0.02em',
            fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
          }}>
            Oops! This page doesn&apos;t exist
          </h1>

          {/* Description */}
          <p style={{
            fontSize: '17px',
            color: '#64748b',
            lineHeight: 1.7,
            marginBottom: '40px',
            maxWidth: '520px',
            margin: '0 auto 40px auto',
          }}>
            The page you&apos;re looking for may have been moved, renamed, or is temporarily unavailable. Let us help you find your way back.
          </p>

          {/* CTA Buttons */}
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '56px' }}>
            <Link
              href="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: '#0fb9b1',
                color: '#ffffff',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                boxShadow: '0 4px 18px rgba(15,185,177,0.35)',
                fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
                transition: 'all 0.2s ease',
              }}
            >
              ← Back to Home
            </Link>
            <Link
              href="/contact"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '14px 28px',
                background: 'transparent',
                color: '#0f172a',
                border: '1.5px solid #e2e8f0',
                borderRadius: '8px',
                fontWeight: 700,
                fontSize: '15px',
                textDecoration: 'none',
                fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
              }}
            >
              Contact Us
            </Link>
          </div>

          {/* Quick Links */}
          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '32px',
          }}>
            <p style={{ fontSize: '13px', color: '#94a3b8', marginBottom: '16px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Or explore these pages
            </p>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', flexWrap: 'wrap' }}>
              {[
                { label: 'Services', href: '/services' },
                { label: 'Portfolio', href: '/portfolio' },
                { label: 'Blog', href: '/blog' },
                { label: 'About Us', href: '/about' },
                { label: 'Careers', href: '/careers' },
              ].map(link => (
                <Link
                  key={link.href}
                  href={link.href}
                  style={{
                    display: 'inline-block',
                    padding: '8px 18px',
                    background: '#f8fafc',
                    border: '1px solid #e2e8f0',
                    borderRadius: '6px',
                    color: '#475569',
                    fontSize: '14px',
                    fontWeight: 600,
                    textDecoration: 'none',
                    fontFamily: "'Plus Jakarta Sans', 'Inter', system-ui, sans-serif",
                    transition: 'all 0.15s ease',
                  }}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}

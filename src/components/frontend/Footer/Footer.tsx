import Link from 'next/link';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import { FiMail, FiPhone } from 'react-icons/fi';
import './Footer.css';

const serviceLinks = [
  { name: 'Web Development', slug: 'web-development' },
  { name: 'Software Development', slug: 'software-development' },
  { name: 'Mobile App Development', slug: 'mobile-app-development' },
  { name: 'Graphic Design', slug: 'graphic-design' },
  { name: 'Digital Marketing', slug: 'digital-marketing' },
  { name: 'Data Management', slug: 'data-management' },
  { name: 'UI/UX Design', slug: 'ui-ux-design' },
  { name: 'BPO Services', slug: 'bpo-services' },
  { name: 'Accounting', slug: 'accounting' },
];

const expertiseLinks = [
  { name: 'Web Developers', slug: 'web-developers' },
  { name: 'App Developers', slug: 'app-developers' },
  { name: 'E-Commerce & CMS', slug: 'e-commerce-cms' },
  { name: 'Java Script Developers', slug: 'javascript-developers' },
  { name: 'UI/UX Designers', slug: 'ui-ux-designers' },
  { name: 'Graphic Designers', slug: 'graphic-designers' },
  { name: 'Digital Marketer', slug: 'digital-marketer' },
];

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-main">
        <div className="ft-main-inner">
          <div className="ft-col ft-col--brand">
            <Link href="/" className="ft-logo"><Image src="/logo.png" alt="GATECODE Logo" className="logo-img" width={160} height={80} /></Link>
            <p className="ft-address">Empowering businesses with technology driven solutions, operational excellence, and strategic expertise.</p>
            <div className="ft-socials">
              <a href="https://www.linkedin.com/" className="ft-social" aria-label="LinkedIn"><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg></a>
              <a href="https://x.com/" className="ft-social" aria-label="X"><BsTwitterX /></a>
              <a href="https://www.instagram.com/" className="ft-social" aria-label="Instagram"><FaInstagram /></a>
              <a href="https://www.facebook.com/" className="ft-social" aria-label="Facebook"><FaFacebookF /></a>
              <a href="https://www.youtube.com/" className="ft-social" aria-label="YouTube"><FaYoutube /></a>
            </div>
          </div>
          <div className="ft-col">
            <h4>COMPANY</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/case-study">Case Studies</Link></li>
              <li><Link href="/careers">Career</Link></li>
              <li><Link href="/internship">Internship</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/engagement-process">Engagement Process</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div className="ft-col">
            <h4>SERVICES</h4>
            <ul>
              {serviceLinks.map(item => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ft-col">
            <h4>TECHNICAL EXPERTISE</h4>
            <ul>
              {expertiseLinks.map(item => (
                <li key={item.slug}>
                  <Link href={`/expertise/${item.slug}`}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="ft-col ft-col--legal">
            <h4>LEGAL</h4>
            <ul>
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions">Terms &amp; Conditions</Link></li>
              <li><Link href="/cookie-policy">Cookie Policy</Link></li>
            </ul>
            <div className="ft-contact-card">
              <div className="ft-contact-row">
                <span className="ft-contact-icon ft-contact-icon--phone"><FiPhone size={14} /></span>
                <a href="tel:+918502888838" className="ft-contact-text">+91 8502888838</a>
              </div>
              <div className="ft-contact-row ft-contact-row--email">
                <span className="ft-contact-icon ft-contact-icon--email"><FiMail size={14} /></span>
                <a href="mailto:info@gatecode.in" className="ft-contact-text">info@gatecode.in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="ft-info">
        <div className="ft-info-inner">
          <p>
            Gatecode Technologies Pvt. Ltd. is a reliable partner for businesses seeking
            end-to-end solutions across IT services, BPO, data entry, digital marketing,
            consultancy, and accounting. We combine technology, expertise, and innovation
            to streamline operations, improve efficiency, and drive sustainable business growth.
          </p>
        </div>
      </div>

      <div className="ft-bottom">
        <div className="ft-bottom-inner">
          <p>Gatecode Technologies Pvt. Ltd. &copy; Copyright 2026</p>
        </div>
      </div>
    </footer>
  );
}

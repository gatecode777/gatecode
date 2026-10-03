// @ts-nocheck
'use client';

import { FiPhone, FiMail, FiMapPin, FiClock } from 'react-icons/fi';
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { BsTwitterX } from 'react-icons/bs';
import './ContactInfo.css';

const InfoCard = ({ icon, title, details, link }) => {
  const content = (
    <div className="info-card">
      <div className="info-icon-wrapper">{icon}</div>
      <div className="info-details">
        <h3>{title}</h3>
        {details.map((detail, index) => (
          <p key={index}>{detail}</p>
        ))}
      </div>
    </div>
  );

  if (link) {
    return (
      <a
        href={link}
        target={link.startsWith('http') ? '_blank' : undefined}
        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
        style={{ textDecoration: 'none', color: 'inherit', display: 'block' }}
      >
        {content}
      </a>
    );
  }

  return content;
};

const ContactInfo = () => {
  const contactDetails = [
    {
      icon: <FiPhone />,
      title: 'Call Us',
      details: ['+91 8502888838', '+91 8502888839'],
      link: 'tel:+918502888838'
    },
    {
      icon: <FiMail />,
      title: 'Email Us',
      details: ['info@gatecode.in', 'support@gatecode.in'],
      link: 'mailto:info@gatecode.in'
    },
    {
      icon: <FiMapPin />,
      title: 'Visit Us',
      details: ['412, Sumer Nagar, Mansarovar', 'Jaipur, India'],
      link: 'https://maps.app.goo.gl/makpC6JDuUg7jbgi9'
    },
    {
      icon: <FiClock />,
      title: 'Office Hours',
      details: ['Mon - Fri: 9:00 AM - 6:00 PM', 'Sat: 10:00 AM - 2:00 PM']
    }
  ];

  const socials = [
    { icon: <FaLinkedinIn />, link: '#' },
    { icon: <BsTwitterX />, link: '#' },
    { icon: <FaInstagram />, link: '#' },
    { icon: <FaFacebookF />, link: '#' },
    { icon: <FaYoutube />, link: '#' }
  ];

  return (
    <div className="contact-info-col">
      <div className="info-card-grid">
        {contactDetails.map((item, index) => (
          <InfoCard key={index} {...item} />
        ))}
      </div>

      <div className="social-connect">
        <h3 style={{ color: '#ffffff' }}>Connect With Us</h3>
        <div className="social-links">
          {socials.map((social, index) => (
            <a key={index} href={social.link} className="social-btn" target="_blank" rel="noopener noreferrer">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;

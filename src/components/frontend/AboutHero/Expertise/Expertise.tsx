'use client';

import './Expertise.css';

const expertiseData = [
  {
    title: 'Multi-Domain Expertise',
    description: 'Experience across IT services, BPO, data entry, accounting, and consultancy gives us a versatile edge.',
  },
  {
    title: 'Experienced Team',
    description: 'Our team consists of skilled professionals with diverse industry experience, committed to delivering high-quality, reliable, and innovative solutions tailored to your business needs.',
  },
  {
    title: 'End-to-End Product Engineering',
    description: 'From idea to deployment and maintenance, we handle the complete product lifecycle.',
  },
  {
    title: 'Client-Centric Approach',
    description: 'We focus on understanding business needs and delivering tailored solutions, not just generic services.',
  },
  {
    title: 'Skilled & Dedicated Team',
    description: 'Our team of experts ensures high-quality development, timely delivery, and continuous support.',
  },
  {
    title: 'Cost-Effective Solutions',
    description: 'We provide high-value services at competitive pricing, ideal for startups and growing businesses.',
  },
  {
    title: 'Latest Technologies & Tools',
    description: 'We use modern tech stacks to build scalable, secure, and future-ready products.',
  },
  {
    title: 'Continuous Improvement',
    description: 'We constantly enhance our processes, technologies, and skills to deliver better performance, improved efficiency, and innovative solutions that keep our clients ahead in a competitive market.',
  },
  {
    title: 'Quality & Accuracy Focus',
    description: 'Especially in data entry and BPO services, we ensure precision and reliability.',
  },
  {
    title: 'On-Time Project Delivery',
    description: 'Strong project management ensures deadlines are always met without compromising quality.',
  },
];

const Expertise = () => {
  return (
    <section className="expertise-section">
      {expertiseData.map((item, index) => (
        <div className="expertise-item" key={index}>
          <h3 className="expertise-title">{item.title}</h3>
          <p className="expertise-desc">{item.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Expertise;

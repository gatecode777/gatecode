'use client';

import React, { useState } from 'react';
import './FAQSection.css';

export interface FAQItem {
  num?: string;
  question: string;
  answer: string;
}

export const defaultWebDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What types of Web Development Services does Gatecode Technologies provide?',
    answer:
      'We offer custom website development, e-commerce solutions, CMS development, and dynamic web applications. Our team focuses on building responsive, secure, and SEO-friendly websites that deliver a seamless user experience (UI/UX) across all devices to support your business growth.',
  },
  {
    num: '02',
    question: 'Do you offer custom web development or use pre-built templates?',
    answer:
      'We deliver 100% custom-engineered architecture. We do not use generic templates; instead, we write clean, maintainable, and modular full-stack code to ensure your SaaS platforms, enterprise workflows, and web apps can scale efficiently.',
  },
  {
    num: '03',
    question: 'What modern technologies do you use to build websites and web apps?',
    answer:
      'As a high-performance web development company, we utilize modern frameworks including React, Next.js, Node.js, and Python. We also provide seamless API integration services to connect payment gateways, CRMs, ERPs, and external business tools into a unified system.',
  },
  {
    num: '04',
    question: 'Can I hire dedicated web developers from Gatecode for my project?',
    answer:
      'Yes, absolutely! If you are looking to expand your technical capabilities or scale your engineering bandwidth, you can hire our skilled full-stack engineers in India. We offer flexible engagement models that reduce development overhead while guaranteeing high code quality and on-time delivery.',
  },
  {
    num: '05',
    question: 'Do you provide post-launch support and maintenance?',
    answer:
      "Yes, our partnership doesn't end at launch. We provide 24/7 website maintenance and end-to-end technical support. This includes active monitoring, security patches, performance tuning, and continuous updates to ensure your website operates at peak performance.",
  },
];

export const customWebDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is the difference between custom website development and template-based websites?',
    answer:
      'Custom website development involves building your platform from the ground up, tailored specifically to your business goals, target audience, and operational workflows. Unlike generic templates, custom solutions offer a unique UI/UX design, highly scalable architecture, superior security, and optimized performance without any unnecessary code bloat.',
  },
  {
    num: '02',
    question: 'What technologies do you use for building custom websites?',
    answer:
      'Our full-stack engineering team builds robust and scalable custom web solutions using modern frameworks such as React, Next.js, Node.js, and Python. We focus on writing clean, modular, and maintainable code that can easily integrate with custom APIs, enterprise ERPs, and third-party payment gateways.',
  },
  {
    num: '03',
    question: 'How do you ensure my custom website is fast and SEO-friendly?',
    answer:
      'We engineer all custom websites with performance and search engine visibility at their core. By utilizing advanced frameworks like Next.js for efficient rendering, optimizing core web vitals, and implementing clean HTML structures, we ensure your website loads lightning-fast and ranks higher on search engines like Google.',
  },
  {
    num: '04',
    question: 'Will my custom website be scalable as my business grows?',
    answer:
      'Absolutely. One of the biggest advantages of custom web development is scalability. We design your database and backend architecture to handle increased traffic and complex data workflows, ensuring that your website or web application can seamlessly expand alongside your business without needing a complete rebuild.',
  },
  {
    num: '05',
    question: 'What is your process for developing a custom website?',
    answer:
      'We follow a structured, end-to-end development process. It begins with in-depth requirement analysis and strategic planning, followed by custom UI/UX design. Once the design is approved, our developers build and rigorously test the site for functionality and security. Post-launch, we provide continuous monitoring and dedicated maintenance support.',
  },
];

export const cmsWebsiteDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is a CMS website, and why does my business need one?',
    answer:
      "A Content Management System (CMS) is a platform that allows you to easily create, manage, and update your website's content without needing to write any code. If your business requires frequent updates—such as publishing blogs, adding new products, or updating company news—a CMS gives you complete control over your website quickly and efficiently.",
  },
  {
    num: '02',
    question: 'Do I need technical knowledge or coding skills to manage my CMS website?',
    answer:
      'Not at all! The primary benefit of our CMS development services is providing you with a highly intuitive and user-friendly admin dashboard. You and your team can easily edit text, upload images, manage pages, and publish content with just a few clicks, requiring zero technical expertise.',
  },
  {
    num: '03',
    question: 'Do you build custom CMS platforms or use headless CMS architectures?',
    answer:
      'We do both based on your specific business requirements. We specialize in building custom-engineered CMS portals tailored to your exact workflows. Additionally, as a high-performance web development company, we integrate modern Headless CMS solutions using frameworks like React and Next.js, which separate the backend content management from the frontend to deliver lightning-fast loading speeds.',
  },
  {
    num: '04',
    question: 'Will my CMS website be secure against hacking and vulnerabilities?',
    answer:
      'Yes, security is a top priority for us. Unlike poorly maintained template sites that are prone to attacks, we build secure CMS architectures with built-in SSL, data encryption, and advanced defenses against common web vulnerabilities. We also offer ongoing maintenance services to ensure your CMS is always updated with the latest security patches.',
  },
  {
    num: '05',
    question: 'Are the CMS websites developed by Gatecode SEO-friendly?',
    answer:
      'Absolutely. We engineer our CMS solutions with search engine optimization (SEO) at their core. We ensure clean code structure, fast page load times, mobile responsiveness, and easy-to-use SEO modules so you can effortlessly optimize your meta tags, URLs, and content to rank higher on Google.',
  },
];

export const softwareDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What types of Software Development services does Gatecode Technologies provide?',
    answer:
      'We offer custom software development, enterprise solutions, SaaS platforms, and business workflow automation services. Our team designs scalable and secure software tailored specifically to your business needs, helping to enhance your operational efficiency.',
  },
  {
    num: '02',
    question: 'What is the difference between custom software and ready-made (off-the-shelf) software?',
    answer:
      'Ready-made software is generic and often comes with limited or rigid features. In contrast, we build 100% custom-engineered software that aligns perfectly with your unique business workflows. Custom software provides better security, high scalability, and complete control over your requirements without any unnecessary recurring licensing fees.',
  },
  {
    num: '03',
    question: 'Can your custom software integrate with our existing systems like CRM or ERP?',
    answer:
      'Yes, absolutely! We provide seamless API integration services. We can effectively connect your new software with your existing CRMs, ERPs, payment gateways, third-party tools, and legacy systems to ensure a smooth data flow within a unified architecture.',
  },
  {
    num: '04',
    question: 'What technologies do you use for software development?',
    answer:
      'As a leading full-stack development company, we utilize a modern and robust tech stack. This includes advanced frameworks like React, Next.js, Node.js, and Python for both backend architectures and intuitive frontend interfaces, ensuring high performance, speed, and strict data security.',
  },
  {
    num: '05',
    question: 'Do you provide post-development support and maintenance after deployment?',
    answer:
      "Our commitment doesn't end with software delivery. We provide end-to-end support and 24/7 maintenance services. This includes active monitoring, security patches, performance tuning, and future technical updates to ensure your software always operates at peak performance.",
  },
];

export const scalableSolutionsFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What are scalable web and software solutions?',
    answer:
      'Scalable solutions are custom-built digital platforms engineered to handle growth seamlessly. Whether your business experiences a sudden surge in website traffic, an expanding user base, or increased data processing needs, a scalable architecture ensures your application continues to perform optimally without crashing or slowing down.',
  },
  {
    num: '02',
    question: 'Why is scalability important for my growing business?',
    answer:
      'As your business expands, your digital infrastructure must be able to keep up. Without a scalable foundation, increased workloads can lead to system downtime, slow loading speeds, and a poor user experience. Scalable solutions future-proof your digital assets, allowing you to seamlessly add new features and handle higher capacities cost-effectively.',
  },
  {
    num: '03',
    question: 'How do you ensure the scalability of a web application or software?',
    answer:
      'We achieve scalability by utilizing modern, high-performance tech stacks like React, Next.js, Node.js, and Python, paired with modular architectures. By implementing optimized database structures, efficient load balancing, and clean, modular code, we ensure your platform can scale both vertically (adding more power) and horizontally (adding more servers) as your demands increase.',
  },
  {
    num: '04',
    question: 'Can you upgrade my existing legacy software to make it scalable?',
    answer:
      'Yes! Our team can conduct a comprehensive technical audit of your current system to identify performance bottlenecks. We can then restructure, optimize, or entirely migrate your legacy application to a more robust framework, improving database queries and integrating modern cloud hosting solutions for superior resource management.',
  },
  {
    num: '05',
    question: 'Are scalable digital solutions cost-effective in the long run?',
    answer:
      'Absolutely. While engineering a scalable architecture requires strategic initial planning, it is highly cost-effective long term. It prevents the need for expensive, complete system rebuilds every few years. Furthermore, modern scalable cloud infrastructure allows you to optimize costs by only paying for the computing resources you actually use during traffic peaks.',
  },
];

export const systemIntegrationFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is system integration, and why does my business need it?',
    answer:
      'System integration is the process of connecting different software applications, third-party tools, and IT systems so they can communicate and function as a single, unified platform. If your business uses multiple isolated tools (like a separate CRM, accounting software, and e-commerce platform), integration eliminates data silos, automates workflows, and drastically improves operational efficiency.',
  },
  {
    num: '02',
    question: 'What types of systems and third-party software can you integrate?',
    answer:
      'Our engineering team can seamlessly integrate a wide variety of platforms. We specialize in connecting modern web applications with ERPs, CRMs, payment gateways, marketing automation tools, external business APIs, and custom SaaS solutions to create a synchronized digital ecosystem for your business.',
  },
  {
    num: '03',
    question: 'Can you integrate new web applications with our existing legacy systems?',
    answer:
      'Yes, absolutely. We understand that replacing an entire legacy system can be expensive and disruptive. We build custom API bridges and middleware that allow your older, existing infrastructure to securely communicate and share data with modern web and mobile applications without requiring a complete system overhaul.',
  },
  {
    num: '04',
    question: 'How does API integration improve our daily business operations?',
    answer:
      'Custom API integration enables real-time data syncing across all your software tools. This means your team no longer has to manually enter data into multiple systems, which reduces human error, saves countless administrative hours, and provides you with accurate, up-to-date analytics for better decision-making.',
  },
  {
    num: '05',
    question: "Is our company's data secure during and after the integration process?",
    answer:
      'Data security is our top priority. We implement robust security protocols, including end-to-end data encryption, secure authentication (like OAuth), and strict compliance checks. We ensure that data flows securely between systems without exposing your architecture to common web vulnerabilities or unauthorized access.',
  },
];

export const ongoingSupportFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is included in your ongoing support and maintenance services?',
    answer:
      'Our ongoing support services include 24/7 uptime monitoring, regular security patches, framework and plugin updates, bug fixes, and continuous performance tuning. We ensure that your website, web application, or software remains secure, fast, and fully functional at all times.',
  },
  {
    num: '02',
    question: 'Why do I need ongoing maintenance after my website or software is launched?',
    answer:
      'Technology constantly evolves, and so do web security threats. Without regular updates, your digital platform can become vulnerable to hacking, experience slow loading speeds, or face compatibility issues with new browsers and devices. Ongoing maintenance future-proofs your platform and guarantees a seamless user experience.',
  },
  {
    num: '03',
    question: 'How quickly does your team respond to critical technical issues or downtime?',
    answer:
      'We prioritize the stability of your business. We provide active monitoring to detect issues before they affect your users. In the event of a critical error or downtime, our dedicated technical support team responds immediately to troubleshoot and resolve the issue with minimal disruption to your operations.',
  },
  {
    num: '04',
    question: 'Do you provide maintenance for websites or software developed by other companies?',
    answer:
      'Yes, we do! If you have an existing application built by another agency, our full-stack engineers will conduct a comprehensive technical audit, review the existing codebase, and seamlessly take over the continuous support, optimization, and security management of your platform.',
  },
  {
    num: '05',
    question: 'Do you offer flexible support packages tailored to our specific business needs?',
    answer:
      'Absolutely. We understand that every business has different operational requirements and budgets. We offer flexible engagement models, including monthly retainers and dedicated support SLAs (Service Level Agreements), ensuring you only pay for the level of technical support your business actually needs.',
  },
];

export const mobileAppDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What platforms do you build mobile applications for?',
    answer:
      'We provide end-to-end mobile app development services for both iOS and Android platforms. Whether you need a native application built specifically for Apple or Google ecosystems, or a highly efficient cross-platform app, we deliver solutions that ensure maximum reach and seamless performance across all mobile devices.',
  },
  {
    num: '02',
    question: 'Should I choose native or cross-platform app development for my business?',
    answer:
      'It depends on your business goals and budget. Cross-platform apps are highly cost-effective and offer a faster time-to-market since they use a single codebase for both iOS and Android. However, if your application requires heavy device-specific hardware integration or complex graphics, we recommend custom native app development for maximum performance.',
  },
  {
    num: '03',
    question: 'Can your team integrate a new mobile app with our existing website or internal software?',
    answer:
      'Absolutely. As full-stack engineering experts, we specialize in seamless custom API integrations. We can connect your new mobile application directly to your existing website, CMS, CRM, ERP, and secure payment gateways, ensuring real-time data synchronization across your entire digital ecosystem.',
  },
  {
    num: '04',
    question: 'How long does it typically take to develop a custom mobile app?',
    answer:
      "The development timeline depends entirely on the app's complexity, required features, and integrations. A standard application may take a few months to develop, while a complex, enterprise-level app will take longer. We always begin with a thorough requirement analysis and provide a clear, structured roadmap and timeline before development begins.",
  },
  {
    num: '05',
    question: 'Do you assist with App Store deployment and post-launch app maintenance?',
    answer:
      'Yes, our services cover the entire app development lifecycle. We manage the strict submission and approval processes for both the Apple App Store and Google Play Store. After your app is live, we provide ongoing maintenance, security patches, bug fixes, and continuous performance tuning to keep it running flawlessly.',
  },
];

export const androidAppDevFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What types of Android applications do you develop?',
    answer:
      'We offer custom Android app development services tailored to your specific business needs. Whether you require a high-performance enterprise solution, an engaging e-commerce application, or a dynamic SaaS mobile platform, our team engineers scalable, secure, and user-friendly Android apps that drive business growth.',
  },
  {
    num: '02',
    question: 'What technologies do you use for Android app development?',
    answer:
      "We utilize modern, robust technologies to build industry-leading Android applications. Depending on your project's performance requirements, we develop using native programming languages like Kotlin and Java, or leverage advanced cross-platform frameworks to ensure efficient development and highly responsive user interfaces.",
  },
  {
    num: '03',
    question: 'Can your team integrate the Android app with our existing website or software?',
    answer:
      'Yes, absolutely! We specialize in custom API development and system integration. We can securely connect your new Android application with your existing web platforms, CRMs, ERPs, legacy systems, and third-party payment gateways to ensure seamless, real-time data synchronization.',
  },
  {
    num: '04',
    question: 'Do you handle the process of publishing the app on the Google Play Store?',
    answer:
      "Yes, our end-to-end development services include complete Google Play Store deployment. We ensure your application complies with all of Google's strict technical, performance, and security guidelines, managing the entire submission and approval process on your behalf.",
  },
  {
    num: '05',
    question: 'Do you provide support and updates after the Android app goes live?',
    answer:
      'Our partnership continues long after your app is launched. We provide ongoing support and maintenance services, which include active performance monitoring, security patches, bug fixes, and upgrading your app to ensure full compatibility with the latest Android OS releases.',
  },
];

export const uiUxDesignFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is the difference between UI and UX design, and why do I need both?',
    answer:
      'UX (User Experience) focuses on the logical flow, usability, and how a user navigates through your platform to solve their problems efficiently. UI (User Interface) focuses on the visual elements, such as colors, typography, and interactive components. At Gatecode, we combine both to create digital products that are not only visually stunning but also highly intuitive and easy to use.',
  },
  {
    num: '02',
    question: 'How does good UI/UX design impact my business and conversion rates?',
    answer:
      'A well-researched UI/UX design directly impacts your bottom line. By providing a seamless, frustration-free journey, you reduce website bounce rates and keep users engaged longer. An intuitive design builds immediate trust with your audience, which ultimately leads to higher conversion rates and increased sales for your business.',
  },
  {
    num: '03',
    question: 'Do you offer UI/UX redesign services for existing websites or applications?',
    answer:
      'Yes, absolutely! If your current website or mobile app looks outdated, has a high drop-off rate, or is difficult to navigate, our team can help. We conduct a comprehensive UX audit of your existing platform to identify friction points, and then completely revamp the interface to modernize the look and significantly improve usability.',
  },
  {
    num: '04',
    question: 'What is your process for designing a custom UI/UX?',
    answer:
      'We follow a highly structured, user-centric design process. It begins with requirement analysis and user research. We then create wireframes and interactive prototypes to map out the user journey. Once the core structure is approved, we design high-fidelity visual interfaces and conduct rigorous usability testing before handing the assets over to the development team.',
  },
  {
    num: '05',
    question: 'Can your design team collaborate with our internal developers?',
    answer:
      'Yes, we frequently work alongside internal engineering teams. We deliver clean, highly organized design files, comprehensive design systems, and clickable prototypes. Our UI/UX designers ensure clear communication with developers so that the final coded product is a pixel-perfect match to the original design.',
  },
];

export const uiDesignFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is UI (User Interface) design, and why does my business need it?',
    answer:
      'UI design focuses on the visual and interactive elements of your digital product, including layouts, color schemes, typography, and buttons. A strong, modern UI is crucial because it creates a powerful first impression, builds brand credibility, and keeps users visually engaged with your website or mobile application.',
  },
  {
    num: '02',
    question: 'Do you use pre-made templates for your UI designs, or is it fully custom?',
    answer:
      'We deliver 100% custom UI designs and never rely on generic templates. Our expert design team crafts bespoke, highly aesthetic interfaces that perfectly align with your unique brand identity, ensuring your digital platform stands out from the competition.',
  },
  {
    num: '03',
    question: 'How do you ensure the UI design looks perfect on all devices?',
    answer:
      'We strictly follow a responsive and mobile-first design approach. Our UI designers create adaptable layouts that scale seamlessly across desktop monitors, tablets, and smartphones, guaranteeing a pixel-perfect and engaging visual experience on any screen size.',
  },
  {
    num: '04',
    question: 'Can you revamp the user interface of an existing website or legacy application?',
    answer:
      'Yes, we specialize in UI modernization. If your current software looks outdated or fails to capture your audience’s attention, we can conduct a complete visual overhaul. We will redesign the interface to give it a fresh, modern, and premium look without disrupting your backend architecture.',
  },
  {
    num: '05',
    question: 'How do your UI designers ensure a smooth handoff to the development team?',
    answer:
      'We bridge the gap between design and development by creating comprehensive design systems and clear developer handoffs. We deliver highly organized design files, interactive prototypes, and detailed style guides so that engineers can translate our visual designs into pixel-perfect code without any guesswork.',
  },
];

export const uxDesignFaqs: FAQItem[] = [
  {
    num: '01',
    question: 'What is UX (User Experience) design, and why is it critical for my business?',
    answer:
      "UX design focuses on the overall experience and satisfaction a user has while interacting with your digital product. It ensures your website or application is logical, easy to navigate, and efficiently solves the user's problem. Good UX is critical because it reduces friction, minimizes bounce rates, and directly boosts customer retention and conversions.",
  },
  {
    num: '02',
    question: 'What is your process for creating a custom UX design?',
    answer:
      'Our UX design process is deeply analytical and user-centric. We start with comprehensive user research and requirement analysis, followed by creating user personas and journey maps. We then develop wireframes and interactive prototypes, allowing us to map out the perfect structural flow before any visual UI design or coding begins.',
  },
  {
    num: '03',
    question: 'How does UX design differ from UI design?',
    answer:
      'While UI (User Interface) focuses on the visual aesthetics like colors, buttons, and typography, UX (User Experience) is entirely about the underlying structural logic and functionality. UX ensures the platform is intuitive and easy to navigate, while UI ensures it looks premium. We expertly integrate both to deliver a flawless digital product.',
  },
  {
    num: '04',
    question: 'Can you improve the user experience (UX) of our existing website or app?',
    answer:
      'Absolutely. If your current platform suffers from high drop-off rates, low sales, or poor user feedback, we can perform an in-depth UX audit. We identify navigation bottlenecks and usability issues, and then restructure the user journey and wireframes to drastically improve overall performance and user engagement.',
  },
  {
    num: '05',
    question: 'Do you conduct usability testing during the UX design phase?',
    answer:
      'Yes, usability testing is a core component of our UX strategy. Before finalizing any structure, we test interactive prototypes to gather real data on how users naturally navigate the platform. This allows us to identify and eliminate friction points early on, ensuring the final product is highly intuitive from day one.',
  },
];

interface FAQSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  titleHighlight?: string;
  subtitle?: string;
  items?: FAQItem[];
}

const FAQSection: React.FC<FAQSectionProps> = ({
  eyebrow = 'FAQS',
  titleLine1 = 'FREQUENTLY ASKED',
  titleHighlight = 'QUESTIONS',
  subtitle = 'A comprehensive guide to our custom web engineering, full-stack technologies, flexible developer hiring, and ongoing website maintenance.',
  items = defaultWebDevFaqs,
}) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setActiveIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="faq-how-section" id="faq" aria-labelledby="faq-main-title">
      <div className="faq-how-inner">
        {/* Top Centered Header */}
        <div className="faq-how-heading-wrap">
          <p className="faq-how-eyebrow">{eyebrow}</p>
          <h2 id="faq-main-title" className="faq-how-title">
            {titleLine1}{' '}
            <span className="faq-how-title-line">{titleHighlight}</span>
          </h2>
          <p className="faq-how-subtitle">{subtitle}</p>
        </div>

        {/* Right Column: Pill Accordion Steps */}
        <div className="faq-how-steps" role="region" aria-label="Frequently Asked Questions">
          {items.map((item, index) => {
            const isActive = activeIndex === index;
            const itemNumber = item.num || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);
            const headingId = `faq-q-${index}`;
            const panelId = `faq-ans-${index}`;

            return (
              <div
                key={index}
                className={`faq-how-step ${isActive ? 'is-active' : ''}`}
                onClick={() => toggleFAQ(index)}
                itemScope
                itemProp="mainEntity"
                itemType="https://schema.org/Question"
              >
                <div
                  className="faq-how-step__head"
                  role="button"
                  id={headingId}
                  aria-expanded={isActive}
                  aria-controls={panelId}
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      toggleFAQ(index);
                    }
                  }}
                >
                  <div className="faq-how-step__num" aria-hidden="true">
                    {itemNumber}
                  </div>
                  <h3 className="faq-how-step__title" itemProp="name">
                    {item.question}
                  </h3>
                  <div className="faq-how-step__toggle" aria-hidden="true">
                    +
                  </div>
                </div>

                {isActive && (
                  <div
                    id={panelId}
                    role="region"
                    aria-labelledby={headingId}
                    itemScope
                    itemProp="acceptedAnswer"
                    itemType="https://schema.org/Answer"
                  >
                    <p className="faq-how-step__body" itemProp="text">
                      {item.answer}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

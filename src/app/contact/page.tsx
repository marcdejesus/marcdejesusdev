import type { Metadata } from 'next';
import { ContactForm } from '@/components/contact/ContactForm';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Contact - Web Developer in Macomb, MI | Get Your Quote',
  description: 'Contact Marc De Jesus for professional web development services in Macomb, Michigan. Serving statewide Michigan with custom websites, mobile apps, and digital solutions. Call (586) 221-0732.',
  keywords: [
    'contact web developer Macomb MI',
    'website quote Macomb Michigan',
    'web development services Michigan',
    'hire developer Macomb',
    'custom website Macomb MI',
    'web developer phone number',
    'Michigan web development consultation',
    'get quote web development'
  ],
  canonical: `${SITE_CONFIG.url}/contact`,
  openGraph: {
    title: 'Contact Marc De Jesus - Macomb Michigan Web Developer',
    description: 'Get in touch for professional web development services throughout Michigan. Quick response guaranteed.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Contact Marc De Jesus - Macomb Michigan Web Developer',
      },
    ],
  },
});

export default function ContactPage() {
  return (
    <ContactForm />
  );
}

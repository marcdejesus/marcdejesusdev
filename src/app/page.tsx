import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Web Developer Macomb MI - Modern React & Next.js Development',
  description: 'Marc De Jesus - Professional web developer in Macomb, Michigan. Specializing in React, Next.js, and AI integration for Michigan businesses statewide. Call (586) 221-0732 for a quote.',
  keywords: [
    'web developer Macomb MI',
    'website design Macomb Michigan', 
    'full stack developer Metro Detroit',
    'React developer Michigan',
    'Next.js developer Macomb',
    'custom website development',
    'mobile app developer Macomb',
    'modern web development Michigan',
    'AI web development'
  ],
  canonical: SITE_CONFIG.url,
  openGraph: {
    title: 'Marc De Jesus - Web Developer in Macomb, Michigan',
    description: 'Professional web development services for Macomb, MI and statewide Michigan. Custom websites, mobile apps, and AI-powered digital solutions.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Marc De Jesus - Web Developer Macomb Michigan',
      },
    ],
  },
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
    </>
  );
}

import type { Metadata } from 'next';
import { AboutContent } from '@/components/about/AboutContent';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'About Marc De Jesus - Web Developer in Macomb, Michigan',
  description: 'Meet Marc De Jesus, a skilled full-stack developer based in Macomb, MI. Central Michigan University graduate serving Michigan statewide with professional web development services.',
  keywords: [
    'Marc De Jesus',
    'web developer Macomb Michigan',
    'Central Michigan University graduate',
    'Metro Detroit developer',
    'full stack developer Michigan',
    'React developer Macomb',
    'CMU computer science graduate',
    'Michigan web developer'
  ],
  canonical: `${SITE_CONFIG.url}/about`,
  openGraph: {
    title: 'About Marc De Jesus - Michigan Web Developer',
    description: 'Central Michigan University graduate providing modern web development services throughout Michigan.',
    type: 'profile',
    images: [
      {
        url: '/headshot.jpg',
        width: 400,
        height: 400,
        alt: 'Marc De Jesus - Web Developer Macomb Michigan',
      },
    ],
  },
});

export default function AboutPage() {
  return (
    <AboutContent />
  );
}

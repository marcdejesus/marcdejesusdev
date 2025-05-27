import type { Metadata } from 'next';
import { HeroSection } from '@/components/home/HeroSection';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Home',
  description: 'Marc De Jesus - Full Stack Developer & UI/UX Designer. Explore my portfolio of web development projects, mobile apps, and digital solutions.',
  keywords: ['Marc De Jesus', 'portfolio', 'full stack developer', 'web developer', 'UI/UX designer', 'React', 'Next.js'],
  canonical: SITE_CONFIG.url,
  openGraph: {
    title: 'Marc De Jesus - Full Stack Developer & UI/UX Designer',
    description: 'Explore my portfolio of web development projects, mobile apps, and digital solutions.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Marc De Jesus Portfolio Homepage',
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

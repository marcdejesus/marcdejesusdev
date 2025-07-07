import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { PROJECTS } from '@/lib/constants';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Web Development Projects - Macomb MI Developer Portfolio',
  description: 'Explore web development projects by Marc De Jesus, Macomb Michigan developer. React, Next.js, mobile apps, and AI-powered solutions for Michigan businesses.',
  canonical: `${SITE_CONFIG.url}/projects`,
  keywords: [
    'web development projects Michigan',
    'React projects Macomb MI',
    'Next.js portfolio Michigan',
    'mobile app development portfolio',
    'Michigan developer projects',
    'custom website examples',
    'AI web development projects',
    'full stack development portfolio',
    'UI/UX design Michigan',
    'Macomb web developer work'
  ],
  openGraph: {
    title: 'Web Development Projects - Marc De Jesus Michigan Portfolio',
    description: 'Professional web development project portfolio showcasing React, Next.js, and mobile applications for Michigan businesses.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Marc De Jesus Web Development Projects Michigan',
      },
    ],
  },
});

export default function ProjectsPage() {
  // In a real app, you might fetch projects from a CMS or database here
  const projects = PROJECTS;

  return (
    <ProjectsGrid projects={projects} />
  );
}

import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { PROJECTS } from '@/lib/constants';
import { generateSEO, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: 'Projects',
  description: 'Explore a comprehensive collection of web development projects, mobile applications, and digital solutions created by Marc De Jesus. From React and Next.js applications to AI-powered tools.',
  canonical: `${SITE_CONFIG.url}/projects`,
  keywords: [
    'projects',
    'portfolio',
    'web development projects',
    'React projects',
    'Next.js applications',
    'mobile apps',
    'UI/UX design',
    'full stack development',
    'JavaScript projects',
    'TypeScript projects',
  ],
  openGraph: {
    title: 'Projects - Marc De Jesus Portfolio',
    description: 'Explore a comprehensive collection of web development projects and digital solutions.',
    type: 'website',
    images: [
      {
        url: '/hero.png',
        width: 1200,
        height: 630,
        alt: 'Marc De Jesus Projects Portfolio',
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

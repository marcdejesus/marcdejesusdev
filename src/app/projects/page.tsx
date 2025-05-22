import type { Metadata } from 'next';
import { ProjectsGrid } from '@/components/projects/ProjectsGrid';
import { PROJECTS, APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Projects | ${APP_NAME}`,
  description: 'Explore a collection of projects by DeJesus Digital Solutions, showcasing expertise in web development, UI/UX design, and mobile applications.',
};

export default function ProjectsPage() {
  // In a real app, you might fetch projects from a CMS or database here
  const projects = PROJECTS;

  return (
    <ProjectsGrid projects={projects} />
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS, APP_NAME } from '@/lib/constants';
import { ProjectDetailClient } from '@/components/projects/ProjectDetailClient';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    return {
      title: `Project Not Found | ${APP_NAME}`,
    };
  }

  return {
    title: `${project.title} | Projects | ${APP_NAME}`,
    description: project.shortDescription,
    openGraph: {
        title: project.title,
        description: project.shortDescription,
        images: [
            {
                url: project.coverImageUrl,
                width: 1200,
                height: 630,
                alt: project.title,
            },
        ],
    },
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}

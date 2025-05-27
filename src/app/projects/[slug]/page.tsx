import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PROJECTS } from '@/lib/constants';
import { ProjectDetailClient } from '@/components/projects/ProjectDetailClient';
import { generateSEO, generateCreativeWorkSchema, SITE_CONFIG } from '@/lib/seo';

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
    return generateSEO({
      title: 'Project Not Found',
      description: 'The requested project could not be found.',
      noindex: true,
    });
  }

  return generateSEO({
    title: project.title,
    description: project.shortDescription,
    canonical: `${SITE_CONFIG.url}/projects/${project.slug}`,
    keywords: [...project.technologies, 'project', 'portfolio', project.category.toLowerCase()],
    openGraph: {
      title: `${project.title} - Project by Marc De Jesus`,
      description: project.shortDescription,
      type: 'article',
      images: [
        {
          url: project.coverImageUrl,
          width: 1200,
          height: 630,
          alt: project.title,
        },
      ],
    },
  });
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = PROJECTS.find(p => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const projectSchema = generateCreativeWorkSchema({
    title: project.title,
    description: project.shortDescription,
    image: project.coverImageUrl,
    url: project.liveDemoUrl,
    technologies: project.technologies,
    dateCreated: project.duration || undefined,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema),
        }}
      />
      <ProjectDetailClient project={project} />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UPDATE_POSTS } from '@/lib/constants';
import { UpdateDetailClient } from '@/components/updates/UpdateDetailClient';
import { generateSEO, generateArticleSchema, SITE_CONFIG } from '@/lib/seo';

interface UpdatePostPageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return UPDATE_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePostPageProps): Promise<Metadata> {
  const post = UPDATE_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return generateSEO({
      title: 'Update Not Found',
      description: 'The requested update could not be found.',
      noindex: true,
    });
  }

  return generateSEO({
    title: post.title,
    description: post.excerpt,
    canonical: `${SITE_CONFIG.url}/updates/${post.slug}`,
    keywords: [...(post.tags || []), 'update', 'blog', 'article'],
    openGraph: {
      title: `${post.title} - Update by Marc De Jesus`,
      description: post.excerpt,
      type: 'article',
      images: [
        {
          url: post.coverImageUrl,
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
  });
}

export default function UpdatePostPage({ params }: UpdatePostPageProps) {
  const post = UPDATE_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const articleSchema = generateArticleSchema({
    title: post.title,
    description: post.excerpt,
    image: post.coverImageUrl,
    datePublished: post.date,
    author: post.author,
    tags: post.tags,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema),
        }}
      />
      <UpdateDetailClient post={post} />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { BLOG_POSTS, APP_NAME } from '@/lib/constants';
import { BlogPostDetailClient } from '@/components/blog/BlogPostDetailClient';

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    return {
      title: `Post Not Found | Blog | ${APP_NAME}`,
    };
  }

  return {
    title: `${post.title} | Blog | ${APP_NAME}`,
    description: post.excerpt,
    openGraph: {
        title: post.title,
        description: post.excerpt,
        type: 'article',
        publishedTime: post.date,
        authors: [post.author],
        images: [
            {
                url: post.coverImageUrl,
                width: 1200,
                height: 630,
                alt: post.title,
            },
        ],
        tags: post.tags,
    },
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  const post = BLOG_POSTS.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return <BlogPostDetailClient post={post} />;
}

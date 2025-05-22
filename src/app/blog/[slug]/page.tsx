import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UPDATE_POSTS, APP_NAME } from '@/lib/constants'; // Changed BLOG_POSTS to UPDATE_POSTS
import { BlogPostDetailClient } from '@/components/blog/BlogPostDetailClient';
import type { UpdatePost } from '@/types'; // Ensure this type is available if needed for post typing

interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

// This function can be used by Next.js to generate static pages at build time
export async function generateStaticParams() {
  return UPDATE_POSTS.map((post: UpdatePost) => ({ // Changed BLOG_POSTS to UPDATE_POSTS and typed post
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const post = UPDATE_POSTS.find((p: UpdatePost) => p.slug === params.slug); // Changed BLOG_POSTS to UPDATE_POSTS and typed p

  if (!post) {
    return {
      title: `Post Not Found | Blog (Legacy) | ${APP_NAME}`,
    };
  }

  return {
    title: `${post.title} | Blog (Legacy) | ${APP_NAME}`, // Marked as Legacy
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
  const post = UPDATE_POSTS.find((p: UpdatePost) => p.slug === params.slug); // Changed BLOG_POSTS to UPDATE_POSTS and typed p

  if (!post) {
    notFound();
  }

  return <BlogPostDetailClient post={post} />;
}

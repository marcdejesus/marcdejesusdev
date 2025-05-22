
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { UPDATE_POSTS, APP_NAME } from '@/lib/constants'; // Renamed from BLOG_POSTS
import { UpdateDetailClient } from '@/components/updates/UpdateDetailClient'; // Renamed from BlogPostDetailClient, path updated

interface UpdatePostPageProps { // Renamed from BlogPostPageProps
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return UPDATE_POSTS.map((post) => ({ // Using renamed constant
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: UpdatePostPageProps): Promise<Metadata> { // Renamed props type
  const post = UPDATE_POSTS.find(p => p.slug === params.slug); // Using renamed constant

  if (!post) {
    return {
      title: `Update Not Found | ${APP_NAME}`, // Changed from Post Not Found | Blog
    };
  }

  return {
    title: `${post.title} | Updates | ${APP_NAME}`, // Changed from Blog
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

export default function UpdatePostPage({ params }: UpdatePostPageProps) { // Renamed component and props type
  const post = UPDATE_POSTS.find(p => p.slug === params.slug); // Using renamed constant

  if (!post) {
    notFound();
  }

  return <UpdateDetailClient post={post} />; // Using renamed component
}

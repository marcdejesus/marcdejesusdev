import type { Metadata } from 'next';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { BLOG_POSTS, APP_NAME } from '@/lib/constants';

export const metadata: Metadata = {
  title: `Blog | ${APP_NAME}`,
  description: `Explore articles and insights from ${BRAND_NAME} on web development, UI/UX design, and technology trends.`,
};

export default function BlogPage() {
  // In a real app, you might fetch posts from a CMS or database here
  const posts = BLOG_POSTS;

  return (
    <BlogGrid posts={posts} />
  );
}

import type { Metadata } from 'next';
import { BlogGrid } from '@/components/blog/BlogGrid';
import { UPDATE_POSTS, APP_NAME, BRAND_NAME } from '@/lib/constants'; // Changed BLOG_POSTS to UPDATE_POSTS

export const metadata: Metadata = {
  title: `Blog (Legacy) | ${APP_NAME}`, // Marked as Legacy
  description: `Explore articles and insights from ${BRAND_NAME} on web development, UI/UX design, and technology trends. (Legacy Page)`, // Marked as Legacy
};

export default function BlogPage() {
  // This page is legacy and uses the same data as /updates
  const posts = UPDATE_POSTS; // Changed BLOG_POSTS to UPDATE_POSTS

  return (
    <BlogGrid posts={posts} />
  );
}

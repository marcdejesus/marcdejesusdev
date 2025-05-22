
import type { Metadata } from 'next';
import { UpdatesGrid } from '@/components/updates/UpdatesGrid'; // Renamed from BlogGrid, path updated
import { UPDATE_POSTS, APP_NAME, BRAND_NAME } from '@/lib/constants'; // Renamed from BLOG_POSTS

export const metadata: Metadata = {
  title: `Updates | ${APP_NAME}`, // Changed from Blog
  description: `Explore case studies, professional updates, and insights from ${BRAND_NAME} on web development, UI/UX design, and technology.`, // Updated description
};

export default function UpdatesPage() { // Renamed from BlogPage
  const posts = UPDATE_POSTS; // Using renamed constant

  return (
    <UpdatesGrid posts={posts} /> // Using renamed component
  );
}

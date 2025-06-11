'use client';

import type { UpdatePost } from '@/types';
import { PostGrid } from '@/components/shared/PostGrid';
import { Rss } from 'lucide-react';

interface BlogGridProps {
  posts: UpdatePost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  return (
    <PostGrid
      posts={posts}
      title="Blog (Legacy)"
      description="Insights, tutorials, and thoughts on web development, design, and technology. (This is a legacy page)."
      searchPlaceholder="Search articles..."
      notFoundTitle="No Articles Found"
      icon={Rss}
      urlPrefix="/blog"
      imageHint="blog post image"
    />
  );
}

'use client';

import type { UpdatePost } from '@/types';
import { PostDetailClient } from '@/components/shared/PostDetailClient';

interface BlogPostDetailClientProps {
  post: UpdatePost;
}

export function BlogPostDetailClient({ post }: BlogPostDetailClientProps) {
  return (
    <PostDetailClient
      post={post}
      backUrl="/blog"
      backText="Back to Blog (Legacy)"
      imageHint="blog post cover"
    />
  );
}

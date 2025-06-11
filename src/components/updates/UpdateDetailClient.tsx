
'use client';

import type { UpdatePost } from '@/types';
import { PostDetailClient } from '@/components/shared/PostDetailClient';

interface UpdateDetailClientProps {
  post: UpdatePost;
}

export function UpdateDetailClient({ post }: UpdateDetailClientProps) {
  return (
    <PostDetailClient
      post={post}
      backUrl="/updates"
      backText="Back to Updates"
      imageHint="update cover image"
    />
  );
}


'use client';

import type { UpdatePost } from '@/types';
import { PostGrid } from '@/components/shared/PostGrid';
import { FileText } from 'lucide-react';

interface UpdatesGridProps {
  posts: UpdatePost[];
}

export function UpdatesGrid({ posts }: UpdatesGridProps) {
  return (
    <PostGrid
      posts={posts}
      title="Case Studies & Professional Updates"
      description="Discover detailed case studies, project deep-dives, and professional milestones."
      searchPlaceholder="Search updates & studies..."
      notFoundTitle="No Updates Found"
      icon={FileText}
      urlPrefix="/updates"
      imageHint="update image feature"
    />
  );
}

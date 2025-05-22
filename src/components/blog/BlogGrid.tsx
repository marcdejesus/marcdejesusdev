'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { UpdatePost } from '@/types'; // Changed from BlogPost
import { BlogPostCard } from './BlogPostCard';
import { Input } from '@/components/ui/input';
import { Search, Rss } from 'lucide-react';

interface BlogGridProps {
  posts: UpdatePost[]; // Changed from BlogPost
}

export function BlogGrid({ posts }: BlogGridProps) {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = useMemo(() => {
    return posts
      .filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (post.tags && post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase())))
      );
  }, [posts, searchTerm]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  return (
    <section className="container mx-auto px-4 py-12 md:py-16">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex justify-center mb-4">
            <Rss className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Blog (Legacy)</h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Insights, tutorials, and thoughts on web development, design, and technology. (This is a legacy page).
        </p>
      </motion.div>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search articles..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>

      {filteredPosts.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredPosts.map((post, index) => (
            <BlogPostCard key={post.id} post={post} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-semibold mb-2">No Articles Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your search term.
          </p>
        </motion.div>
      )}
    </section>
  );
}

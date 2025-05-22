
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { UpdatePost } from '@/types'; // Renamed from BlogPost
import { UpdateCard } from './UpdateCard'; // Renamed from BlogPostCard
import { Input } from '@/components/ui/input';
import { Search, FileText } from 'lucide-react'; // Changed Rss to FileText

interface UpdatesGridProps { // Renamed from BlogGridProps
  posts: UpdatePost[]; // Renamed type
}

export function UpdatesGrid({ posts }: UpdatesGridProps) { // Renamed component and props
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
            <FileText className="h-12 w-12 text-primary" /> {/* Changed icon */}
        </div>
        <h1 className="text-4xl font-bold text-center mb-4">Case Studies & Professional Updates</h1> {/* Changed title */}
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          Discover detailed case studies, project deep-dives, and professional milestones.
        </p> {/* Changed description */}
      </motion.div>

      <div className="mb-8 flex justify-center">
        <div className="relative w-full max-w-md">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search updates & studies..." // Updated placeholder
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
            <UpdateCard key={post.id} post={post} index={index} /> // Using renamed component
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-semibold mb-2">No Updates Found</h3> {/* Changed text */}
          <p className="text-muted-foreground">
            Try adjusting your search term.
          </p>
        </motion.div>
      )}
    </section>
  );
}

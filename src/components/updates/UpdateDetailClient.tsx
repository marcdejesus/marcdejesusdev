
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { format } from 'date-fns';
import type { UpdatePost } from '@/types'; // Renamed from BlogPost
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, CalendarDays, UserCircle, Tag } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

interface UpdateDetailClientProps { // Renamed from BlogPostDetailClientProps
  post: UpdatePost; // Renamed type
}

export function UpdateDetailClient({ post }: UpdateDetailClientProps) { // Renamed component and props
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.article 
      className="container mx-auto px-4 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/updates"> {/* Changed href from /blog to /updates */}
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Updates {/* Changed text */}
          </Link>
        </Button>
      </motion.div>

      <motion.header variants={itemVariants} className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{post.title}</h1>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-x-6 gap-y-2 text-muted-foreground text-sm">
            <div className="flex items-center">
                <UserCircle className="mr-1.5 h-4 w-4 text-primary" />
                By {post.author}
            </div>
            <div className="flex items-center">
                <CalendarDays className="mr-1.5 h-4 w-4 text-primary" />
                Published on {format(new Date(post.date), 'MMMM d, yyyy')}
            </div>
        </div>
      </motion.header>
      
      <motion.div variants={itemVariants} className="mb-10 relative w-full aspect-[16/7] rounded-xl overflow-hidden shadow-lg">
        <Image
          src={post.coverImageUrl}
          alt={`Cover image for ${post.title}`}
          fill
          priority
          className="object-cover"
          data-ai-hint={post.dataAiHint || "update cover image"} // Updated data-ai-hint
        />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
        <motion.div 
            variants={itemVariants} 
            className="md:col-span-8 lg:col-span-9 prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
        />

        <motion.aside variants={itemVariants} className="md:col-span-4 lg:col-span-3 space-y-8">
            {post.tags && post.tags.length > 0 && (
                <div>
                    <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Tag className="mr-2 h-5 w-5 text-primary" />
                    Tags
                    </h3>
                    <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                    ))}
                    </div>
                </div>
            )}
          
          {/* You could add related posts or a newsletter signup here in the future */}
        </motion.aside>
      </div>
    </motion.article>
  );
}

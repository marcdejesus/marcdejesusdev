
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Eye, Github, CalendarDays, UserCircle, Settings, Youtube } from 'lucide-react'; // Added Youtube
import { Separator } from '@/components/ui/separator';

interface ProjectDetailClientProps {
  project: Project;
}

export function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  const isYoutubeLink = project.liveDemoUrl && 
                        (project.liveDemoUrl.includes('youtube.com') || project.liveDemoUrl.includes('youtu.be'));

  return (
    <motion.article 
      className="container mx-auto px-4 py-12 md:py-16"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/projects">
            <ArrowLeft className="mr-2 h-4 w-4" /> Back to Projects
          </Link>
        </Button>
      </motion.div>

      <motion.header variants={itemVariants} className="mb-8 text-center">
        <Badge variant="secondary" className="mb-2">{project.category}</Badge>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">{project.shortDescription}</p>
      </motion.header>
      
      <motion.div variants={itemVariants} className="mb-12 relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
        <Image
          src={project.coverImageUrl}
          alt={`Cover image for ${project.title}`}
          fill
          priority
          className="object-cover"
          data-ai-hint={project.dataAiHint || "project cover image"}
        />
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <motion.div variants={itemVariants} className="lg:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <div className="prose prose-lg dark:prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: project.longDescription.replace(/\n/g, '<br />') }} />
          
          {project.images && project.images.length > 0 && (
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">Gallery</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {project.images.map((image, index) => (
                  <motion.div 
                    key={index} 
                    variants={itemVariants} 
                    className="relative aspect-video rounded-lg overflow-hidden shadow-md"
                  >
                    <Image
                      src={image.url}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      data-ai-hint={image.dataAiHint || "project screenshot"}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>

        <motion.aside variants={itemVariants} className="lg:col-span-1 space-y-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <Settings className="mr-2 h-5 w-5 text-primary" />
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <Badge key={tech} variant="default">{tech}</Badge>
              ))}
            </div>
          </div>

          <Separator />

          {(project.client || project.role || project.duration) && (
            <div>
              <h3 className="text-xl font-semibold mb-4">Project Info</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {project.client && (
                  <li className="flex items-center">
                    <UserCircle className="mr-2 h-4 w-4 text-primary" />
                    <strong>Client:</strong>&nbsp;{project.client}
                  </li>
                )}
                {project.role && (
                  <li className="flex items-center">
                    <UserCircle className="mr-2 h-4 w-4 text-primary" />
                    <strong>Role:</strong>&nbsp;{project.role}
                  </li>
                )}
                {project.duration && (
                  <li className="flex items-center">
                    <CalendarDays className="mr-2 h-4 w-4 text-primary" />
                    <strong>Duration:</strong>&nbsp;{project.duration}
                  </li>
                )}
              </ul>
            </div>
          )}

          <Separator />
          
          <div>
             <h3 className="text-xl font-semibold mb-4">Links</h3>
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
              {project.liveDemoUrl && (
                <Button asChild className="w-full">
                  <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                    {isYoutubeLink ? <Youtube className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />} 
                    {isYoutubeLink ? "Watch Demo" : "Live Demo"}
                  </Link>
                </Button>
              )}
              {project.githubUrl && (
                <Button asChild variant="outline" className="w-full">
                  <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="mr-2 h-4 w-4" /> View on GitHub
                  </Link>
                </Button>
              )}
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.article>
  );
}

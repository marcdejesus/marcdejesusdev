
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Project } from '@/types';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye, Github, Youtube } from 'lucide-react'; // Added Youtube

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { delay: index * 0.1, type: 'spring', stiffness: 100 }
    }
  };

  const isYoutubeLink = project.liveDemoUrl && 
                        (project.liveDemoUrl.includes('youtube.com') || project.liveDemoUrl.includes('youtu.be'));

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -5, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <div className="relative w-full h-56">
          <Image
            src={project.coverImageUrl}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover"
            data-ai-hint={project.dataAiHint || 'project technology'}
          />
        </div>
        <CardHeader>
          <Badge variant="outline" className="w-fit mb-2">{project.category}</Badge>
          <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex-grow">
          <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech) => ( // Show up to 4 technologies
              <Badge key={tech} variant="secondary">{tech}</Badge>
            ))}
            {project.technologies.length > 4 && (
              <Badge variant="secondary">+{project.technologies.length - 4} more</Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 pt-4">
          <Button asChild variant="default" size="sm" className="w-full sm:w-auto">
            <Link href={`/projects/${project.slug}`}>
              View Details <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <div className="flex gap-2 mt-2 sm:mt-0">
            {project.liveDemoUrl && (
              <Button asChild variant="outline" size="icon">
                <Link href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer" title={isYoutubeLink ? "Watch Demo on YouTube" : "Live Demo"}>
                  {isYoutubeLink ? <Youtube className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="icon">
                <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer" title="GitHub Repository">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

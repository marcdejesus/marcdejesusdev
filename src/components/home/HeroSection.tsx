
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardFooter, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KEY_SKILLS, PROJECTS, UPDATE_POSTS, BRAND_NAME } from '@/lib/constants';
import type { UpdatePost } from '@/types';
import { ArrowRight, Briefcase, UserCheck, FolderGit2, Eye, Github, FileText, CalendarDays, Youtube } from 'lucide-react'; // Added Youtube
import { format } from 'date-fns';

export function HeroSection() {
  const selectedProjects = PROJECTS.slice(0, 3); // Show first 3 projects
  const selectedUpdates = UPDATE_POSTS.slice(0, 3); // Show first 3 updates

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section
      className="container mx-auto px-4 py-16 md:py-24 lg:py-32"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div variants={itemVariants}>
          <Badge variant="outline" className="mb-4 text-sm py-1 px-3 border-primary text-primary">
            <FolderGit2 className="mr-2 h-4 w-4" />
            Portfolio Showcase
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Welcome to my Portfolio!
          </h1>
          <blockquote className="mt-6 text-lg leading-8 text-muted-foreground border-l-4 border-primary pl-6 py-2 italic bg-muted/30 rounded-r-md">
            &ldquo;This portfolio is a curated collection of my journey in software development and design,
            showcasing the projects I&apos;m passionate about and the skills I&apos;ve honed.
            It&apos;s a space where innovation meets execution. Explore my work and let&apos;s connect!&rdquo;
            <footer className="mt-3 text-sm text-foreground not-italic font-medium">- {BRAND_NAME}</footer>
          </blockquote>
          <div className="mt-10 flex items-center gap-x-6">
            <Button asChild size="lg">
              <Link href="/projects">
                View Projects <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">
                Get in Touch
              </Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          className="relative"
          variants={itemVariants}
        >
          <Image
            src="/hero.png"
            alt={`${BRAND_NAME}'s portfolio hero image`}
            width={700}
            height={500}
            priority
            className="rounded-xl shadow-2xl"
            data-ai-hint="abstract technology design"
          />
           <div className="absolute -bottom-8 -right-8 hidden lg:block bg-primary/10 p-4 rounded-lg shadow-lg backdrop-blur-sm">
            <UserCheck className="h-12 w-12 text-primary" />
          </div>
        </motion.div>
      </div>

      <motion.div className="mt-24 lg:mt-32" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-4">Key Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Leveraging a diverse set of technologies and design methodologies to deliver high-quality digital products.
        </p>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3">
          {KEY_SKILLS.slice(0,6).map((skill) => ( // Show top 6 key skills
            <motion.div key={skill.name} variants={itemVariants}>
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-lg font-medium">{skill.name}</CardTitle>
                  {skill.icon && <skill.icon className="h-6 w-6 text-primary" />}
                </CardHeader>
                <CardContent>
                  <p className="text-xs text-muted-foreground mt-1">
                    Expertise in {skill.name.toLowerCase()}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      <motion.div className="mt-24 lg:mt-32" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Projects</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selectedProjects.map((project) => {
            const isYoutubeLink = project.liveDemoUrl && 
                                  (project.liveDemoUrl.includes('youtube.com') || project.liveDemoUrl.includes('youtu.be'));
            return (
              <motion.div key={project.id} variants={itemVariants} className="h-full">
                <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="relative w-full h-56">
                    <Image
                      src={project.coverImageUrl}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                      data-ai-hint={project.dataAiHint || 'project image'}
                    />
                  </div>
                  <CardHeader>
                    <Badge variant="outline" className="w-fit mb-2">{project.category}</Badge>
                    <CardTitle className="text-xl md:text-2xl">{project.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech) => (
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
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              <Briefcase className="mr-2 h-5 w-5" /> See All Projects
            </Link>
          </Button>
        </div>
      </motion.div>

      <motion.div className="mt-24 lg:mt-32" variants={itemVariants}>
        <h2 className="text-3xl font-bold text-center mb-12">Featured Updates</h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {selectedUpdates.map((update: UpdatePost) => (
            <motion.div key={update.id} variants={itemVariants} className="h-full">
              <Card className="flex flex-col h-full overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative w-full h-56">
                  <Image
                    src={update.coverImageUrl}
                    alt={update.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                    data-ai-hint={update.dataAiHint || 'update image'}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl md:text-2xl">{update.title}</CardTitle>
                  <div className="flex items-center text-xs text-muted-foreground pt-1">
                    <CalendarDays className="mr-1.5 h-4 w-4" />
                    {format(new Date(update.date), 'MMMM d, yyyy')}
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{update.excerpt}</p>
                  {update.tags && update.tags.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                      {update.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="secondary">{tag}</Badge>
                      ))}
                      {update.tags.length > 3 && (
                         <Badge variant="secondary">+{update.tags.length - 3} more</Badge>
                      )}
                    </div>
                  )}
                </CardContent>
                <CardFooter className="pt-4">
                  <Button asChild variant="default" size="sm" className="w-full">
                    <Link href={`/updates/${update.slug}`}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/updates">
              <FileText className="mr-2 h-5 w-5" /> See All Updates
            </Link>
          </Button>
        </div>
      </motion.div>

    </motion.section>
  );
}

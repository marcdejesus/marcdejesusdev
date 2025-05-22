'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { KEY_SKILLS, PROJECTS, BRAND_NAME } from '@/lib/constants';
import { ArrowRight, Briefcase, Lightbulb, UserCheck } from 'lucide-react';

export function HeroSection() {
  const selectedProjects = PROJECTS.slice(0, 2); // Show first 2 projects

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
            <Lightbulb className="mr-2 h-4 w-4" />
            Innovative Digital Solutions
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Crafting Digital Experiences with <span className="text-primary">{BRAND_NAME}</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Passionate about building beautiful, functional, and user-centric web and mobile applications. 
            Explore my work and let&apos;s create something amazing together.
          </p>
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
            src="https://placehold.co/700x500.png"
            alt="DeJesus Digital Solutions - Hero Image"
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
                  {/* Optional: <Progress value={skill.level} className="h-2" /> */}
                  <p className="text-xs text-muted-foreground mt-1">
                    {/* Description for skill can be added here */}
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
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {selectedProjects.map((project) => (
            <motion.div key={project.id} variants={itemVariants}>
              <Card className="h-full overflow-hidden hover:shadow-xl transition-shadow duration-300">
                 <Image
                  src={project.coverImageUrl}
                  alt={project.title}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={project.dataAiHint || "project image"}
                />
                <CardHeader>
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <Badge key={tech} variant="secondary">{tech}</Badge>
                    ))}
                  </div>
                  <Button asChild variant="link" className="px-0">
                    <Link href={`/projects/${project.slug}`}>
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" variant="outline">
            <Link href="/projects">
              <Briefcase className="mr-2 h-5 w-5" /> See All Projects
            </Link>
          </Button>
        </div>
      </motion.div>
    </motion.section>
  );
}

'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CORE_SKILLS, TOOLSET, BRAND_NAME, SOCIAL_LINKS } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, MessageSquare, Star, Briefcase, Brain } from 'lucide-react';

export function AboutContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section 
      className="container mx-auto px-4 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
        <motion.div variants={itemVariants} className="lg:col-span-1 space-y-8">
          <div className="relative w-full aspect-square rounded-full overflow-hidden shadow-xl mx-auto max-w-xs lg:max-w-none">
            <Image
              src="https://placehold.co/400x400.png"
              alt="Your Name - Professional Photo"
              width={400}
              height={400}
              className="object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-center">Your Name</h2>
          <p className="text-center text-primary text-lg font-medium">{BRAND_NAME}</p>
          <div className="flex justify-center space-x-3">
            {SOCIAL_LINKS.map(link => (
              <Button key={link.name} variant="outline" size="icon" asChild>
                <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                  <link.icon className="h-5 w-5" />
                </Link>
              </Button>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 pt-4">
            <Button size="lg" className="w-full" asChild>
              <Link href="/contact">
                <MessageSquare className="mr-2 h-5 w-5" /> Hire Me
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              {/* Link to a resume PDF if available */}
              <Link href="/resume.pdf" target="_blank"> 
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </Link>
            </Button>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2 space-y-12">
          <div>
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-6">
              <p>
                Hello! I&apos;m a passionate and results-driven digital professional specializing in creating dynamic and user-friendly web and mobile experiences. 
                With a strong foundation in modern development practices and a keen eye for design, I thrive on transforming complex ideas into elegant, efficient solutions at {BRAND_NAME}.
              </p>
              <p>
                My journey in tech has been fueled by a relentless curiosity and a desire to continuously learn and adapt to new technologies. 
                I believe in the power of collaboration and strive to build not just software, but also strong relationships with clients and team members.
              </p>
              <p>
                Beyond coding and design, I enjoy [mention a hobby or two, e.g., exploring new hiking trails, experimenting with creative cooking, or contributing to open-source projects]. 
                This balance helps me bring fresh perspectives to my professional work.
              </p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Star className="mr-3 h-7 w-7 text-primary" /> My Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CORE_SKILLS.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center">
                        {skill.icon && <skill.icon className="mr-2 h-5 w-5 text-muted-foreground" />}
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      {skill.level && (
                        <Progress value={skill.level} aria-label={`${skill.name} proficiency ${skill.level}%`} className="h-2 mb-2" />
                      )}
                      <p className="text-xs text-muted-foreground">
                        {/* Placeholder for skill description, or remove if not needed */}
                        Developing proficiency in {skill.name.toLowerCase()}.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-7 w-7 text-primary" /> My Toolset
            </h2>
            <p className="text-muted-foreground mb-6">
              I work with a variety of modern tools and technologies to bring projects to life. Here are some of my favorites:
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {TOOLSET.map((tool) => (
                <motion.div 
                  key={tool.name} 
                  variants={itemVariants}
                  className="flex flex-col items-center p-3 bg-muted/50 rounded-lg hover:bg-accent transition-colors min-w-[80px] text-center"
                  title={tool.name}
                >
                  {tool.icon && <tool.icon className="h-8 w-8 mb-2 text-primary" />}
                  {tool.logoUrl && (
                     <Image src={tool.logoUrl} alt={`${tool.name} logo`} width={32} height={32} className="mb-2" data-ai-hint={tool.dataAiHint || `${tool.name} logo`} />
                  )}
                  <span className="text-xs font-medium">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Brain className="mr-3 h-7 w-7 text-primary" /> My Philosophy
            </h2>
            <div className="prose prose-lg dark:prose-invert max-w-none space-y-4">
                <p><strong>User-Centricity:</strong> I believe the best digital products are built with the end-user in mind, focusing on intuitive design and seamless functionality.</p>
                <p><strong>Continuous Learning:</strong> The tech landscape is always evolving, and I am committed to lifelong learning to stay at the forefront of innovation.</p>
                <p><strong>Quality Craftsmanship:</strong> I take pride in writing clean, maintainable code and designing pixel-perfect interfaces that stand the test of time.</p>
                <p><strong>Collaboration:</strong> Great things are built together. I value open communication and teamwork to achieve shared goals.</p>
            </div>
          </div>

        </motion.div>
      </div>
    </motion.section>
  );
}

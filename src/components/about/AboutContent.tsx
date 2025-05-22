
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { CORE_SKILLS, TOOLSET, SOCIAL_LINKS, PROFESSIONAL_EXPERIENCE, EDUCATION, CERTIFICATIONS, BRAND_NAME } from '@/lib/constants';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Download, MessageSquare, Star, Briefcase, Brain, GraduationCap, Award, Building, CalendarDays, CircleUser, Settings, ShieldCheck, GitBranch, Cpu } from 'lucide-react';

export function AboutContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
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
              alt="Marc De Jesus - Professional Photo"
              width={400}
              height={400}
              className="object-cover"
              data-ai-hint="professional portrait"
              priority
            />
          </div>
          <h2 className="text-3xl font-bold text-center">{BRAND_NAME}</h2>
          <p className="text-center text-primary text-lg font-medium">Full-Stack Developer</p>
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
                <MessageSquare className="mr-2 h-5 w-5" /> Hire Me / Contact
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="w-full" asChild>
              <Link href="/resume.pdf" target="_blank" rel="noopener noreferrer">
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
                Creative and detail-oriented Software Engineer with a foundation in full-stack development and a strong passion for user-centered design.
              </p>
              <p>
                My journey in tech has been fueled by a relentless curiosity and a desire to continuously learn and adapt to new technologies.
                I believe in the power of collaboration and strive to build not just software, but also strong relationships with clients and team members.
              </p>
              <p>
                Beyond coding and design, I enjoy staying active, spending time with friends, trying new things, and learning new skills.
                This balance helps me bring fresh perspectives to my professional work.
              </p>
            </div>
          </div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Briefcase className="mr-3 h-7 w-7 text-primary" /> Professional Experience
            </h2>
            <div className="space-y-6">
              {PROFESSIONAL_EXPERIENCE.map((exp, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{exp.title}</CardTitle>
                    <CardDescription className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-1 text-sm">
                        <span className="flex items-center">
                            <Building className="mr-1.5 h-4 w-4 text-muted-foreground" />
                            {exp.company_url ? <Link href={exp.company_url} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">{exp.company}</Link> : exp.company }
                        </span>
                        <span className="flex items-center">
                            <CalendarDays className="mr-1.5 h-4 w-4 text-muted-foreground" />
                            {exp.dates}
                        </span>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground pl-2">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <GraduationCap className="mr-3 h-7 w-7 text-primary" /> Education
            </h2>
            <div className="space-y-6">
              {EDUCATION.map((edu, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{edu.institution}</p>
                    <p className="text-sm text-muted-foreground">Graduation: {edu.graduation}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Award className="mr-3 h-7 w-7 text-primary" /> Professional Career Certifications
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CERTIFICATIONS.map((cert, index) => (
                 <Card key={index} className="h-full hover:shadow-md transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <p className="text-xs text-muted-foreground">Year: {cert.year}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Star className="mr-3 h-7 w-7 text-primary" /> My Core Skills
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {CORE_SKILLS.map((skill) => (
                <motion.div key={skill.name} variants={itemVariants}>
                  <Card className="h-full hover:shadow-md transition-shadow">
                    <CardHeader className="py-4 px-4">
                      <CardTitle className="text-base flex items-center">
                        {skill.icon && <skill.icon className="mr-2 h-5 w-5 text-muted-foreground flex-shrink-0" />}
                        {skill.name}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-8 flex items-center">
              <Settings className="mr-3 h-7 w-7 text-primary" /> My Toolset
            </h2>
            <p className="text-muted-foreground mb-6">
              I work with a variety of modern tools and technologies to bring projects to life. Here are some of my favorites:
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              {TOOLSET.map((tool) => (
                <motion.div
                  key={tool.name}
                  variants={itemVariants}
                  className="flex flex-col items-center p-3 bg-muted/50 rounded-lg hover:bg-accent transition-colors min-w-[90px] text-center"
                  title={tool.name}
                >
                  {tool.svg ? (
                    <div className="h-8 w-8 mb-2" dangerouslySetInnerHTML={{ __html: tool.svg }} />
                  ) : tool.logoUrl ? (
                     <Image src={tool.logoUrl} alt={`${tool.name} logo`} width={32} height={32} className="mb-2 object-contain" data-ai-hint={tool.dataAiHint || `${tool.name.toLowerCase()} logo`} />
                  ) : tool.icon && (
                     <tool.icon className="h-8 w-8 mb-2 text-primary" />
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


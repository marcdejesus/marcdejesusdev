
'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import type { Project, ProjectCategory } from '@/types';
import { ProjectCard } from './ProjectCard';
import { ProjectFilter } from './ProjectFilter';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

interface ProjectsGridProps {
  projects: Project[];
}

export function ProjectsGrid({ projects }: ProjectsGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory | 'All'>('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = useMemo(() => {
    return projects
      .filter(project => {
        if (selectedCategory === 'All') return true;
        if (project.category === selectedCategory) return true;
        if (project.additionalCategories && project.additionalCategories.includes(selectedCategory)) return true;
        return false;
      })
      .filter(project => 
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()))
      );
  }, [projects, selectedCategory, searchTerm]);

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
        <h1 className="text-4xl font-bold text-center mb-4">My Projects</h1>
        <p className="text-center text-lg text-muted-foreground max-w-2xl mx-auto">
          A collection of my work, showcasing my skills in various technologies and domains. 
          Filter by category or search to find specific projects.
        </p>
      </motion.div>

      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <ProjectFilter 
          selectedCategory={selectedCategory} 
          onCategoryChange={setSelectedCategory} 
        />
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input 
            type="search"
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
          />
        </div>
      </div>

      {filteredProjects.length > 0 ? (
        <motion.div 
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-16"
        >
          <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h3 className="text-2xl font-semibold mb-2">No Projects Found</h3>
          <p className="text-muted-foreground">
            Try adjusting your filters or search term.
          </p>
        </motion.div>
      )}
    </section>
  );
}

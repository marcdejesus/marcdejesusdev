import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink, Github, Code, Smartphone, Globe } from 'lucide-react';
import tymelyne from '../assets/tymelyne.jpeg';
import './Projects.css';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: 1,
      title: 'Central Michigan University - Senior Design Project',
      category: 'Full Stack',
      description: 'An AI-powered mobile learning platform that generates personalized courses with interactive quizzes and gamified progression tracking. Developed for college capstone project and presented at Central Michigan University’s Engineering Expo. Tested by 50+ users during Expo with no bugs/issues and very positive feedback',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'Expo', 'Express', 'OpenAI API'],
      image: tymelyne,
      liveUrl: 'https://aparr03.github.io/tymelyne_demo/',
      githubUrl: 'https://github.com/marcdejesus/TymeLyne',
      icon: Globe
    },
    {
      id: 2,
      title: 'Task Management App',
      category: 'Web Application',
      description: 'A collaborative task management application with drag-and-drop functionality, real-time updates, and team collaboration features. Built with modern React and Firebase.',
      technologies: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      image: './assets/placeholder/600/400',
      liveUrl: 'https://example-tasks.com',
      githubUrl: 'https://github.com/username/task-manager',
      icon: Code
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0
    })
  };

  const slideTransition = {
    x: { type: "spring", stiffness: 300, damping: 30 },
    opacity: { duration: 0.3 }
  };

  return (
    <section className="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="projects-section-title" variants={itemVariants}>
            Projects
          </motion.h2>

          <motion.div className="projects-carousel" variants={itemVariants}>
            <div className="carousel-container">
              <motion.button
                className="carousel-btn prev-btn"
                onClick={prevProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronLeft size={24} />
              </motion.button>

              <div className="carousel-content">
                <AnimatePresence mode="wait" custom={currentProject}>
                  <motion.div
                    key={currentProject}
                    custom={currentProject}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={slideTransition}
                    className="project-card"
                  >
                    <div className="project-image">
                      {projects[currentProject].image ? (
                        <img 
                          src={projects[currentProject].image} 
                          alt={projects[currentProject].title}
                          className="project-image-content"
                        />
                      ) : (
                        <div className="project-placeholder">
                          <div className="placeholder-content">
                            {React.createElement(projects[currentProject].icon, { size: 60 })}
                            <p>Project Preview</p>
                          </div>
                        </div>
                      )}
                      <div className="project-category">
                        {projects[currentProject].category}
                      </div>
                    </div>

                    <div className="project-info">
                      <h3 className="project-title">
                        {projects[currentProject].title}
                      </h3>
                      
                      <p className="project-description">
                        {projects[currentProject].description}
                      </p>

                      <div className="project-technologies">
                        {projects[currentProject].technologies.map((tech, index) => (
                          <span key={index} className="tech-tag">
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="project-links">
                        <motion.a
                          href={projects[currentProject].liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link live-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <ExternalLink size={18} />
                          Live Demo
                        </motion.a>
                        
                        <motion.a
                          href={projects[currentProject].githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="project-link github-link"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Github size={18} />
                          Source Code
                        </motion.a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              <motion.button
                className="carousel-btn next-btn"
                onClick={nextProject}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronRight size={24} />
              </motion.button>
            </div>

            <div className="carousel-indicators">
              {projects.map((_, index) => (
                <motion.button
                  key={index}
                  className={`indicator ${index === currentProject ? 'active' : ''}`}
                  onClick={() => goToProject(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>

            <div className="carousel-counter">
              <span>{currentProject + 1}</span> / <span>{projects.length}</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
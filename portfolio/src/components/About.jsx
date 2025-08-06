import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import './About.css';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about" ref={ref}>
      <div className="container">
        <motion.div
          className="about-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="about-section-title" variants={itemVariants}>
            About Me
          </motion.h2>
          
          <div className="about-grid">
            <motion.div className="about-text" variants={itemVariants}>
              <motion.p variants={itemVariants}>
                I'm a passionate software engineer with over 5 years of experience in building 
                scalable web applications and innovative digital solutions. My journey in technology 
                started with a curiosity about how things work, which led me to pursue computer science 
                and develop a deep love for problem-solving through code.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I specialize in full-stack development with expertise in modern JavaScript frameworks, 
                cloud technologies, and agile methodologies. I believe in writing clean, maintainable 
                code and creating user experiences that make a difference. When I'm not coding, you'll 
                find me exploring new technologies, contributing to open-source projects, or enjoying 
                outdoor adventures.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                My approach to software development is collaborative and user-focused. I enjoy working 
                with cross-functional teams to turn complex problems into elegant solutions. Whether 
                it's optimizing performance, implementing new features, or mentoring junior developers, 
                I'm always eager to take on new challenges and grow professionally.
              </motion.p>
            </motion.div>
            <motion.div className="about-image" variants={imageVariants}>
              <div className="image-container">
                <div className="profile-placeholder">
                  <div className="placeholder-content">
                    <div className="placeholder-avatar">
                      <svg viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                      </svg>
                    </div>
                    <p>Your Photo Here</p>
                  </div>
                </div>
                <motion.div
                  className="image-decoration decoration-1"
                  animate={{
                    rotate: [0, 360],
                  }}
                  transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="image-decoration decoration-2"
                  animate={{
                    rotate: [360, 0],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
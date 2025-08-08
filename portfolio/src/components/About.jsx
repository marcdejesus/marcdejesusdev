import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import marcdejesus from '../assets/marcdejesus.png';
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
                I'm a recent graduate from Central Michigan University with a Bachelor's degree in Computer Science. I'm currently seeking a full-time position in Full-Stack Development with strong mentorship andgrowth opportunities.
              </motion.p>
              
              <motion.p variants={itemVariants}>
                I specialize in full-stack development with expertise in modern JavaScript frameworks, Cloud technologies, and Agile methodologies. I'm very passionate about continuous learning and always eager to take on new challenges.
              </motion.p>
              
            </motion.div>
            <motion.div className="about-image" variants={imageVariants}>
              <div className="image-container">
                <div className="profile-image">
                  <img src={marcdejesus} alt="Marc De Jesus" />
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
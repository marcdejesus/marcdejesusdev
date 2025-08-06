import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import './Hero.css';

const Hero = () => {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const titleVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const letterVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const name = "Software Engineer";
  const greeting = "Hello, I'm";

  return (
    <section className="hero">
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="hero-greeting"
          variants={itemVariants}
        >
          {greeting}
        </motion.p>
        
        <motion.h1
          className="hero-name"
          variants={titleVariants}
        >
          Marc De Jesus
        </motion.h1>
        
        <motion.div
          className="hero-title"
          variants={titleVariants}
        >
          {name.split('').map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className={letter === ' ' ? 'space' : ''}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
        <motion.p
          className="hero-description"
          variants={itemVariants}
        >
          I'm passionate about creating exceptional digital experiences through clean,
          efficient code and innovative solutions. Let's build something amazing together.
        </motion.p>
        
        <motion.div
          className="hero-buttons"
          variants={itemVariants}
        >
          <motion.button
            className="btn btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
          >
            View My Work
          </motion.button>
          
          <motion.button
            className="btn btn-secondary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </motion.button>
        </motion.div>
      </motion.div>
      
      <motion.div
        className="hero-scroll-indicator"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <motion.button
          className="scroll-btn"
          onClick={scrollToNext}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
        >
          <ChevronDown size={24} />
        </motion.button>
      </motion.div>
      
      <div className="hero-bg">
        <motion.div
          className="floating-shape shape-1"
          animate={{
            y: [-20, 20, -20],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-shape shape-2"
          animate={{
            y: [20, -20, 20],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="floating-shape shape-3"
          animate={{
            y: [-15, 15, -15],
            x: [-10, 10, -10],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>
    </section>
  );
};

export default Hero;
import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Calendar, MapPin, Award, GraduationCap, Briefcase } from 'lucide-react';
import './Resume.css';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const tabs = [
    { id: 'experience', label: 'Experience', icon: Briefcase },
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];

  const experienceData = [
    {
      title: 'Senior Software Engineer',
      company: 'Tech Solutions Inc.',
      location: 'San Francisco, CA',
      period: '2022 - Present',
      description: 'Lead development of scalable web applications using React, Node.js, and AWS. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.'
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Innovations LLC',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: 'Developed and maintained multiple client projects using modern JavaScript frameworks. Collaborated with design teams to create responsive, user-friendly interfaces.'
    },
    {
      title: 'Software Developer',
      company: 'StartUp Ventures',
      location: 'Austin, TX',
      period: '2019 - 2020',
      description: 'Built RESTful APIs and database architectures for a growing SaaS platform. Implemented automated testing that improved code quality and reduced bugs by 40%.'
    }
  ];

  const educationData = [
    {
      title: 'Master of Science in Computer Science',
      company: 'Stanford University',
      location: 'Stanford, CA',
      period: '2017 - 2019',
      description: 'Specialized in Machine Learning and Software Engineering. Completed thesis on distributed systems optimization. GPA: 3.8/4.0'
    },
    {
      title: 'Bachelor of Science in Software Engineering',
      company: 'University of California, Berkeley',
      location: 'Berkeley, CA',
      period: '2013 - 2017',
      description: 'Graduated Magna Cum Laude with focus on algorithms and data structures. Led the Computer Science Society and organized multiple hackathons.'
    }
  ];

  const certificationsData = [
    {
      title: 'AWS Certified Solutions Architect',
      company: 'Amazon Web Services',
      location: 'Online',
      period: '2023',
      description: 'Professional-level certification demonstrating expertise in designing and deploying scalable systems on AWS platform.'
    },
    {
      title: 'Certified Kubernetes Administrator',
      company: 'Cloud Native Computing Foundation',
      location: 'Online',
      period: '2022',
      description: 'Validates skills and knowledge to perform the responsibilities of a Kubernetes administrator.'
    },
    {
      title: 'React Developer Certification',
      company: 'Meta (Facebook)',
      location: 'Online',
      period: '2021',
      description: 'Advanced certification covering React fundamentals, state management, and modern development practices.'
    }
  ];

  const getTabData = (tabId) => {
    switch (tabId) {
      case 'experience':
        return experienceData;
      case 'education':
        return educationData;
      case 'certifications':
        return certificationsData;
      default:
        return experienceData;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.1
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

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      x: 50,
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  };

  return (
    <section className="resume" ref={ref}>
      <div className="container">
        <motion.div
          className="resume-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="resume-section-title" variants={itemVariants}>
            Resume
          </motion.h2>

          <motion.div className="resume-tabs" variants={itemVariants}>
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <motion.button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? 'active' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <IconComponent size={20} />
                  <span>{tab.label}</span>
                </motion.button>
              );
            })}
          </motion.div>

          <div className="resume-content-area">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                className="tab-content"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                <div className="resume-cards">
                  {getTabData(activeTab).map((item, index) => (
                    <motion.div
                      key={index}
                      className="resume-card"
                      variants={cardVariants}
                      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                    >
                      <div className="card-header">
                        <div className="card-title-section">
                          <h3 className="card-title">{item.title}</h3>
                          <h4 className="card-company">{item.company}</h4>
                        </div>
                        <div className="card-meta">
                          <div className="card-period">
                            <Calendar size={16} />
                            <span>{item.period}</span>
                          </div>
                          <div className="card-location">
                            <MapPin size={16} />
                            <span>{item.location}</span>
                          </div>
                        </div>
                      </div>
                      <div className="card-description">
                        <p>{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Resume;
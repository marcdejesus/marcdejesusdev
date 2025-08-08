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
    { id: 'education', label: 'Education', icon: GraduationCap },
    { id: 'certifications', label: 'Certifications', icon: Award }
  ];


  const educationData = [
    {
      title: 'Bachelor of Science in Computer Science',
      company: 'Central Michigan University',
      location: 'Mount Pleasant, MI',
      period: '2021 - 2025',
      description: 'Relevant Coursework: Data Structures, Algorithms, Computer Organization, Operating Systems, Computer Networks, Database Systems, Software Engineering, Artificial Intelligence, Machine Learning, and Cybersecurity.'
    },
    {
      title: 'High School Diploma',
      company: 'L\'Anse Creuse High School North',
      location: 'Macomb, MI',
      period: '2017 - 2021',
      description: 'Relevant Coursework: AP Computer Science, AP Calculus, AP Physics'
    }
  ];

  const certificationsData = [
    {
      title: 'Google UX Design',
      company: 'Google Career Certificates',
      location: 'Online',
      period: '2025',
      description: 'Relevant Coursework: Build Wireframes and LowFidelity Prototypes, Conduct UX Research and Test Early Concepts, Create High-Fidelity Designs and Prototypes in Figma, Build Dynamic User Interfaces (UI) for Websites'
    },
    {
      title: 'AI Agent Developer',
      company: 'Vanderbilt University',
      location: 'Online',
      period: '2025',
      description: 'Relevant Coursework: Agentic AI with Python, AI Agents and Agentic AI, Architecture in Python, Creating Custom AI Assistants, Prompt Engineering, AI Advanced Data Analysis, Trustworthy Generative AI'
    }
  ];

  const getTabData = (tabId) => {
    switch (tabId) {
      case 'education':
        return educationData;
      case 'certifications':
        return certificationsData;
      default:
        return educationData;
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
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'marcdejesusdev@gmail.com',
      href: 'mailto:marcdejesusdev@gmail.com'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Macomb, MI',
      href: '#'
    }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 3000);
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

  const formVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const contactInfoVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="contact-content"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          <motion.h2 className="contact-section-title" variants={itemVariants}>
            Contact Me
          </motion.h2>

          <motion.p className="contact-subtitle" variants={itemVariants}>
            Have a project in mind or want to discuss opportunities? 
            I'd love to hear from you. Let's create something amazing together!
          </motion.p>

          <div className="contact-grid">
            <motion.div
              className="contact-info"
              variants={contactInfoVariants}
            >
              <div className="contact-info-content">
                <h3>Let's Connect</h3>
                <p>
                  I'm always open to discussing new projects, creative ideas, 
                  and opportunities to be part of your vision. Don't hesitate to reach out!
                </p>

                <div className="contact-methods">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon;
                    return (
                      <motion.div
                        key={index}
                        className="contact-method"
                        initial={{ opacity: 0, y: 20 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                        transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                        whileHover={{ scale: 1.05 }}
                      >
                        <a href={info.href} className="contact-link">
                          <div className="contact-icon">
                            <IconComponent size={24} />
                          </div>
                          <div className="contact-details">
                            <span className="contact-label">{info.label}</span>
                            <span className="contact-value">{info.value}</span>
                          </div>
                        </a>
                      </motion.div>
                    );
                  })}
                </div>

                <div className="social-links">
                  <h4>Follow Me</h4>
                  <div className="social-buttons">
                    {['LinkedIn', 'GitHub', 'Twitter'].map((social, index) => (
                      <motion.a
                        key={social}
                        href={`#${social.toLowerCase()}`}
                        className="social-btn"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {social}
                      </motion.a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="contact-form-container"
              variants={formVariants}
            >
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">
                      <User size={18} />
                      Name *
                    </label>
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      <Mail size={18} />
                      Email *
                    </label>
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      whileFocus={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <MessageSquare size={18} />
                    Subject *
                  </label>
                  <motion.input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <MessageSquare size={18} />
                    Message *
                  </label>
                  <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    whileFocus={{ scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                  />
                </div>

                <motion.button
                  type="submit"
                  className={`submit-btn ${isSubmitted ? 'submitted' : ''}`}
                  disabled={isSubmitting || isSubmitted}
                  whileHover={!isSubmitting && !isSubmitted ? { scale: 1.05 } : {}}
                  whileTap={!isSubmitting && !isSubmitted ? { scale: 0.95 } : {}}
                >
                  {isSubmitted ? (
                    <>
                      <CheckCircle size={20} />
                      Message Sent!
                    </>
                  ) : isSubmitting ? (
                    <>
                      <motion.div
                        className="spinner"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
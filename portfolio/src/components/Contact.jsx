import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Phone, MapPin, Send, User, MessageSquare, CheckCircle, Github, Linkedin } from 'lucide-react';
import emailjs from '@emailjs/browser';
import './Contact.css';

// Custom X Icon Component
const XIcon = ({ size = 24, className = "" }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 30 30" 
    width={size} 
    height={size} 
    className={className}
    fill="currentColor"
  >
    <path d="M26.37,26l-8.795-12.822l0.015,0.012L25.52,4h-2.65l-6.46,7.48L11.28,4H4.33l8.211,11.971L12.54,15.97L3.88,26h2.65 l7.182-8.322L19.42,26H26.37z M10.23,6l12.34,18h-2.1L8.12,6H10.23z"/>
  </svg>
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Initialize EmailJS
  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) {
      emailjs.init(publicKey);
    }
  }, []);

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
    // Clear error when user starts typing
    if (error) setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.');
      }

      const result = await emailjs.send(
        serviceId,
        templateId,
        {
          from_name: formData.name,
          from_email: formData.email,
          subject: formData.subject,
          message: formData.message,
          to_name: 'Marc De Jesus',
        },
        publicKey
      );

      if (result.status === 200) {
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
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setError('Failed to send message. Please try again or contact me directly via email.');
    } finally {
      setIsSubmitting(false);
    }
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
                <h3>Contact Information</h3>
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
                        <a href={info.href} className="contact-link" aria-label={info.label}>
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

                <div className="section-divider" />

                <div className="social-links">
                  <h3>Connect With Me</h3>
                  <div className="social-buttons">
                    {[
                      { name: 'GitHub', brand: 'github', icon: Github, href: 'https://github.com/marcdejesus' },
                      { name: 'LinkedIn', brand: 'linkedin', icon: Linkedin, href: 'https://www.linkedin.com/in/marc-de-jesus-075185252/' },
                      { name: 'X', brand: 'x', icon: XIcon, href: 'https://x.com/marcdejesusdev' }
                    ].map((social, index) => {
                      const IconComponent = social.icon;
                      return (
                        <motion.a
                          key={social.name}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-btn"
                          data-brand={social.brand}
                          aria-label={social.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          title={social.name}
                        >
                          <IconComponent size={24} />
                        </motion.a>
                      );
                    })}
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

                {error && <p className="error-message">{error}</p>}

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
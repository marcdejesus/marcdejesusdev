import emailjs from '@emailjs/browser';

// Email.js configuration
export const EMAILJS_CONFIG = {
  SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || '',
  TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || '',
  MARKETING_TEMPLATE_ID: process.env.NEXT_PUBLIC_EMAILJS_MARKETING_TEMPLATE_ID || '',
  PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',
};

// Initialize Email.js
export const initEmailJS = () => {
  if (EMAILJS_CONFIG.PUBLIC_KEY) {
    emailjs.init(EMAILJS_CONFIG.PUBLIC_KEY);
  }
};

// Send contact form email
export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
  budgetRange?: string;
  timeline?: string;
  socialLink?: string;
}) => {
  try {
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      project_type: formData.projectType,
      message: formData.projectDetails,
      budget_range: formData.budgetRange || 'Not specified',
      timeline: formData.timeline || 'Not specified',
      social_link: formData.socialLink || 'Not provided',
      to_name: 'Marc De Jesus',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send contact email:', error);
    return { success: false, error };
  }
};

// Send marketing subscription email
export const sendMarketingSubscription = async (formData: {
  name: string;
  email: string;
  projectType: string;
}) => {
  try {
    const templateParams = {
      subscriber_name: formData.name,
      subscriber_email: formData.email,
      subscription_source: 'Contact Form',
      interest_category: formData.projectType,
      to_name: 'Marc De Jesus',
    };

    const response = await emailjs.send(
      EMAILJS_CONFIG.SERVICE_ID,
      EMAILJS_CONFIG.MARKETING_TEMPLATE_ID,
      templateParams
    );

    return { success: true, response };
  } catch (error) {
    console.error('Failed to send marketing subscription email:', error);
    return { success: false, error };
  }
}; 
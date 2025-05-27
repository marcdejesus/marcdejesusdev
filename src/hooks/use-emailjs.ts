import { useState, useCallback } from 'react';
import { sendContactEmail, sendMarketingSubscription } from '@/lib/emailjs';

interface UseEmailJSReturn {
  isLoading: boolean;
  error: string | null;
  sendContactForm: (data: ContactFormData) => Promise<boolean>;
  sendMarketingEmail: (data: MarketingSubscriptionData) => Promise<boolean>;
  clearError: () => void;
}

interface ContactFormData {
  name: string;
  email: string;
  projectType: string;
  projectDetails: string;
  budgetRange?: string;
  timeline?: string;
  socialLink?: string;
}

interface MarketingSubscriptionData {
  name: string;
  email: string;
  projectType: string;
}

export const useEmailJS = (): UseEmailJSReturn => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const sendContactForm = useCallback(async (data: ContactFormData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await sendContactEmail(data);
      
      if (!result.success) {
        setError('Failed to send contact email. Please try again.');
        return false;
      }

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const sendMarketingEmail = useCallback(async (data: MarketingSubscriptionData): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      const result = await sendMarketingSubscription(data);
      
      if (!result.success) {
        setError('Failed to subscribe to marketing emails');
        return false;
      }

      return true;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An unexpected error occurred';
      setError(errorMessage);
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    isLoading,
    error,
    sendContactForm,
    sendMarketingEmail,
    clearError,
  };
}; 
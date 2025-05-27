'use client';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useEmailJS } from '@/hooks/use-emailjs';
import { initEmailJS } from '@/lib/emailjs';
import { toast } from '@/hooks/use-toast';
import { Mail, CheckCircle } from 'lucide-react';

const newsletterSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

interface NewsletterSubscriptionProps {
  className?: string;
  title?: string;
  description?: string;
  variant?: 'default' | 'compact' | 'inline';
}

export function NewsletterSubscription({ 
  className = "",
  title = "Stay Updated",
  description = "Subscribe to get the latest updates on my projects and tech insights.",
  variant = "default"
}: NewsletterSubscriptionProps) {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { isLoading, error, sendMarketingEmail, clearError } = useEmailJS();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  // Initialize Email.js on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  // Show error toast when error state changes
  useEffect(() => {
    if (error) {
      toast({
        title: "Subscription Failed",
        description: error,
        variant: "destructive",
        duration: 5000,
      });
    }
  }, [error]);

  const onSubmit = async (data: NewsletterFormData) => {
    clearError();

    const success = await sendMarketingEmail({
      name: data.name,
      email: data.email,
      projectType: 'Newsletter Subscription', // Default project type for newsletter
    });

    if (success) {
      setIsSubscribed(true);
      reset();
      toast({
        title: "Successfully Subscribed!",
        description: "Thank you for subscribing. You'll receive updates about my latest projects and insights.",
        duration: 5000,
      });

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    }
  };

  if (variant === 'compact') {
    return (
      <div className={`space-y-3 ${className}`}>
        <h3 className="text-sm font-medium">{title}</h3>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-2">
          <div>
            <Input
              {...register('name')}
              placeholder="Your name"
              className="text-sm"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="your.email@example.com"
              className="text-sm"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
          <Button 
            type="submit" 
            size="sm" 
            disabled={isLoading}
            className="w-full text-xs"
          >
            {isLoading ? "Subscribing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
            {isSubscribed ? <CheckCircle className="ml-2 h-3 w-3" /> : <Mail className="ml-2 h-3 w-3" />}
          </Button>
        </form>
      </div>
    );
  }

  if (variant === 'inline') {
    return (
      <div className={`flex flex-col sm:flex-row gap-2 ${className}`}>
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div>
            <Input
              {...register('name')}
              placeholder="Your name"
              disabled={isLoading}
            />
            {errors.name && (
              <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
            )}
          </div>
          <div>
            <Input
              {...register('email')}
              type="email"
              placeholder="your.email@example.com"
              disabled={isLoading}
            />
            {errors.email && (
              <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
            )}
          </div>
        </div>
        <Button 
          onClick={handleSubmit(onSubmit)}
          disabled={isLoading}
          className="sm:w-auto"
        >
          {isLoading ? "Subscribing..." : isSubscribed ? "Subscribed!" : "Subscribe"}
          {isSubscribed ? <CheckCircle className="ml-2 h-4 w-4" /> : <Mail className="ml-2 h-4 w-4" />}
        </Button>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`space-y-4 ${className}`}>
      <div className="text-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <Label htmlFor="newsletter-name">Name</Label>
          <Input
            id="newsletter-name"
            {...register('name')}
            placeholder="Your name"
            disabled={isLoading}
          />
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
          )}
        </div>
        
        <div>
          <Label htmlFor="newsletter-email">Email</Label>
          <Input
            id="newsletter-email"
            {...register('email')}
            type="email"
            placeholder="your.email@example.com"
            disabled={isLoading}
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>
        
        <Button 
          type="submit" 
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Subscribing..." : isSubscribed ? "Successfully Subscribed!" : "Subscribe to Updates"}
          {isSubscribed ? <CheckCircle className="ml-2 h-4 w-4" /> : <Mail className="ml-2 h-4 w-4" />}
        </Button>
      </form>
      
      <p className="text-xs text-muted-foreground text-center">
        You can unsubscribe at any time. No spam, only valuable updates.
      </p>
    </div>
  );
} 
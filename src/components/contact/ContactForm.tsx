'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel, // Keep FormLabel for general form field labels
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/hooks/use-toast";
import { CONTACT_FORM_OPTIONS, SOCIAL_LINKS } from "@/lib/constants";
import { contactFormSchema, type ContactFormValues, defaultValues } from "./ContactFormFields";
import { initEmailJS } from "@/lib/emailjs";
import { useEmailJS } from "@/hooks/use-emailjs";
import { Send, CheckCircle, AlertCircle } from "lucide-react";
import Link from "next/link";
import { Checkbox } from "@/components/ui/checkbox"; // Import Checkbox
import { Label } from "@/components/ui/label"; // Import Label for direct use with checkbox

export function ContactForm() {
  const { isLoading, error, sendContactForm, sendMarketingEmail, clearError } = useEmailJS();
  
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  // Initialize Email.js on component mount
  useEffect(() => {
    initEmailJS();
  }, []);

  // Clear any previous errors when form data changes
  useEffect(() => {
    if (error) {
      clearError();
    }
  }, [form.watch(), clearError, error]);

  async function onSubmit(data: ContactFormValues) {
    try {
      // Send contact form email
      const contactSuccess = await sendContactForm({
        name: data.name,
        email: data.email,
        projectType: data.projectType,
        projectDetails: data.projectDetails,
        budgetRange: data.budgetRange,
        timeline: data.timeline,
        socialLink: data.socialLink,
      });

      if (!contactSuccess) {
        return; // Error handling is done by the hook
      }

      // Send marketing subscription email if user opted in
      let marketingSuccess = true;
      if (data.subscribeToMarketing) {
        marketingSuccess = await sendMarketingEmail({
          name: data.name,
          email: data.email,
          projectType: data.projectType,
        });

        if (!marketingSuccess) {
          console.warn('Marketing subscription email failed, but contact email was sent successfully');
        }
      }

      // Show success message
      toast({
        title: "Message Sent Successfully!",
        description: data.subscribeToMarketing 
          ? marketingSuccess 
            ? "Thank you for reaching out and subscribing to updates. I'll get back to you as soon as possible."
            : "Your message was sent successfully. However, there was an issue with the marketing subscription. I'll get back to you as soon as possible."
          : "Thank you for reaching out. I'll get back to you as soon as possible.",
        duration: 5000,
      });

      form.reset();
    } catch (error) {
      console.error('Form submission error:', error);
      toast({
        title: "Message Failed to Send",
        description: "There was an unexpected error. Please try again or contact me directly at marcdejesusdev@gmail.com",
        variant: "destructive",
        duration: 7000,
      });
    }
  }

  // Show error toast when error state changes
  useEffect(() => {
    if (error) {
      toast({
        title: "Error",
        description: error,
        variant: "destructive",
        duration: 5000,
      });
    }
  }, [error]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100 } }
  };

  return (
    <motion.section 
      className="container mx-auto px-4 py-16 md:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={itemVariants} className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Get in Touch</h1>
        <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
          Looking for support, have a question, interested in job opportunities, or need paid tutoring? 
          Please fill out the form below. For freelance/contract offers, I operate through{' '}
          <a 
            href="https://dejesusdigitalsolutions.com" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-primary hover:underline"
          >
            De Jesus Digital Solutions
          </a>
          —select the appropriate project type. 
          You can also connect with me on social media.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        <motion.div variants={itemVariants} className="md:col-span-2">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Full Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Your Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email Address</FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="your.email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="projectType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Reason for Contact</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a reason" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {CONTACT_FORM_OPTIONS.projectTypes.map(type => (
                          <SelectItem key={type} value={type}>{type}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="projectDetails"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Details</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Please provide as much detail as possible..."
                        className="resize-y min-h-[120px]"
                        {...field}
                      />
                    </FormControl>
                    <FormDescription>
                      Share details about your inquiry, project, question, or availability for tutoring.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <FormField
                  control={form.control}
                  name="budgetRange"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Budget Range (If Applicable)</FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your budget" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CONTACT_FORM_OPTIONS.budgetRanges.map(range => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Preferred Timeline (If Applicable)</FormLabel>
                       <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select your timeline" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {CONTACT_FORM_OPTIONS.timelines.map(time => (
                            <SelectItem key={time} value={time}>{time}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              
              <FormField
                control={form.control}
                name="socialLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Social/Website Link (Optional)</FormLabel>
                    <FormControl>
                      <Input placeholder="https://linkedin.com/in/yourprofile" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="!mt-8 flex flex-col-reverse items-stretch gap-y-4 sm:flex-row sm:items-center sm:justify-end sm:gap-x-6">
                <FormField
                  control={form.control}
                  name="subscribeToMarketing"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center space-x-2.5 space-y-0">
                      <FormControl>
                        <Checkbox
                          checked={field.value}
                          onCheckedChange={field.onChange}
                          id="subscribeToMarketingChk"
                          aria-describedby="subscribeToMarketingDesc"
                        />
                      </FormControl>
                      <div className="grid gap-0.5 leading-none">
                        <Label
                          htmlFor="subscribeToMarketingChk"
                          className="font-normal text-sm text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
                        >
                          Subscribe to marketing emails
                        </Label>
                        <p id="subscribeToMarketingDesc" className="text-xs text-muted-foreground">
                          You can unsubscribe at any time.
                        </p>
                      </div>
                    </FormItem>
                  )}
                />
                <Button type="submit" size="lg" disabled={isLoading} className="w-full sm:w-auto">
                  {isLoading ? "Sending..." : "Send Message"}
                  {!isLoading && <Send className="ml-2 h-5 w-5" />}
                </Button>
              </div>
            </form>
          </Form>
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              You can also reach me directly via email or connect on social media. I aim to respond to all inquiries within 24-48 hours.
            </p>
                         <div>
              <h4 className="font-semibold mb-1">Phone</h4>
              <a href="tel:+15862210732" className="text-primary hover:underline text-lg font-medium">(586) 221-0732</a>
            </div>
             <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <a href="mailto:marcdejesusdev@gmail.com" className="text-primary hover:underline">marcdejesusdev@gmail.com</a>
            </div>
             <div>
              <h4 className="font-semibold mb-2">Service Area</h4>
              <p className="text-muted-foreground">
                Based in Macomb, Michigan<br/>
                <strong>Serving all of Michigan statewide</strong><br/>
                Remote services available nationwide
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-3">Connect with me:</h4>
              <div className="flex space-x-3">
                {SOCIAL_LINKS.map(link => (
                  <Button key={link.name} variant="outline" size="icon" asChild>
                    <Link href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
                      <link.icon className="h-5 w-5" />
                    </Link>
                  </Button>
                ))}
              </div>
            </div>
            <div className="border p-4 rounded-lg bg-muted/30">
              <h4 className="font-semibold mb-2">Availability</h4>
              <p className="text-sm text-muted-foreground">
                Open to discussing new opportunities, collaborations, and tutoring sessions. For freelance/contract projects, please note these are managed through{' '}
                 <a 
                    href="https://dejesusdigitalsolutions.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-primary hover:underline"
                  >
                    De Jesus Digital Solutions
                  </a>.
              </p>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}


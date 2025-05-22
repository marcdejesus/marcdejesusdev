
'use client';

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
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
import { Send } from "lucide-react";
import Link from "next/link";

export function ContactForm() {
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
    mode: "onChange",
  });

  async function onSubmit(data: ContactFormValues) {
    console.log(data);
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you as soon as possible.",
    });
    form.reset();
  }

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
          Please fill out the form below. For freelance/contract offers, I operate through De Jesus Digital Solutions—select the appropriate project type. 
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

              <Button type="submit" size="lg" disabled={form.formState.isSubmitting}>
                {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                {!form.formState.isSubmitting && <Send className="ml-2 h-5 w-5" />}
              </Button>
            </form>
          </Form>
        </motion.div>
        <motion.div variants={itemVariants} className="md:col-span-1 space-y-6">
            <h3 className="text-2xl font-semibold">Contact Information</h3>
            <p className="text-muted-foreground">
              You can also reach me directly via email or connect on social media. I aim to respond to all inquiries within 24-48 hours.
            </p>
            <div>
              <h4 className="font-semibold mb-1">Email</h4>
              <a href="mailto:marcdejesusdev@gmail.com" className="text-primary hover:underline">marcdejesusdev@gmail.com</a>
            </div>
             <div>
              <h4 className="font-semibold mb-2">Location</h4>
              <p className="text-muted-foreground">Macomb, MI (Remote/Hybrid)</p>
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
                Open to discussing new opportunities, collaborations, and tutoring sessions. For freelance/contract projects, please note these are managed through De Jesus Digital Solutions.
              </p>
            </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

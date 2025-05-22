import { z } from "zod";
import { CONTACT_FORM_OPTIONS } from "@/lib/constants";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.enum(CONTACT_FORM_OPTIONS.projectTypes as [string, ...string[]], { // Cast to satisfy Zod enum
    required_error: "You need to select a project type.",
  }),
  projectDetails: z.string().min(10, {
    message: "Please provide some details about your project (at least 10 characters).",
  }).max(1000, {
    message: "Project details cannot exceed 1000 characters."
  }),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  socialLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  projectDetails: "",
  budgetRange: CONTACT_FORM_OPTIONS.budgetRanges[0],
  timeline: CONTACT_FORM_OPTIONS.timelines[0],
  socialLink: "",
};

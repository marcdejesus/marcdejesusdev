import { z } from "zod";
import { CONTACT_FORM_OPTIONS } from "@/lib/constants";

export const contactFormSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  projectType: z.enum(CONTACT_FORM_OPTIONS.projectTypes as [string, ...string[]], {
    required_error: "You need to select a reason for contact.",
  }),
  projectDetails: z.string().min(10, {
    message: "Please provide some details (at least 10 characters).",
  }).max(1000, {
    message: "Details cannot exceed 1000 characters."
  }),
  budgetRange: z.string().optional(),
  timeline: z.string().optional(),
  socialLink: z.string().url({ message: "Please enter a valid URL." }).optional().or(z.literal('')),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;

export const defaultValues: Partial<ContactFormValues> = {
  name: "",
  email: "",
  projectType: CONTACT_FORM_OPTIONS.projectTypes[0], // Default to the first option
  projectDetails: "",
  budgetRange: CONTACT_FORM_OPTIONS.budgetRanges[0], // Default to N/A or first budget option
  timeline: CONTACT_FORM_OPTIONS.timelines[0], // Default to first timeline option
  socialLink: "",
};

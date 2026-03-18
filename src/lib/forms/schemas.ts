import { z } from "zod";

// Lead form submitted by homeowners on client sites
export const leadFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required").optional().or(z.literal("")),
  service: z.string().optional(),
  message: z.string().optional(),
  source: z.string().optional(), // which page they came from
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

// Contact form on agency site (GC prospects contacting AutoBoss)
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Business name is required"),
  phone: z.string().min(10, "Valid phone number required"),
  email: z.string().email("Valid email required"),
  website: z.string().optional(),
  message: z.string().optional(),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

// Calculator form on agency site (GC enters keywords/cities to see revenue opportunity)
export const calculatorFormSchema = z.object({
  keywords: z
    .array(z.string().min(2, "Keyword must be at least 2 characters"))
    .min(2, "Enter at least 2 keywords")
    .max(4, "Maximum 4 keywords"),
  cities: z
    .array(z.string().min(2, "City name is required"))
    .min(1, "Enter at least 1 city")
    .max(6, "Maximum 6 cities"),
  state: z.string().min(2, "State is required").max(2, "Use state abbreviation"),
  avgJobSize: z
    .number()
    .min(1000, "Minimum job size is $1,000")
    .max(1000000, "Maximum job size is $1,000,000"),
});

export type CalculatorFormData = z.infer<typeof calculatorFormSchema>;

// Lead capture after calculator results (GC wants full breakdown)
export const calculatorLeadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Business name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  cities: z.array(z.string()),
  state: z.string(),
  estimatedRevenue: z.number(),
});

export type CalculatorLeadData = z.infer<typeof calculatorLeadSchema>;

// Assessment lead capture (after quiz results)
export const assessmentLeadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  company: z.string().min(2, "Business name is required"),
  score: z.number().min(0).max(100),
  tier: z.string(),
  categoryScores: z.object({
    leads: z.number(),
    jobs: z.number(),
    money: z.number(),
    systems: z.number(),
  }),
});

export type AssessmentLeadData = z.infer<typeof assessmentLeadSchema>;

// Booking/consultation form
export const bookingLeadSchema = z.object({
  name: z.string().min(2, "Name is required"),
  company: z.string().min(2, "Business name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Valid phone number required"),
  message: z.string().optional(),
});

export type BookingLeadData = z.infer<typeof bookingLeadSchema>;

export {
  leadFormSchema,
  contactFormSchema,
  calculatorFormSchema,
  calculatorLeadSchema,
  assessmentLeadSchema,
  bookingLeadSchema,
  type LeadFormData,
  type ContactFormData,
  type CalculatorFormData,
  type CalculatorLeadData,
  type AssessmentLeadData,
  type BookingLeadData,
} from "./schemas";

// Email functions use 'resend' package — only import when needed server-side
export {
  sendLeadNotification,
  sendLeadConfirmation,
  sendCalculatorLeadNotification,
} from "./email";

'use server';

import { z } from 'zod';

// Form validation schema
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: 'Name is required' }),
  email: z.string().email({ message: 'Please enter a valid email address' }),
  company: z.string().optional(),
  message: z.string().min(1, { message: 'Message is required' }),
});

type ContactFormData = z.infer<typeof ContactFormSchema>;

export async function submitContactForm(formData: ContactFormData) {
  try {
    // Validate form data
    const validatedData = ContactFormSchema.parse(formData);
    
    // Get base URL with fallback
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 
                   (typeof window !== 'undefined' ? window.location.origin : '');
    
    // Call our API route to send emails
    const response = await fetch(`${baseUrl}/api/email`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(validatedData),
    });
    
    const result = await response.json();
    
    if (!response.ok) {
      throw new Error(result.error || 'Failed to send email');
    }
    
    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    
    if (error instanceof z.ZodError) {
      return { 
        success: false, 
        fieldErrors: error.formErrors.fieldErrors 
      };
    }
    
    return { 
      success: false, 
      message: error instanceof Error ? error.message : 'An unknown error occurred' 
    };
  }
} 
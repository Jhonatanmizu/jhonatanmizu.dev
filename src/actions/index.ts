import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { Resend } from 'resend';

export const server = {
  sendEmail: defineAction({
    accept: 'form',
    input: z.object({
      name: z.string().min(2, "Name is too short"),
      email: z.string().email("Invalid email address"),
      message: z.string().min(10, "Message is too short"),
    }),
    handler: async (input) => {
      const resend = new Resend(import.meta.env.RESEND_API_KEY);
      
      const { data, error } = await resend.emails.send({
        from: 'Contact Form <onboarding@resend.dev>', // Update this with your verified domain in production
        to: ['hello@jhonatanmizu.dev'], // Update this with your target email
        subject: `New Contact Form Submission from ${input.name}`,
        html: `
          <h1>New Message from your Portfolio</h1>
          <p><strong>Name:</strong> ${input.name}</p>
          <p><strong>Email:</strong> ${input.email}</p>
          <p><strong>Message:</strong></p>
          <p>${input.message}</p>
        `,
      });

      if (error) {
        throw new Error(error.message);
      }

      return { success: true, messageId: data?.id };
    },
  }),
};

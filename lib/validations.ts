import { z } from "zod";

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z
    .string()
    .email("Invalid email address")
    .min(5, "Email is required"),
  subject: z
    .string()
    .min(3, "Subject must be at least 3 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
  file: z
    .any()
    .optional()
    .refine(
      (file) => {
        if (!file || file.length === 0) return true;
        return file[0]?.size <= 5000000; // 5MB
      },
      "File size must be less than 5MB"
    )
    .refine(
      (file) => {
        if (!file || file.length === 0) return true;
        const acceptedTypes = ["application/pdf", "image/png", "image/jpeg", "image/jpg"];
        return acceptedTypes.includes(file[0]?.type);
      },
      "Only PDF, PNG, and JPEG files are allowed"
    ),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

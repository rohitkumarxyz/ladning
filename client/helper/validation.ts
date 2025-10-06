import { z } from "zod";

export const contactValidationSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message is too long"),
});

export const leadValidationSchema = z.object({
  name: z
    .string()
    .min(5, "Name must be at least 5 characters long")
    .max(50, "Name is too long"),
  email: z.string().email("Invalid email address"),
  phone: z.string().regex(/^\d{10}$/, "Phone number must be exactly 10 digits"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(500, "Message is too long"),
  location: z
    .string()
    .min(2, "Location must be at least 2 characters long")
    .max(100, "Location is too long")
    .optional(),
});
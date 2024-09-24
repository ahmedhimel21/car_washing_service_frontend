import { z } from "zod";

export const registrationValidationSchema = z.object({
  name: z.string({ required_error: "Name field is required" }),
  email: z.string({ required_error: "Email field is required" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits" }),
  address: z.string({ required_error: "Address field is required" }),
});

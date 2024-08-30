import { z } from "zod";

export const registrationValidationSchema = z.object({
  name: z.string({ required_error: "Name field is required" }),
  email: z.string({ required_error: "Email field is required" }),
  password: z.string({ required_error: "Password field is required" }),
  phone: z.string({ required_error: "Phone field is required" }),
  address: z.string({ required_error: "Address field is required" }),
});

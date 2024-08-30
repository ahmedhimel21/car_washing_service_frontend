import { z } from "zod";

export const loginValidationSchema = z.object({
  email: z.string({ required_error: "Email field is required" }),
  password: z.string({ required_error: "Password field is required" }),
});

import { z } from "zod";

export const serviceCreateValidationSchema = z.object({
  name: z.string({ required_error: "name field is required" }),
  description: z.string({ required_error: "description field is required" }),
  price: z.string({ required_error: "price field is required" }),
  duration: z.string({ required_error: "duration field is required" }),
  image: z
    .instanceof(File)
    .refine((file) => file.size <= 5 * 1024 * 1024, {
      // Max 5MB
      message: "File size must be less than 5MB",
    })
    .refine(
      (file) =>
        ["image/jpeg", "image/png", "image/jpg", "image/gif"].includes(
          file.type
        ),
      {
        message: "Only JPEG, PNG, or GIF file types are allowed",
      }
    ),
});

export const serviceUpdateValidationSchema = z.object({
  name: z.string({ required_error: "name field is required" }),
  description: z.string({ required_error: "description field is required" }),
  price: z.string({ required_error: "price field is required" }),
  duration: z.string({ required_error: "duration field is required" }),
});

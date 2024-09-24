import { z } from "zod";

export const bookingValidationSchema = z.object({
  name: z.string({ required_error: "Name field is required" }),
  email: z.string().email({ message: "Invalid email format" }),
  phone: z
    .string()
    .regex(/^\d{11}$/, { message: "Phone number must be exactly 11 digits" }),
  vehicleType: z.string({ required_error: "Please select one" }),
  vehicleBrand: z.string({ required_error: "Vehicle brand field is required" }),
  vehicleModel: z.string({ required_error: "Vehicle model field is required" }),
  manufacturingYear: z.string({
    required_error: "Manufacturing year field is required",
  }),
  registrationPlate: z.string({
    required_error: "Registration plate field is required",
  }),
  selectedTime: z.string({
    required_error: "Selected plate field is required",
  }),
});

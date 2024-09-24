import { z } from "zod";
// import moment, { Moment } from "moment";

export const slotUpdateStatusValidationSchema = z.object({
  isBooked: z.string({ required_error: "please select one" }),
});

export const slotCreateValidationSchema = z.object({
  service: z.string({ required_error: "please select one" }),
  date: z.string().min(1, { message: "Date is required" }),
  startTime: z.string().min(1, { message: "Start time is required" }),
  endTime: z.string().min(1, { message: "End time is required" }),
});

import { z } from "zod";

export const validationSchema = z.object({
  patient_name: z.string().min(1, {
    message: "Patient name is required",
  }),
  medicines: z
    .array(
      z.object({
        name: z.string().min(1, { message: "Medicine Name is required" }),
        from_date: z.string().min(1, { message: "From Date is required" }),
        to_date: z.string().min(1, { message: "To Date is required" }),
        doses: z
          .array(
            z.object({
              time: z.string().min(1, { message: "Time is required" }),
              dose: z
                .string()
                .min(1, { message: "Dose description is required" }),
              note: z.string().max(100, {
                message: "Note can't be more than 100 characters",
              }),
            })
          )
          .nonempty({ message: "At least one dose is required" }),
      })
    )
    .nonempty({ message: "At least one medicine is required" }),
});

export type FormValues = z.infer<typeof validationSchema>;

import { z } from "zod";

export const validationSchema = z.object({
  patientName: z.string().min(1, {
    message: "Patient name is required",
  }),
  medicineName: z.string().min(1, {
    message: "Patient name is required",
  }),
  fromDate: z.string().min(1, { message: "From Date is required" }),
  toDate: z.string().min(1, { message: "To Date is required" }),
  note: z.string().min(1, { message: "Add a short note" }),
  doses: z
    .array(
      z.object({
        time: z.string().min(1, { message: "Time is required" }),
        dose: z.string().min(1, { message: "Dose description is required" }),
        note: z.string().max(100, {
          message: "Note can't be more than 100 characters",
        }),
      })
    )
    .nonempty({ message: "At least one dose is required" }),
  // medicines: z
  //   .array(
  //     z.object({
  //       name: z.string().min(1, { message: "Medicine Name is required" }),
  //       note: z.string().min(1, { message: "Add a short note" }),
  //       fromDate: z.string().min(1, { message: "From Date is required" }),
  //       toDate: z.string().min(1, { message: "To Date is required" }),
  //       doses: z
  //         .array(
  //           z.object({
  //             time: z.string().min(1, { message: "Time is required" }),
  //             dose: z
  //               .string()
  //               .min(1, { message: "Dose description is required" }),
  //             note: z.string().max(100, {
  //               message: "Note can't be more than 100 characters",
  //             }),
  //           })
  //         )
  //         .nonempty({ message: "At least one dose is required" }),
  //     })
  //   )
  //   .nonempty({ message: "At least one medicine is required" }),
});

export type FormValues = z.infer<typeof validationSchema>;

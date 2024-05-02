import { z } from "zod"

export const RegisterFormSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address"
    }),
    name: z.string().min(1, {
        message: "Please enter your name"
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters long"
    })
})
// .refine((data) => data.password == data.confirmPassword, {
//     message: "Passwords don't match",
//     path: ["confirm"],
// });
import { z } from "zod";

const addCareGiverschema = z.object({
  name: z.string().min(1, {
    message: "Name is required",
  }),
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
});

export default addCareGiverschema;

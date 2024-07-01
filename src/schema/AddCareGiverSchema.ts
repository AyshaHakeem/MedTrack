import { z } from "zod";

const addCareGiverschema = z.object({
  email: z.string().email().min(1, {
    message: "Email is required",
  }),
});

export default addCareGiverschema;

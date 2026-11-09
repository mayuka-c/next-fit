import z from "zod";

export const loginSchema = z.object({
  email: z.email(),
  password: z.string().min(6, {
    error: "Password must be atleast 6 chars",
  }),
});

export type LoginSchema = z.infer<typeof loginSchema>;

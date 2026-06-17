import {z} from 'zod'

export const signUpSchema = z.object({
    name: z
        .string()
        .min(1, "Name must have atleast one charecter"),
    
    email: z
        .email("Email must have a valid format"),

    password: z
        .string()
        .min(6, "Password must be at least 6 characters"),

    role: z
        .enum(["owner", "dm", "customer"])
        .optional()
})

export const loginSchema = z.object({
  email: z
    .email("Invalid email format"),

  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
});

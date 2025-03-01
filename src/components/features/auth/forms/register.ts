import { z } from "zod";
import { emailSchema, nameSchema, passwordSchema } from "~/schemas/auth";


export const registerFormSchema = z.object({
    name : nameSchema,
    email : emailSchema,
    password : passwordSchema,
})

export type RegisterFormSchema = z.infer<typeof registerFormSchema>
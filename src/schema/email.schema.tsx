import {z} from "zod"

export const emailSchema=z.object({
    name:z.string().min(3,"name is too small").max(15,"Your name is too long"),
    email:z.string()
})
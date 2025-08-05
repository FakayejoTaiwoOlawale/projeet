import {z} from "zod"

export const mediaSchema=z.object({
    typeReceived:z.union([z.literal("image"),z.literal("video")]),
    src:z.url(),
    alt:z.string().optional(),
    title:z.string().optional()
})

export type Media=z.infer<typeof mediaSchema>;

export const emailSchema=z.object({
    email:z.string(),
    name:z.string().optional()
})

export type Email=z.infer<typeof emailSchema>;
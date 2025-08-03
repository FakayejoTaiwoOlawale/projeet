import {z} from "zod"

export const mediaSchema=z.object({
    typeReceived:z.union([z.literal("image"),z.literal("video")]),
    src:z.url(),
    alt:z.string().optional(),
    title:z.string().optional()
})

export type Media=z.infer<typeof mediaSchema>;
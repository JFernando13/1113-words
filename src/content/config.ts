import { z, defineCollection } from "astro:content";

const daysCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    pubDate: z.date().transform((date) => date.toISOString().split("T")[0]),
    tags: z.array(z.string()),
    day: z.number(),
    mood: z.string(),
  }),
});

export const collections = {
  days: daysCollection,
};


import { defineCollection, z } from "astro:content";

const postsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    tags: z.array(z.string()),
    date: z.date(),
    cover: z.string(),
    resume: z.string(),
  }),
});

export const collections = {
  posts: postsCollection,
};

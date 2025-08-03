import { defineCollection, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()), // permite tanto string como Date
    description: z.string(),
    image: z.string(),

    // relacion
    author: z.string(),
    tags: z.array(z.string()),
  }),
});

export const collections = {
  blog: blogCollection, // key del objeto debe de ser igual al nombre de la carpeta
};

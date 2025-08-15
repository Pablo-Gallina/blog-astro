import { defineCollection, reference, z } from "astro:content";

const blogCollection = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string().or(z.date()), // permite tanto string como Date
    description: z.string(),
    image: z.string(),

    // relacion
    // author: z.string(),
    author: reference("author"), // referencia a la coleccion author
    tags: z.array(z.string()),

    // bolean
    isDraft: z.boolean().default(false),
  }),
});

const authorCollection = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      avatar: image(),
    }),
});

export const collections = {
  blog: blogCollection, // key del objeto debe de ser igual al nombre de la carpeta
  author: authorCollection,
};

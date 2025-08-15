import rss from "@astrojs/rss";
import type { APIRoute } from "astro";
import { getCollection } from "astro:content";

export const GET: APIRoute = async ({ params, request, site }) => {
  const blogPost = await getCollection("blog", ({ data }) => !data.isDraft);
  return rss({
    // `<title>` field in output xml
    title: "Buzz’s Blog",
    // `<description>` field in output xml
    description: "A humble Astronaut’s guide to the stars",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#site
    site: site!,
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: blogPost.map((post) => ({
      // `<title>` field in each `<item>`
      title: post.data.title,
      // `<link>` field in each `<item>`
      link: `/posts/${post.slug}/`,
      // `<description>` field in each `<item>`
      description: post.data.description,
      // `<pubDate>` field in each `<item>`
      pubDate:
        typeof post.data.date === "string"
          ? new Date(post.data.date)
          : post.data.date,
    })),
    // (optional) inject custom xml
    customData: `<language>es-gt</language>`,
    stylesheet: "/styles/rss.xsl",
  });
};

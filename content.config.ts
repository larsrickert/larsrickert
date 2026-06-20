import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { ONYX_COLORS } from "sit-onyx";

export default defineContentConfig({
  collections: {
    projects: defineCollection({
      type: "data",
      source: "projects/**",
      schema: z.object({
        title: z.string(),
        subtitle: z.string(),
        description: z.string(),
        tags: z.array(z.string()),
        color: z.enum(ONYX_COLORS),
        status: z.string(),
        url: z.string().url(),
        repository: z.string().url().optional(),
        icon: z.string(),
        image: z.string().optional(),
      }),
    }),
  },
});

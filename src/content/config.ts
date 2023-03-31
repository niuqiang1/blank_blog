import { z, defineCollection } from 'astro:content';
const blogCollection = defineCollection({
  schema: z.object({
    title:  z.string(),
    desc:  z.string(),
    author:  z.string(),
    date: z.date(),
    file:z.string().optional(),
    img: z.string().optional(),
    cover:z.string().optional(),
    tag: z.array(z.string())
  })
});
// 3. Export a single `collections` object to register your collection(s)
export const collections = {
  'blog': blogCollection,
};
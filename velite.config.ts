import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  root: ".",
  output: {
    data: ".velite",
    assets: "public/static",
    base: "/static/",
    name: "[name]-[hash:6].[ext]",
    clean: true,
  },
  collections: {
    docs: {
      name: "Doc",
      pattern: "docs/**/*.{md,mdx}",
      schema: s.object({
        title: s.string(),
        description: s.string().optional(),
        slug: s.path(),
        sidebar_position: s.number().optional().default(99),
        content: s.mdx(),
        toc: s.toc(),
      }).transform((data) => {
        const cleanSlug = data.slug.replace(/^docs\//, '').replace(/^docs$/, 'index');
        return {
          ...data,
          slug: cleanSlug,
          permalink: cleanSlug === 'index' ? '/docs' : `/docs/${cleanSlug}`,
        };
      }),
    },
    blog: {
      name: "Post",
      pattern: "blog/**/*.{md,mdx}",
      schema: s.object({
        title: s.string(),
        description: s.string().optional(),
        slug: s.path(),
        date: s.isodate().optional(),
        cover: s.image().optional(),
        authors: s.array(s.string()).optional(),
        tags: s.array(s.string()).optional(),
        content: s.mdx(),
      }).transform((data) => {
        const cleanSlug = data.slug.replace(/^blog\//, '').replace(/^blog$/, 'index');
        
        let date = data.date;
        const match = cleanSlug.match(/^(\d{4}-\d{2}-\d{2})-(.+)$/);
        if (!date && match) {
          date = new Date(match[1]).toISOString();
        }

        return {
          ...data,
          date,
          slug: cleanSlug,
          permalink: cleanSlug === 'index' ? '/blog' : `/blog/${cleanSlug}`,
        };
      }),
    },
  },
  mdx: {
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: "github-dark-dimmed",
          keepBackground: false,
        },
      ],
    ],
  },
});

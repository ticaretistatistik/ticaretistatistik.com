import { defineConfig, s } from "velite";
import rehypeSlug from "rehype-slug";
import rehypePrettyCode from "rehype-pretty-code";

export default defineConfig({
  root: "docs",
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
      pattern: "**/*.{md,mdx}",
      schema: s.object({
        title: s.string(),
        description: s.string().optional(),
        slug: s.path(),
        sidebar_position: s.number().optional().default(99),
        content: s.mdx(),
        toc: s.toc(),
      }).transform((data) => ({
        ...data,
        permalink: `/docs/${data.slug}`,
      })),
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

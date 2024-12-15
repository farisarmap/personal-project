import { defineConfig, defineCollection, s } from "velite"

const computedFileds = <T extends { slug: string }>(data: T) => ({
    ...data,
    // slugAsParams: data.slug.split("/").slice(1).join("/")
});

const posts = defineCollection({
    name: "Posts",
    pattern: "articles/**/*.mdx",
    schema: s.object({
        title: s.string().max(99),
        slug: s.string().max(99),
        categories: s.array(s.string()),
        description: s.string().max(99),
        author: s.string().max(99),
        date: s.isodate(),
        published: s.boolean().default(false),
        imageUrl: s.string(),
        body: s.mdx()
    })
        .transform(computedFileds)
})

export default defineConfig({
    root: "content",
    output: {
        data: ".velite",
        assets: "public/static",
        base: "/static/",
        name: "[name]-[hash:6].[ext]",
        clean: true
    },
    collections: { posts },
    mdx: {
        rehypePlugins: [],
        remarkPlugins: []
    }
})

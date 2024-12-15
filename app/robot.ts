import { navbar } from "@/data/navbar";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: navbar.map((item) => {
                return `${process.env.SITE_URL}${item.link}`
            }),
            disallow: [],
        },
        sitemap: `${process.env.SITE_URL}/sitemap.xml`
    }
}
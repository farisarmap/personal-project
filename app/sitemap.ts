import { navbar } from "@/data/navbar";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    const sitemapData: MetadataRoute.Sitemap = navbar.map((item) => {
        return {
            url: `${process.env.SITE_URL}${item.link}`,
            lastModified: new Date(),
            priority: item.priority
        }
    })
    return sitemapData
}
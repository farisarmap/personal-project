"use client"
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react'
const articles = [
    {
        id: 1,
        title: "7 Fungsi Facebook Pixel Yang Bisa Membuat Iklan Tepat Sasaran",
        content:
            "Facebook Pixel adalah alat yang penting untuk memaksimalkan kampanye iklan...",
        fullContent:
            "Setelah memahami fitur lengkap yang dimiliki Facebook Pixel, Anda bisa jauh meningkatkan performa iklan...",
        tags: ["Teknologi", "Marketing", "Facebook"],
        createdAt: "17 January 2023",
        duration: 7,
        viewCount: 2100,
        mainImage: "/asset/facebook-pixel.jpg",
        additionalImage: "/asset/facebook-login.jpg",
        slug: "artikel-1"
    },
    {
        id: 2,
        title: "Mengenal Framework Next.js untuk Pengembangan Website",
        content:
            "Next.js telah menjadi salah satu framework populer untuk pengembangan website modern...",
        fullContent: "Artikel ini membahas fitur-fitur utama yang membuat Next.js unggul.",
        tags: ["Teknologi", "Web Development", "Next.js"],
        createdAt: "20 February 2023",
        duration: 8,
        viewCount: 950,
        mainImage: "/asset/nextjs.jpg",
        additionalImage: "/asset/nextjs-example.jpg",
    },
];

function Page() {
    const router = useRouter();
    const { slug } = router.query;
    console.log(slug)

    const article = articles.find((article) => article.slug === slug);

    if (!article) {
        return <p>Article not found</p>;
    }
    return (
        <main className="bg-white min-h-screen py-10">
            <div className="max-w-4xl mx-auto px-4">
                {/* Title */}
                <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
                <div className="flex items-center text-gray-500 text-sm mb-6">
                    <span>{article.createdAt}</span>
                    <span className="mx-2">•</span>
                    <span>{article.duration} menit baca</span>
                    <span className="mx-2">•</span>
                    <span>👁️ {article.viewCount}</span>
                </div>

                {/* Main Image */}
                <Image
                    src={article.mainImage}
                    alt="Main article image"
                    className="rounded-lg"
                    width={800}
                    height={450}
                    objectFit="cover"
                />
                <span className="block text-gray-400 text-xs text-right mt-2">Sumber: Unsplash</span>

                {/* Content */}
                <article className="text-gray-800 leading-relaxed mt-8">
                    <p>{article.content}</p>
                    <br />
                    <p>{article.fullContent}</p>
                </article>

                {/* Additional Image */}
                <Image
                    src={article.additionalImage}
                    alt="Additional article image"
                    className="rounded-lg mt-8"
                    width={800}
                    height={450}
                    objectFit="cover"
                />

                {/* Tags */}
                <div className="flex items-center gap-3 mt-6">
                    {article.tags.map((tag, idx) => (
                        <span
                            key={idx}
                            className="px-4 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-full text-[#784DC7] text-sm"
                        >
                            {tag}
                        </span>
                    ))}
                </div>

                {/* Social Sharing */}
                <div className="flex items-center gap-4 mt-10 text-gray-500">
                    <Link href="#">
                        <a className="hover:text-gray-700">📤 Share</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-gray-700">💬 Comment</a>
                    </Link>
                    <Link href="#">
                        <a className="hover:text-gray-700">❤️ Like</a>
                    </Link>
                </div>
            </div>
        </main>
    )
}

export default Page
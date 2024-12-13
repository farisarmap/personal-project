import DisplayArticles from '@/components/card/display-article';
import Navigation from '@/components/navigation/navigation'
import SearchAndSort from '@/components/navigation/search-sort';
import Pagination from '@/components/pagination/pagination';
import Link from 'next/link';
import React from 'react'

const articles = [
    {
        id: 1,
        title: "7 Fungsi Facebook Pixel yang Membantu Optimasi Iklan",
        content:
            "Facebook Pixel adalah alat yang penting untuk memaksimalkan kampanye iklan. Artikel ini membahas cara menggunakannya untuk meningkatkan ROI.",
        tags: ["Teknologi", "Marketing", "Facebook"],
        createdAt: "2023-01-15",
        duration: 5, // durasi baca dalam menit
        viewCount: 1200,
        slug: "artikel-1"
    },
    {
        id: 2,
        title: "Mengenal Framework Next.js untuk Pengembangan Website",
        content:
            "Next.js telah menjadi salah satu framework populer untuk pengembangan website modern. Pelajari fitur-fitur utamanya di artikel ini.",
        tags: ["Teknologi", "Web Development", "Next.js"],
        createdAt: "2023-02-20",
        duration: 8,
        viewCount: 950,
    },
    {
        title: "Tips dan Trik Membuat API dengan Golang",
        content:
            "Golang adalah pilihan populer untuk pengembangan backend. Artikel ini menjelaskan cara membuat API yang efisien dengan Golang.",
        tags: ["Programming", "Golang", "Backend"],
        createdAt: "2023-03-10",
        duration: 7,
        viewCount: 780,
    },
    {
        title: "Pentingnya Cache untuk Performa Aplikasi Web",
        content:
            "Cache adalah salah satu cara terbaik untuk meningkatkan kecepatan aplikasi web. Temukan bagaimana cara mengimplementasikannya di artikel ini.",
        tags: ["Teknologi", "Web Performance", "Caching"],
        createdAt: "2023-04-05",
        duration: 6,
        viewCount: 630,
    },
    {
        title: "Strategi Efektif Menggunakan Database Relasional",
        content:
            "Pelajari cara menggunakan database relasional dengan efisien untuk memastikan aplikasi Anda berjalan dengan optimal.",
        tags: ["Database", "PostgreSQL", "SQL"],
        createdAt: "2023-05-12",
        duration: 10,
        viewCount: 520,
    },
];


function Articles() {
    return (
        <main className='min-h-screen'>
            <Navigation />
            <section className="py-10">
                <div className="max-w-6xl mx-auto">
                    <h2 className="text-[80px] text-defColorText font-extrabold mb-6">Articles</h2>
                    <div className=' mb-5 flex justify-end items-center gap-4'>
                        <SearchAndSort />
                    </div>
                    <div className="flex flex-col gap-6">
                        {articles.map((item, idx) => (
                            <Link key={`display-articles-${idx}`} href={`/articles/${item.slug}`}>
                                <div className="cursor-pointer">
                                    <DisplayArticles
                                        title={item.title}
                                        content={item.content}
                                        tags={item.tags}
                                        createdAt={item.createdAt}
                                        duration={item.duration}
                                        viewCount={item.viewCount}
                                        imageUrl=""
                                    />
                                </div>
                            </Link>
                        ))}

                        <Pagination />
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Articles
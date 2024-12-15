import { MDXContent } from '@/components/mdx-components'
import { getAllPosts } from '@/helper/posts'
import { Metadata } from 'next';
import Image from 'next/image';
import React from 'react'

type Props = {
    params: Promise<{ slug: string }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

async function getPostFromParams(slug: string) {
    const articles = await getAllPosts(0, 0);
    const article = articles.find((article) => article.slug === slug);

    return article;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const slug = (await params).slug
    const post = await getPostFromParams(slug);

    if (!post) {
        throw new Error(`Article with slug '${slug}' not found`);
    }

    return {
        title: post.title,
        description: post.description,
        authors: { name: post.author },
        openGraph: {
            title: post.title,
            description: post.description,
            type: "article",
            url: post.slug,
            images: [
                {
                    url: post.imageUrl,
                    width: 1200,
                    height: 630,
                    alt: post.title,
                },
            ],
        },
        twitter: {
            card: "summary_large_image",
            title: post.title,
            description: post.description,
            images: [post.imageUrl],
        },
    };
}

export async function generateStaticParams() {
    const retrieveArticles = await getAllPosts(0, 0);

    return retrieveArticles.map((data) => ({
        slug: data.slug
    }));
}

async function Page({ params }: Props) {
    const slug = (await params).slug
    const article = await getPostFromParams(slug);

    if (!article) {
        return <p>Article not found</p>;
    }

    return (
        <div className='py-10 max-w-4xl mx-auto'>
            <div className="flex flex-wrap gap-2 mb-6">
                {article.categories.map((category, idx) => {
                    const categoryColors: { [key: string]: string } = {
                        Design: 'bg-purple-100 text-purple-600',
                        Research: 'bg-blue-100 text-blue-600',
                        Presentation: 'bg-pink-100 text-pink-600',
                    };

                    const categoryClass = categoryColors[category] || 'bg-gray-100 text-gray-600';
                    return (
                        <span key={idx} className={`px-3 py-1 rounded-full text-sm ${categoryClass}`}>{category}</span>
                    );
                })}
            </div>

            <h1 className="text-6xl font-extrabold mb-8">{article.title}</h1>

            <div className="text-sm mb-10 w-[60%] lg:w-[25%] flex justify-between">
                <h3 className="font-medium">{article.author}</h3>
                <h3 className="font-medium">{new Date(article.date).toDateString()}</h3>
            </div>

            <div className="mb-10">
                <Image
                    src={article.imageUrl}
                    alt={article.title}
                    className="w-full rounded-lg object-cover"
                    style={{ height: '400px', objectPosition: 'center' }}
                    height={400}
                    width={400}
                />
            </div>

            <div className="prose prose-lg prose-indigo">
                <MDXContent code={article.body} />
            </div>
        </div>
    );
}

export default Page;

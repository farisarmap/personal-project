"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from '../loading';

export type Article = {
    // id: string;
    title: string;
    description: string;
    date: string;
    imageUrl: string;
    categories: string[];
    author: string;
    slug: string;
};

type RecentBlogPostProps = {
    articles: Article[];
    headArticle: Article
};

function RecentBlogPost({ articles, headArticle }: RecentBlogPostProps) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 4000); // Simulate 3 seconds of loading
        return () => clearTimeout(timer);
    }, []);

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
            <div className="space-y-4 lg:space-x-4 lg:border-r-2 lg:border-black">
                <div className='hidden lg:block'>
                    <div className="text-sm text-purple-600">{headArticle.author} • {new Date(headArticle.date).toDateString()}</div>
                    <Link href={`/articles/${headArticle.slug}`}>
                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600">{headArticle.title}</h3>
                        <div className='w-[95%]'>
                            <p className="text-gray-600 mb-4">{headArticle.description}</p>
                        </div>
                        <Image
                            src={headArticle.imageUrl}
                            alt="Office chairs"
                            width={500}
                            height={400}
                            className=" w-[95%] rounded-lg mb-4"
                        />
                        <div className="flex gap-2">
                            {
                                headArticle.categories.map((i, idx) => {
                                    const categoryColors: { [key: string]: string } = {
                                        Design: 'bg-purple-100 text-purple-600',
                                        Research: 'bg-blue-100 text-blue-600',
                                        Presentation: 'bg-pink-100 text-pink-600',
                                    };

                                    const categoryClass = categoryColors[i] || 'bg-gray-100 text-gray-600';
                                    return (
                                        <span key={idx} className={`px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm ${categoryClass}`}>{i}</span>
                                    )
                                })
                            }
                        </div>
                    </Link>
                </div>
                <div className='block lg:hidden'>
                    <div className="space-y-8">
                        {
                            articles.map((item, index) => (
                                <article key={index}>
                                    <Link href={`/articles/${item.slug}`} className="space-y-4 block">
                                        <Image
                                            src={item.imageUrl}
                                            alt="Team meeting with laptops"
                                            width={600}
                                            height={400}
                                            className="w-full aspect-[3/2] object-cover rounded-lg"
                                        />
                                        <div className="space-y-2">
                                            <time className="text-purple-600 text-sm">{new Date(item.date).toDateString()}</time>
                                            <h2 className="text-2xl font-semibold">{item.title}</h2>
                                            <p className="text-gray-600">
                                                {item.description}
                                            </p>
                                            <div className="flex gap-2 pt-2">
                                                {
                                                    item.categories.map((i, idx) => {
                                                        const categoryColors: { [key: string]: string } = {
                                                            Design: 'bg-purple-100 text-purple-600',
                                                            Research: 'bg-blue-100 text-blue-600',
                                                            Presentation: 'bg-pink-100 text-pink-600',
                                                        };

                                                        const categoryClass = categoryColors[i] || 'bg-gray-100 text-gray-600';
                                                        return (
                                                            <span key={idx} className={`px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm ${categoryClass}`}>{i}</span>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </Link>
                                </article>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className="space-y-8">
                {
                    articles.map((item, index) => (
                        <div className=' hidden lg:block' key={index}>
                            <div className="text-sm text-purple-600 mb-2">{item.author} • {new Date(item.date).toDateString()}</div>
                            <Link href={`/articles/${headArticle.slug}`} className="group">
                                <div className="flex gap-4">
                                    <div className="flex-1">
                                        <h3 className="text-2xl font-semibold mb-2 group-hover:text-gray-600">{item.title}</h3>
                                        <p className="text-gray-600 mb-4">{item.description}</p>
                                        <div className="flex gap-2">
                                            {
                                                item.categories.map((i, idx) => {
                                                    const categoryColors: { [key: string]: string } = {
                                                        Design: 'bg-purple-100 text-purple-600',
                                                        Research: 'bg-blue-100 text-blue-600',
                                                        Presentation: 'bg-pink-100 text-pink-600',
                                                    };

                                                    const categoryClass = categoryColors[i] || 'bg-gray-100 text-gray-600';
                                                    return (
                                                        <span key={idx} className={`px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm ${categoryClass}`}>{i}</span>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                    <Image
                                        src={item.imageUrl}
                                        alt="Team meeting"
                                        width={400}
                                        height={250}
                                        className="w-48 h-32 rounded-lg object-cover"
                                    />
                                </div>
                            </Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default RecentBlogPost

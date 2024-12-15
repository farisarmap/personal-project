"use client"

import React, { useState } from "react";
import Image from 'next/image'
import Link from 'next/link'
import { MdArrowOutward } from 'react-icons/md'
import Pagination from '@/components/pagination/pagination'
import { getAllPosts } from "@/helper/posts";

function AllArticles() {
    const postsPerPage = 6;
    const [currentPage, setCurrentPage] = useState(1);

    const allPosts = getAllPosts(currentPage, postsPerPage);
    const articles = getAllPosts()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                {
                    allPosts.map((item, idx) => (
                        <Link href={`articles/${item.slug}`} className="group" key={idx}>
                            <Image
                                src={item.imageUrl}
                                alt="Team meeting"
                                width={400}
                                height={300}
                                className="w-full rounded-lg mb-4"
                            />
                            <div className="text-sm text-purple-600 mb-2">{item.author} • {new Date(item.date).toDateString()}</div>
                            <div className=' flex justify-between'>
                                <h3 className="text-xl font-semibold mb-2 group-hover:text-gray-600 flex items-center">
                                    {item.title}
                                </h3>
                                <MdArrowOutward size={24} />
                            </div>
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
                        </Link>
                    ))
                }
            </div>
            <section>
                <Pagination
                    posts={articles}
                    currentPage={currentPage}
                    setCurrentPage={setCurrentPage}
                    postsPerPage={postsPerPage}
                />
            </section>
        </div>
    )
}

export default AllArticles
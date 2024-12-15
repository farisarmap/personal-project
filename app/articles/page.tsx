import React from 'react'
import RecentBlogPost from './recent-blog-post';
import AllArticles from './all-post';
import { getLatestPost } from '@/helper/posts';

function Articles() {
    const latestPost = getLatestPost()
    const headArticle: {
        title: string;
        slug: string;
        categories: string[];
        date: string;
        description: string;
        author: string;
        published: boolean;
        imageUrl: string;
        body: string
    } = {
        title: latestPost[0].title,
        slug: latestPost[0].slug,
        categories: latestPost[0].categories,
        date: latestPost[0].date,
        description: latestPost[0].description,
        author: latestPost[0].author,
        published: latestPost[0].published,
        imageUrl: latestPost[0].imageUrl,
        body: latestPost[0].body
    }

    const articles: {
        title: string;
        slug: string;
        categories: string[];
        date: string;
        description: string;
        author: string;
        published: boolean;
        imageUrl: string;
        body: string
    }[] = []
    latestPost.forEach((item, index) => {
        if (index != 0) {
            articles.push(item)
        }
    })

    return (
        <div className=" py-20">
            <section className="mb-16 pb-10 border-b-2 border-black">
                <h2 className="text-3xl font-bold mb-8 underline underline-offset-8">Recent blog posts</h2>
                <RecentBlogPost articles={articles} headArticle={headArticle} />
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-8 underline underline-offset-8">All blog posts</h2>
                <AllArticles />
            </section>
        </div>
    )
}

export default Articles
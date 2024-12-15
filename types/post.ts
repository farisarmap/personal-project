// types/post.ts
export type Tag = {
    name: string;
    bgColor: string;
    textColor: string;
};

export type Post = {
    author: string;
    date: string;
    link: string;
    title: string;
    excerpt: string;
    image: string;
    imageAlt: string;
    tags: Tag[];
};

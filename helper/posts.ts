import { posts } from "#site/content"


export function getAllPosts(currentPage: number = 1, postsPerPage: number = 10) {
    // Filter out only published posts
    const articles = posts.filter((item) => item.published === true);

    // If currentPage is less than or equal to 0, or if there is no pagination, return all posts
    if (currentPage <= 0 || postsPerPage <= 0 || articles.length <= postsPerPage) {
        return articles;
    }

    // Calculate the starting index based on the current page and posts per page
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;

    // Return the slice of posts for the current page
    const paginatedPosts = articles.slice(startIndex, endIndex);

    return paginatedPosts;
}




export function getLatestPost() {
    const latestPosts = posts
        .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
        .slice(0, 4);


    return latestPosts
}
"use client"
import { Article } from "@/app/articles/recent-blog-post";
import React from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

type PaginationProps = {
    posts: Article[];  // The posts to paginate
    currentPage: number;
    setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
    postsPerPage: number;
};

export default function Pagination({
    posts,
    currentPage,
    setCurrentPage,
    postsPerPage
}: PaginationProps) {
    const totalPosts = posts.length;
    const totalPages = Math.ceil(totalPosts / postsPerPage); // Calculate total pages dynamically

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    const pageNumbers = () => {
        const pages = [];
        const range = 3;  // Number of page numbers to show before and after current page

        // Calculate the page numbers dynamically
        for (let i = 1; i <= totalPages; i++) {
            if (i >= currentPage - range && i <= currentPage + range) {
                pages.push(i);
            }
        }

        // Add ellipsis if necessary
        if (currentPage - range > 1) {
            pages.unshift('...');
        }
        if (currentPage + range < totalPages) {
            pages.push('...');
        }

        return pages;
    };

    return (
        <div className="flex items-center justify-between flex-wrap gap-4">
            {/* Previous Button (Only for Desktop, Arrow on Mobile) */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`text-gray-600 hover:text-gray-900 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''} 
                    hidden lg:flex items-center gap-2`}
                disabled={currentPage === 1}
            >
                <AiOutlineLeft /> <span>Previous</span>
            </button>

            {/* Mobile Previous Button (Arrow Only) */}
            <button
                onClick={() => handlePageChange(currentPage - 1)}
                className={`text-gray-600 hover:text-gray-900 ${currentPage === 1 ? 'cursor-not-allowed opacity-50' : ''} 
                    lg:hidden`}
                disabled={currentPage === 1}
            >
                <AiOutlineLeft />
            </button>

            {/* Page Numbers */}
            <div className="flex gap-2 flex-wrap justify-center">
                {pageNumbers().map((page, idx) => (
                    <button
                        key={idx}
                        onClick={() => typeof page === 'number' && handlePageChange(page)}
                        className={`px-4 py-2 rounded-lg text-sm 
                            ${currentPage === page ? 'bg-purple-600 text-white' : 'text-gray-600 hover:bg-gray-50'}
                            ${typeof page === 'string' ? 'text-gray-500' : ''}`}
                        disabled={typeof page === 'string'}
                    >
                        {page}
                    </button>
                ))}
            </div>

            {/* Mobile Next Button (Arrow Only) */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`text-gray-600 hover:text-gray-900 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''} 
                    lg:hidden`}
                disabled={currentPage === totalPages}
            >
                <AiOutlineRight />
            </button>

            {/* Next Button (Only for Desktop, Arrow on Mobile) */}
            <button
                onClick={() => handlePageChange(currentPage + 1)}
                className={`text-gray-600 hover:text-gray-900 ${currentPage === totalPages ? 'cursor-not-allowed opacity-50' : ''} 
                    hidden lg:flex items-center gap-2`}
                disabled={currentPage === totalPages}
            >
                <span>Next</span> <AiOutlineRight />
            </button>
        </div>
    );
}

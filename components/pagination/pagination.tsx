"use client"
import React, { useState } from "react";

export default function Pagination() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 3;

    const handlePageChange = (page: number) => {
        if (page > 0 && page <= totalPages) {
            setCurrentPage(page);
        }
    };

    return (
        <div className="flex items-center justify-center mt-6">
            <div className="flex items-center border border-[#BE9FF6] rounded-full bg-white shadow-md px-4 py-2">
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`text-lg ${currentPage === 1 ? "text-gray-300" : "text-purple-600 hover:text-purple-800"
                        }`}
                >
                    &lt;
                </button>
                <div className="flex items-center mx-4 space-x-4">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index + 1}
                            onClick={() => handlePageChange(index + 1)}
                            className={` text-base font-semibold ${currentPage === index + 1
                                ? "text-[#784DC7]"
                                : "text-gray-600 hover:text-purple-800"
                                }`}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`text-lg ${currentPage === totalPages ? "text-gray-300" : "text-[#784DC7] hover:text-purple-800"
                        }`}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
}

"use client"

import React, { useState } from 'react';
import Image from 'next/image';
import { CiSearch } from 'react-icons/ci';

export default function SearchAndSort() {
    const [showDropdown, setShowDropdown] = useState(false);

    const handleSort = (option: string) => {
        console.log(`Sorting by: ${option}`);
        setShowDropdown(false); // Tutup dropdown setelah memilih opsi
    };

    return (
        <div className="mb-5 flex justify-end items-center gap-4">
            {/* Search Bar */}
            <div className="flex items-center bg-[#FFFFFF] rounded-full px-4 py-2 w-60 max-w-xl border-defColorText border">
                <CiSearch size={25} color="#303030" />
                <input
                    type="text"
                    placeholder="Search"
                    className="bg-transparent text-defColorText placeholder-gray-500 focus:outline-none w-full ml-3"
                />
            </div>

            {/* Sorting Bar */}
            <div className="relative">
                <button
                    onClick={() => setShowDropdown(!showDropdown)}
                    className="flex items-center gap-2 bg-[#FFFFFF] border-defColorText border px-4 py-2 rounded-full hover:bg-gray-100 transition"
                >
                    <Image src={"/icon/bar.png"} alt="sorting-bar" width={25} height={25} />
                    {/* <span className="text-sm text-defColorText">Sort</span> */}
                </button>
                {/* Dropdown Menu */}
                {showDropdown && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                        <ul className="py-2">
                            <li
                                onClick={() => handleSort('newest')}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-defColorText text-sm"
                            >
                                Newest
                            </li>
                            <li
                                onClick={() => handleSort('latest')}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-defColorText text-sm"
                            >
                                Latest
                            </li>
                            <li
                                onClick={() => handleSort('view count terbanyak')}
                                className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-defColorText text-sm"
                            >
                                View Count
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

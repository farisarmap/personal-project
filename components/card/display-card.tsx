import Image from 'next/image'
import React from 'react'

function DisplayCard() {
    return (
        <div className="w-[400px] h-[450px] flex flex-col justify-center bg-white border-2 border-black rounded-2xl p-5 shadow-lg">
            <div className="w-full overflow-hidden rounded-lg mb-5">
                <Image
                    src="/asset/default-image.png"
                    width={350}
                    height={250}
                    alt="Project Thumbnail"
                    className="object-cover"
                />
            </div>
            <h2 className="text-3xl font-extrabold mb-5 text-[#292929]">The Tento Project</h2>
            <div className="flex gap-2 mb-6">
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-sm font-medium">
                    UX Design
                </span>
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-sm font-medium">
                    University
                </span>
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-sm font-medium">
                    JavaScript
                </span>
            </div>
            <button className="px-6 py-3 bg-[#292929] text-white text-[16px] font-medium hover:bg-gray-800 transition">
                View Project
            </button>
        </div>
    )
}

export default DisplayCard
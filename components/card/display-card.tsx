import Image from 'next/image'
import React from 'react'

function DisplayCard() {
    return (
        <div className="w-full sm:w-[350px] lg:w-[400px] h-auto sm:h-[450px] flex flex-col justify-center bg-white border-2 border-black rounded-2xl p-5 shadow-lg">
            <div className="w-full overflow-hidden rounded-lg mb-5">
                <Image
                    src="/asset/default-image.png"
                    width={350}
                    height={250}
                    alt="Project Thumbnail"
                    className="object-cover"
                />
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold mb-5 text-[#292929]">The Tento Project</h2>
            <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-xs sm:text-sm font-medium">
                    UX Design
                </span>
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-xs sm:text-sm font-medium">
                    University
                </span>
                <span className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-xs sm:text-sm font-medium">
                    JavaScript
                </span>
            </div>
            <button className="px-5 py-2 font-medium border border-b-4 border-r-4 border-black rounded-lg shadow-lg hover:shadow-sm  hover:-translate-y-3 active:translate-x-0 active:translate-y-0 transition-all">
                View Project
            </button>
        </div>
    )
}

export default DisplayCard

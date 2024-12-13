import Image from 'next/image'
import React from 'react'

function DisplayArticles(data: {
    title: string;
    imageUrl: string;
    content: string;
    tags: string[];
    createdAt: string;
    duration: number;
    viewCount: number;
}) {
    const defaultImage = "/asset/default-image.png"

    return (
        <div className="flex items-center rounded-lg shadow-lg p-6 border border-black bg-[#FFFFFF]">
            <div className="w-1/4">

                <Image
                    src={data.imageUrl || defaultImage}
                    alt="Artikel Thumbnail"
                    className="rounded-lg"
                    width={270}
                    height={330}
                />
            </div>
            <div className='w-3/4 flex flex-col justify-between h-full pl-10'>
                <div className=' text-[#292929]'>
                    <h3 className=" text-2xl mb-5 font-extrabold">
                        {data.title}
                    </h3>
                    <p className="text-sm">
                        {data.content}
                    </p>
                </div>
                <div className="flex flex-col items-start justify-between mt-5">
                    <div className="flex gap-2 mb-6 text-[#292929]">
                        {data.tags.map((item, idx) => (
                            <span key={`article-tag-${idx}`} className="px-3 py-1 bg-[#E9DFFC] border border-[#BE9FF6] rounded-2xl text-[#784DC7] text-sm font-medium">
                                {item}
                            </span>
                        ))}
                    </div>
                    <div className="flex items-center text-gray-400 text-xs space-x-4">
                        <span>{data.createdAt}</span>
                        <span>{data.duration} minute read</span>
                        <span>👁️ {data.viewCount}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DisplayArticles
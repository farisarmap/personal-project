import { navbar } from '@/data/navbar'
import Link from 'next/link'
import React from 'react'

function Navigation() {
    return (
        <nav className=" flex w-full flex-row justify-between px-6 h-[98px] border-b-2 border-black">
            <div className=" w-[10%] flex items-center px-20 py-14">
                <Link href={"/"}>
                    <h1 className=" text-6xl font-tts text-defColorText rotate-12 uppercase">f</h1>
                </Link>
            </div>
            <div className="w-[70%] flex justify-between items-center pl-32">
                <ul className=" w-[60%] flex flex-row justify-between px-4">
                    {navbar.map((item, idx) => (
                        <Link href={item.link} key={`nav-${idx}`}>
                            <li className=" text-[20px] text-defColorText font-light">{item.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className="w-1/5 flex justify-center h-[50px] ">
                    <button className=" bg-secondary text-black font-bold text-[20px] px-6 rounded-full border border-black">Get in Touch</button>
                </div>
            </div>
        </nav>
    )
}

export default Navigation
"use client"

import { mobileNavbar, navbar } from '@/data/navbar'
import Link from 'next/link'
import React, { useState } from 'react'

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="flex w-full justify-between px-6 py-4 h-[98px] border-b-2 border-black">
            {/* Logo */}
            <div className="flex items-center">
                <Link href={"/"}>
                    <h1 className="text-6xl font-tts text-defColorText rotate-12 uppercase">f</h1>
                </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex w-[70%] justify-between items-center pl-32">
                <ul className="w-[60%] flex justify-between px-4">
                    {navbar.map((item, idx) => (
                        <Link href={item.link} key={`nav-${idx}`}>
                            <li className="text-[20px] text-defColorText font-light">{item.name}</li>
                        </Link>
                    ))}
                </ul>
                <div className="w-1/5 flex justify-center">
                    <button className="bg-secondary text-black font-bold text-[20px] px-6 rounded-full border border-black">Get in Touch</button>
                </div>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="lg:hidden flex items-center">
                <button onClick={toggleMobileMenu}>
                    <div className="space-y-2">
                        <span className="block w-8 h-1 bg-defColorText"></span>
                        <span className="block w-8 h-1 bg-defColorText"></span>
                        <span className="block w-8 h-1 bg-defColorText"></span>
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 p-8 transition-all duration-300 ${isMobileMenuOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`}
            >
                <div className="flex justify-end items-center mb-8">
                    <button onClick={toggleMobileMenu} className="text-white text-3xl">
                        &times;
                    </button>
                </div>

                <ul className="flex flex-col items-center gap-6">
                    {mobileNavbar.map((item, idx) => (
                        <Link href={item.link} key={`nav-${idx}`}>
                            <li className="text-2xl text-white font-light">{item.name}</li>
                        </Link>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navigation;

// components/navigation/navigation.tsx
"use client";

import { mobileNavbar, navbar } from '@/data/navbar';
import Link from 'next/link';
import React, { useState } from 'react';
import { motion } from "framer-motion";
import { FiX, FiMenu } from 'react-icons/fi';
import { usePathname } from 'next/navigation';

function Navigation() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const pathname = usePathname(); // Mendapatkan path saat ini


    // Fungsi untuk menentukan apakah link aktif
    const isActive = (link: string) => {
        if (link === "/") {
            return pathname === "/";
        }
        return pathname.startsWith(link);
    };

    return (
        <nav className="flex w-full justify-between px-6 py-4 h-[98px] border-b-2 border-black bg-white">
            {/* Logo */}
            <div className="flex items-center">
                <Link href="/">
                    <h1 className="text-6xl font-tts text-defColorText rotate-12 uppercase cursor-pointer">f</h1>
                </Link>
            </div>

            {/* Desktop Navbar */}
            <div className="hidden lg:flex w-[70%] justify-between items-center pl-32">
                <ul className="w-[60%] flex justify-between px-4">
                    {navbar.map((item, idx) => (
                        <motion.li
                            key={`nav-${idx}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className={`list-none ${isActive(item.link) ? ' underline underline-offset-4 decoration-2' : ''}`}
                        >
                            <Link href={item.link}>
                                <span className={`text-[20px] text-defColorText cursor-pointer ${isActive(item.link) ? 'font-bold' : 'font-light'}`}>{item.name}</span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
                <div className="w-1/5 flex justify-center">
                    <button className="bg-secondary text-black font-bold text-[20px] px-6 py-2 rounded-full border border-black hover:bg-primary transition duration-300">
                        Get in Touch
                    </button>
                </div>
            </div>

            {/* Hamburger Icon (Mobile) */}
            <div className="lg:hidden flex items-center">
                <button
                    onClick={toggleMobileMenu}
                    aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
                    aria-expanded={isMobileMenuOpen}
                    className="text-defColorText focus:outline-none"
                >
                    {isMobileMenuOpen ? (
                        <FiX className="w-8 h-8" />
                    ) : (
                        <FiMenu className="w-8 h-8" />
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            <motion.div
                className="lg:hidden fixed top-0 left-0 w-full h-full bg-black bg-opacity-75 flex flex-col items-center justify-center z-50"
                initial={{ x: '-100%' }}
                animate={isMobileMenuOpen ? { x: 0 } : { x: '-100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
            >
                <button
                    onClick={toggleMobileMenu}
                    aria-label="Close menu"
                    className="absolute top-4 right-4 text-white text-3xl focus:outline-none"
                >
                    <FiX />
                </button>
                <ul className="flex flex-col items-center gap-6">
                    {mobileNavbar.map((item, idx) => (
                        <motion.li
                            key={`mobile-nav-${idx}`}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            className="list-none"
                            onClick={() => setIsMobileMenuOpen(false)} // Menutup menu saat klik
                        >
                            <Link href={item.link}>
                                <span className="text-2xl text-white font-light cursor-pointer">{item.name}</span>
                            </Link>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </nav>
    )
}

export default Navigation;

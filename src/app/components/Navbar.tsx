'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
        {/* 1. Overlay (Area klik di luar menu) */}
        {isOpen && <div className="fixed inset-0 z-40 bg-black/20" onClick={() => setIsOpen(false)} />}

        {/* 2. Navbar Container */}
        <div className="fixed top-4 left-0 right-0 z-50 px-4">
            <nav
            className={`relative max-w-6xl mx-auto bg-gradient-to-r from-white/95 via-[#fff8f8]/95 to-white/95 backdrop-blur-xl
                                border border-[#800000]/10 rounded-2xl shadow-[0_10px_40px_rgba(128,0,0,0.12)] px-6 py-4
                                transition-all duration-300 ${isOpen ? 'pb-6' : ''} `}
            >
            <div className="flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold text-gray-900">
                KARTA RW 16<span className="text-[#800000]">.</span>
                </Link>

                <button className="md:hidden text-gray-700 relative z-50 p-2 rounded-xl hover:bg-gray-100 transition" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                <div className="hidden md:flex items-center space-x-10 text-gray-700">
                <Link
                    href="/"
                    className="relative font-semibold hover:text-[#800000] transition-all
                                            duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    Home
                </Link>
                <Link
                    href="#profil"
                    className="relative font-semibold hover:text-[#800000] transition-all
                                            duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    Profil
                </Link>
                <Link
                    href="#struktur"
                    className="relative font-semibold hover:text-[#800000] transition-all
                                            duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    Struktur
                </Link>
                <Link
                    href="#galeri"
                    className="relative font-semibold hover:text-[#800000] transition-all
                                            duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    Galeri
                </Link>
                <Link
                    href="#berita"
                    className="relative font-semibold hover:text-[#800000] transition-all
                                            duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                            after:transition-all after:duration-300 hover:after:w-full"
                >
                    Berita
                </Link>
                </div>
            </div>

                {/* Mobile Menu */}
            <div className={`
                            md:hidden overflow-hidden
                            transition-all duration-500 ease-out
                            ${isOpen ? "max-h-96" : "max-h-0"}
                        `}
                        >
                <div className={`
                                flex flex-col items-center space-y-4 border-t pt-4 text-gray-700
                                transition-all duration-500 ease-out
                                ${
                                    isOpen
                                    ? "opacity-100 translate-y-0"
                                    : "opacity-0 -translate-y-2"
                                }
                                `}
                            >
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="relative font-semibold hover:text-[#800000] transition-all
                                                    duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Home
                        </Link>
                        <Link
                            href="#profil"
                            onClick={() => setIsOpen(false)}
                            className="relative font-semibold hover:text-[#800000] transition-all
                                                    duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Profil
                        </Link>
                        <Link
                            href="#struktur"
                            onClick={() => setIsOpen(false)}
                            className="relative font-semibold hover:text-[#800000] transition-all
                                                    duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Struktur
                        </Link>
                        <Link
                            href="#galeri"
                            onClick={() => setIsOpen(false)}
                            className="relative font-semibold hover:text-[#800000] transition-all
                                                    duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Galeri
                        </Link>
                        <Link
                            href="#berita"
                            onClick={() => setIsOpen(false)}
                            className="relative font-semibold hover:text-[#800000] transition-all
                                                    duration-300 after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-[#800000]
                                                    after:transition-all after:duration-300 hover:after:w-full"
                        >
                            Berita
                        </Link>
                    </div>
                </div>
            </nav>
        </div>

        </>
    );
}

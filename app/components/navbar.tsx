"use client";


import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Importing icons for the menu

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div
            className="w-full bg-[#FFFFFF] relative border-b border-black min-h-[4.5rem] mb-[0.8rem] flex items-center px-[5%] z-[1000]"
            role="banner"
        >
            <div className="max-w-[80rem] w-full h-full mx-auto flex justify-between items-center">
                {/* Logo */}
                <a
                    href="https://airestates.webflow.io/"
                    aria-label="home"
                    className="flex items-center"
                >
                    <img
                        src="https://cdn.prod.website-files.com/65d96d247cdbea321b6baac5/65df8038e94e6f591757cf31_Logo.svg"
                        alt="Logo"
                        className="max-w-full"
                    />
                </a>

                {/* Navbar Menu */}
                <nav
                    className="hidden md:flex ml-6 items-center justify-between flex-1 "
                    role="navigation"
                >
                    <div className="flex items-center">
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#078939] font-medium border-b-2 border-[#078939] text-base py-6 px-4 transition-all"
                            aria-current="page"
                        >
                            Home
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-6 px-4 transition-all"
                        >
                            Properties
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-6 px-4 transition-all"
                        >
                            Rent
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-6 px-4 transition-all"
                        >
                            Sale
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-6 px-4 transition-all"
                        >
                            About
                        </a>
                        <div className="relative inline-block">
                            <a
                                href="https://airestates.webflow.io/#"
                                className="flex items-center text-[#787A78]"
                                aria-label="Open empty cart"
                            >
                                <span className="mr-1">Cart (</span>
                                <span className="bg-white text-black text-sm font-normal px-1 rounded-full">
                                    0
                                </span>
                                <span>)</span>
                            </a>
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center">
                    <button
                        className="text-[#787A78] focus:outline-none"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>

                {/* Buttons */}
                <div className="hidden md:flex items-center space-x-4">
                    <a
                        href="/sign-in"
                        className="text-[#787A78] hover:text-gray-900 font-medium px-5 py-2 border-2 rounded-full transition-all"
                    >
                        Sign in
                    </a>
                    <a
                        href="/contact-us"
                        className="bg-[#078939] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-[#056d2a] transition-all"
                    >
                        Contact us
                    </a>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-black shadow-lg z-50">
                    <nav className="flex flex-col items-start p-4 space-y-2">
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#078939] font-medium text-base py-2 px-4 border-b border-[#078939] transition-all"
                        >
                            Home
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-2 px-4 transition-all"
                        >
                            Properties
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-2 px-4 transition-all"
                        >
                            Rent
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-2 px-4 transition-all"
                        >
                            Sale
                        </a>
                        <a
                            href="https://airestates.webflow.io/"
                            className="text-[#787A78] hover:text-gray-900 font-medium text-base py-2 px-4 transition-all"
                        >
                            About
                        </a>
                        <a
                            href="/sign-in"
                            className="text-[#787A78] hover:text-gray-900 font-medium px-5 py-2 border-2 rounded-full transition-all w-full text-center"
                        >
                            Sign in
                        </a>
                        <a
                            href="/contact-us"
                            className="bg-[#078939] text-white font-medium text-sm px-5 py-2 rounded-full hover:bg-[#056d2a] transition-all w-full text-center"
                        >
                            Contact us
                        </a>
                    </nav>
                </div>
            )}
        </div>
    );
}
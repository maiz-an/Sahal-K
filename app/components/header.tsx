"use client";

import { useState } from "react";

const navLinks = ["Home", "Experience", "Contact"];

export default function Header() {
    const [active, setActive] = useState("Home");

    return (
        <header className="fixed top-4 left-0 w-full flex justify-center z-50">
            <nav className="flex gap-1 bg-gray-100/80 backdrop-blur-md rounded-full px-3 py-2 shadow-md border border-gray-200">
                {navLinks.map((link) => (
                    <button
                        key={link}
                        onClick={() => setActive(link)}
                        className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${active === link
                                ? "bg-white text-gray-900 shadow"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        {link}
                    </button>
                ))}
            </nav>
        </header>
    );
}
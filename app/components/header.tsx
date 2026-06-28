"use client";

import { useState } from "react";

const navLinks = ["Home", "Experience", "Contact"];

export default function Header() {
    const [active, setActive] = useState("Home");

    return (
        <header className="flex items-center justify-center py-5">
            <nav className="flex gap-1 bg-gray-100 rounded-full px-2 py-1.5 shadow-sm">
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
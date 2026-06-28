"use client";

import { useState } from "react";

const navLinks = ["Home", "Experience", "Contact"];

export default function Footer() {
    const [active, setActive] = useState("Home");

    return (
        <footer className="py-5 px-8 flex items-center justify-between text-xs text-gray-400 border-t border-gray-100">
            <nav className="flex gap-5">
                {navLinks.map((link) => (
                    <button
                        key={link}
                        onClick={() => setActive(link)}
                        className={`transition-colors ${active === link ? "text-gray-700" : "hover:text-gray-700"
                            }`}
                    >
                        {link}
                    </button>
                ))}
            </nav>

            <span>© 2026 Muhammed Sahal K. All rights reserved.</span>
        </footer>
    );
}
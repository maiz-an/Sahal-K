"use client";

import { FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="fixed bottom-0 w-full z-50">
            <div className="flex items-center justify-between bg-gray-100/80 backdrop-blur-md px-6 py-3 shadow-md border border-gray-200">

                {/* Social Icons */}
                <div className="flex gap-4">

                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        title="LinkedIn"
                        className="text-gray-500 hover:text-blue-600 transition"
                    >
                        <FaLinkedin size={18} />
                    </a>

                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        title="Twitter"
                        className="text-gray-500 hover:text-sky-500 transition"
                    >
                        <FaTwitter size={18} />
                    </a>

                </div>

                {/* Copyright */}
                <span className="text-[10px] text-gray-400">
                    © 2026 Muhammed Sahal K.
                </span>

            </div>
        </footer>
    );
}
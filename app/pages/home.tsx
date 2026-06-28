"use client";

import { useState } from "react";

const stats = [
    { label: "Education", value: "Berea" },
    { label: "Position", value: "Digital Marketing" },
    { label: "At", value: "Marketing Functional" },
    { label: "Interest", value: "Quality" },
];


export default function homePage() {


    return (
        <div className="min-h-screen bg-white/96 font-sans text-gray-900 flex flex-col">
            {/* Main content */}
            <main className="flex-1 flex items-center justify-center px-6 py-8">
                <div className="w-full max-w-5xl flex flex-col lg:flex-row gap-8 items-stretch">

                    {/* Left: Hero card */}
                    <div className="flex-1 bg-gray-50 rounded-3xl p-8 flex flex-col gap-6 shadow-sm border border-gray-100">
                        {/* Avatar */}
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
                            <span className="text-white text-lg font-bold">M</span>
                        </div>

                        {/* Eyebrow */}
                        <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
                            Portfolio
                        </p>

                        {/* Name */}
                        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                            Muhammed Sahal K.
                        </h1>

                        {/* Bio */}
                        <p className="text-sm text-gray-500 leading-relaxed max-w-sm">
                            Driven marketing professional with a passion for digital strategy,
                            content development, and brand growth.
                        </p>

                        {/* CTA buttons */}
                        <div className="flex gap-3 flex-wrap">
                            <button className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors shadow-sm">
                                Open to work
                            </button>
                            <button className="px-5 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-100 transition-colors">
                                View Resume
                            </button>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Stats grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat) => (
                                <div key={stat.label} className="flex flex-col gap-0.5">
                                    <span className="text-xs text-gray-400 uppercase tracking-wide">
                                        {stat.label}
                                    </span>
                                    <span className="text-sm font-semibold text-gray-800">
                                        {stat.value}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right: Visual / Profile card */}
                    <div className="w-full lg:w-72 bg-gray-50 rounded-3xl p-6 flex flex-col gap-5 shadow-sm border border-gray-100">
                        {/* Card header */}
                        <div className="flex items-center justify-between">
                            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                                Visual Rest ID
                            </p>
                            <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        </div>

                        {/* Circle avatar */}
                        <div className="flex flex-col items-center gap-3 py-4">
                            <div className="relative">
                                <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 flex items-center justify-center shadow-inner">
                                    <span className="text-3xl font-bold text-indigo-600">S</span>
                                </div>
                                {/* Online ring */}
                                <span className="absolute bottom-1 right-1 w-4 h-4 rounded-full bg-emerald-400 border-2 border-white"></span>
                            </div>
                            <div className="text-center">
                                <p className="font-semibold text-gray-800 text-sm">Sahal</p>
                                <p className="text-xs text-gray-400 mt-0.5">Digital Marketer</p>
                            </div>
                        </div>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Mini info rows */}
                        <div className="flex justify-between text-xs text-gray-500">
                            <div className="flex flex-col gap-0.5">
                                <span className="text-gray-400 uppercase tracking-wide text-[10px]">Open to</span>
                                <span className="font-semibold text-gray-700">Grow UI</span>
                            </div>
                            <div className="flex flex-col gap-0.5 text-right">
                                <span className="text-gray-400 uppercase tracking-wide text-[10px]">Status</span>
                                <span className="font-semibold text-emerald-600">Open</span>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="flex flex-wrap gap-2 mt-auto">
                            {["Strategy", "Content", "SEO", "Branding"].map((tag) => (
                                <span
                                    key={tag}
                                    className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-600 text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </main>


        </div>
    );
}
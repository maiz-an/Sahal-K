"use client";
import { FaPaperPlane } from "react-icons/fa6";
const navLinks = [
  { label: "Home", key: "home" },
  { label: "Doings", key: "experience" },
  { label: "Works", key: "works" },
  { label: "Contact", key: "contact" },
] as const;

type HeaderProps = {
  active: (typeof navLinks)[number]["key"];
  onChange: (value: (typeof navLinks)[number]["key"]) => void;
};

export default function Header({ active, onChange }: HeaderProps) {
  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div className="mx-auto flex w-full max-w-[24rem] items-center gap-2 sm:max-w-[26rem]">
        <nav className="grid flex-1 grid-cols-4 items-center gap-1 rounded-full border border-gray-200 bg-gray-100/85 p-1 shadow-md backdrop-blur-md">
          {navLinks.map((link) => (
            <button
              key={link.key}
              type="button"
              onClick={() => onChange(link.key)}
              className={`min-w-0 whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium transition-all duration-200 sm:px-3 sm:py-2 sm:text-sm ${active === link.key
                ? "bg-white text-gray-900 shadow-sm"
                : "text-gray-500 hover:text-gray-800 cursor-pointer"
                }`}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div
          className="grid h-11 w-11 place-items-center rounded-full
             bg-zinc-900 text-white
             border border-zinc-700
             hover:scale-105
             hover:-rotate-2
             transition-all duration-300"
        >
          <FaPaperPlane className="text-[18px]" />
        </div>
      </div>
    </header>
  );
}

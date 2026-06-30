"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaPaperPlane, FaXmark } from "react-icons/fa6";

const navLinks = [
  { label: "Home", key: "home" },
  { label: "Doings", key: "experience" },
  { label: "Works", key: "works" },
  { label: "Contact", key: "contact" },
] as const;

const hiddenState = { opacity: 0, y: 245, x: -60, scale: 0.6 };

type HeaderProps = {
  active: (typeof navLinks)[number]["key"];
  onChange: (value: (typeof navLinks)[number]["key"]) => void;
};

export default function Header({ active, onChange }: HeaderProps) {
  const [open, setOpen] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    note: "",
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(e.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  function handleButton() {
    if (open) {
      setOpen(false);

      setForm({
        name: "",
        email: "",
        note: "",
      });
    } else {
      setOpen(true);
    }
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 pt-4 sm:px-6">
      <div
        ref={wrapperRef}
        className="mx-auto flex w-full max-w-[24rem] items-start gap-2 sm:max-w-[26rem]"
      >
        <motion.div
          layout
          transition={{
            layout: {
              duration: .55,
              ease: [0.22, 1, 0.36, 1],
            }
          }}
          className="flex-1 overflow-hidden rounded-3xl border border-gray-200 bg-gray-100/85 shadow-md backdrop-blur-md"
        >
          <AnimatePresence initial={false} mode="wait">
            {!open ? (
              <motion.nav
                key="nav"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{
                  duration: 0.2,
                  delay: 0.02 // Small delay for nav
                }}
                className="grid grid-cols-4 items-center gap-1 p-1"
              >
                {navLinks.map((link) => (
                  <button
                    key={link.key}
                    type="button"
                    onClick={() => onChange(link.key)}
                    className={`min-w-0 whitespace-nowrap rounded-full px-2 py-1.5 text-[11px] font-medium transition-all duration-200 sm:px-3 sm:py-2 sm:text-sm ${active === link.key
                      ? "bg-white text-gray-900 shadow-sm"
                      : "cursor-pointer text-gray-500 hover:text-gray-800"
                      }`}
                  >
                    {link.label}
                  </button>
                ))}
              </motion.nav>
            ) : (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{
                  duration: 0.25,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="space-y-3 p-4"
              >
                <motion.h3
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98, }}
                  transition={{
                    duration: 0.25,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mt-2 mb-5 text-xs font-semibold uppercase tracking-widest text-zinc-500"
                >
                  Send me a note
                </motion.h3>

                <input
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) =>
                    setForm({ ...form, name: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white text-zinc-600 px-4 py-3 text-sm outline-none focus:shadow-sm"
                />

                <input
                  type="email"
                  placeholder="Email"
                  value={form.email}
                  onChange={(e) =>
                    setForm({ ...form, email: e.target.value })
                  }
                  className="w-full rounded-xl border border-gray-200 bg-white text-zinc-600 px-4 py-3 text-sm outline-none focus:shadow-sm"
                />

                <textarea
                  rows={4}
                  placeholder="Write your note..."
                  value={form.note}
                  onChange={(e) =>
                    setForm({ ...form, note: e.target.value })
                  }
                  className="w-full resize-none rounded-xl border border-gray-200 text-zinc-600 bg-white px-4 py-3 text-sm outline-none focus:shadow-sm"
                />

                <div className="flex items-center gap-2">
                  <button
                    className="flex-1 rounded-full bg-zinc-900 py-3 text-sm font-medium text-white transition hover:bg-black"
                  >
                    Send Message
                  </button>

                  <motion.button
                    initial={{ opacity: 0, scale: .8, rotate: 0 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: .8, rotate: 90 }}
                    transition={{
                      duration: 0.15,
                      delay: 0.0, // Slight delay for close button
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    onClick={handleButton}
                    className="grid h-11 w-11 place-items-center rounded-full
                      bg-zinc-900
                      text-white
                      hover:-rotate-5
                      transition"
                  >
                    <FaXmark />
                  </motion.button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        <button
          onClick={handleButton}
          className="grid h-11 w-11 place-items-center rounded-full text-white transition-all duration-300 hover:-rotate-2 hover:scale-105"
        >
          <AnimatePresence initial={false} mode="wait">
            {!open && (
              <motion.button
                key="send-btn"
                initial={hiddenState}
                animate={{ opacity: 1, y: 0, x: 0, scale: 1 }}
                exit={hiddenState}
                transition={{
                  duration: 0.4,
                  delay: 0.15, // Different delay for paper plane
                  ease: [0.22, 1, 0.36, 1],
                }}
                onClick={() => setOpen(true)}
                className="grid h-11 w-11 place-items-center rounded-full
              border border-zinc-700
              bg-zinc-900
              text-white
              shadow-lg
              hover:scale-105
              hover:-rotate-2"
              >
                <FaPaperPlane className="text-[18px]" />
              </motion.button>
            )}
          </AnimatePresence>

        </button>
      </div>
    </header>
  );
}
"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Header from "../components/header";
import Footer from "../components/footer";

type ViewKey = "home" | "experience" | "works" | "contact";

const stats = [
  { label: "Education", value: "Berea" },
  { label: "Position", value: "Digital Marketing" },
  { label: "At", value: "Marketing Functional" },
  { label: "Interest", value: "Quality" },
];

const experienceCards = [
  {
    title: "Digital Marketing",
    text: "Strategy, audience targeting, campaign planning, and social media growth.",
  },
  {
    title: "Content Creation",
    text: "Short-form posts, visual storytelling, and platform-ready marketing assets.",
  },
  {
    title: "Video Editing",
    text: "Clean edits that support brand communication and promotional content.",
  },
  {
    title: "Branding & Ads",
    text: "Google Ads, campaign identity, and performance-focused creative support.",
  },
];

const workCards = [
  {
    title: "Brand Campaigns",
    text: "Visual content systems that keep a consistent tone across platforms.",
  },
  {
    title: "Ad Creatives",
    text: "Campaign graphics designed for clarity, conversion, and audience fit.",
  },
  {
    title: "Social Content",
    text: "Platform-ready posts, story content, and promotional visuals.",
  },
  {
    title: "Motion Editing",
    text: "Short edits and cutdowns for social and marketing communication.",
  },
];

const contactItems = [
  { label: "Phone", value: "+974 6692 0211" },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/muhammed-sahal-k-4a64383b1",
  },
  { label: "Location", value: "Qatar" },
];

const motionVariants = {
  home: {
    initial: { opacity: 0, y: 22, scale: 0.98, rotateX: 6, filter: "blur(10px)" },
    animate: { opacity: 1, y: 0, scale: 1, rotateX: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -12, scale: 0.985, rotateX: -4, filter: "blur(8px)" },
  },
  experience: {
    initial: { opacity: 0, x: 26, scale: 0.985, filter: "blur(8px)" },
    animate: { opacity: 1, x: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, x: -18, scale: 0.99, filter: "blur(8px)" },
  },
  works: {
    initial: { opacity: 0, rotate: -1.4, y: 18, scale: 0.975, filter: "blur(10px)" },
    animate: { opacity: 1, rotate: 0, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, rotate: 1.4, y: -12, scale: 0.985, filter: "blur(8px)" },
  },
  contact: {
    initial: { opacity: 0, y: 14, scale: 0.99, filter: "blur(6px)" },
    animate: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, y: -8, scale: 0.99, filter: "blur(6px)" },
  },
} as const;

const motionTransition = {
  home: { duration: 0.42, ease: [0.22, 1, 0.36, 1] as const },
  experience: { duration: 0.28, ease: "easeOut" as const },
  works: { duration: 0.34, ease: [0.16, 1, 0.3, 1] as const },
  contact: { duration: 0.26, ease: "easeOut" as const },
} as const;

function HomePanel() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_18rem]">
      <section className="flex-1 rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
        <div className="flex h-full flex-col gap-6">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-md">
            <span className="text-white text-lg font-bold">M</span>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
              Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 leading-tight sm:text-5xl lg:text-6xl">
              Muhammed Sahal K.
            </h1>
          </div>

          <p className="max-w-xl text-sm leading-relaxed text-gray-500 sm:text-base">
            Driven marketing professional with a passion for digital strategy,
            content development, and brand growth.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="#experience"
              className="rounded-full bg-indigo-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
            >
              View Experience
            </a>
            <a
              href="#contact"
              className="rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-100"
            >
              Contact
            </a>
          </div>

          <hr className="border-gray-200" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col gap-0.5">
                <span className="text-[11px] uppercase tracking-wide text-gray-400">
                  {stat.label}
                </span>
                <span className="text-sm font-semibold text-gray-800">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <aside className="w-full rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8 lg:w-[18rem]">
        <div className="flex h-full flex-col gap-5">
          <div className="flex items-center justify-between">
            <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
              Visual Rest ID
            </p>
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
          </div>

          <div className="flex flex-col items-center gap-3 py-2">
            <div className="relative">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-indigo-100 to-indigo-200 shadow-inner">
                <span className="text-3xl font-bold text-indigo-600">S</span>
              </div>
              <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-400" />
            </div>
            <div className="text-center">
              <p className="text-sm font-semibold text-gray-800">Sahal</p>
              <p className="mt-0.5 text-xs text-gray-400">Digital Marketer</p>
            </div>
          </div>

          <hr className="border-gray-200" />

          <div className="flex justify-between text-xs text-gray-500">
            <div className="flex flex-col gap-0.5">
              <span className="text-[10px] uppercase tracking-wide text-gray-400">
                Open to
              </span>
              <span className="font-semibold text-gray-700">Grow UI</span>
            </div>
            <div className="flex flex-col gap-0.5 text-right">
              <span className="text-[10px] uppercase tracking-wide text-gray-400">
                Status
              </span>
              <span className="font-semibold text-emerald-600">Open</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {["Strategy", "Content", "SEO", "Branding"].map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-600"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </aside>
    </div>
  );
}

function ExperiencePanel() {
  return (
    <section className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Experience
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Digital marketing work shaped for growth and clean brand presence.
          </h2>
        </div>
        <div className="text-sm text-gray-500">
          Built around strategy, content, editing, and campaign performance.
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {experienceCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-semibold text-gray-900">{card.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
          </motion.article>
        ))}
      </div>

      <div className="mt-6 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Profile highlights
          </div>
          <ul className="mt-4 space-y-3 text-sm text-gray-600">
            <li>Social media marketing and campaign planning.</li>
            <li>Content creation with visual storytelling.</li>
            <li>Google Ads and performance-focused creatives.</li>
            <li>Video editing and platform-specific output.</li>
          </ul>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
          <div className="text-xs font-semibold uppercase tracking-widest text-gray-400">
            Current focus
          </div>
          <div className="mt-4 space-y-3">
            {["Strategy", "Audience", "Content", "Consistency"].map((item) => (
              <div key={item} className="flex items-center justify-between">
                <span className="text-sm font-medium text-gray-800">{item}</span>
                <span className="h-2.5 w-2.5 rounded-full bg-indigo-500/80" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function WorksPanel() {
  return (
    <section className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Works
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Selected work themes shown in the same clean portfolio language.
          </h2>
        </div>
        <div className="text-sm text-gray-500">
          A visual snapshot of the types of work you want to showcase.
        </div>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        {workCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.24, delay: index * 0.05 }}
            className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
          >
            <div className="text-sm font-semibold text-gray-900">{card.title}</div>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">{card.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

function ContactPanel() {
  return (
    <section id="contact" className="rounded-3xl border border-gray-100 bg-gray-50 p-6 shadow-sm sm:p-8">
      <div className="flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-indigo-500">
            Contact
          </p>
          <h2 className="mt-3 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Keep the same style, reach out when you need marketing support.
          </h2>
        </div>
        <a
          href="https://www.linkedin.com/in/muhammed-sahal-k-4a64383b1?utm_source=share_via&utm_content=profile&utm_medium=member_ios"
          target="_blank"
          rel="noreferrer"
          className="inline-flex w-fit rounded-full bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-indigo-700"
        >
          Open LinkedIn
        </a>
      </div>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        {contactItems.map((item) => (
          <div key={item.label} className="rounded-2xl border border-gray-200 bg-white p-4">
            <div className="text-[11px] uppercase tracking-widest text-gray-400">
              {item.label}
            </div>
            <div className="mt-2 text-sm font-semibold text-gray-800">{item.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function HomePage() {
  const [active, setActive] = useState<ViewKey>("home");

  return (
    <>
      <Header active={active} onChange={setActive} />

      <div className="min-h-screen bg-white/96 font-sans text-gray-900 flex flex-col">
        <main className="flex-1 px-4 pb-28 pt-24 sm:px-6 sm:pb-32 sm:pt-28">
          <div className="mx-auto flex min-h-[calc(100dvh-13rem)] w-full max-w-6xl items-stretch">
            <div className="relative flex min-h-full w-full overflow-hidden rounded-[2rem]">
              <AnimatePresence mode="wait">
                {active === "home" && (
                  <motion.div
                    key="home"
                    initial={motionVariants.home.initial}
                    animate={motionVariants.home.animate}
                    exit={motionVariants.home.exit}
                    transition={motionTransition.home}
                    className="flex w-full"
                  >
                    <div className="w-full">
                      <HomePanel />
                    </div>
                  </motion.div>
                )}

                {active === "experience" && (
                  <motion.div
                    key="experience"
                    initial={motionVariants.experience.initial}
                    animate={motionVariants.experience.animate}
                    exit={motionVariants.experience.exit}
                    transition={motionTransition.experience}
                    className="flex w-full"
                  >
                    <div className="w-full">
                      <ExperiencePanel />
                    </div>
                  </motion.div>
                )}

                {active === "works" && (
                  <motion.div
                    key="works"
                    initial={motionVariants.works.initial}
                    animate={motionVariants.works.animate}
                    exit={motionVariants.works.exit}
                    transition={motionTransition.works}
                    className="flex w-full"
                  >
                    <div className="w-full">
                      <WorksPanel />
                    </div>
                  </motion.div>
                )}

                {active === "contact" && (
                  <motion.div
                    key="contact"
                    initial={motionVariants.contact.initial}
                    animate={motionVariants.contact.animate}
                    exit={motionVariants.contact.exit}
                    transition={motionTransition.contact}
                    className="flex w-full"
                  >
                    <div className="w-full">
                      <ContactPanel />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

import Link from 'next/link'
import React from 'react'
import { Container } from '@/components/Container'
function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-cyan-200"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-24 pb-10">
      <Container.Outer>
        <div className="border-t border-white/10 pt-10 pb-8">
          <Container.Inner>
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex gap-6 text-sm font-medium text-zinc-300">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/experience">Experience</NavLink>
                <NavLink href="/contact">Contact</NavLink>
              </div>
              <p className="text-sm text-zinc-500">
                &copy; {new Date().getFullYear()} Muhammed Sahal K. All rights
                reserved.
              </p>
            </div>
          </Container.Inner>
        </div>
      </Container.Outer>
    </footer>
  )
}

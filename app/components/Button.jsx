import clsx from 'clsx'
import React from 'react'
const variantStyles = {
  primary:
    'border border-cyan-400/25 bg-gradient-to-r from-cyan-400/20 to-sky-400/20 font-semibold text-cyan-50 shadow-lg shadow-cyan-950/20 hover:border-cyan-300/40 hover:from-cyan-400/30 hover:to-sky-400/30 active:text-cyan-100/80',
  secondary:
    'border border-white/10 bg-white/10 font-medium text-zinc-100 shadow-lg shadow-black/10 hover:border-cyan-400/25 hover:bg-white/15 active:text-zinc-100/70',
}

export function Button({ variant = 'primary', className, href, ...props }) {
  className = clsx(
    'inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-sm outline-offset-2 backdrop-blur-xl transition active:transition-none',
    variantStyles[variant],
    className
  )

  return href ? (
    <a href={href} className={className} {...props} />
  ) : (
    <button className={className} {...props} />
  )
}

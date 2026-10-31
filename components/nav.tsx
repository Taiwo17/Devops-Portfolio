'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Github, Linkedin, Menu, X } from 'lucide-react'
import { nav, site } from '@/lib/site'
import Link from 'next/link'
export function Nav() {
  const [open, setOpen] = useState(false)
  return (
    <header className='sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur'>
      <div className='mx-auto flex h-16 max-w-6xl items-center justify-between px-5'>
        <Link href='/#home' className='font-mono text-sm text-white'>
          {site.short}
        </Link>
        <nav aria-label='Primary' className='hidden gap-6 md:flex'>
          {nav.map(([l, h]) => (
            <Link
              key={h}
              href={h}
              className='text-sm text-mute transition-colors hover:text-white'
            >
              {l}
            </Link>
          ))}
        </nav>
        <div className='flex items-center gap-3'>
          <Link
            href={site.github}
            aria-label='GitHub'
            className='hidden text-mute hover:text-white md:block'
          >
            <Github size={18} />
          </Link>
          {site.linkedin && (
            <Link
              href={site.linkedin}
              aria-label='LinkedIn'
              className='hidden text-mute hover:text-white md:block'
            >
              <Linkedin size={18} />
            </Link>
          )}
          <Link
            href='/#contact'
            className='bg-lime px-4 py-2 font-mono text-sm font-medium text-black transition-transform hover:-translate-y-0.5'
          >
            Let&apos;s Talk
          </Link>
          <button
            className='md:hidden'
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            aria-label='Mobile'
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className='overflow-hidden border-t border-line md:hidden'
          >
            {nav.map(([l, h]) => (
              <Link
                key={h}
                href={h}
                onClick={() => setOpen(false)}
                className='block border-b border-line px-5 py-4 text-white'
              >
                {l}
              </Link>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

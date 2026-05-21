'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: '/', labelEn: 'Home', labelPt: 'Início' },
    { href: '/about', labelEn: 'About', labelPt: 'Sobre' },
    { href: '/products', labelEn: 'Products', labelPt: 'Produtos' },
    { href: '/contact', labelEn: 'Contact', labelPt: 'Contacto' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-warm-white/90 backdrop-blur-sm border-b border-stone-200/50">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="font-display text-2xl md:text-3xl tracking-ultra text-charcoal hover:text-sage transition-colors">
          THE WILD SLICE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group text-sm tracking-widest uppercase"
            >
              <span className="text-charcoal group-hover:text-sage transition-colors">
                {link.labelEn}
              </span>
              <span className="text-light-grey mx-1.5">/</span>
              <span className="text-warm-grey group-hover:text-sage transition-colors">
                {link.labelPt}
              </span>
            </Link>
          ))}
        </nav>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-charcoal"
          aria-label="Toggle menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            {isOpen ? (
              <>
                <line x1="6" y1="6" x2="18" y2="18" />
                <line x1="18" y1="6" x2="6" y2="18" />
              </>
            ) : (
              <>
                <line x1="4" y1="8" x2="20" y2="8" />
                <line x1="4" y1="16" x2="20" y2="16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-warm-white border-t border-stone-200/50 px-6 py-8">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg tracking-widest uppercase"
              >
                <span className="text-charcoal">{link.labelEn}</span>
                <span className="text-light-grey mx-2">/</span>
                <span className="text-warm-grey">{link.labelPt}</span>
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  )
}

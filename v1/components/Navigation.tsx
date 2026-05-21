'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    
    // Check initial scroll position
    handleScroll()
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home / Início' },
    { href: '/about', label: 'About / Sobre' },
    { href: '/products', label: 'Products / Produtos' },
    { href: '/journal', label: 'Journal / Jornal' },
    { href: '/contact', label: 'Contact / Contacto' },
  ]

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/'
    return pathname.startsWith(href)
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-paper/90 backdrop-blur-sm border-b border-warm-grey/50 py-0' 
            : 'bg-transparent border-transparent py-2'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          {/* Burger — left */}
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-ink hover:text-sage transition-colors"
            aria-label="Toggle menu"
            whileTap={{ scale: 0.9 }}
          >
            <motion.svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              animate={isOpen ? "open" : "closed"}
            >
              <motion.line
                x1="4"
                y1="8"
                x2="20"
                y2="8"
                variants={{
                  closed: { rotate: 0, y: 0 },
                  open: { rotate: 45, y: 4 },
                }}
                transition={{ duration: 0.3 }}
              />
              <motion.line
                x1="4"
                y1="16"
                x2="20"
                y2="16"
                variants={{
                  closed: { rotate: 0, y: 0, opacity: 1 },
                  open: { rotate: -45, y: -4, opacity: 1 },
                }}
                transition={{ duration: 0.3 }}
              />
            </motion.svg>
          </motion.button>

          {/* Logo — centered */}
          <Link href="/" className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/images/logo-main.png"
            alt="The Wild Slice"
            width={168}
            height={56}
            className="h-11 w-auto object-contain"
            priority
          />
          </Link>

          {/* Order button — right */}
          <motion.a
            href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice.%20%2F%20Hi!%20I%27d%20like%20to%20know%20more%20about%20The%20Wild%20Slice%20packs."
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 bg-sage text-warm-white px-5 py-2.5 text-xs tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Order
            <span className="text-warm-white/70 font-normal">/ Encomendar</span>
          </motion.a>

          {/* Mobile order icon */}
          <a
            href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice."
            target="_blank"
            rel="noopener noreferrer"
            className="md:hidden p-2 text-ink hover:text-sage transition-colors"
            aria-label="Order via WhatsApp"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.529 5.853L.057 23.535a.5.5 0 0 0 .609.64l5.91-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.188-1.432l-.372-.22-3.857.977.997-3.738-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
          </a>
        </div>
      </header>

      {/* Slide-in Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-ink/40 backdrop-blur-sm z-[49]"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed top-0 left-0 bottom-0 w-[85vw] max-w-sm bg-paper z-[50] shadow-2xl"
            >
              <div className="p-6 pt-24">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((link, i) => (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4 }}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className={`block py-3 text-lg tracking-widest uppercase transition-colors border-b border-warm-grey/20 ${
                          isActive(link.href)
                            ? 'text-sage'
                            : 'text-ink hover:text-sage'
                        }`}
                      >
                        {link.label}
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.4 }}
                  className="mt-8"
                >
                  <a
                    href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-sage text-warm-white px-6 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors"
                  >
                    Order / Encomendar
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7, duration: 0.4 }}
                  className="mt-12"
                >
                  <p className="font-mono text-xs text-stone tracking-widest uppercase mb-2">
                    Follow / Seguir
                  </p>
                  <a
                    href="https://instagram.com/thewildslice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-sage transition-colors text-sm"
                  >
                    Instagram @thewildslice
                  </a>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

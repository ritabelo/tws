"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const WHATSAPP_URL =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice.%20%2F%20Hi!%20I%27d%20like%20to%20know%20more%20about%20The%20Wild%20Slice%20packs.";

const navLinks = [
  { href: "#about", en: "A Wild Slice", pt: "Um Wild Slice" },
  { href: "#products", en: "Products", pt: "Produtos" },
  { href: "#journal", en: "Journal", pt: "Jornal" },
  { href: "#find-us", en: "Find Us", pt: "Onde Estamos" },
  { href: "#contact", en: "Contact", pt: "Contacto" },
];

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-paper/95 backdrop-blur-sm border-b border-warm-grey">
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 flex-shrink-0">
          <Image
            src="/images/logo-tws.png"
            alt="The Wild Slice"
            width={44}
            height={44}
            className="w-9 h-9 object-contain"
          />
          <span
            className="text-xs tracking-[0.2em] uppercase text-stone font-[family-name:var(--font-suse)] hidden sm:block"
          >
            The Wild Slice
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="text-xs tracking-[0.15em] uppercase text-stone hover:text-ink transition-colors duration-200 font-[family-name:var(--font-mulish)]"
              >
                {link.en}
              </Link>
            </li>
          ))}
        </ul>

        {/* WhatsApp CTA */}
        <div className="flex items-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:flex items-center gap-2 bg-sage text-paper text-xs tracking-[0.12em] uppercase px-4 py-2.5 hover:bg-ink transition-colors duration-200 font-[family-name:var(--font-mulish)] font-bold"
          >
            <WhatsAppIcon />
            Encomendar
          </a>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden text-ink p-1"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden bg-paper border-t border-warm-grey px-6 py-6">
          <ul className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="block text-sm tracking-[0.15em] uppercase text-stone hover:text-ink transition-colors font-[family-name:var(--font-mulish)]"
                >
                  {link.en}{" "}
                  <span className="text-kraft italic normal-case tracking-normal">
                    / {link.pt}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 flex items-center justify-center gap-2 bg-sage text-paper text-sm tracking-[0.12em] uppercase px-4 py-3 font-[family-name:var(--font-mulish)] font-bold w-full"
          >
            <WhatsAppIcon />
            Encomendar via WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}

function WhatsAppIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.529 5.853L.057 23.535a.5.5 0 0 0 .609.64l5.91-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.188-1.432l-.372-.22-3.857.977.997-3.738-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
    </svg>
  );
}

function MenuIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-6 h-6"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
    </svg>
  );
}

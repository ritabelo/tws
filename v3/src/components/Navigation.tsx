import Link from "next/link";

export default function Navigation() {
  return (
    <header className="fixed top-0 w-full bg-brand-offwhite/90 backdrop-blur-sm z-50 border-b border-brand-stone/30">
      <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
        <Link href="/" className="font-display text-2xl tracking-widest uppercase">
          The Wild Slice
        </Link>
        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <Link href="/about" className="hover:text-brand-sage transition-colors">About</Link>
          <Link href="/products" className="hover:text-brand-sage transition-colors">Products</Link>
          <Link href="/how-to-use" className="hover:text-brand-sage transition-colors">How to Use</Link>
          <Link href="/journal" className="hover:text-brand-sage transition-colors">Journal</Link>
          <Link href="/contact" className="hover:text-brand-sage transition-colors">Contact</Link>
        </nav>
        <div className="flex gap-4">
          <a 
            href="https://wa.me/1234567890" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hidden md:block bg-brand-sage text-white px-6 py-2 rounded-full text-sm font-medium tracking-wide hover:bg-brand-sage/90 transition-colors"
          >
            Order / Encomendar
          </a>
        </div>
      </div>
    </header>
  );
}
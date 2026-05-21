import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal text-brand-offwhite py-16 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="font-display text-3xl tracking-widest uppercase mb-4 block">
            The Wild Slice
          </Link>
          <p className="text-brand-stone/80 text-sm max-w-sm">
            Handmade dog nutrition from Lisboa. Natural feeding made simple. 
            <br/><br/>
            Nutrição canina artesanal. Alimentação natural, simplificada.
          </p>
        </div>
        
        <div>
          <h4 className="font-display text-xl mb-4 text-brand-sage">Navigation</h4>
          <ul className="space-y-2 text-sm text-brand-stone/80">
            <li><Link href="/about" className="hover:text-white transition-colors">A Wild Slice (About)</Link></li>
            <li><Link href="/products" className="hover:text-white transition-colors">Products / Produtos</Link></li>
            <li><Link href="/how-to-use" className="hover:text-white transition-colors">How to Use / Como Usar</Link></li>
            <li><Link href="/journal" className="hover:text-white transition-colors">Journal / Jornal</Link></li>
            <li><Link href="/contact" className="hover:text-white transition-colors">Contact / Contacto</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl mb-4 text-brand-sage">Connect</h4>
          <ul className="space-y-2 text-sm text-brand-stone/80">
            <li>
              <a href="https://instagram.com/thewildslice" target="_blank" className="hover:text-white transition-colors">Instagram</a>
            </li>
            <li>
              <a href="https://wa.me/1234567890" target="_blank" className="hover:text-white transition-colors">WhatsApp</a>
            </li>
            <li className="pt-4">
              <span className="block text-white font-medium mb-1">Pickup Location:</span>
              Partner Butcher Shop<br/>
              Lisboa, Portugal
            </li>
          </ul>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-brand-stone/20 text-xs text-brand-stone/60 flex justify-between">
        <p>&copy; {new Date().getFullYear()} The Wild Slice. All rights reserved.</p>
        <p>Built with love from Portugal.</p>
      </div>
    </footer>
  );
}
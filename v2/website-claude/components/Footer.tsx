import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-warm-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl tracking-ultra mb-4">
              THE WILD SLICE
            </h3>
            <p className="text-sm text-light-grey leading-relaxed">
              Handmade dog nutrition from Lisboa.
              <br />
              Nutrição canina artesanal de Lisboa.
            </p>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-light-grey mb-4">
              Connect / Ligação
            </h4>
            <div className="flex flex-col gap-3">
              <a
                href="https://instagram.com/thewildslice"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-sage transition-colors"
              >
                Instagram @thewildslice
              </a>
              <a
                href="#"
                className="text-sm hover:text-sage transition-colors"
              >
                WhatsApp — coming soon / em breve
              </a>
            </div>
          </div>

          {/* Location */}
          <div>
            <h4 className="font-mono text-xs tracking-widest uppercase text-light-grey mb-4">
              Pickup / Levantamento
            </h4>
            <p className="text-sm text-light-grey leading-relaxed">
              Corte Fino Talho
              <br />
              Lisboa, Portugal
              <br />
              <span className="text-warm-white">By appointment / Marcação prévia</span>
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-warm-grey/20 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="font-mono text-xs text-light-grey">
            © 2026 THE WILD SLICE. All rights reserved.
          </p>
          <p className="font-mono text-xs text-light-grey">
            Feito em pequenos lotes no talho local.
          </p>
        </div>
      </div>
    </footer>
  )
}

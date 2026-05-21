import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import BilingualBlock from '@/components/BilingualBlock'

export default function Contact() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
              Contact / Contacto
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-4 max-w-4xl">
              Let's talk about your dog.
            </h1>
            <p className="text-warm-grey text-lg">
              Vamos falar sobre o seu cão.
            </p>
          </div>
        </section>

        {/* CONTACT METHODS */}
        <section className="py-24 bg-stone-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {/* WhatsApp */}
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2">WhatsApp</h3>
                <p className="text-warm-grey text-sm mb-4">
                  The fastest way to order or ask questions.
                  <br />
                  <span className="italic">A forma mais rápida de encomendar ou perguntar.</span>
                </p>
                <p className="font-mono text-xs text-light-grey mb-4">
                  Coming soon / Em breve
                </p>
                <WhatsAppButton
                  label="Message us"
                  labelPt="Fale connosco"
                />
              </div>

              {/* Instagram */}
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="5" />
                    <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2">Instagram</h3>
                <p className="text-warm-grey text-sm mb-4">
                  DM us for orders and behind-the-scenes.
                  <br />
                  <span className="italic">Envie DM para encomendas e bastidores.</span>
                </p>
                <a
                  href="https://instagram.com/thewildslice"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block border border-charcoal text-charcoal px-6 py-3 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-warm-white transition-colors"
                >
                  @thewildslice
                </a>
              </div>

              {/* Email */}
              <div className="text-center">
                <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2">Email</h3>
                <p className="text-warm-grey text-sm mb-4">
                  For non-urgent questions and collaborations.
                  <br />
                  <span className="italic">Para questões não urgentes e colaborações.</span>
                </p>
                <p className="font-mono text-xs text-light-grey">
                  hello@thewildslice.pt
                  <br />
                  <span className="italic">Em breve</span>
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* PICKUP INFO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-charcoal">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
                  Pickup / Levantamento
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
                  Corte Fino Talho.
                </h2>
                <p className="text-charcoal leading-relaxed mb-4">
                  Orders can be picked up at our partner butcher shop in Lisboa. We prepare fresh batches weekly — your pack will be ready within 2–3 days of ordering.
                </p>
                <p className="text-charcoal leading-relaxed">
                  We reply within 24 hours. If you don't hear back, send us a follow-up — we want to make sure every dog gets the right nutrition.
                </p>
              </div>
              <div className="text-warm-grey md:border-l md:pl-12 border-stone-200/60">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6 opacity-0 md:opacity-100">
                  .
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-warm-grey mb-6">
                  Corte Fino Talho.
                </h2>
                <p className="text-warm-grey leading-relaxed mb-4">
                  As encomendas podem ser levantadas no nosso talho parceiro em Lisboa. Preparamos lotes frescos semanalmente — o seu pack estará pronto dentro de 2–3 dias após a encomenda.
                </p>
                <p className="text-warm-grey leading-relaxed">
                  Respondemos dentro de 24 horas. Se não tiver notícias, envie-nos um lembrete — queremos garantir que cada cão recebe a nutrição certa.
                </p>
              </div>
            </div>

            <div className="mt-12 bg-stone-bg p-8 text-center">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-2">
                Response time / Tempo de resposta
              </p>
              <p className="font-display text-3xl text-charcoal">
                Within 24 hours / Dentro de 24 horas
              </p>
            </div>
          </div>
        </section>

        {/* STICKY WHATSAPP CTA (MOBILE) */}
        <div className="fixed bottom-0 left-0 right-0 bg-warm-white border-t border-stone-200/50 p-4 md:hidden z-40">
          <WhatsAppButton
            className="w-full"
            label="Order via WhatsApp"
            labelPt="Encomendar via WhatsApp"
          />
        </div>
      </main>

      <Footer />
    </>
  )
}
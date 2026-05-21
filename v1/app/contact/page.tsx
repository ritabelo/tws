import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { ImageZoom } from "@/components/animations/HoverEffects";

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-24 lg:py-32 bg-cream/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                Contact / Contacto
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-ink mb-4 leading-tight">
                Let's talk.
              </h1>
              <p className="text-stone text-lg">Vamos conversar.</p>
            </FadeIn>
          </div>
        </section>

        {/* Contact Options */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-24" staggerDelay={0.15}>
              {/* WhatsApp */}
              <StaggerItem>
                <div className="border border-warm-grey/50 p-8 lg:p-10 text-center hover:border-sage transition-colors duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-sage">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                      <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.529 5.853L.057 23.535a.5.5 0 0 0 .609.64l5.91-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.188-1.432l-.372-.22-3.857.977.997-3.738-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">WhatsApp</h3>
                  <p className="text-stone text-sm mb-6">A forma mais rápida de falar connosco.</p>
                  <a
                    href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-sage text-warm-white px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                  >
                    Message Us / Mensagem
                  </a>
                </div>
              </StaggerItem>

              {/* Instagram */}
              <StaggerItem>
                <div className="border border-warm-grey/50 p-8 lg:p-10 text-center hover:border-sage transition-colors duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sage">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">Instagram</h3>
                  <p className="text-stone text-sm mb-6">Daily updates & behind the scenes.</p>
                  <a
                    href="https://instagram.com/thewildslice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                  >
                    @thewildslice
                  </a>
                </div>
              </StaggerItem>

              {/* Email */}
              <StaggerItem>
                <div className="border border-warm-grey/50 p-8 lg:p-10 text-center hover:border-sage transition-colors duration-300 group">
                  <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mx-auto mb-6 group-hover:bg-sage/30 transition-colors duration-300">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 text-sage">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-ink mb-2">Email</h3>
                  <p className="text-stone text-sm mb-6">For partnerships & press.</p>
                  <a
                    href="mailto:hello@thewildslice.pt"
                    className="inline-flex items-center gap-2 border border-ink text-ink px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                  >
                    hello@thewildslice.pt
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>

            {/* Location / Pickup */}
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn direction="up">
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                    Pickup / Levantamento
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
                    Come find us.
                  </h2>
                  <p className="text-stone text-lg mb-2">Venha encontrar-nos.</p>
                  <div className="space-y-6 mt-8">
                    <div>
                      <h4 className="font-display text-xl text-ink mb-2">Corte Fino Talho</h4>
                      <p className="text-stone leading-relaxed">
                        Rua Example, 123
                        <br />
                        Lisboa, Portugal
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-ink mb-2">Hours / Horário</h4>
                      <p className="text-stone leading-relaxed">
                        Tuesday – Saturday
                        <br />
                        10:00 – 19:00
                      </p>
                    </div>
                    <div>
                      <h4 className="font-display text-xl text-ink mb-2">By Appointment</h4>
                      <p className="text-stone leading-relaxed">
                        We recommend messaging us before pickup so we can have your order ready.
                      </p>
                      <p className="text-light-grey text-sm italic mt-1">
                        Recomendamos enviar uma mensagem antes do levantamento para termos a sua encomenda pronta.
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="relative aspect-[4/3] md:aspect-auto overflow-hidden">
                  <ImageZoom className="w-full h-full">
                    <Image
                      src="/images/L1006575.JPG"
                      alt="Corte Fino butcher shop in Lisboa"
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* FAQ Teaser */}
        <section className="py-24 lg:py-32 bg-cream/20">
          <div className="max-w-4xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  FAQ / Perguntas Frequentes
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-ink">
                  Common questions.
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="space-y-8" staggerDelay={0.1}>
              {[
                {
                  q: "How long do the snacks last?",
                  qPt: "Quanto tempo duram os petiscos?",
                  a: "Our dehydrated snacks are shelf-stable for 3 months when kept in a cool, dry place. For maximum freshness, we recommend consuming within 6 weeks of opening.",
                  aPt: "Os nossos petiscos desidratados são estáveis em prateleira por 3 meses quando guardados num local fresco e seco. Para máxima frescura, recomendamos consumir dentro de 6 semanas após abrir.",
                },
                {
                  q: "Do you deliver?",
                  qPt: "Fazem entregas?",
                  a: "Currently we offer pickup at Corte Fino in Lisboa. We're exploring delivery options for the greater Lisboa area — message us on WhatsApp to check availability.",
                  aPt: "Actualmente oferecemos levantamento no Corte Fino em Lisboa. Estamos a explorar opções de entrega para a grande área de Lisboa — envie-nos uma mensagem no WhatsApp para verificar disponibilidade.",
                },
                {
                  q: "Can I mix and match packs?",
                  qPt: "Posso misturar packs?",
                  a: "Absolutely. Mix any 3 snack packs for €30, or combine snacks with broth for a complete starter kit. We'll help you build the perfect order for your dog.",
                  aPt: "Com certeza. Misture 3 packs de petiscos por €30, ou combine petiscos com caldo para um kit de iniciação completo. Ajudamo-lo a construir a encomenda perfeita para o seu cão.",
                },
                {
                  q: "Are your products suitable for puppies?",
                  qPt: "Os vossos produtos são adequados para cachorros?",
                  a: "Yes, but we recommend breaking the snacks into smaller pieces for puppies under 6 months. The bone broth is excellent for all ages as a meal topper.",
                  aPt: "Sim, mas recomendamos partir os petiscos em pedaços mais pequenos para cachorros com menos de 6 meses. O caldo de ossos é excelente para todas as idades como topper.",
                },
              ].map((faq, i) => (
                <StaggerItem key={i}>
                  <div className="border-b border-warm-grey/50 pb-8">
                    <h3 className="font-display text-xl text-ink mb-1">{faq.q}</h3>
                    <p className="text-stone text-sm italic mb-4">{faq.qPt}</p>
                    <p className="text-ink/80 leading-relaxed mb-2">{faq.a}</p>
                    <p className="text-light-grey text-sm italic">{faq.aPt}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-sage-light/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-display text-5xl md:text-6xl text-ink mb-4">
                Still have questions?
              </h2>
              <p className="text-stone text-lg mb-2">Ainda tem dúvidas?</p>
              <p className="text-ink leading-relaxed mb-10 max-w-2xl mx-auto">
                Every question is welcome. We're here to help you make the best choice for your dog.
              </p>
              <a
                href="https://wa.me/351000000000?text=Ol%C3%A1!%20Tenho%20algumas%20d%C3%BAvidas%20sobre%20os%20produtos%20The%20Wild%20Slice."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
              >
                Ask us anything / Pergunte-nos
              </a>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

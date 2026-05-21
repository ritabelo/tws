import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import PhilosophyStrip from '@/components/PhilosophyStrip'
import FeaturedProducts from '@/components/FeaturedProducts'
import Testimonials from '@/components/Testimonials'
import InstagramStrip from '@/components/InstagramStrip'
import Footer from '@/components/Footer'
import FadeIn from '@/components/animations/FadeIn'
import StaggerContainer, { StaggerItem } from '@/components/animations/StaggerContainer'
import { ImageZoom } from '@/components/animations/HoverEffects'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <PhilosophyStrip />
        <FeaturedProducts />

        {/* Dark Featured Section */}
        <section className="py-24 lg:py-32 bg-ink text-warm-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <FadeIn direction="left">
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                    New Batch / Novo Lote
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-[0.9]">
                    Fresh from
                    <br />
                    <span className="italic text-sage">the butcher.</span>
                  </h2>
                  <p className="text-lg leading-relaxed text-warm-grey mb-4 max-w-lg">
                    Every batch is made fresh at Corte Fino, our partner butcher in Lisboa. We use cuts that would otherwise go to waste, transforming them into nutrient-dense snacks and broths.
                  </p>
                  <p className="text-base italic text-light-grey mb-10 max-w-lg">
                    Cada lote é feito fresco no Corte Fino, o nosso talho parceiro em Lisboa. Usamos cortes que de outra forma seriam desperdiçados, transformando-os em petiscos e caldos ricos em nutrientes.
                  </p>
                  <a
                    href="/products"
                    className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-warm-white hover:text-ink transition-colors duration-300"
                  >
                    Explore Products
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </FadeIn>
              
              <StaggerContainer className="grid grid-cols-2 gap-4" staggerDelay={0.15}>
                {[
                  '/images/L1006525.JPG',
                  '/images/L1006527.JPG',
                  '/images/L1006536.JPG',
                  '/images/L1006537.JPG',
                ].map((src, i) => (
                  <StaggerItem key={i}>
                    <ImageZoom className="relative aspect-square overflow-hidden">
                      <Image
                        src={src}
                        alt={`Process step ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    </ImageZoom>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* Process / Trust Strip */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn direction="up">
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                    The Process / O Processo
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl text-ink mb-8 leading-[0.9]">
                    From the
                    <br />
                    <span className="italic">butcher to</span>
                    <br />
                    your dog's bowl.
                  </h2>
                  <p className="text-lg leading-relaxed text-stone mb-4">
                    Every batch starts at Corte Fino, our partner butcher shop in Lisboa. We select cuts that would otherwise go to waste and transform them into nutrient-dense snacks and broths through slow dehydration and gentle simmering.
                  </p>
                </div>
              </FadeIn>
              <FadeIn direction="up" delay={0.2}>
                <div className="md:border-l border-warm-grey/60 md:pl-12 lg:pl-20">
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6 opacity-0 md:opacity-100">
                    .
                  </p>
                  <h2 className="font-display text-5xl md:text-6xl mb-8 text-ink leading-[0.9]">
                    Do talho
                    <br />
                    <span className="italic text-stone">à tigela</span>
                    <br />
                    do seu cão.
                  </h2>
                  <p className="text-lg leading-relaxed text-stone">
                    Cada lote começa no Corte Fino, o nosso talho parceiro em Lisboa. Selecionamos cortes que de outra forma seriam desperdiçados e transformamo-los em petiscos e caldos ricos em nutrientes através de desidratação lenta e cozedura suave.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        <Testimonials />
        <InstagramStrip />

        {/* CTA Section */}
        <section className="py-24 lg:py-32 bg-sage-light/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-display text-5xl md:text-6xl text-ink mb-4">
                Ready to start?
              </h2>
              <p className="text-stone text-lg mb-2">Pronto para começar?</p>
              <p className="text-ink leading-relaxed mb-8 max-w-2xl mx-auto">
                Every order is a conversation. We help you choose the right pack for your dog's size, age, and current diet — no guesswork, no overwhelm.
              </p>
              <p className="text-light-grey text-sm italic mb-12 max-w-2xl mx-auto">
                Cada encomenda é uma conversa. Ajudamo-lo a escolher o pack certo para o tamanho, idade e dieta atual do seu cão — sem adivinhações, sem complicações.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                >
                  Order via WhatsApp
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                >
                  Explore products
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  )
}

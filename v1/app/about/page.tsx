import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { ImageZoom } from "@/components/animations/HoverEffects";

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Hero Header */}
        <section className="relative min-h-[60vh] flex items-center justify-center bg-ink overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/L1006574.JPG"
              alt="The Wild Slice process"
              fill
              className="object-cover opacity-40"
              priority
            />
          </div>
          <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                About / Sobre
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-paper mb-4 leading-tight">
                A Wild Slice.
              </h1>
              <p className="font-display text-3xl md:text-4xl text-paper/60 italic">
                Uma fatia selvagem.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* Origin Story */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageZoom className="w-full h-full">
                    <Image
                      src="/images/L1006555.JPG"
                      alt="Fresh cuts at Corte Fino"
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                    The Origin / A Origem
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
                    It started at the butcher.
                  </h2>
                  <p className="text-stone text-lg leading-relaxed mb-6">
                    The Wild Slice was born from a simple observation: the best cuts at our local butcher, were going home with humans, while the trimmings and off-cuts were being discarded. We saw an opportunity to turn what would be waste into something purposeful, nutritious, and honest.
                  </p>
                  <p className="text-light-grey italic leading-relaxed mb-6">
                    The Wild Slice nasceu de uma observação simples: os melhores cortes no nosso talho local, iam para casa com os humanos, enquanto os cortes secundários eram descartados. Vimos uma oportunidade para transformar o que seria desperdício em algo propositado, nutritivo e honesto.
                  </p>
                  <p className="text-ink leading-relaxed">
                    Every batch still starts there. We know the butcher. We know the source of every cut. And we believe that transparency is the foundation of trust — especially when it comes to what we feed our dogs.
                  </p>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section className="py-24 lg:py-32 bg-cream/50">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  Philosophy / Filosofia
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-ink">
                  Why we exist.
                </h2>
                <p className="text-stone text-lg mt-4">Por que razão existimos.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-12 lg:gap-16" staggerDelay={0.15}>
              {[
                {
                  num: "01",
                  en: {
                    title: "Human-grade ingredients",
                    body: "Every cut comes from our local butcher, Corte Fino. What goes into your dog's bowl is the same quality you'd find at the counter.",
                  },
                  pt: {
                    title: "Ingredientes de qualidade humana",
                    body: "Cada corte vem do nosso talho local, o Corte Fino. O que entra na tigela do teu cão é a mesma qualidade que encontras no balcão.",
                  },
                },
                {
                  num: "02",
                  en: {
                    title: "Small batches, traced to source",
                    body: "We make limited runs so we can know exactly what's in each pack — the animal, the cut, the date. No fillers. No guessing.",
                  },
                  pt: {
                    title: "Pequenos lotes, com rastreabilidade",
                    body: "Fazemos produções limitadas para saber exactamente o que está em cada pack — o animal, o corte, a data. Sem aditivos. Sem adivinhas.",
                  },
                },
                {
                  num: "03",
                  en: {
                    title: "Natural feeding made simple",
                    body: "Raw feeding doesn't have to be all or nothing. Start with a pack as a topper or snack. Build from there. One small slice at a time.",
                  },
                  pt: {
                    title: "Alimentação natural simplificada",
                    body: "Alimentar de forma natural não tem de ser tudo ou nada. Começa com um pack como topper ou petisco. Constrói a partir daí. Um pequeno slice de cada vez.",
                  },
                },
              ].map((pillar) => (
                <StaggerItem key={pillar.num}>
                  <div className="flex flex-col">
                    <span className="font-mono text-xs text-sage tracking-[0.3em] mb-6">
                      [{pillar.num}]
                    </span>
                    <div className="h-px bg-sage/40 mb-6" />
                    <h3 className="font-display text-ink text-2xl mb-3 leading-tight">
                      {pillar.en.title}
                    </h3>
                    <p className="font-sans text-ink/70 text-sm leading-relaxed mb-6">
                      {pillar.en.body}
                    </p>
                    <h3 className="font-display text-stone text-xl mb-2 leading-tight italic">
                      {pillar.pt.title}
                    </h3>
                    <p className="font-sans text-stone/70 text-sm leading-relaxed italic">
                      {pillar.pt.body}
                    </p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="mt-20 lg:mt-24 border-t border-sage/30 pt-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <blockquote className="font-display text-ink text-3xl sm:text-4xl leading-tight">
                    "Feeding better doesn't have to be all or nothing."
                  </blockquote>
                  <blockquote className="font-display text-stone text-2xl sm:text-3xl leading-tight italic self-end">
                    "Alimentar melhor não tem de ser tudo ou nada."
                  </blockquote>
                </div>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  The Process / O Processo
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-ink">
                  From the butcher to your dog's bowl.
                </h2>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8" staggerDelay={0.12}>
              {[
                {
                  step: "01",
                  en: "Selection",
                  pt: "Selecção",
                  desc: "We hand-pick cuts from Corte Fino — organs, trimmings, and off-cuts that would otherwise go to waste.",
                  descPt: "Seleccionamos cortes do Corte Fino — vísceras, aparas e cortes secundários que de outra forma seriam desperdiçados.",
                  image: "/images/L1006560.JPG",
                },
                {
                  step: "02",
                  en: "Preparation",
                  pt: "Preparação",
                  desc: "Each piece is cleaned, trimmed, and prepared by hand in small batches at our kitchen in Lisboa.",
                  descPt: "Cada peça é limpa, aparada e preparada à mão em pequenos lotes na nossa cozinha em Lisboa.",
                  image: "/images/L1006563.JPG",
                },
                {
                  step: "03",
                  en: "Dehydration",
                  pt: "Desidratação",
                  desc: "Slow air-drying at low temperature preserves nutrients and creates that satisfying crunch dogs love.",
                  descPt: "Secagem lenta a baixa temperatura preserva os nutrientes e cria aquela crocância satisfatória que os cães adoram.",
                  image: "/images/L1006567.JPG",
                },
                {
                  step: "04",
                  en: "Packaging",
                  pt: "Embalagem",
                  desc: "Vacuum-sealed in eco-friendly packs with full traceability — batch number, date, and source.",
                  descPt: "Selado a vácuo em embalagens eco-friendly com rastreabilidade completa — número de lote, data e origem.",
                  image: "/images/L1006569.JPG",
                },
              ].map((item) => (
                <StaggerItem key={item.step}>
                  <div className="group">
                    <ImageZoom className="relative aspect-square overflow-hidden mb-6">
                      <Image
                        src={item.image}
                        alt={item.en}
                        fill
                        className="object-cover"
                      />
                    </ImageZoom>
                    <span className="font-mono text-xs text-sage tracking-[0.3em] mb-2 block">
                      [{item.step}]
                    </span>
                    <h3 className="font-display text-2xl text-ink mb-1">{item.en}</h3>
                    <p className="text-stone text-sm italic mb-3">{item.pt}</p>
                    <p className="text-ink/70 text-sm leading-relaxed mb-2">{item.desc}</p>
                    <p className="text-stone/70 text-sm leading-relaxed italic">{item.descPt}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Values / Commitment */}
        <section className="py-24 lg:py-32 bg-ink text-warm-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
              <FadeIn direction="up">
                <div>
                  <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                    Our Commitment / O Nosso Compromisso
                  </p>
                  <h2 className="font-display text-4xl md:text-5xl mb-8 leading-tight">
                    Built with care, delivered with trust.
                  </h2>
                  <p className="text-warm-grey leading-relaxed mb-6">
                    We believe that better nutrition shouldn't be complicated or expensive. Every decision we make is guided by three principles: transparency, quality, and respect for the animal.
                  </p>
                  <p className="text-light-grey italic leading-relaxed">
                    Acreditamos que uma nutrição melhor não deve ser complicada ou cara. Cada decisão que tomamos é guiada por três princípios: transparência, qualidade e respeito pelo animal.
                  </p>
                </div>
              </FadeIn>
              <StaggerContainer className="grid grid-cols-2 gap-6" staggerDelay={0.1}>
                {[
                  { num: '0%', label: 'Fillers or preservatives', labelPt: 'Aditivos ou conservantes' },
                  { num: '100%', label: 'Human-grade sources', labelPt: 'Qualidade humana' },
                  { num: '24h', label: 'From butcher to pack', labelPt: 'Do talho ao pack' },
                  { num: '∞', label: 'Love per batch', labelPt: 'Amor por lote' },
                ].map((stat) => (
                  <StaggerItem key={stat.num}>
                    <div className="border border-warm-grey/20 p-6 hover:border-sage/40 transition-colors duration-300">
                      <span className="font-display text-4xl text-sage mb-2 block">{stat.num}</span>
                      <p className="text-sm text-warm-grey">{stat.label}</p>
                      <p className="text-xs text-light-grey italic">{stat.labelPt}</p>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 lg:py-32 bg-sage-light/20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <h2 className="font-display text-5xl md:text-6xl text-ink mb-4">
                Want to learn more?
              </h2>
              <p className="text-stone text-lg mb-2">Quer saber mais?</p>
              <p className="text-ink leading-relaxed mb-10 max-w-2xl mx-auto">
                Every order starts with a conversation. Tell us about your dog and we'll help you choose the right pack.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                >
                  Start a conversation
                </a>
                <a
                  href="/products"
                  className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                >
                  See the products
                </a>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

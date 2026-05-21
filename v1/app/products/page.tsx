import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { ImageZoom } from "@/components/animations/HoverEffects";

export default function ProductsPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-24 lg:py-32 bg-cream/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                Products / Produtos
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-ink mb-4 leading-tight">
                Two ways to feed better.
              </h1>
              <p className="text-stone text-lg">Duas formas de alimentar melhor.</p>
            </FadeIn>
          </div>
        </section>

        {/* Snack Packs */}
        <section className="py-24 lg:py-32" id="snack-packs">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="up" className="order-2 md:order-1">
                <div>
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
                    Dehydrated Snacks / Petiscos Desidratados
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
                    Snack Packs.
                  </h2>
                  <p className="text-stone text-lg mb-2">Packs de Petiscos.</p>
                  <p className="text-ink leading-relaxed mb-6">
                    Dehydrated meat and fish, slowly air-dried at low temperature. Each 150g pack starts from over 600g of fresh, human-grade cuts. The result is a nutrient-dense, shelf-stable snack that dogs genuinely love.
                  </p>
                  <p className="text-light-grey italic leading-relaxed mb-8">
                    Carne e peixe desidratados lentamente a baixa temperatura. Cada pack de 150g resulta de mais de 600g de cortes frescos de qualidade humana. O resultado é um petisco rico em nutrientes, estável em prateleira, que os cães adoram.
                  </p>

                  <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                    {[
                      { num: '01', en: 'Beef & Liver Mix', pt: 'Mistura de Bovino e Fígado', size: '150g' },
                      { num: '02', en: 'Chicken Hearts', pt: 'Corações de Frango', size: '150g' },
                      { num: '03', en: 'Fish & Sea Mix', pt: 'Mistura de Peixe', size: '150g' },
                    ].map((item) => (
                      <StaggerItem key={item.num}>
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs text-sage mt-1">{item.num}</span>
                          <div>
                            <h4 className="font-display text-lg text-ink">{item.en}</h4>
                            <p className="text-stone text-sm">{item.pt} — {item.size}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/351000000000?text=Ol%C3%A1!%20Quero%20encomendar%20os%20Snack%20Packs%20The%20Wild%20Slice."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                    >
                      Order / Encomendar
                    </a>
                    <a
                      href="/how-to-use"
                      className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                    >
                      How to Use
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2} className="order-1 md:order-2">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageZoom className="w-full h-full">
                    <Image
                      src="/images/L1006542.JPG"
                      alt="Snack Packs — dehydrated meat and fish"
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Bone Broth */}
        <section className="py-24 lg:py-32 bg-cream/30" id="bone-broth">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="up">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <ImageZoom className="w-full h-full">
                    <Image
                      src="/images/L1006533.JPG"
                      alt="Bone Broth — collagen-rich broth"
                      fill
                      className="object-cover"
                    />
                  </ImageZoom>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div>
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
                    Bone Broth / Caldo de Ossos
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-ink mb-6 leading-tight">
                    Bone Broth.
                  </h2>
                  <p className="text-stone text-lg mb-2">Caldo de Ossos.</p>
                  <p className="text-ink leading-relaxed mb-6">
                    Collagen-forward broth, slowly simmered from marrow and knuckle bones. A gentle way to add hydration, nutrients, and flavour to any meal. Pour it over kibble, mix it with fresh ingredients, or serve it as a warming treat.
                  </p>
                  <p className="text-light-grey italic leading-relaxed mb-8">
                    Caldo rico em colagénio, cozido lentamente a partir de ossos de tutano e jarrete. Uma forma suave de adicionar hidratação, nutrientes e sabor a qualquer refeição. Verta sobre o kibble, misture com ingredientes frescos, ou sirva como um petisco reconfortante.
                  </p>

                  <StaggerContainer className="space-y-4 mb-8" staggerDelay={0.1}>
                    {[
                      { num: '01', en: 'Classic Bone Broth', pt: 'Caldo Clássico', size: '300ml / 600ml' },
                      { num: '02', en: 'Beef Marrow Blend', pt: 'Mistura de Tutano', size: '300ml / 600ml' },
                    ].map((item) => (
                      <StaggerItem key={item.num}>
                        <div className="flex items-start gap-4">
                          <span className="font-mono text-xs text-sage mt-1">{item.num}</span>
                          <div>
                            <h4 className="font-display text-lg text-ink">{item.en}</h4>
                            <p className="text-stone text-sm">{item.pt} — {item.size}</p>
                          </div>
                        </div>
                      </StaggerItem>
                    ))}
                  </StaggerContainer>

                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/351000000000?text=Ol%C3%A1!%20Quero%20encomendar%20o%20Bone%20Broth%20The%20Wild%20Slice."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                    >
                      Order / Encomendar
                    </a>
                    <a
                      href="/how-to-use"
                      className="inline-flex items-center gap-2 border border-ink text-ink px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-ink hover:text-warm-white transition-colors duration-300"
                    >
                      How to Use
                    </a>
                  </div>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* How It Works / Feeding Guide */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  How to Use / Como Usar
                </p>
                <h2 className="font-display text-5xl md:text-6xl text-ink mb-4">
                  Not all at once.
                </h2>
                <p className="text-stone text-lg">Não tudo de uma vez.</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
              {[
                {
                  day: 'Day 1–3',
                  dayPt: 'Dia 1–3',
                  title: 'As a topper',
                  titlePt: 'Como topper',
                  desc: "Sprinkle over your dog's regular food. A small introduction to new textures and flavours.",
                  descPt: 'Espalhe sobre a comida habitual do seu cão. Uma pequena introdução a novas texturas e sabores.',
                },
                {
                  day: 'Day 4–5',
                  dayPt: 'Dia 4–5',
                  title: 'Mix with fresh ingredients',
                  titlePt: 'Misture com ingredientes frescos',
                  desc: 'Combine with egg, greens, or a spoonful of broth. Start building a fresher plate.',
                  descPt: 'Combine com ovo, vegetais, ou uma colher de caldo. Comece a construir um prato mais fresco.',
                },
                {
                  day: 'Weekend',
                  dayPt: 'Fim de semana',
                  title: 'As a fresh meal base',
                  titlePt: 'Como base para uma refeição fresca',
                  desc: "Use the pack as the protein centre of a homemade meal. You're feeding better — gradually.",
                  descPt: 'Use o pack como centro proteico de uma refeição caseira. Está a alimentar melhor — gradualmente.',
                },
              ].map((step, i) => (
                <StaggerItem key={i}>
                  <div className="border-t-2 border-sage pt-8">
                    <span className="font-mono text-xs tracking-widest text-sage mb-6 block">
                      {step.day} / {step.dayPt}
                    </span>
                    <h3 className="font-display text-3xl text-ink mb-3">
                      {step.title}
                    </h3>
                    <p className="text-stone text-sm italic mb-4">{step.titlePt}</p>
                    <p className="text-ink leading-relaxed text-sm mb-3">{step.desc}</p>
                    <p className="text-light-grey text-sm italic">{step.descPt}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Pricing / Order CTA */}
        <section className="py-24 lg:py-32 bg-ink text-warm-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <div className="text-center mb-16">
                <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                  Order / Encomendar
                </p>
                <h2 className="font-display text-5xl md:text-6xl mb-4">
                  Ready to order?
                </h2>
                <p className="text-warm-grey text-lg">Pronto para encomendar?</p>
              </div>
            </FadeIn>

            <StaggerContainer className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
              <StaggerItem>
                <div className="border border-warm-grey/20 p-8 text-center hover:border-sage/40 transition-colors duration-300">
                  <h3 className="font-display text-3xl text-sage mb-2">Snack Packs</h3>
                  <p className="text-light-grey text-sm mb-6">150g each / cada</p>
                  <p className="font-display text-4xl text-paper mb-6">€12</p>
                  <p className="text-warm-grey text-sm mb-8">
                    Mix & match any 3 packs for €30
                    <br />
                    <span className="italic text-light-grey">Misture 3 packs por €30</span>
                  </p>
                  <a
                    href="https://wa.me/351000000000?text=Ol%C3%A1!%20Quero%20encomendar%20os%20Snack%20Packs%20The%20Wild%20Slice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-sage text-warm-white px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                  >
                    Order Snacks / Encomendar
                  </a>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="border border-warm-grey/20 p-8 text-center hover:border-sage/40 transition-colors duration-300">
                  <h3 className="font-display text-3xl text-sage mb-2">Bone Broth</h3>
                  <p className="text-light-grey text-sm mb-6">300ml / 600ml</p>
                  <p className="font-display text-4xl text-paper mb-6">€8 / €14</p>
                  <p className="text-warm-grey text-sm mb-8">
                    Frozen fresh, ready to thaw
                    <br />
                    <span className="italic text-light-grey">Congelado fresco, pronto a descongelar</span>
                  </p>
                  <a
                    href="https://wa.me/351000000000?text=Ol%C3%A1!%20Quero%20encomendar%20o%20Bone%20Broth%20The%20Wild%20Slice."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-sage text-warm-white px-6 py-3 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300"
                  >
                    Order Broth / Encomendar
                  </a>
                </div>
              </StaggerItem>
            </StaggerContainer>

            <FadeIn delay={0.3}>
              <div className="text-center mt-12">
                <p className="text-warm-grey text-sm max-w-xl mx-auto">
                  Every order is a conversation. We help you choose the right pack for your dog's size, age, and current diet.
                </p>
                <p className="text-light-grey text-xs italic mt-2">
                  Cada encomenda é uma conversa. Ajudamo-lo a escolher o pack certo para o tamanho, idade e dieta atual do seu cão.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BilingualBlock from '@/components/BilingualBlock'
import Image from 'next/image'

export default function About() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* HERO */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
              About / Sobre
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-16 max-w-4xl">
              A Wild Slice exists because feeding better shouldn't be all or nothing.
            </h1>

            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-charcoal">
                <p className="text-lg leading-relaxed text-charcoal mb-6">
                  The Wild Slice started with a simple problem: we wanted to feed our dog better, but raw feeding felt overwhelming. The math, the balancing, the freezer space — it was a lot. So we started small.
                </p>
                <p className="text-lg leading-relaxed text-charcoal mb-6">
                  A partnership with Corte Fino, a local butcher shop in Lisboa, gave us access to high-quality cuts that would otherwise go to waste. We began dehydrating small batches of meat and fish, slowly and at low temperatures, preserving nutrients without additives or fillers.
                </p>
                <p className="text-lg leading-relaxed text-charcoal">
                  Today, The Wild Slice is a small-batch dog nutrition brand built on radical transparency. Every ingredient is named, every batch is traceable, and every pack is made by hand.
                </p>
              </div>
              <div className="text-warm-grey md:border-l md:pl-12 border-stone-200/60">
                <p className="text-lg leading-relaxed text-warm-grey mb-6">
                  The Wild Slice nasceu de um problema simples: queríamos alimentar o nosso cão melhor, mas a alimentação crua parecia esmagadora. As contas, o equilíbrio, o espaço no congelador — era demais. Então começámos pequeno.
                </p>
                <p className="text-lg leading-relaxed text-warm-grey mb-6">
                  Uma parceria com o Corte Fino, um talho local em Lisboa, deu-nos acesso a cortes de alta qualidade que de outra forma seriam desperdiçados. Começámos a desidratar pequenos lotes de carne e peixe, lentamente e a baixa temperatura, preservando nutrientes sem aditivos ou enchimentos.
                </p>
                <p className="text-lg leading-relaxed text-warm-grey">
                  Hoje, The Wild Slice é uma marca de nutrição canina em pequenos lotes construída sobre transparência radical. Cada ingrediente é nomeado, cada lote é rastreável, e cada pack é feito à mão.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* VALUES */}
        <section className="py-24 bg-stone-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
                What we believe / O que acreditamos
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                Our values.
              </h2>
              <p className="text-warm-grey mt-2">Os nossos valores.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  en: 'Approachable Natural Nutrition',
                  pt: 'Nutrição Natural Acessível',
                  desc: 'We bridge the gap between "I want to feed better" and "I don\'t know where to start." No guilt, no perfectionism — just gradual improvement.',
                  descPt: 'Ponteamos a lacuna entre "quero alimentar melhor" e "não sei por onde começar." Sem culpa, sem perfeccionismo — apenas melhoria gradual.',
                },
                {
                  en: 'Radical Transparency',
                  pt: 'Transparência Radical',
                  desc: 'Every ingredient is named and sourced from a known local butcher. No mystery meats, no vague "meat derivatives."',
                  descPt: 'Cada ingrediente é nomeado e proveniente de um talho local conhecido. Sem carnes misteriosas, sem vagos "derivados de carne."',
                },
                {
                  en: 'Circularity & Respect',
                  pt: 'Circularidade e Respeito',
                  desc: 'We honour the animal by using the whole carcass. Cuts that humans overlook become nutrient-dense food for dogs.',
                  descPt: 'Honramos o animal usando a carcaça inteira. Cortes que os humanos ignoram tornam-se alimentos ricos em nutrientes para cães.',
                },
                {
                  en: 'Education Over Perfection',
                  pt: 'Educação Sobre a Perfeição',
                  desc: 'We don\'t preach raw feeding. We help owners build better habits over time, one small pack at a time.',
                  descPt: 'Não pregamos a alimentação crua. Ajudamos os donos a construir melhores hábitos ao longo do tempo, um pequeno pack de cada vez.',
                },
              ].map((value, i) => (
                <div key={i} className="border-l-2 border-sage pl-6">
                  <span className="font-mono text-xs text-light-grey">
                    [ 0{i + 1} ]
                  </span>
                  <h3 className="font-display text-2xl text-charcoal mt-2 mb-1">
                    {value.en}
                  </h3>
                  <p className="text-warm-grey text-sm italic mb-4">
                    {value.pt}
                  </p>
                  <p className="text-charcoal leading-relaxed text-sm mb-2">
                    {value.desc}
                  </p>
                  <p className="text-light-grey text-sm italic">
                    {value.descPt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BUTCHER PARTNERSHIP */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src="/images/L1006539.JPG"
                  alt="Butcher shop partnership"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
                  The Butcher / O Talho
                </p>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-6">
                  Corte Fino.
                </h2>
                <div className="grid md:grid-cols-2 gap-8 md:gap-12">
                  <div className="text-charcoal">
                    <p className="text-charcoal leading-relaxed mb-4">
                      Our partnership with Corte Fino Talho in Lisboa is the foundation of everything we make. They provide the fresh, human-grade cuts and organ meats that form the base of our snack packs and broths.
                    </p>
                    <p className="text-charcoal leading-relaxed">
                      This relationship means we know exactly where every ingredient comes from — no middlemen, no industrial suppliers, just a local butcher and a shared commitment to using the whole animal.
                    </p>
                  </div>
                  <div className="text-warm-grey md:border-l md:pl-12 border-stone-200/60">
                    <p className="text-warm-grey leading-relaxed mb-4">
                      A nossa parceria com o Corte Fino Talho em Lisboa é a base de tudo o que fazemos. Eles fornecem os cortes frescos de qualidade humana e as vísceras que formam a base dos nossos packs de petiscos e caldos.
                    </p>
                    <p className="text-warm-grey leading-relaxed">
                      Esta relação significa que sabemos exactamente de onde vem cada ingrediente — sem intermediários, sem fornecedores industriais, apenas um talho local e um compromisso partilhado em usar o animal inteiro.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

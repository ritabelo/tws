import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

export default function Products() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* HEADER */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
              Products / Produtos
            </p>
            <h1 className="font-display text-5xl md:text-7xl text-charcoal mb-4 max-w-4xl">
              Simple, honest nutrition.
            </h1>
            <p className="text-warm-grey text-lg">
              Nutrição simples e honesta.
            </p>
          </div>
        </section>

        {/* SNACK PACKS */}
        <section id="snack-packs" className="py-24 bg-stone-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Images */}
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/L1006545.JPG"
                    alt="Snack pack preparation"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image
                    src="/images/L1006546.JPG"
                    alt="Dehydrated ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="font-mono text-xs tracking-widest text-light-grey">
                  [ 01 ]
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-2 mb-2">
                  Snack Packs
                </h2>
                <p className="text-warm-grey italic mb-8">Packs de Petiscos</p>

                <div className="space-y-6 text-charcoal leading-relaxed">
                  <p>
                    Dehydrated meat and fish, slowly air-dried at low temperature. Each 150g pack starts from over 600g of fresh, human-grade cuts from our partner butcher.
                  </p>
                  <p className="text-warm-grey italic text-sm">
                    Carne e peixe desidratados lentamente a baixa temperatura. Cada pack de 150g resulta de mais de 600g de cortes frescos de qualidade humana do nosso talho parceiro.
                  </p>

                  <div className="border-t border-stone-200/60 pt-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase text-sage mb-3">
                      What's inside / O que está dentro
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Meat & fish (turkey, beef, white fish)</span>
                        <span className="text-warm-grey">Carne e peixe (peru, vaca, peixe branco)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Organ meats (lung, heart, liver)</span>
                        <span className="text-warm-grey">Vísceras (pulmão, coração, fígado)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>No additives, no fillers, no preservatives</span>
                        <span className="text-warm-grey">Sem aditivos, sem enchimentos, sem conservantes</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-stone-200/60 pt-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase text-sage mb-3">
                      How to use / Como usar
                    </h4>
                    <p className="text-sm">
                      Divide over 3–5 days as a topper or snack. Combine with egg, greens, or broth for a fresher meal. Not a complete diet — adjust to your dog's weight, age, and activity.
                    </p>
                    <p className="text-warm-grey italic text-sm mt-2">
                      Divida ao longo de 3–5 dias como topper ou petisco. Combine com ovo, vegetais, ou caldo para uma refeição mais fresca. Não é uma dieta completa — ajuste ao peso, idade e atividade do seu cão.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="font-mono text-sm text-sage mb-4">
                      €18 per pack / €18 por pack
                    </p>
                    <WhatsAppButton
                      message="Hi! I'd like to order a Snack Pack from The Wild Slice."
                      label="Order Snack Pack"
                      labelPt="Encomendar Pack"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BONE BROTH */}
        <section id="bone-broth" className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <span className="font-mono text-xs tracking-widest text-light-grey">
                  [ 02 ]
                </span>
                <h2 className="font-display text-4xl md:text-5xl text-charcoal mt-2 mb-2">
                  Bone Broth
                </h2>
                <p className="text-warm-grey italic mb-8">Caldo de Ossos</p>

                <div className="space-y-6 text-charcoal leading-relaxed">
                  <p>
                    Collagen-forward broth, slowly simmered from marrow and knuckle bones. A gentle way to add hydration, nutrients, and gut-supporting compounds to any meal.
                  </p>
                  <p className="text-warm-grey italic text-sm">
                    Caldo rico em colagénio, cozido lentamente a partir de ossos de tutano e jarrete. Uma forma suave de adicionar hidratação, nutrientes e compostos de apoio intestinal a qualquer refeição.
                  </p>

                  <div className="border-t border-stone-200/60 pt-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase text-sage mb-3">
                      Base recipe / Receita base
                    </h4>
                    <ul className="space-y-2 text-sm">
                      <li className="flex justify-between">
                        <span>Beef marrow bones & knuckle bones</span>
                        <span className="text-warm-grey">Ossos de tutano e jarrete de vaca</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Chicken frames</span>
                        <span className="text-warm-grey">Estruturas de frango</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Apple cider vinegar (for mineral extraction)</span>
                        <span className="text-warm-grey">Vinagre de maçã (para extração mineral)</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Fresh ginger, turmeric, black pepper</span>
                        <span className="text-warm-grey">Gengibre fresco, açafrão, pimenta preta</span>
                      </li>
                    </ul>
                  </div>

                  <div className="border-t border-stone-200/60 pt-6">
                    <h4 className="font-mono text-xs tracking-widest uppercase text-sage mb-3">
                      How to use / Como usar
                    </h4>
                    <p className="text-sm">
                      Pour over dry food, mix into fresh meals, or serve as a warming treat. Refrigerate and use within 5 days, or freeze in portions.
                    </p>
                    <p className="text-warm-grey italic text-sm mt-2">
                      Verta sobre comida seca, misture em refeições frescas, ou sirva como um petisco reconfortante. Refrigere e use dentro de 5 dias, ou congele em porções.
                    </p>
                  </div>

                  <div className="pt-4">
                    <p className="font-mono text-sm text-sage mb-4">
                      €8 per 500ml / €8 por 500ml
                    </p>
                    <WhatsAppButton
                      message="Hi! I'd like to order Bone Broth from The Wild Slice."
                      label="Order Bone Broth"
                      labelPt="Encomendar Caldo"
                    />
                  </div>
                </div>
              </div>

              {/* Images */}
              <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
                <div className="relative aspect-[3/4] overflow-hidden mt-8">
                  <Image
                    src="/images/L1006553.JPG"
                    alt="Bone broth ingredients"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative aspect-[3/4] overflow-hidden">
                  <Image
                    src="/images/L1006555.JPG"
                    alt="Broth preparation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW TO USE GUIDE */}
        <section className="py-24 bg-charcoal text-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
                Feeding Guide / Guia de Alimentação
              </p>
              <h2 className="font-display text-4xl md:text-5xl mb-4">
                Start small. Build over time.
              </h2>
              <p className="text-light-grey">Comece pequeno. Construa ao longo do tempo.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: 'Week 1–2',
                  phasePt: 'Semana 1–2',
                  title: 'Introduction',
                  titlePt: 'Introdução',
                  desc: 'Use as a topper. Sprinkle 10–15g over your dog\'s regular food. Observe how they respond to new textures and flavours.',
                  descPt: 'Use como topper. Espalhe 10–15g sobre a comida habitual do seu cão. Observe como reage a novas texturas e sabores.',
                },
                {
                  phase: 'Week 3–4',
                  phasePt: 'Semana 3–4',
                  title: 'Expansion',
                  titlePt: 'Expansão',
                  desc: 'Mix with fresh additions — a spoonful of broth, a quail egg, steamed greens. Start building more varied plates.',
                  descPt: 'Misture com adições frescas — uma colher de caldo, um ovo de codorniz, vegetais cozidos a vapor. Comece a construir pratos mais variados.',
                },
                {
                  phase: 'Month 2+',
                  phasePt: 'Mês 2+',
                  title: 'Integration',
                  titlePt: 'Integração',
                  desc: 'Use packs as the protein base of homemade meals. You\'re now feeding significantly fresher — without the stress of full raw conversion.',
                  descPt: 'Use os packs como base proteica de refeições caseiras. Está agora a alimentar significativamente mais fresco — sem o stress da conversão total para cru.',
                },
              ].map((step, i) => (
                <div key={i} className="border-t-2 border-sage pt-6">
                  <span className="font-mono text-xs tracking-widest text-sage">
                    {step.phase} / {step.phasePt}
                  </span>
                  <h3 className="font-display text-2xl mt-4 mb-2">{step.title}</h3>
                  <p className="text-light-grey text-sm italic mb-3">{step.titlePt}</p>
                  <p className="text-light-grey leading-relaxed text-sm">{step.desc}</p>
                  <p className="text-warm-grey text-sm italic mt-2">{step.descPt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import BilingualBlock from '@/components/BilingualBlock'
import WhatsAppButton from '@/components/WhatsAppButton'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Navigation />

      <main className="pt-20">
        {/* HERO SECTION */}
        <section className="min-h-[90vh] flex flex-col justify-center relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Text */}
              <div className="order-2 lg:order-1">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
                  Handmade Dog Nutrition / Nutrição Canina Artesanal
                </p>
                <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.9] mb-8 text-charcoal">
                  Feeding better,
                  <br />
                  <span className="text-sage">built over time.</span>
                </h1>
                <p className="text-lg md:text-xl text-warm-grey leading-relaxed mb-4 max-w-lg">
                  Small slices of real nutrition for your dog. From the butcher to your dog's bowl.
                </p>
                <p className="text-base text-light-grey italic mb-10 max-w-lg">
                  Pequenas fatias de nutrição real para o seu cão. Do talho à tigela do seu cão.
                </p>
                <div className="flex flex-wrap gap-4">
                  <a
                    href="/products"
                    className="inline-block bg-charcoal text-warm-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-sage transition-colors"
                  >
                    See the packs / Ver os packs
                  </a>
                  <a
                    href="https://instagram.com/thewildslice"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-warm-white transition-colors"
                  >
                    DM on Instagram / Fala connosco
                  </a>
                </div>
              </div>

              {/* Hero Image */}
              <div className="order-1 lg:order-2 relative">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1200&q=80"
                    alt="The Wild Slice — handmade dog nutrition"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 bg-sage text-warm-white px-6 py-4">
                  <p className="font-mono text-xs tracking-widest uppercase">
                    From Lisboa / De Lisboa
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PHILOSOPHY STRIP */}
        <section className="py-24 bg-stone-bg">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-3 gap-12">
              {[
                {
                  en: 'Human-grade ingredients',
                  pt: 'Ingredientes de qualidade humana',
                  num: '01',
                },
                {
                  en: 'Small batches from local butchers',
                  pt: 'Pequenos lotes do talho local',
                  num: '02',
                },
                {
                  en: 'Natural feeding made simple',
                  pt: 'Alimentação natural, simplificada',
                  num: '03',
                },
              ].map((item) => (
                <div key={item.num} className="group">
                  <span className="font-mono text-xs text-light-grey tracking-widest">
                    [ {item.num} ]
                  </span>
                  <h3 className="font-display text-2xl md:text-3xl mt-4 mb-3 text-charcoal group-hover:text-sage transition-colors">
                    {item.en}
                  </h3>
                  <p className="text-warm-grey text-sm">{item.pt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
                Our Products / Os Nossos Produtos
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal">
                Two ways to feed better.
              </h2>
              <p className="text-warm-grey mt-2">Duas formas de alimentar melhor.</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Snack Packs */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-stone-bg">
                  <Image
                    src="https://images.unsplash.com/photo-1548366086-7f1b76106622?w=900&q=80"
                    alt="Dehydrated snack packs — natural dried meat"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2">
                  Snack Packs
                </h3>
                <p className="text-warm-grey text-sm mb-4">Packs de Petiscos</p>
                <p className="text-charcoal leading-relaxed mb-4">
                  Dehydrated meat and fish, slowly air-dried at low temperature. Each 150g pack starts from over 600g of fresh, human-grade cuts.
                </p>
                <p className="text-light-grey text-sm italic mb-6">
                  Carne e peixe desidratados lentamente a baixa temperatura. Cada pack de 150g resulta de mais de 600g de cortes frescos de qualidade humana.
                </p>
                <a
                  href="/products#snack-packs"
                  className="text-sm tracking-widest uppercase text-sage hover:text-sage-dark transition-colors border-b border-sage pb-1"
                >
                  Learn more / Saber mais →
                </a>
              </div>

              {/* Bone Broth */}
              <div className="group">
                <div className="relative aspect-[4/3] overflow-hidden mb-6 bg-stone-bg">
                  <Image
                    src="https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=80"
                    alt="Bone broth — warm nourishing liquid in a bowl"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <h3 className="font-display text-2xl text-charcoal mb-2">
                  Bone Broth
                </h3>
                <p className="text-warm-grey text-sm mb-4">Caldo de Ossos</p>
                <p className="text-charcoal leading-relaxed mb-4">
                  Collagen-forward broth, slowly simmered from marrow and knuckle bones. A gentle way to add hydration and nutrients to any meal.
                </p>
                <p className="text-light-grey text-sm italic mb-6">
                  Caldo rico em colagénio, cozido lentamente a partir de ossos de tutano e jarrete. Uma forma suave de adicionar hidratação e nutrientes a qualquer refeição.
                </p>
                <a
                  href="/products#bone-broth"
                  className="text-sm tracking-widest uppercase text-sage hover:text-sage-dark transition-colors border-b border-sage pb-1"
                >
                  Learn more / Saber mais →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS / TRUST STRIP */}
        <section className="py-24 bg-charcoal text-warm-white">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 md:gap-12">
              <div className="text-charcoal">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6">
                  The Process / O Processo
                </p>
                <h2 className="font-display text-4xl md:text-5xl mb-8">
                  From the butcher to your dog's bowl.
                </h2>
                <p className="text-lg leading-relaxed text-light-grey">
                  Every batch starts at Corte Fino, our partner butcher shop in Lisboa. We select cuts that would otherwise go to waste — organ meats, trimmings, and off-cuts — and transform them into nutrient-dense snacks and broths through slow dehydration and gentle simmering.
                </p>
              </div>
              <div className="text-warm-grey md:border-l md:pl-12 border-stone-200/60">
                <p className="font-mono text-xs tracking-widest uppercase text-sage mb-6 opacity-0 md:opacity-100">
                  .
                </p>
                <h2 className="font-display text-4xl md:text-5xl mb-8 text-warm-grey">
                  Do talho à tigela do seu cão.
                </h2>
                <p className="text-lg leading-relaxed text-warm-grey">
                  Cada lote começa no Corte Fino, o nosso talho parceiro em Lisboa. Selecionamos cortes que de outra forma seriam desperdiçados — vísceras, aparas, e cortes secundários — e transformamo-los em petiscos e caldos ricos em nutrientes através de desidratação lenta e cozedura suave.
                </p>
              </div>
            </div>

            {/* Process Images */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
              {[
                'https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=600&q=80',
                'https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=600&q=80',
                'https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&q=80',
                'https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=600&q=80',
              ].map((src, i) => (
                <div key={i} className="relative aspect-square overflow-hidden">
                  <Image
                    src={src}
                    alt={`Process step ${i + 1}`}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="font-mono text-xs tracking-widest uppercase text-sage mb-4">
                How to Use / Como Usar
              </p>
              <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
                Not all at once.
              </h2>
              <p className="text-warm-grey">Não tudo de uma vez.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  day: 'Day 1–3',
                  dayPt: 'Dia 1–3',
                  title: 'As a topper',
                  titlePt: 'Como topper',
                  desc: 'Sprinkle over your dog\'s regular food. A small introduction to new textures and flavours.',
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
                  desc: 'Use the pack as the protein centre of a homemade meal. You\'re feeding better — gradually.',
                  descPt: 'Use o pack como centro proteico de uma refeição caseira. Está a alimentar melhor — gradualmente.',
                },
              ].map((step, i) => (
                <div key={i} className="border-t-2 border-sage pt-6">
                  <span className="font-mono text-xs tracking-widest text-sage">
                    {step.day} / {step.dayPt}
                  </span>
                  <h3 className="font-display text-2xl text-charcoal mt-4 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-warm-grey text-sm italic mb-3">{step.titlePt}</p>
                  <p className="text-charcoal leading-relaxed text-sm">{step.desc}</p>
                  <p className="text-light-grey text-sm italic mt-2">{step.descPt}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="py-24 bg-sage/10">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="font-display text-4xl md:text-5xl text-charcoal mb-4">
              Ready to start?
            </h2>
            <p className="text-warm-grey mb-2">Pronto para começar?</p>
            <p className="text-charcoal leading-relaxed mb-8 max-w-2xl mx-auto">
              Every order is a conversation. We help you choose the right pack for your dog's size, age, and current diet — no guesswork, no overwhelm.
            </p>
            <p className="text-light-grey text-sm italic mb-10 max-w-2xl mx-auto">
              Cada encomenda é uma conversa. Ajudamo-lo a escolher o pack certo para o tamanho, idade e dieta atual do seu cão — sem adivinhações, sem complicações.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <WhatsAppButton />
              <a
                href="/products"
                className="inline-block border border-charcoal text-charcoal px-8 py-4 text-sm tracking-widest uppercase hover:bg-charcoal hover:text-warm-white transition-colors"
              >
                Explore products / Explorar produtos
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}

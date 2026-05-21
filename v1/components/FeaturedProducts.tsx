import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import { ImageZoom } from "./animations/HoverEffects";

export default function FeaturedProducts() {
  return (
    <section className="py-24 lg:py-32" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <FadeIn>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 lg:mb-20 gap-6">
            <div>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                Our Products / Os Nossos Produtos
              </p>
              <h2 className="font-display text-5xl md:text-6xl lg:text-7xl text-ink leading-[0.9]">
                Two ways to
                <br />
                <span className="italic text-sage">feed better.</span>
              </h2>
            </div>
            <a
              href="/products"
              className="inline-flex items-center gap-2 text-sm tracking-[0.15em] uppercase text-sage hover:text-ink transition-colors duration-300 border-b border-sage pb-1 self-start md:self-auto"
            >
              See All
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </FadeIn>

        {/* Asymmetric editorial grid */}
        <div className="grid md:grid-cols-12 gap-6 lg:gap-8">
          {/* Snack Packs - larger card */}
          <FadeIn className="md:col-span-7" delay={0.1}>
            <div className="group">
              <ImageZoom className="relative aspect-[4/3] overflow-hidden mb-6 bg-cream">
                <Image
                  src="/images/L1006542.JPG"
                  alt="Dehydrated snack packs"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-3xl text-ink">
                  Snack Packs
                </h3>
                <span className="font-mono text-xs text-sage tracking-widest">150g</span>
              </div>
              <p className="text-stone text-sm mb-2">Packs de Petiscos</p>
              <p className="text-ink leading-relaxed mb-4 max-w-lg">
                Dehydrated meat and fish, slowly air-dried at low temperature. Each 150g pack starts from over 600g of fresh, human-grade cuts.
              </p>
              <p className="text-light-grey text-sm italic mb-6 max-w-lg">
                Carne e peixe desidratados lentamente a baixa temperatura. Cada pack de 150g resulta de mais de 600g de cortes frescos de qualidade humana.
              </p>
              <a
                href="/products#snack-packs"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage hover:text-sage-dark transition-colors border-b border-sage pb-1"
              >
                Learn more / Saber mais →
              </a>
            </div>
          </FadeIn>

          {/* Bone Broth - smaller offset card */}
          <FadeIn className="md:col-span-5 md:mt-24" delay={0.3}>
            <div className="group">
              <ImageZoom className="relative aspect-[3/4] overflow-hidden mb-6 bg-cream">
                <Image
                  src="/images/L1006533.JPG"
                  alt="Bone broth preparation"
                  fill
                  className="object-cover"
                />
              </ImageZoom>
              <div className="flex items-baseline justify-between mb-3">
                <h3 className="font-display text-3xl text-ink">
                  Bone Broth
                </h3>
                <span className="font-mono text-xs text-sage tracking-widest">300/600ml</span>
              </div>
              <p className="text-stone text-sm mb-2">Caldo de Ossos</p>
              <p className="text-ink leading-relaxed mb-4">
                Collagen-forward broth, slowly simmered from marrow and knuckle bones. A gentle way to add hydration and nutrients to any meal.
              </p>
              <p className="text-light-grey text-sm italic mb-6">
                Caldo rico em colagénio, cozido lentamente a partir de ossos de tutano e jarrete.
              </p>
              <a
                href="/products#bone-broth"
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage hover:text-sage-dark transition-colors border-b border-sage pb-1"
              >
                Learn more / Saber mais →
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function ArrowRight({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

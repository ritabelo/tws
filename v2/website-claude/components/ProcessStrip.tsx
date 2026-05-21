import Image from "next/image";

const images = [
  {
    src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=800&q=80",
    alt: "Dog portrait — warm natural light",
    caption: "O cão · The dog",
    aspect: "tall",
  },
  {
    src: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?w=1000&q=80",
    alt: "Dog on a walk in nature",
    caption: "A vida · Life",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=1000&q=80",
    alt: "Fresh meat cuts at a butcher",
    caption: "O talho · The butcher",
    aspect: "wide",
  },
  {
    src: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&q=80",
    alt: "Dog enjoying outdoor life in Lisboa",
    caption: "Lisboa · Liberdade",
    aspect: "tall",
  },
];

export default function ProcessStrip() {
  return (
    <section className="bg-warm-grey py-20 lg:py-28" id="find-us">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-14 lg:mb-16">
          <h2 className="font-[family-name:var(--font-poiret)] text-ink text-4xl sm:text-5xl leading-tight">
            From the butcher
            <br />to your dog&apos;s bowl.
          </h2>
          <div className="flex flex-col justify-end gap-2">
            <p className="font-[family-name:var(--font-poiret)] text-stone text-2xl sm:text-3xl leading-snug italic">
              Do talho à tigela do teu cão.
            </p>
            <p className="font-[family-name:var(--font-mulish)] text-stone/70 text-sm leading-relaxed max-w-md mt-3">
              Every batch begins with a visit to Corte Fino. We select the cuts together, prepare them the same day, and dehydrate them slowly at low temperature. No preservatives. No shortcuts. The pack you receive is made within the week.
            </p>
            <p className="font-[family-name:var(--font-mulish)] text-stone/50 text-sm leading-relaxed max-w-md italic">
              Cada lote começa com uma visita ao Corte Fino. Selecionamos os cortes juntos, preparamo-los no mesmo dia e desidratamo-los lentamente a baixa temperatura. Sem conservantes. Sem atalhos.
            </p>
          </div>
        </div>

        {/* Image grid — mosaic layout */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4">
          {/* Tall image 1 */}
          <div className="row-span-2 relative overflow-hidden group">
            <div className="relative w-full h-full min-h-[360px] lg:min-h-[480px]">
              <Image
                src={images[0].src}
                alt={images[0].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-suse)] text-xs text-paper/70 tracking-[0.15em]">
                {images[0].caption}
              </p>
            </div>
          </div>

          {/* Wide image 1 */}
          <div className="col-span-1 lg:col-span-2 relative overflow-hidden group">
            <div className="relative w-full h-56 lg:h-[224px]">
              <Image
                src={images[1].src}
                alt={images[1].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-suse)] text-xs text-paper/70 tracking-[0.15em]">
                {images[1].caption}
              </p>
            </div>
          </div>

          {/* Wide image 2 */}
          <div className="col-span-1 lg:col-span-2 relative overflow-hidden group">
            <div className="relative w-full h-56 lg:h-[224px]">
              <Image
                src={images[2].src}
                alt={images[2].alt}
                fill
                className="object-cover object-top group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/40 to-transparent" />
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-suse)] text-xs text-paper/70 tracking-[0.15em]">
                {images[2].caption}
              </p>
            </div>
          </div>

          {/* Tall image 2 */}
          <div className="row-span-2 relative overflow-hidden group">
            <div className="relative w-full h-full min-h-[360px] lg:min-h-[480px]">
              <Image
                src={images[3].src}
                alt={images[3].alt}
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 to-transparent" />
              <p className="absolute bottom-4 left-4 font-[family-name:var(--font-suse)] text-xs text-paper/70 tracking-[0.15em]">
                {images[3].caption}
              </p>
            </div>
          </div>
        </div>

        {/* Stats strip */}
        <div className="mt-12 lg:mt-16 grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 border-t border-kraft/30 pt-12">
          {[
            { value: "150 g", label: "pack weight · peso do pack" },
            { value: "600 g+", label: "fresh meat per pack · carne fresca por pack" },
            { value: "24h+", label: "slow dehydration · desidratação lenta" },
            { value: "1 talho", label: "one butcher, one batch · um talho, um lote" },
          ].map((stat) => (
            <div key={stat.value}>
              <p className="font-[family-name:var(--font-poiret)] text-ink text-3xl sm:text-4xl mb-1">
                {stat.value}
              </p>
              <p className="font-[family-name:var(--font-suse)] text-xs text-stone/70 tracking-[0.1em] leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

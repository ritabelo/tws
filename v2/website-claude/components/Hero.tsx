import Image from "next/image";
import Link from "next/link";

const WHATSAPP_URL =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20saber%20mais%20sobre%20os%20packs%20The%20Wild%20Slice.%20%2F%20Hi!%20I%27d%20like%20to%20know%20more%20about%20The%20Wild%20Slice%20packs.";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col pt-16">
      {/* Background image — full bleed */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=1800&q=80"
          alt="The Wild Slice — a dog looking up, warm and expectant"
          fill
          priority
          quality={90}
          className="object-cover object-center"
          sizes="100vw"
        />
        {/* Gradient overlay — warm kraft tones, stronger at bottom for text legibility */}
        <div className="absolute inset-0 bg-gradient-to-b from-ink/20 via-ink/10 to-ink/70" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/40 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-end flex-1 max-w-7xl mx-auto w-full px-6 lg:px-10 pb-16 lg:pb-24">

        {/* Eyebrow */}
        <p className="text-kraft text-xs tracking-[0.3em] uppercase mb-6 font-[family-name:var(--font-suse)]">
          Lisboa · Pequenos lotes · Small batches
        </p>

        {/* Headline bilingual side-by-side */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-6">
          <h1 className="font-[family-name:var(--font-poiret)] text-paper text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] tracking-tight">
            Feeding better,
            <br />
            built over time.
          </h1>
          <p className="font-[family-name:var(--font-poiret)] text-paper/70 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl leading-[1.1] tracking-tight self-end italic">
            Alimentar melhor,
            <br />
            construído ao longo do tempo.
          </p>
        </div>

        {/* Subheadline */}
        <p className="text-paper/80 text-base sm:text-lg max-w-xl mb-10 font-[family-name:var(--font-mulish)] leading-relaxed">
          Handmade dog nutrition from Lisboa.
          <br />
          <span className="text-paper/55 text-sm italic">Nutrição canina artesanal de Lisboa.</span>
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
          <Link
            href="#products"
            className="inline-flex items-center justify-center bg-paper text-ink text-sm tracking-[0.15em] uppercase px-8 py-4 font-[family-name:var(--font-mulish)] font-bold hover:bg-cream transition-colors duration-200"
          >
            Ver os packs
            <span className="text-stone ml-2 font-normal">/ See the packs</span>
          </Link>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border border-paper/60 text-paper text-sm tracking-[0.15em] uppercase px-8 py-4 font-[family-name:var(--font-mulish)] hover:bg-paper/10 transition-colors duration-200 gap-2"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 flex-shrink-0">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.529 5.853L.057 23.535a.5.5 0 0 0 .609.64l5.91-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.188-1.432l-.372-.22-3.857.977.997-3.738-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
            </svg>
            Fala connosco no Instagram
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 flex justify-center pb-8">
        <div className="flex flex-col items-center gap-2 text-paper/40">
          <span className="text-xs tracking-[0.2em] uppercase font-[family-name:var(--font-suse)]">scroll</span>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="currentColor" className="w-5 h-5 animate-bounce">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
          </svg>
        </div>
      </div>
    </section>
  );
}

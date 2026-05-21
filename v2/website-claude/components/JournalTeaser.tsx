import Link from "next/link";

const posts = [
  {
    category: "Como usar · How to use",
    en: {
      title: "How to use The Wild Slice over time",
      excerpt:
        "The Wild Slice isn't meant to replace your dog's current diet in one go. It's built for gradual introduction — small, deliberate portions that let the body adapt and the relationship with food evolve.",
    },
    pt: {
      title: "Como usar The Wild Slice ao longo do tempo",
      excerpt:
        "The Wild Slice não foi pensado para substituir a dieta actual do teu cão de uma só vez. Foi construído para uma introdução gradual — porções pequenas e deliberadas que permitem ao organismo adaptar-se.",
    },
    date: "Maio 2026",
    readTime: "4 min",
    href: "#",
  },
  {
    category: "Nutrição · Nutrition",
    en: {
      title: "Why we like bone broth",
      excerpt:
        "Bone broth has been a cornerstone of traditional diets for centuries. For dogs, it's a gentle, highly bioavailable source of collagen, amino acids, and minerals. Here's how we think about it.",
    },
    pt: {
      title: "Porque gostamos do caldo de ossos",
      excerpt:
        "O caldo de ossos tem sido uma base da alimentação tradicional há séculos. Para os cães, é uma fonte suave e altamente biodisponível de colagénio, aminoácidos e minerais.",
    },
    date: "Abril 2026",
    readTime: "5 min",
    href: "#",
  },
  {
    category: "O processo · The process",
    en: {
      title: "From the butcher to the dehydrator",
      excerpt:
        "We visit Corte Fino every week. This is what happens between that first cut and the pack that arrives in your hands — a process built on transparency, care, and respect for the animal.",
    },
    pt: {
      title: "Do talho ao desidratador",
      excerpt:
        "Visitamos o Corte Fino todas as semanas. Isto é o que acontece entre o primeiro corte e o pack que chega às tuas mãos — um processo construído sobre transparência, cuidado e respeito pelo animal.",
    },
    date: "Março 2026",
    readTime: "6 min",
    href: "#",
  },
];

export default function JournalTeaser() {
  return (
    <section className="bg-paper py-20 lg:py-28" id="journal">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 gap-6 flex-wrap">
          <div>
            <p className="font-[family-name:var(--font-suse)] text-xs text-stone tracking-[0.3em] uppercase mb-3">
              Journal · Jornal
            </p>
            <h2 className="font-[family-name:var(--font-poiret)] text-ink text-4xl sm:text-5xl leading-tight">
              Nutrition, honestly.
              <br />
              <span className="text-stone italic text-3xl sm:text-4xl">Nutrição, com honestidade.</span>
            </h2>
          </div>
          <Link
            href="#"
            className="text-xs tracking-[0.15em] uppercase text-sage border-b border-sage pb-0.5 hover:text-ink hover:border-ink transition-colors font-[family-name:var(--font-mulish)] flex-shrink-0"
          >
            Read the journal / Ler o jornal →
          </Link>
        </div>

        {/* Post cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {posts.map((post, index) => (
            <article key={index} className="flex flex-col group">
              {/* Category */}
              <p className="font-[family-name:var(--font-suse)] text-xs text-kraft tracking-[0.2em] mb-5">
                {post.category}
              </p>

              {/* Divider */}
              <div className="h-px bg-warm-grey mb-6 group-hover:bg-sage transition-colors duration-300" />

              {/* EN content */}
              <Link href={post.href} className="flex-1 flex flex-col">
                <h3 className="font-[family-name:var(--font-poiret)] text-ink text-2xl leading-tight mb-3 group-hover:text-sage transition-colors duration-200">
                  {post.en.title}
                </h3>
                <p className="font-[family-name:var(--font-mulish)] text-ink/60 text-sm leading-relaxed mb-5">
                  {post.en.excerpt}
                </p>

                {/* PT content */}
                <p className="font-[family-name:var(--font-poiret)] text-stone text-lg leading-tight mb-2 italic">
                  {post.pt.title}
                </p>
                <p className="font-[family-name:var(--font-mulish)] text-stone/50 text-sm leading-relaxed italic mb-6">
                  {post.pt.excerpt}
                </p>

                {/* Meta */}
                <div className="mt-auto flex items-center justify-between">
                  <span className="font-[family-name:var(--font-suse)] text-xs text-stone/60 tracking-[0.1em]">
                    {post.date}
                  </span>
                  <span className="font-[family-name:var(--font-suse)] text-xs text-stone/60 tracking-[0.1em]">
                    {post.readTime} read
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}

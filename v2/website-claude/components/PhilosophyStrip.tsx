const pillars = [
  {
    number: "01",
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
    number: "02",
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
    number: "03",
    en: {
      title: "Natural feeding made simple",
      body: "Raw feeding doesn't have to be all or nothing. Start with a pack as a topper or snack. Build from there. One small slice at a time.",
    },
    pt: {
      title: "Alimentação natural simplificada",
      body: "Alimentar de forma natural não tem de ser tudo ou nada. Começa com um pack como topper ou petisco. Constrói a partir daí. Um pequeno slice de cada vez.",
    },
  },
];

export default function PhilosophyStrip() {
  return (
    <section className="bg-cream py-20 lg:py-28" id="about">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-12 mb-16 lg:mb-20">
          <h2 className="font-[family-name:var(--font-poiret)] text-ink text-4xl sm:text-5xl leading-tight">
            Why we exist.
          </h2>
          <p className="font-[family-name:var(--font-poiret)] text-stone text-2xl sm:text-3xl leading-snug self-end italic">
            Por que razão existimos.
          </p>
        </div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {pillars.map((pillar) => (
            <div key={pillar.number} className="flex flex-col">
              {/* Number */}
              <span className="font-[family-name:var(--font-suse)] text-xs text-kraft tracking-[0.3em] mb-6">
                [{pillar.number}]
              </span>

              {/* Divider */}
              <div className="h-px bg-kraft/40 mb-6" />

              {/* English */}
              <h3 className="font-[family-name:var(--font-poiret)] text-ink text-2xl mb-3 leading-tight">
                {pillar.en.title}
              </h3>
              <p className="font-[family-name:var(--font-mulish)] text-ink/70 text-sm leading-relaxed mb-6">
                {pillar.en.body}
              </p>

              {/* Portuguese */}
              <h3 className="font-[family-name:var(--font-poiret)] text-stone text-xl mb-2 leading-tight italic">
                {pillar.pt.title}
              </h3>
              <p className="font-[family-name:var(--font-mulish)] text-stone/70 text-sm leading-relaxed italic">
                {pillar.pt.body}
              </p>
            </div>
          ))}
        </div>

        {/* Value proposition strip */}
        <div className="mt-20 lg:mt-24 border-t border-kraft/30 pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <blockquote className="font-[family-name:var(--font-poiret)] text-ink text-3xl sm:text-4xl leading-tight">
              "Feeding better doesn't have to be all or nothing."
            </blockquote>
            <blockquote className="font-[family-name:var(--font-poiret)] text-stone text-2xl sm:text-3xl leading-tight italic self-end">
              "Alimentar melhor não tem de ser tudo ou nada."
            </blockquote>
          </div>
        </div>

      </div>
    </section>
  );
}

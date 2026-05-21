import Image from "next/image";

const steps = [
  {
    days: "Dias 1–3 / Days 1–3",
    en: {
      title: "As a topper or snack",
      body: "Crumble a small portion over your dog's regular meal, or offer as a standalone snack between meals. Let them discover the flavour without any digestive stress.",
    },
    pt: {
      title: "Como topper ou petisco",
      body: "Esmigalha uma pequena porção sobre a refeição habitual do teu cão, ou oferece como petisco avulso entre refeições. Deixa-o descobrir o sabor sem qualquer stress digestivo.",
    },
  },
  {
    days: "Dias 4–5 / Days 4–5",
    en: {
      title: "Mix with egg or greens",
      body: "Combine a portion of The Wild Slice with a raw or soft-boiled quail egg, or a spoonful of steamed leafy greens. A simple, nourishing combination.",
    },
    pt: {
      title: "Mistura com ovo ou verdes",
      body: "Combina uma porção de The Wild Slice com um ovo de codorniz cru ou cozido, ou uma colher de legumes folhosos cozidos. Uma combinação simples e nutritiva.",
    },
  },
  {
    days: "Fim de semana / Weekend",
    en: {
      title: "As a base for a fresh meal",
      body: "Use the pack as the protein base for a full fresh meal. Add The Wild Broth, a raw egg, and a small portion of vegetables. Adjust portions to your dog's size and activity.",
    },
    pt: {
      title: "Como base de uma refeição fresca",
      body: "Usa o pack como base proteica de uma refeição fresca completa. Adiciona The Wild Broth, um ovo cru e uma pequena porção de legumes. Ajusta as porções ao tamanho e actividade do teu cão.",
    },
  },
];

export default function HowToUse() {
  return (
    <section className="bg-ink text-paper py-20 lg:py-28" id="how-to-use">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left: text content */}
          <div className="lg:col-span-7">

            {/* Section header */}
            <p className="font-[family-name:var(--font-suse)] text-xs text-stone tracking-[0.3em] uppercase mb-6">
              Como usar · How to use
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-14">
              <h2 className="font-[family-name:var(--font-poiret)] text-paper text-4xl sm:text-5xl leading-tight">
                Not all at once.
              </h2>
              <p className="font-[family-name:var(--font-poiret)] text-stone text-2xl sm:text-3xl leading-snug italic self-end">
                Não tudo de uma vez.
              </p>
            </div>

            {/* Intro paragraph */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-14">
              <p className="font-[family-name:var(--font-mulish)] text-paper/75 text-sm leading-relaxed">
                The Wild Slice isn&apos;t meant to replace your dog&apos;s diet overnight. It&apos;s a tool for gradual improvement — a small, high-quality addition that builds better habits over time. One pack lasts 3–5 days, used in rotation.
              </p>
              <p className="font-[family-name:var(--font-mulish)] text-stone/70 text-sm leading-relaxed italic">
                The Wild Slice não foi criado para substituir a dieta do teu cão de um dia para o outro. É uma ferramenta de melhoria gradual — uma adição pequena e de alta qualidade que constrói melhores hábitos ao longo do tempo. Um pack dura 3 a 5 dias, usado em rotação.
              </p>
            </div>

            {/* Steps */}
            <div className="space-y-10">
              {steps.map((step, index) => (
                <div key={index} className="flex gap-6">
                  {/* Step number */}
                  <div className="flex-shrink-0 flex flex-col items-center gap-2">
                    <span className="font-[family-name:var(--font-suse)] text-xs text-kraft tracking-[0.2em]">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    {index < steps.length - 1 && (
                      <div className="flex-1 w-px bg-stone/20 min-h-[40px]" />
                    )}
                  </div>

                  {/* Step content */}
                  <div className="pb-2">
                    <p className="font-[family-name:var(--font-suse)] text-xs text-kraft tracking-[0.15em] mb-3">
                      {step.days}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <h3 className="font-[family-name:var(--font-poiret)] text-paper text-xl mb-2">
                          {step.en.title}
                        </h3>
                        <p className="font-[family-name:var(--font-mulish)] text-paper/65 text-sm leading-relaxed">
                          {step.en.body}
                        </p>
                      </div>
                      <div>
                        <h3 className="font-[family-name:var(--font-poiret)] text-stone text-lg mb-2 italic">
                          {step.pt.title}
                        </h3>
                        <p className="font-[family-name:var(--font-mulish)] text-stone/55 text-sm leading-relaxed italic">
                          {step.pt.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pairing guide CTA */}
            <div className="mt-12 pt-10 border-t border-stone/20">
              <p className="font-[family-name:var(--font-mulish)] text-paper/60 text-sm mb-4">
                Want the full picture? / Quer saber mais?
              </p>
              <a
                href="#"
                className="inline-flex items-center gap-2 text-sage text-sm tracking-[0.15em] uppercase font-[family-name:var(--font-mulish)] font-bold border-b border-sage pb-0.5 hover:text-paper hover:border-paper transition-colors"
              >
                Download the Pairing Guide / Guia de Combinação →
              </a>
            </div>
          </div>

          {/* Right: illustration */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center">
            <div className="relative w-full max-w-xs lg:max-w-sm mx-auto">
              {/* Decorative circle */}
              <div className="w-full aspect-square rounded-full bg-stone/10 flex items-center justify-center">
                <Image
                  src="/images/dog-line-art.png"
                  alt="Line art dog illustration"
                  width={400}
                  height={600}
                  className="w-3/4 h-auto object-contain mix-blend-screen opacity-80"
                />
              </div>
              {/* Caption below */}
              <p className="text-center font-[family-name:var(--font-suse)] text-xs text-stone/50 tracking-[0.2em] mt-6 uppercase">
                Comece devagar · Start small
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

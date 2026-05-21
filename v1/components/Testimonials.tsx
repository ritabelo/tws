import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import FadeIn from "./animations/FadeIn";

export default function Testimonials() {
  return (
    <section className="py-24 lg:py-32 bg-cream/30">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
              Testimonials / Testemunhos
            </p>
            <h2 className="font-display text-5xl md:text-6xl text-ink">
              What People Say
            </h2>
          </div>
        </FadeIn>

        <StaggerContainer className="grid md:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.15}>
          {[
            {
              quote: "My dog was a picky eater before. Now he gets excited every time I open the pack. The quality is visible — real meat, real texture.",
              quotePt: "O meu cão era esquisito antes. Agora fica animado sempre que abro o pack. A qualidade é visível — carne real, textura real.",
              name: 'Maria Santos',
              dog: 'Luna, Golden Retriever',
            },
            {
              quote: "Finally, a brand that treats dog food with the same care as human food. You can see the difference in their coat and energy levels.",
              quotePt: "Finalmente, uma marca que trata a comida de cão com o mesmo cuidado que a comida humana. Nota-se a diferença no pelo e na energia.",
              name: 'Tomás Oliveira',
              dog: 'Max, Border Collie',
            },
            {
              quote: "The bone broth is a game changer. I pour it over kibble and my dogs go crazy for it. And I feel good knowing what's in it.",
              quotePt: "O caldo de ossos mudou tudo. Verter sobre o kibble e os meus cães adoram. E sinto-me bem a saber o que tem dentro.",
              name: 'Ana Costa',
              dog: 'Bella & Rocky, Mixed',
            },
          ].map((t, i) => (
            <StaggerItem key={i}>
              <div className="border border-warm-grey/50 p-8 lg:p-10 bg-paper hover:border-sage/50 transition-colors duration-300">
                <p className="font-display text-2xl text-ink mb-6 leading-tight">
                  "{t.quote}"
                </p>
                <p className="text-light-grey text-sm italic mb-8">
                  {t.quotePt}
                </p>
                <div className="border-t border-warm-grey/50 pt-4">
                  <p className="font-mono text-xs text-ink tracking-widest uppercase">{t.name}</p>
                  <p className="font-mono text-xs text-light-grey">{t.dog}</p>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

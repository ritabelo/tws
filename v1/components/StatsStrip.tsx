import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

export default function StatsStrip() {
  return (
    <section className="py-16 border-y border-warm-grey/50 bg-cream/50">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4" staggerDelay={0.1}>
          {[
            { num: '12+', label: 'Batches Made', labelPt: 'Lotes Feitos' },
            { num: '150+', label: 'Packs Sold', labelPt: 'Packs Vendidos' },
            { num: '1', label: 'City', labelPt: 'Cidade' },
            { num: '∞', label: 'Happy Dogs', labelPt: 'Cães Felizes' },
          ].map((stat, i) => (
            <StaggerItem key={i}>
              <div className="text-center md:text-left">
                <p className="font-display text-5xl md:text-6xl text-ink mb-2">{stat.num}</p>
                <p className="font-mono text-xs text-stone tracking-widest uppercase">{stat.label}</p>
                <p className="font-mono text-xs text-light-grey tracking-widest">{stat.labelPt}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

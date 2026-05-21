import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";

export default function PhilosophyStrip() {
  return (
    <section className="bg-sage-light/30 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center" staggerDelay={0.15}>
          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sage/20 flex items-center justify-center mb-6">
                <span className="text-2xl">🌱</span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-ink">Human-grade ingredients</h3>
              <p className="text-stone italic font-display text-lg">Ingredientes de qualidade humana</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-kraft/30 flex items-center justify-center mb-6">
                <span className="text-2xl">🔪</span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-ink">Small batches from local butchers</h3>
              <p className="text-stone italic font-display text-lg">Pequenos lotes do talho local</p>
            </div>
          </StaggerItem>
          <StaggerItem>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-warm-grey flex items-center justify-center mb-6">
                <span className="text-2xl">✨</span>
              </div>
              <h3 className="font-display text-2xl mb-3 text-ink">Natural feeding made simple</h3>
              <p className="text-stone italic font-display text-lg">Alimentação natural, simplificada</p>
            </div>
          </StaggerItem>
        </StaggerContainer>
      </div>
    </section>
  );
}

import Image from "next/image";

export default function HowToUse() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="font-display text-5xl md:text-6xl mb-4">How to Use</h1>
        <h2 className="font-display text-3xl text-brand-charcoal/50 italic mb-8">Como Usar</h2>
        <p className="text-lg text-brand-charcoal/80">
          The Wild Slice isn&apos;t meant to be given all at once. We believe in adding fresh, natural foods to your dog&apos;s bowl gradually.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
        {/* Step 1 */}
        <div className="bg-brand-stone/10 p-8 rounded-2xl flex flex-col h-full">
          <div className="text-brand-sage font-display text-6xl mb-6">01</div>
          <h3 className="font-display text-2xl mb-2">Days 1-3: As a topper</h3>
          <p className="text-brand-charcoal/60 italic mb-6">Dias 1-3: Como complemento</p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-brand-stone/30">
            <Image src="https://images.unsplash.com/photo-1581404172553-65239aeb7801?auto=format&fit=crop&w=800&q=80" alt="Topper" fill className="object-cover" />
          </div>
          <p className="text-brand-charcoal/80">
            Sprinkle a small amount of dehydrated snacks or pour a little bone broth over their regular kibble. Let their digestive system adjust.
          </p>
        </div>
        
        {/* Step 2 */}
        <div className="bg-brand-stone/20 p-8 rounded-2xl flex flex-col h-full">
          <div className="text-brand-sage font-display text-6xl mb-6">02</div>
          <h3 className="font-display text-2xl mb-2">Days 4-5: Mix with fresh</h3>
          <p className="text-brand-charcoal/60 italic mb-6">Dias 4-5: Misturar com frescos</p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-brand-stone/40">
            <Image src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&w=800&q=80" alt="Mix with fresh" fill className="object-cover" />
          </div>
          <p className="text-brand-charcoal/80">
            Combine TWS packs with a raw quail egg, some steamed greens, or a sardine. Keep the base meal the same.
          </p>
        </div>

        {/* Step 3 */}
        <div className="bg-brand-stone/30 p-8 rounded-2xl flex flex-col h-full">
          <div className="text-brand-sage font-display text-6xl mb-6">03</div>
          <h3 className="font-display text-2xl mb-2">Weekend: Fresh Base</h3>
          <p className="text-brand-charcoal/60 italic mb-6">Fim de semana: Base fresca</p>
          <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-6 bg-brand-stone/50">
            <Image src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80" alt="Fresh Base" fill className="object-cover" />
          </div>
          <p className="text-brand-charcoal/80">
            Use The Wild Slice snacks and broth as the flavour and nutrient core of a fully fresh weekend meal.
          </p>
        </div>
      </div>

      <div className="bg-brand-sage text-white rounded-3xl p-12 md:p-20 text-center max-w-4xl mx-auto">
        <h3 className="font-display text-3xl md:text-4xl mb-6">Want the full Pairing Guide?</h3>
        <p className="text-white/90 mb-8 text-lg">
          Download our comprehensive booklet on how to combine TWS packs with eggs, fish, broth, and vegetables.
        </p>
        <button className="px-8 py-4 bg-brand-offwhite text-brand-charcoal rounded-full uppercase tracking-widest text-sm hover:bg-white transition-colors">
          Download PDF Guide
        </button>
      </div>
    </div>
  );
}
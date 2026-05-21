import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-center mb-24">
        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden w-full">
          <Image 
            src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=1000&q=80"
            alt="The Founder"
            fill
            className="object-cover"
          />
        </div>
        
        <div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">A Wild Slice</h1>
          <h2 className="font-display text-3xl text-brand-charcoal/50 italic mb-12">Um Wild Slice</h2>
          
          <div className="space-y-8 text-lg leading-relaxed text-brand-charcoal/80">
            <p>
              The Wild Slice (TWS) is a handmade, small-batch dog nutrition brand founded in Lisboa. Born out of a desire to feed our own dogs better, without the overwhelm of complicated raw meal plans.
            </p>
            <p className="italic text-brand-charcoal/60">
              The Wild Slice (TWS) é uma marca artesanal de nutrição canina fundada em Lisboa. Nasceu da vontade de alimentar melhor os nossos cães, sem a complexidade dos planos de alimentação crua.
            </p>
            
            <p>
              We believe in circularity in the meat industry. We use high-quality cuts and by-products that would otherwise go to waste, sourced directly from a trusted local butcher (talho). It&apos;s an approach that honours the animal and provides dense nutrition for your dog.
            </p>
            <p className="italic text-brand-charcoal/60">
              Acreditamos na circularidade na indústria da carne. Usamos cortes de alta qualidade e subprodutos que de outra forma seriam desperdiçados, provenientes diretamente de um talho local de confiança. É uma abordagem que honra o animal e fornece nutrição densa para o teu cão.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-brand-stone/20 rounded-3xl p-12 md:p-24 text-center">
        <h3 className="font-display text-4xl mb-8">Our Core Pillars</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left mt-16 max-w-4xl mx-auto">
          <div>
            <h4 className="font-display text-2xl mb-4 text-brand-sage">1. Approchable Nutrition</h4>
            <p className="text-brand-charcoal/80">
              We bridge the gap between &quot;I want to feed better&quot; and &quot;I don&apos;t know where to start.&quot; No guilt, just small steps.
            </p>
          </div>
          <div>
            <h4 className="font-display text-2xl mb-4 text-brand-sage">2. Radical Transparency</h4>
            <p className="text-brand-charcoal/80">Every ingredient is named, sourced from a known local butcher, and prepared in small batches you can trace.</p>
          </div>
          <div>
            <h4 className="font-display text-2xl mb-4 text-brand-sage">3. Circularity & Respect</h4>
            <p className="text-brand-charcoal/80">We honour the animal by using the whole carcass, reducing waste, and working with local butchers.</p>
          </div>
          <div>
            <h4 className="font-display text-2xl mb-4 text-brand-sage">4. Education Over Perfection</h4>
            <p className="text-brand-charcoal/80">We don&apos;t preach raw feeding. We help owners build better habits over time, adding fresh food as toppers.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
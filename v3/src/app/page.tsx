import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col gap-24 pb-24">
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] flex items-center justify-center bg-brand-stone/30">
        <div className="absolute inset-0 z-0">
            <Image 
              src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=80"
              alt="The Wild Slice Product Context"
              fill
              className="object-cover opacity-80 mix-blend-multiply grayscale-[20%]"
              priority
            />
        </div>
        
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <h1 className="font-display text-5xl md:text-7xl mb-8 leading-tight text-brand-charcoal">
            Feeding better, <br className="hidden md:block"/> built over time.
            <span className="block mt-4 text-3xl md:text-5xl text-brand-charcoal/70">
              Alimentar melhor, construído ao longo do tempo.
            </span>
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-wide uppercase text-brand-charcoal/90 mb-12">
            Handmade dog nutrition from Lisboa. <br className="md:hidden" />
            Nutrição canina artesanal de Lisboa.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/products"
              className="px-8 py-4 bg-brand-charcoal text-brand-offwhite rounded-full uppercase tracking-widest text-sm hover:bg-black transition-colors w-full sm:w-auto"
            >
              See the packs / Ver os packs
            </Link>
            <a 
              href="https://wa.me/1234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-brand-charcoal text-brand-charcoal rounded-full uppercase tracking-widest text-sm hover:bg-brand-sage hover:border-brand-sage hover:text-white transition-colors w-full sm:w-auto"
            >
              DM us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Philosophy Strip */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-sage/20 flex items-center justify-center mb-6">
              <span className="text-2xl">🌱</span>
            </div>
            <h3 className="font-display text-2xl mb-3">Human-grade ingredients</h3>
            <p className="text-brand-charcoal/70 italic font-display text-lg">Ingredientes de qualidade humana</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-sand flex items-center justify-center mb-6">
              <span className="text-2xl">🔪</span>
            </div>
            <h3 className="font-display text-2xl mb-3">Small batches from local butchers</h3>
            <p className="text-brand-charcoal/70 italic font-display text-lg">Pequenos lotes do talho local</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-brand-stone flex items-center justify-center mb-6">
              <span className="text-2xl">✨</span>
            </div>
            <h3 className="font-display text-2xl mb-3">Natural feeding made simple</h3>
            <p className="text-brand-charcoal/70 italic font-display text-lg">Alimentação natural, simplificada</p>
          </div>
        </div>
      </section>

      {/* Featured Product */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-sand/30 rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 relative min-h-[400px]">
            <Image 
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80"
              alt="The Wild Slice Products"
              fill
              className="object-cover"
            />
          </div>
          <div className="md:w-1/2 p-12 md:p-20 flex flex-col justify-center">
            <span className="text-brand-sage font-bold tracking-widest uppercase text-sm mb-4">Featured / Destaque</span>
            <h2 className="font-display text-4xl mb-6">Starter Pack & Bone Broth</h2>
            <p className="text-brand-charcoal/80 mb-8 leading-relaxed">
              Introduce natural, fresh ingredients into your dog&apos;s routine gradually. Our small-batch dehydrated snacks and collagen-rich bone broth are the perfect toppers. 
              <br/><br/>
              <span className="italic">
                Introduz ingredientes naturais e frescos na rotina do teu cão gradualmente. Os nossos petiscos desidratados e caldo de ossos são o complemento perfeito.
              </span>
            </p>
            <div>
              <Link 
                href="/how-to-use"
                className="inline-block border-b border-brand-charcoal pb-1 uppercase tracking-widest text-sm hover:text-brand-sage hover:border-brand-sage transition-colors"
              >
                Read the pairing guide / Ler o guia
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trust / Process Strip */}
      <section className="bg-brand-charcoal text-brand-offwhite py-24">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">From the butcher to your dog&apos;s bowl.</h2>
          <p className="font-display text-2xl md:text-3xl text-brand-offwhite/60 italic mb-16">Do talho à tigela do teu cão.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1515003197209-4caa95e18a4d?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1556910103-1c02745a828b?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=800&q=80"
            ].map((src, idx) => (
              <div key={idx} className="relative aspect-square rounded-xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-500">
                <Image 
                  src={src}
                  alt={`Process ${idx + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
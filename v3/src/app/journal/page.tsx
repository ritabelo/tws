import Image from "next/image";

const MOCK_POSTS = [
  {
    id: "post-1",
    titleEn: "Why we love bone broth + quail egg",
    titlePt: "Porquê que adoramos caldo de ossos + ovo de codorniz",
    category: "Pairing Guides",
    date: "May 2026",
    excerpt: "A simple, nutrient-dense addition to any bowl. Discover why this combination is our favourite way to start adding fresh food.",
    image: "https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "post-2",
    titleEn: "What 'balanced and complete' really means",
    titlePt: "O que 'equilibrado e completo' realmente significa",
    category: "Nutrition Basics",
    date: "May 2026",
    excerpt: "Demystifying the pet food industry's favorite buzzwords and how to think about balance over time rather than in every single meal.",
    image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=1000&q=80"
  },
  {
    id: "post-3",
    titleEn: "Our butcher partnership: why local matters",
    titlePt: "A nossa parceria com o talho: porquê que o local importa",
    category: "Stories",
    date: "April 2026",
    excerpt: "Circularity in the meat industry and how working with a local talho ensures quality, transparency, and less waste.",
    image: "https://images.unsplash.com/photo-1603048297172-c92544798d5e?auto=format&fit=crop&w=1000&q=80"
  }
];

export default function Journal() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="mb-20">
        <h1 className="font-display text-5xl md:text-6xl mb-4">Nutrition Journal</h1>
        <h2 className="font-display text-3xl text-brand-charcoal/50 italic">Jornal de Nutrição</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {MOCK_POSTS.map((post) => (
          <article key={post.id} className="group cursor-pointer flex flex-col h-full">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-brand-stone/20">
              <Image 
                src={post.image} 
                alt={post.titleEn} 
                fill 
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
            </div>
            <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-widest text-brand-sage mb-4">
              <span>{post.category}</span>
              <span className="w-1 h-1 rounded-full bg-brand-sage/50"></span>
              <span>{post.date}</span>
            </div>
            <h3 className="font-display text-2xl mb-2 group-hover:text-brand-sage transition-colors">{post.titleEn}</h3>
            <h4 className="font-display text-lg text-brand-charcoal/50 italic mb-4">{post.titlePt}</h4>
            <p className="text-brand-charcoal/80 mb-6 flex-grow">{post.excerpt}</p>
            <div className="pt-4 border-t border-brand-stone/30 mt-auto">
              <span className="text-sm uppercase tracking-widest font-bold group-hover:text-brand-sage transition-colors">Read Article →</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
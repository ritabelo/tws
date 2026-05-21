import Image from "next/image";
import Link from "next/link";

const MOCK_PRODUCTS = [
  {
    id: "snack-pack-1",
    nameEn: "Dehydrated Beef Liver & Heart",
    namePt: "Fígado e Coração de Vaca Desidratado",
    price: "€8.50",
    weight: "80g",
    descEn: "High-value training treats or a nutrient-dense meal topper. Slowly dehydrated for 24 hours to preserve nutrients.",
    descPt: "Petiscos de alto valor para treino ou complemento de refeição. Desidratados lentamente durante 24h para preservar os nutrientes.",
    ingredientsEn: "100% Beef Liver, Beef Heart (Sourced from local butcher)",
    ingredientsPt: "100% Fígado de Vaca, Coração de Vaca (Proveniente de talho local)",
    image: "https://images.unsplash.com/photo-1585237722718-4f115cfcba34?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: "bone-broth-1",
    nameEn: "Collagen-Rich Bone Broth",
    namePt: "Caldo de Ossos Rico em Colagénio",
    price: "€12.00",
    weight: "500ml",
    descEn: "Simmered for 48 hours. Excellent for joint health, digestion, and rehydrating kibble. Serve slightly warmed or frozen in molds.",
    descPt: "Cozinhado lentamente por 48 horas. Excelente para as articulações, digestão e re-hidratação de ração.",
    ingredientsEn: "Filtered water, Beef Marrow Bones, Apple Cider Vinegar",
    ingredientsPt: "Água filtrada, Ossos de Tutano de Vaca, Vinagre de Sidra",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=1000&q=80",
  }
];

export default function Products() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="text-center mb-24">
        <h1 className="font-display text-5xl md:text-6xl mb-4">Products</h1>
        <h2 className="font-display text-3xl text-brand-charcoal/50 italic">Produtos</h2>
      </div>

      <div className="space-y-32">
        {MOCK_PRODUCTS.map((product, idx) => (
          <div key={product.id} className={`flex flex-col gap-12 lg:gap-24 items-center ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
            <div className="w-full md:w-1/2">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-brand-stone/20">
                <Image 
                  src={product.image}
                  alt={product.nameEn}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            
            <div className="w-full md:w-1/2 flex flex-col justify-center">
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <h3 className="font-display text-3xl mb-1">{product.nameEn}</h3>
                  <h4 className="font-display text-xl text-brand-charcoal/60 italic">{product.namePt}</h4>
                </div>
                <span className="text-xl font-mono text-brand-sage">{product.price}</span>
              </div>
              
              <div className="space-y-6 text-brand-charcoal/80 mb-8">
                <p>{product.descEn}</p>
                <p className="italic text-brand-charcoal/60">{product.descPt}</p>
                
                <div className="pt-6 border-t border-brand-stone/30">
                  <p className="text-sm uppercase tracking-widest mb-2 font-bold">Ingredients / Ingredientes:</p>
                  <p className="text-sm mb-1">{product.ingredientsEn}</p>
                  <p className="text-sm italic text-brand-charcoal/60">{product.ingredientsPt}</p>
                </div>
                
                <p className="text-sm font-mono text-brand-sage">Net Weight: {product.weight}</p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <a 
                  href={`https://wa.me/1234567890?text=Hello! I'd like to order the ${product.nameEn} / Olá! Gostaria de encomendar o ${product.namePt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-brand-charcoal text-brand-offwhite rounded-full uppercase tracking-widest text-sm hover:bg-black transition-colors text-center"
                >
                  Order via WhatsApp
                </a>
                <Link 
                  href="/how-to-use"
                  className="px-8 py-4 border border-brand-charcoal text-brand-charcoal rounded-full uppercase tracking-widest text-sm hover:bg-brand-sage hover:border-brand-sage hover:text-white transition-colors text-center"
                >
                  Pairing Guide
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
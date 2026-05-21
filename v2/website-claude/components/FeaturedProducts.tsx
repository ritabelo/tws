import Image from "next/image";
import Link from "next/link";

const WHATSAPP_SLICE =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20encomendar%20The%20Wild%20Slice%20(pack%20desidratado).";
const WHATSAPP_BROTH =
  "https://wa.me/351000000000?text=Ol%C3%A1!%20Gostava%20de%20encomendar%20The%20Wild%20Broth%20(caldo%20de%20ossos).";

const products = [
  {
    id: "slice",
    tag: "The Wild Slice",
    tagPt: "O Pack Desidratado",
    headline: "Snack Pack",
    headlinePt: "Pack de Petiscos",
    weight: "150 g",
    description:
      "Slow-dehydrated at low temperature. Each 150g pack starts from over 600g of fresh meat. A functional base — different cuts and species — built for small daily portions or as a topper on fresh meals.",
    descriptionPt:
      "Desidratação lenta a baixa temperatura. Cada embalagem de 150 g resulta de mais de 600 g de carnes frescas. Uma base funcional — diferentes cortes e espécies — pensada para pequenas porções diárias ou para complementar refeições frescas.",
    composition: "Carnes (peru & vaca) 44%, pele (peixe branco) 17%, pulmão (borrego) 15%, coração (borrego) 14%, rim (vaca) 7%, fígado (vaca) 3%",
    protein: "57–62%",
    note: "Alimento complementar · não constitui uma alimentação completa",
    whatsapp: WHATSAPP_SLICE,
    image: "https://images.unsplash.com/photo-1601758125946-6ec2ef64daf8?w=900&q=80",
    imageAlt: "Dog enjoying The Wild Slice snack pack",
    accent: "bg-sage-light border-sage/30",
    badge: "Snack · Topper · Petisco",
  },
  {
    id: "broth",
    tag: "The Wild Broth",
    tagPt: "O Caldo de Ossos",
    headline: "Bone Broth",
    headlinePt: "Caldo de Ossos",
    weight: "300 ml / 600 ml",
    description:
      "A collagen-forward broth made from beef marrow bone and knee bone, slow-simmered for 24+ hours. High collagen, deeply nourishing. Serve warm over kibble, mix with fresh meals, or offer as a standalone drink.",
    descriptionPt:
      "Um caldo rico em colagénio feito com osso de tutano e osso de joelho de vaca, cozido lentamente durante mais de 24 horas. Alto teor de colagénio, profundamente nutritivo. Serve morno sobre o kibble, mistura com refeições frescas, ou oferece como bebida.",
    composition: "Osso de tutano de vaca (1,2 kg/7L), osso de joelho de vaca (2,6 kg/7L), frango (6 ossos/7L), cebola, cenoura, aipo, vinagre de sidra de maçã (banho frio)",
    protein: "18–25 g colagénio por 500 ml",
    note: "Refrigerar · consumir em 4 dias após abertura · pode congelar",
    whatsapp: WHATSAPP_BROTH,
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=900&q=80",
    imageAlt: "Warm bone broth in a bowl — The Wild Broth",
    accent: "bg-cream border-kraft/30",
    badge: "Caldo · Topper · Suplemento",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-paper py-20 lg:py-28" id="products">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div className="flex items-end justify-between mb-14 lg:mb-18 gap-6 flex-wrap">
          <div>
            <p className="font-[family-name:var(--font-suse)] text-xs text-stone tracking-[0.3em] uppercase mb-3">
              Batch · Lote
            </p>
            <h2 className="font-[family-name:var(--font-poiret)] text-ink text-4xl sm:text-5xl leading-tight">
              The current batch.
              <br />
              <span className="text-stone italic text-3xl sm:text-4xl">O lote actual.</span>
            </h2>
          </div>
          <Link
            href="#how-to-use"
            className="text-xs tracking-[0.15em] uppercase text-sage border-b border-sage pb-0.5 hover:text-ink hover:border-ink transition-colors font-[family-name:var(--font-mulish)] flex-shrink-0"
          >
            How to use / Como usar →
          </Link>
        </div>

        {/* Product cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {products.map((product) => (
            <article
              key={product.id}
              className={`border ${product.accent} p-8 lg:p-10 flex flex-col`}
            >
              {/* Image */}
              <div className="relative w-full h-64 lg:h-72 mb-8 overflow-hidden">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>

              {/* Tag / product line */}
              <div className="flex items-center justify-between mb-4">
                <span className="font-[family-name:var(--font-suse)] text-xs text-stone tracking-[0.25em] uppercase">
                  {product.tag}
                </span>
                <span className="font-[family-name:var(--font-suse)] text-xs text-kraft tracking-[0.15em]">
                  {product.weight}
                </span>
              </div>

              {/* Product name bilingual */}
              <div className="mb-6">
                <h3 className="font-[family-name:var(--font-poiret)] text-ink text-3xl leading-tight mb-1">
                  {product.headline}
                </h3>
                <p className="font-[family-name:var(--font-poiret)] text-stone text-xl italic">
                  {product.headlinePt}
                </p>
              </div>

              {/* Description bilingual */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <p className="font-[family-name:var(--font-mulish)] text-ink/75 text-sm leading-relaxed">
                  {product.description}
                </p>
                <p className="font-[family-name:var(--font-mulish)] text-stone/70 text-sm leading-relaxed italic">
                  {product.descriptionPt}
                </p>
              </div>

              {/* Composition */}
              <div className="border-t border-current/10 pt-5 mb-5">
                <p className="font-[family-name:var(--font-suse)] text-xs text-stone/80 leading-relaxed mb-1">
                  composição
                </p>
                <p className="font-[family-name:var(--font-suse)] text-xs text-ink/70 leading-relaxed">
                  {product.composition}
                </p>
                <p className="font-[family-name:var(--font-suse)] text-xs text-sage mt-2">
                  proteína bruta: {product.protein}
                </p>
              </div>

              {/* Note */}
              <p className="font-[family-name:var(--font-suse)] text-xs text-stone/60 italic mb-7">
                {product.note}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-3 mt-auto">
                <a
                  href={product.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-ink text-paper text-xs tracking-[0.15em] uppercase px-5 py-4 font-[family-name:var(--font-mulish)] font-bold hover:bg-sage transition-colors duration-200"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 flex-shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.557 4.122 1.529 5.853L.057 23.535a.5.5 0 0 0 .609.64l5.91-1.497A11.95 11.95 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.893 0-3.668-.523-5.188-1.432l-.372-.22-3.857.977.997-3.738-.243-.386A9.96 9.96 0 0 1 2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  Encomendar via WhatsApp
                </a>
                <Link
                  href="#how-to-use"
                  className="flex items-center justify-center text-xs tracking-[0.12em] uppercase px-5 py-4 font-[family-name:var(--font-mulish)] border border-stone/30 text-stone hover:border-ink hover:text-ink transition-colors duration-200"
                >
                  Como usar
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Partner note */}
        <div className="mt-12 text-center">
          <p className="font-[family-name:var(--font-suse)] text-xs text-stone/60 tracking-[0.15em]">
            Em parceria com · In partnership with{" "}
            <span className="text-ink font-bold tracking-widest">CORTE FINO TALHO</span>
            {" "}· Lisboa
          </p>
        </div>

      </div>
    </section>
  );
}

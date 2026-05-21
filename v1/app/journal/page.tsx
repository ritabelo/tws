import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import FadeIn from "@/components/animations/FadeIn";
import StaggerContainer, { StaggerItem } from "@/components/animations/StaggerContainer";
import { ImageZoom } from "@/components/animations/HoverEffects";

const posts = [
  {
    slug: "why-slow-dehydration-matters",
    category: "Process / Processo",
    title: "Why slow dehydration matters.",
    titlePt: "Por que a desidratação lenta importa.",
    excerpt: "Low and slow isn't just a cooking mantra — it's the key to preserving nutrients that high-heat processing destroys. We air-dry at 60°C for 12-18 hours to keep enzymes, vitamins, and amino acids intact.",
    excerptPt: "Lento e suave não é apenas um mantra de cozinha — é a chave para preservar nutrientes que o processamento a alta temperatura destrói. Secamos a ar a 60°C durante 12-18 horas para manter enzimas, vitaminas e aminoácidos intactos.",
    image: "/images/L1006563.JPG",
    date: "May 2026",
    readTime: "4 min",
  },
  {
    slug: "from-kibble-to-fresh",
    category: "Guide / Guia",
    title: "From kibble to fresh: a gradual transition.",
    titlePt: "Do kibble ao fresco: uma transição gradual.",
    excerpt: "Switching your dog's diet overnight can cause digestive upset. Here's our proven 3-week plan to move from processed food to fresh, natural meals without the stress.",
    excerptPt: "Mudar a dieta do seu cão da noite para o dia pode causar problemas digestivos. Aqui está o nosso plano comprovado de 3 semanas para passar de comida processada para refeições frescas e naturais sem stress.",
    image: "/images/dog-eating.jpg",
    date: "April 2026",
    readTime: "6 min",
  },
  {
    slug: "the-bone-broth-benefits",
    category: "Nutrition / Nutrição",
    title: "The bone broth benefits you didn't know about.",
    titlePt: "Os benefícios do caldo de ossos que não conhecia.",
    excerpt: "Beyond hydration and flavour, bone broth delivers collagen, glucosamine, and glycine — compounds that support joint health, gut lining, and immune function in dogs of all ages.",
    excerptPt: "Além da hidratação e sabor, o caldo de ossos fornece colagénio, glucosamina e glicina — compostos que suportam a saúde das articulações, o revestimento intestinal e a função imunitária em cães de todas as idades.",
    image: "/images/L1006537.JPG",
    date: "March 2026",
    readTime: "5 min",
  },
  {
    slug: "meet-corte-fino",
    category: "Story / História",
    title: "Meet Corte Fino, our partner butcher.",
    titlePt: "Conheça o Corte Fino, o nosso talho parceiro.",
    excerpt: "For three generations, Corte Fino has been the go-to butcher for families in Lisboa. Now, they're helping us close the loop on food waste — one cut at a time.",
    excerptPt: "Há três gerações, o Corte Fino é o talho de referência para famílias em Lisboa. Agora, estão a ajudar-nos a fechar o ciclo do desperdício alimentar — um corte de cada vez.",
    image: "/images/L1006560.JPG",
    date: "February 2026",
    readTime: "3 min",
  },
  {
    slug: "understanding-organ-meats",
    category: "Nutrition / Nutrição",
    title: "Understanding organ meats for dogs.",
    titlePt: "Entender as vísceras para cães.",
    excerpt: "Liver, heart, and kidney aren't just affordable — they're nutritional powerhouses. Learn why organ meats should make up 10% of your dog's diet and how to introduce them safely.",
    excerptPt: "Fígado, coração e rim não são apenas acessíveis — são potências nutricionais. Saiba por que as vísceras devem representar 10% da dieta do seu cão e como introduzi-las em segurança.",
    image: "/images/L1006546.JPG",
    date: "January 2026",
    readTime: "7 min",
  },
  {
    slug: "small-batches-big-difference",
    category: "Process / Processo",
    title: "Small batches, big difference.",
    titlePt: "Pequenos lotes, grande diferença.",
    excerpt: "Industrial pet food is made in massive quantities with long shelf lives. We do the opposite — limited runs, local sourcing, and complete traceability from butcher to bowl.",
    excerptPt: "A comida para animais industrial é feita em quantidades massivas com longos prazos de validade. Nós fazemos o oposto — produções limitadas, origem local e rastreabilidade completa do talho à tigela.",
    image: "/images/L1006525.JPG",
    date: "December 2025",
    readTime: "4 min",
  },
];

export default function JournalPage() {
  return (
    <>
      <Navigation />
      <main className="pt-20">
        {/* Header */}
        <section className="py-24 lg:py-32 bg-cream/30">
          <div className="max-w-7xl mx-auto px-6">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-6">
                Journal / Jornal
              </p>
              <h1 className="font-display text-5xl md:text-7xl text-ink mb-4 leading-tight">
                Stories from the slice.
              </h1>
              <p className="text-stone text-lg">Histórias da fatia.</p>
            </FadeIn>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
              <FadeIn direction="left">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <ImageZoom className="w-full h-full">
                    <Image
                      src={posts[0].image}
                      alt={posts[0].title}
                      fill
                      className="object-cover"
                      priority
                    />
                  </ImageZoom>
                </div>
              </FadeIn>
              <FadeIn direction="right" delay={0.2}>
                <div>
                  <span className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4 block">
                    {posts[0].category}
                  </span>
                  <h2 className="font-display text-4xl md:text-5xl text-ink mb-4 leading-tight">
                    {posts[0].title}
                  </h2>
                  <p className="text-stone text-lg italic mb-6">{posts[0].titlePt}</p>
                  <p className="text-ink leading-relaxed mb-4">
                    {posts[0].excerpt}
                  </p>
                  <p className="text-light-grey italic leading-relaxed mb-8">
                    {posts[0].excerptPt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-stone mb-8">
                    <span>{posts[0].date}</span>
                    <span className="w-1 h-1 rounded-full bg-stone" />
                    <span>{posts[0].readTime} read</span>
                  </div>
                  <span className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage border-b border-sage pb-1">
                    Read more / Ler mais →
                  </span>
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* Post Grid */}
        <section className="py-24 lg:py-32 bg-cream/20">
          <div className="max-w-7xl mx-auto px-6">
            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12" staggerDelay={0.12}>
              {posts.slice(1).map((post) => (
                <StaggerItem key={post.slug}>
                  <article className="group cursor-pointer">
                    <div className="relative aspect-[4/3] overflow-hidden mb-6">
                      <ImageZoom className="w-full h-full">
                        <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                        />
                      </ImageZoom>
                    </div>
                    <span className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-3 block">
                      {post.category}
                    </span>
                    <h3 className="font-display text-2xl text-ink mb-2 leading-tight group-hover:text-sage transition-colors duration-300">
                      {post.title}
                    </h3>
                    <p className="text-stone text-sm italic mb-4">{post.titlePt}</p>
                    <p className="text-ink/70 text-sm leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center gap-4 text-xs text-stone">
                      <span>{post.date}</span>
                      <span className="w-1 h-1 rounded-full bg-stone" />
                      <span>{post.readTime} read</span>
                    </div>
                  </article>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Newsletter / Stay Updated */}
        <section className="py-24 lg:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <FadeIn>
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-sage mb-4">
                Stay Updated / Mantenha-se Actualizado
              </p>
              <h2 className="font-display text-5xl md:text-6xl text-ink mb-4">
                New stories, fresh batches.
              </h2>
              <p className="text-stone text-lg mb-2">Novas histórias, lotes frescos.</p>
              <p className="text-ink leading-relaxed mb-10 max-w-2xl mx-auto">
                We share what we learn about natural feeding, local sourcing, and the occasional behind-the-scenes look at life in the kitchen. No spam, just slices of insight.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-6 py-4 bg-paper border border-warm-grey text-ink text-sm tracking-widest placeholder:text-stone focus:outline-none focus:border-sage transition-colors"
                />
                <button className="bg-sage text-warm-white px-8 py-4 text-sm tracking-[0.15em] uppercase hover:bg-sage-dark transition-colors duration-300">
                  Subscribe
                </button>
              </div>
              <p className="text-light-grey text-xs italic mt-4">
                Instagram @thewildslice for daily updates
              </p>
            </FadeIn>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

import Image from "next/image";
import FadeIn from "./animations/FadeIn";
import StaggerContainer, { StaggerItem } from "./animations/StaggerContainer";
import { ImageZoom } from "./animations/HoverEffects";

export default function InstagramStrip() {
  return (
    <section className="py-16 border-y border-warm-grey/50">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="flex items-center justify-between mb-8">
            <h3 className="font-display text-2xl text-ink">
              @thewildslice
            </h3>
            <a
              href="https://instagram.com/thewildslice"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-sage hover:text-ink transition-colors border-b border-sage pb-1"
            >
              Follow Us / Seguir →
            </a>
          </div>
        </FadeIn>
        <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2" staggerDelay={0.08}>
          {[
            '/images/L1006525.JPG',
            '/images/L1006527.JPG',
            '/images/L1006536.JPG',
            '/images/L1006537.JPG',
            '/images/L1006539.JPG',
            '/images/L1006545.JPG',
          ].map((src, i) => (
            <StaggerItem key={i}>
              <a
                href="https://instagram.com/thewildslice"
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-square overflow-hidden group block"
              >
                <ImageZoom className="w-full h-full">
                  <Image
                    src={src}
                    alt={`Instagram post ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </ImageZoom>
                <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/30 transition-colors duration-300 flex items-center justify-center">
                  <InstagramIcon className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

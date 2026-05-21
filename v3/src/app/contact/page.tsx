import Image from "next/image";

export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-24">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <h1 className="font-display text-5xl md:text-6xl mb-4">Contact</h1>
          <h2 className="font-display text-3xl text-brand-charcoal/50 italic mb-12">Contacto</h2>
          
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl mb-4">Order via WhatsApp</h3>
              <p className="text-brand-charcoal/80 mb-6">
                We handle all our orders directly through WhatsApp to ensure a personal touch. DM us to see what&apos;s in stock this week.
              </p>
              <a 
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-brand-sage text-white rounded-full uppercase tracking-widest text-sm hover:bg-brand-sage/90 transition-colors"
              >
                Message Us
              </a>
            </div>
            
            <div>
              <h3 className="font-display text-2xl mb-4">Pickup Location</h3>
              <p className="text-brand-charcoal/80 mb-2">
                Orders can be picked up at our partner butcher shop in Lisboa.
              </p>
              <p className="font-mono text-sm text-brand-charcoal mb-4">
                Talho Partner Name<br/>
                Rua Example, 123<br/>
                Lisboa, Portugal
              </p>
              <p className="text-brand-charcoal/60 text-sm italic">
                Hours: Mon-Fri 9:00 - 19:00, Sat 9:00 - 13:00
              </p>
            </div>
            
            <div>
              <h3 className="font-display text-2xl mb-4">Email</h3>
              <p className="text-brand-charcoal/80 mb-2">
                For non-urgent enquiries or partnerships.
              </p>
              <a href="mailto:hello@thewildslice.pt" className="font-mono text-brand-sage hover:underline">
                hello@thewildslice.pt
              </a>
              <p className="text-brand-charcoal/60 text-sm italic mt-2">
                We aim to reply within 24 hours. / Respondemos em 24 horas.
              </p>
            </div>
          </div>
        </div>
        
        <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-brand-stone/20 hidden md:block">
          <Image 
            src="https://images.unsplash.com/photo-1537151608805-ea10bf1bb0f6?auto=format&fit=crop&w=1000&q=80"
            alt="Contact The Wild Slice"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  );
}
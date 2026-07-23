import Image from 'next/image';

const featureBadges = [
  '10+ Years Experience',
  '500+ Happy Clients',
  'Premium Materials',
  '5 Year Warranty',
];

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-4 py-12 sm:px-6 lg:px-8 lg:py-20">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(212,168,79,0.18),_transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(255,255,255,0.08),_transparent_32%)]" />

      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#d4a84f]/30 bg-[#d4a84f]/10 px-4 py-2 text-sm font-medium text-[#f5d28b] shadow-[0_10px_40px_rgba(212,168,79,0.12)]">
            <span className="h-2.5 w-2.5 rounded-full bg-[#f5d28b]" />
            Premium Modular Interiors • Tailored to Your Lifestyle
          </div>

          <h1 className="mt-8 text-4xl font-semibold leading-[0.95] tracking-[-0.03em] text-white sm:text-5xl lg:text-7xl">
            Luxury modular kitchens crafted for modern living.
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-300 sm:text-xl">
            From elegant kitchen layouts to refined wardrobes and sophisticated interiors, we bring timeless craftsmanship, seamless functionality, and bespoke design to every space.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#contact"
              className="rounded-full bg-[#f5d28b] px-6 py-3.5 text-center text-sm font-semibold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#f0c96d]"
            >
              Get Free Design Consultation
            </a>
            <a
              href="#portfolio"
              className="rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-center text-sm font-semibold text-white transition duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              View Portfolio
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {featureBadges.map((item) => (
              <div
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-zinc-200 backdrop-blur"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] border border-white/10 bg-white/10 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.45)] backdrop-blur-2xl">
            <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-zinc-950/70">
              <Image
                src="/hero-kitchen.svg"
                alt="Luxury modular kitchen interior illustration"
                width={900}
                height={900}
                priority
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="absolute -left-3 top-6 hidden rounded-2xl border border-[#d4a84f]/30 bg-black/85 px-4 py-3 shadow-[0_20px_50px_rgba(0,0,0,0.35)] backdrop-blur md:block">
            <p className="text-xs uppercase tracking-[0.3em] text-[#f5d28b]">Signature Finish</p>
            <p className="mt-1 text-sm font-semibold text-white">Italian hardware • Quartz surfaces</p>
          </div>

          <div className="absolute -bottom-4 right-4 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.3)] backdrop-blur">
            <p className="text-xs uppercase tracking-[0.3em] text-zinc-300">Design Timeline</p>
            <p className="mt-1 text-sm font-semibold text-white">4–6 weeks from concept to delivery</p>
          </div>
        </div>
      </div>
    </section>
  );
}

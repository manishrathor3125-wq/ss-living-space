import Image from 'next/image';
import { Button } from '../ui/button';
import { SectionContainer } from '../common/section-container';
import { contactDetails } from '@/lib/constants';

export function AboutHero() {
  return (
    <SectionContainer id="home" className="pt-20 pb-28 lg:pb-32">
      <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/60 shadow-[0_30px_90px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0">
          <Image
            src="/hero-kitchen.svg"
            alt="Luxury kitchen interior"
            fill
            className="object-cover opacity-80"
            priority
          />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,168,79,0.2),transparent_40%),linear-gradient(180deg,rgba(0,0,0,0.64),rgba(0,0,0,0.4))]" />
        </div>

        <div className="relative z-10 px-6 py-14 sm:px-10 sm:py-16 lg:px-14 lg:py-20">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5d28b]">
              About SS Living Space
            </p>
            <h1 className="mt-6 text-4xl font-semibold tracking-[-0.03em] text-white sm:text-5xl lg:text-6xl">
              A refined legacy of luxury interiors crafted for modern living.
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300 sm:text-xl">
              We design premium kitchens, wardrobes, and interiors with a thoughtful balance of function, warmth, and quiet sophistication. Every project is built around intelligent spatial planning, premium materials, and a timeless finish.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Button href={`mailto:${contactDetails.email}`} variant="primary">
                Book Free Consultation
              </Button>
              <Button href={contactDetails.whatsappUrl} variant="secondary" className="w-full sm:w-auto">
                Message on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

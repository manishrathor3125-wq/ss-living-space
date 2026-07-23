import { Card } from '../ui/card';
import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';

export function StorySection() {
  return (
    <SectionContainer id="story">
      <SectionHeading
        eyebrow="Company Story"
        title="How SS Living Space became a destination for premium modular interiors."
        description="A thoughtful journey from a boutique design studio into a trusted name for luxury kitchens and interiors in India."
      />

      <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8 text-zinc-300">
          <p className="text-lg leading-8 sm:text-xl">
            SS Living Space began with a simple belief: exceptional interiors should feel effortless, personal, and enduring. Over a decade, that belief has shaped every kitchen, wardrobe, and living space we create.
          </p>
          <p className="text-lg leading-8 sm:text-xl">
            Our process blends architectural clarity with curated materials and refined details. We pair premium finishes with practical layouts so every design performs beautifully in daily life.
          </p>
        </div>

        <Card variant="surface" className="border-white/10 bg-black/30 p-10">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f5d28b]">Our ethos</p>
            <h3 className="text-3xl font-semibold text-white">Designed for modern homes, built to last a lifetime.</h3>
            <p className="text-base leading-8 text-zinc-300">
              Every interior is tailored with premium hardware, clean joinery, and refined textures. We believe luxury is in the details — from seamless storage to beautifully balanced lighting.
            </p>
            <div className="grid gap-4 text-sm text-zinc-400 sm:grid-cols-2">
              <div>
                <p className="font-semibold text-white">Premium materials</p>
                <p>Hardwearing surfaces chosen for beauty and longevity.</p>
              </div>
              <div>
                <p className="font-semibold text-white">Intelligent planning</p>
                <p>Spaces designed around how you live, work, and entertain.</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </SectionContainer>
  );
}

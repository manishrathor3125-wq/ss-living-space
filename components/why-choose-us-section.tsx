import { SectionHeading } from './section-heading';

type Benefit = {
  title: string;
  description: string;
};

const benefits: Benefit[] = [
  {
    title: 'Premium Material',
    description: 'High-end laminates, hardware, and finishes sourced for durability and elegance.',
  },
  {
    title: 'Custom Design',
    description: 'Every layout is tailored to your space, style, and storage requirements.',
  },
  {
    title: 'Affordable Pricing',
    description: 'Transparent quotes and value-driven solutions that respect your budget.',
  },
  {
    title: 'On Time Delivery',
    description: 'Carefully planned timelines with dependable execution from start to finish.',
  },
  {
    title: 'Experienced Team',
    description: 'A specialist team combining design expertise, craftsmanship, and project management.',
  },
  {
    title: 'After Sales Support',
    description: 'Long-term care and support to ensure your interiors remain flawless over time.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-white/10 bg-gradient-to-br from-white/10 to-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] sm:p-12 lg:p-16">
        <SectionHeading
          eyebrow="Why Choose Us"
          title="Luxury design, delivered with clarity and confidence."
          description="We combine timeless aesthetics with thoughtful engineering to create interiors that feel effortless, elevated, and personal."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="rounded-[1.25rem] border border-white/10 bg-black/25 p-6 transition duration-300 hover:border-[#f5d28b]/40 hover:bg-black/40"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#f5d28b]/15 text-[#f5d28b]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mt-5 text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

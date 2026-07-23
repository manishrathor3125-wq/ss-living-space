import { Card } from '../ui/card';
import { IconWrapper } from '../ui/icon-wrapper';
import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';

const reasons = [
  {
    title: 'Quality',
    description: 'Premium materials and craftsmanship that endure for years of daily use.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l6 4v5a6 6 0 1 1-12 0V6l6-4z" />
      </svg>
    ),
  },
  {
    title: 'Design',
    description: 'Elegant interiors with balanced proportions, refined textures, and modern polish.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h8m-8 5h16" />
      </svg>
    ),
  },
  {
    title: 'Warranty',
    description: 'Confident support with a comprehensive warranty on workmanship and finishes.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2l7 4v5a7 7 0 0 1-14 0V6l7-4z" />
        <path strokeLinecap="round" d="M9.5 12.5l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Experience',
    description: 'A decade of refined interiors and a team committed to thoughtful delivery.',
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 10c5 0 8 2.5 8 5v1H4v-1c0-2.5 3-5 8-5z" />
      </svg>
    ),
  },
];

export function WhyChooseUsSection() {
  return (
    <SectionContainer id="why-choose-us">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="A premium experience rooted in quality, design, and trust."
        description="Four reasons our clients choose SS Living Space for their most important interiors."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map((reason) => (
          <Card key={reason.title} variant="surface" className="space-y-6 border-white/10 bg-black/25 p-8 transition duration-300 hover:border-[#f5d28b]/40 hover:bg-black/40">
            <IconWrapper variant="primary" className="h-12 w-12 rounded-3xl border-[#f5d28b]/30 bg-[#f5d28b]/10 text-[#f5d28b]">
              {reason.icon}
            </IconWrapper>
            <div className="space-y-3">
              <h3 className="text-xl font-semibold text-white">{reason.title}</h3>
              <p className="text-sm leading-7 text-zinc-300">{reason.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

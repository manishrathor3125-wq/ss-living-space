import { Card } from '../ui/card';
import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';

const statements = [
  {
    title: 'Our Mission',
    description:
      'To create premium interiors that combine exceptional craftsmanship, refined aesthetics, and intuitive functionality for every home.',
  },
  {
    title: 'Our Vision',
    description:
      'To be the leading choice for luxury modular interiors, known for thoughtful design, trusted delivery, and enduring quality.',
  },
];

export function MissionVisionSection() {
  return (
    <SectionContainer id="mission-vision">
      <SectionHeading
        eyebrow="Mission & Vision"
        title="A clear direction that guides every design decision." 
        description="Our values shape each space with purpose, precision, and a premium finish." 
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {statements.map((statement) => (
          <Card key={statement.title} variant="soft" className="border-white/10 bg-white/5 p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-[#f5d28b]">{statement.title}</p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{statement.title}</h3>
            <p className="mt-4 text-base leading-8 text-zinc-300">{statement.description}</p>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

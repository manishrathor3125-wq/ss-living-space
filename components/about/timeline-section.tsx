import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';

const timeline = [
  {
    year: '2014',
    title: 'Studio beginnings',
    description: 'Founded with a focus on handcrafted interiors for discerning clients.',
  },
  {
    year: '2017',
    title: 'First luxury kitchen collections',
    description: 'Expanded into premium modular kitchens with bespoke storage solutions.',
  },
  {
    year: '2020',
    title: 'Residential and hospitality growth',
    description: 'Delivered refined interiors for homes and boutique hospitality projects.',
  },
  {
    year: '2023',
    title: 'Trusted quality assurance',
    description: 'Introduced stronger warranty support, installation care, and white-glove service.',
  },
  {
    year: '2026',
    title: 'Ongoing refined living',
    description: 'Continuing to craft elegant spaces with premium finishes and thoughtful detail.',
  },
];

export function TimelineSection() {
  return (
    <SectionContainer id="timeline">
      <SectionHeading
        eyebrow="Company Timeline"
        title="A measured journey of growth, refinement, and premium delivery."
        description="A vertical timeline that highlights our most important milestones and design evolution."
      />

      <div className="mt-12 relative">
        <div className="absolute left-5 top-0 h-full w-px bg-white/10" />
        <div className="space-y-12">
          {timeline.map((item, index) => (
            <div key={item.year} className="relative pl-12">
              <div className="absolute left-0 top-1 h-3.5 w-3.5 rounded-full bg-[#f5d28b] shadow-[0_0_0_8px_rgba(245,210,139,0.08)]" />
              <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5d28b]">{item.year}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{item.title}</h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-300">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}

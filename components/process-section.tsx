import { SectionHeading } from './section-heading';

const steps = [
  {
    title: '01. Consultation',
    description: 'We begin with an in-depth conversation to understand your vision, space, and lifestyle.',
  },
  {
    title: '02. Design',
    description: 'Our team creates detailed concepts and material palettes tailored to your project.',
  },
  {
    title: '03. Manufacturing',
    description: 'Every cabinet, unit, and finish is crafted with precision and premium workmanship.',
  },
  {
    title: '04. Installation',
    description: 'Our expert installers bring the design to life with flawless execution and care.',
  },
];

export function ProcessSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Our Process"
          title="A refined process from concept to completion."
          description="We keep every phase elegant, transparent, and perfectly aligned with your expectations."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-4">
          {steps.map((step) => (
            <div
              key={step.title}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#f5d28b]/30 bg-[#f5d28b]/10 text-sm font-semibold text-[#f5d28b]">
                {step.title.split('.')[0]}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{step.title.replace(/^\d+\.\s*/, '')}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

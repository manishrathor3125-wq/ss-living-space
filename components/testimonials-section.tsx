import { SectionHeading } from './section-heading';

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    name: 'Aarav Sharma',
    role: 'Luxury Home Client',
    quote:
      'The attention to detail was exceptional. The kitchen feels like a showroom piece and functions perfectly for daily life.',
  },
  {
    name: 'Meera Kapoor',
    role: 'Bespoke Wardrobe Client',
    quote:
      'From concept to installation, everything felt seamless. The result is elegant, timeless, and incredibly organized.',
  },
  {
    name: 'Rohan Verma',
    role: 'Office Interior Client',
    quote:
      'Our office transformed into a premium, productive space. The quality and finish exceeded our expectations.',
  },
];

export function TestimonialsSection() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Testimonials"
          title="Trusted by clients who value excellence."
          description="Our clients return for the craftsmanship, service, and sense of calm our spaces create."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="rounded-[1.5rem] border border-white/10 bg-white/5 p-7 shadow-[0_20px_60px_rgba(0,0,0,0.2)]"
            >
              <p className="text-lg leading-8 text-zinc-200">“{testimonial.quote}”</p>
              <div className="mt-6">
                <p className="font-semibold text-white">{testimonial.name}</p>
                <p className="mt-1 text-sm text-[#f5d28b]">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

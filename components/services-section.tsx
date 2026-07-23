import type { ReactNode } from 'react';

type Service = {
  title: string;
  description: string;
  icon: ReactNode;
};

const services: Service[] = [
  {
    title: 'Modular Kitchen',
    description: 'Elegant layouts with smart storage, premium finishes, and seamless functionality.',
    icon: <KitchenIcon />,
  },
  {
    title: 'Wardrobe',
    description: 'Bespoke wardrobes designed for effortless organization and refined aesthetics.',
    icon: <WardrobeIcon />,
  },
  {
    title: 'TV Unit',
    description: 'Minimalist entertainment units that blend technology with sculptural design.',
    icon: <TvIcon />,
  },
  {
    title: 'Bedroom Interior',
    description: 'Restorative bedroom spaces with comfort, texture, and elevated detailing.',
    icon: <BedIcon />,
  },
  {
    title: 'Office Interior',
    description: 'Luxury office environments that elevate productivity and brand presence.',
    icon: <OfficeIcon />,
  },
  {
    title: 'False Ceiling',
    description: 'Architectural ceilings with ambient lighting and visual depth.',
    icon: <CeilingIcon />,
  },
  {
    title: 'Interior Design',
    description: 'Full-home styling that balances practicality, comfort, and timeless beauty.',
    icon: <DesignIcon />,
  },
  {
    title: 'Space Planning',
    description: 'Smart spatial solutions that maximize flow, light, and daily usability.',
    icon: <PlanIcon />,
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5d28b]">
              Our Services
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Tailored spaces for every room, crafted with precision.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-zinc-300">
            Every project is shaped around your lifestyle, with premium materials and an uncompromising attention to detail.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)] transition duration-300 hover:-translate-y-2 hover:border-[#f5d28b]/40 hover:bg-[#f5d28b]/10"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5d28b]/30 bg-[#f5d28b]/10 text-[#f5d28b] transition group-hover:scale-110">
                {service.icon}
              </div>
              <h3 className="mt-6 text-xl font-semibold text-white">{service.title}</h3>
              <p className="mt-3 text-sm leading-7 text-zinc-300">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function KitchenIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M6 8v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V8M8 12h8" />
    </svg>
  );
}

function WardrobeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="4" width="16" height="16" rx="2" />
      <path strokeLinecap="round" d="M8 4v16M16 4v16" />
    </svg>
  );
}

function TvIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="3" y="6" width="18" height="12" rx="2" />
      <path strokeLinecap="round" d="m8 20 4-3 4 3" />
    </svg>
  );
}

function BedIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" d="M4 10h16M5 10V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3M6 10v6m12-6v6" />
    </svg>
  );
}

function OfficeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" d="M9 19v-4h6v4" />
    </svg>
  );
}

function CeilingIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" d="M5 8c2-3 5-4 7-4s5 1 7 4M5 13h14" />
      <path strokeLinecap="round" d="M7 13v6m10-6v6" />
    </svg>
  );
}

function DesignIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <path strokeLinecap="round" d="M6 8h12M7 4h10M8 12h8M8 16h6" />
      <path strokeLinecap="round" d="M5 20h14" />
    </svg>
  );
}

function PlanIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7">
      <rect x="4" y="5" width="16" height="14" rx="2" />
      <path strokeLinecap="round" d="M8 9h8M8 13h5" />
    </svg>
  );
}

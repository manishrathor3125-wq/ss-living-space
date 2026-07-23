'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './section-heading';

type Project = {
  title: string;
  category: string;
  description: string;
  tags: string[];
  background: string;
  span?: string;
};

const projects: Project[] = [
  {
    title: 'Monarch Kitchen',
    category: 'Kitchen',
    description: 'A sculptural kitchen with walnut tones, premium marble, and concealed storage.',
    tags: ['Italian Hardware', 'Quartz Top'],
    background: 'radial-gradient(circle at top left, rgba(212,168,79,0.2), transparent 30%), linear-gradient(180deg, rgba(6,6,6,0.96), rgba(20,16,12,0.92)), url("/hero-kitchen.svg")',
    span: 'lg:row-span-2 lg:col-span-2',
  },
  {
    title: 'Velvet Wardrobe',
    category: 'Wardrobe',
    description: 'Matte lacquer finishes, integrated lighting, and refined storage zones.',
    tags: ['Custom Design', 'Soft-close'],
    background: 'radial-gradient(circle at top right, rgba(245,210,139,0.18), transparent 32%), linear-gradient(180deg, rgba(3,3,3,0.95), rgba(15,13,10,0.9))',
  },
  {
    title: 'Luxe Living Room',
    category: 'Living',
    description: 'Layered textures and bespoke joinery for an inviting luxury lounge.',
    tags: ['Premium Materials', 'Ambient Light'],
    background: 'radial-gradient(circle at center, rgba(212,168,79,0.18), transparent 35%), linear-gradient(180deg, rgba(11,11,11,0.96), rgba(18,16,13,0.92))',
  },
  {
    title: 'Studio Office',
    category: 'Office',
    description: 'A polished executive space built for focus, comfort, and style.',
    tags: ['German Technology', 'Smart Storage'],
    background: 'radial-gradient(circle at bottom left, rgba(255,255,255,0.08), transparent 30%), linear-gradient(180deg, rgba(10,10,10,0.96), rgba(20,18,15,0.92))',
  },
];

export function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A curated gallery of our most luxurious interior transformations."
          description="Large, cinematic visuals with refined detailing and premium finishes for every space."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.title}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.35, ease: 'easeOut' }}
              className={`group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)] ${project.span ?? ''}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: project.background }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="relative flex h-full min-h-[280px] flex-col justify-between p-8">
                <div className="space-y-4">
                  <span className="inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-zinc-200 backdrop-blur">
                    {project.category}
                  </span>
                  <h3 className="text-3xl font-semibold text-white sm:text-4xl">{project.title}</h3>
                  <p className="max-w-xl text-sm leading-7 text-zinc-300">{project.description}</p>
                </div>

                <div className="space-y-4">
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <a
                    href="#portfolio"
                    className="inline-flex items-center justify-center rounded-full border border-[#f5d28b]/30 bg-[#f5d28b]/10 px-6 py-3 text-sm font-semibold text-[#f5d28b] transition duration-300 hover:-translate-y-0.5 hover:bg-[#f5d28b]/20"
                  >
                    View Project
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

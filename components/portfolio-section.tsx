'use client';

import { useState } from 'react';
import { SectionHeading } from './section-heading';

type Project = {
  title: string;
  category: 'Kitchen' | 'Wardrobe' | 'Living' | 'Office';
  description: string;
  accent: string;
};

const projects: Project[] = [
  {
    title: 'Monarch Kitchen',
    category: 'Kitchen',
    description: 'A sculptural kitchen with walnut tones and hidden storage.',
    accent: 'from-[#d3a04e] via-[#7a5621] to-[#111111]',
  },
  {
    title: 'Velvet Wardrobe',
    category: 'Wardrobe',
    description: 'A refined storage solution with ambient lighting and matte finish.',
    accent: 'from-[#f4e7c8] via-[#b6914d] to-[#1a1a1a]',
  },
  {
    title: 'Luxe Living Room',
    category: 'Living',
    description: 'A warm, layered living space designed for hosting and comfort.',
    accent: 'from-[#333333] via-[#8b6b2c] to-[#050505]',
  },
  {
    title: 'Studio Office',
    category: 'Office',
    description: 'An elegant workspace blending minimalism with executive function.',
    accent: 'from-[#111111] via-[#3a2c0f] to-[#d4a84f]',
  },
];

const filters = ['All', 'Kitchen', 'Wardrobe', 'Living', 'Office'] as const;

type Filter = (typeof filters)[number];

export function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<Filter>('All');

  const visibleProjects =
    activeFilter === 'All'
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <section id="portfolio" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow="Portfolio"
            title="Recent projects with quiet luxury and lasting impact."
            description="Each project reflects a balance of architectural clarity, premium materials, and intuitive living."
          />

          <div className="flex flex-wrap gap-3">
            {filters.map((filter) => {
              const isActive = filter === activeFilter;
              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => setActiveFilter(filter)}
                  className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                    isActive
                      ? 'border-[#f5d28b] bg-[#f5d28b] text-black'
                      : 'border-white/10 bg-white/5 text-zinc-300 hover:border-[#f5d28b]/40 hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {visibleProjects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.28)]"
            >
              <div className={`h-56 bg-gradient-to-br ${project.accent} p-8`}>
                <div className="flex h-full flex-col justify-between rounded-[1.25rem] border border-white/20 bg-black/20 p-6 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <span className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white">
                      {project.category}
                    </span>
                    <span className="text-sm font-medium text-[#f5d28b]">Featured</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-zinc-200">{project.description}</p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-medium text-zinc-300">Luxury interior transformation</p>
                  <span className="text-sm font-semibold text-[#f5d28b] transition group-hover:translate-x-1">
                    Explore →
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

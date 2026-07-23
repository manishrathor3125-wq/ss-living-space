'use client';

import { motion } from 'framer-motion';
import { SectionHeading } from './section-heading';

const steps = [
  {
    title: 'Consultation',
    description: 'Understand your needs, style, and spatial goals through a premium discovery session.',
    icon: '💬',
  },
  {
    title: 'Site Visit',
    description: 'Assess your space precisely to capture dimensions, light, and architectural details.',
    icon: '📐',
  },
  {
    title: '3D Design',
    description: 'Bring the concept to life with photorealistic visuals and thoughtful spatial planning.',
    icon: '🖥️',
  },
  {
    title: 'Material Selection',
    description: 'Curate finishes, hardware, and textures that marry beauty with enduring performance.',
    icon: '🧵',
  },
  {
    title: 'Manufacturing',
    description: 'Craft every element with precision engineering and premium workmanship.',
    icon: '🏭',
  },
  {
    title: 'Installation',
    description: 'Execute flawless installation and hand over a finished space ready to live in.',
    icon: '🔧',
  },
];

export function DesignTimelineSection() {
  return (
    <section id="timeline" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Design Process"
          title="A refined timeline that guides every luxury project with clarity."
          description="Six elegant steps from first conversation to final installation, designed for a seamless premium experience."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl border border-[#f5d28b]/30 bg-[#f5d28b]/10 text-2xl text-[#f5d28b] shadow-sm shadow-[#d4a84f]/10">
                {step.icon}
              </div>
              <p className="mt-6 text-sm uppercase tracking-[0.35em] text-[#f5d28b]">Step {index + 1}</p>
              <h3 className="mt-3 text-2xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-sm leading-7 text-zinc-300">{step.description}</p>

              {index < steps.length - 1 ? (
                <div className="absolute left-1/2 top-full mt-5 hidden h-12 w-px -translate-x-1/2 rounded-full bg-white/10 lg:block">
                  <div className="absolute inset-x-0 top-0 h-full bg-gradient-to-b from-transparent via-white/20 to-transparent" />
                </div>
              ) : null}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { SectionContainer } from './common/section-container';
import { SectionHeading } from './section-heading';

const brands = ['Palazzo', 'Milan Atelier', 'Noir Home', 'Luna Studio', 'Aria Collective', 'Vogue Living'];

export function BrandPartnersSection() {
  return (
    <SectionContainer id="partners" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
          eyebrow="Brand Partners"
          title="Trusted by premium furniture and design partners across the globe."
          description="Monochrome brand marks with a restrained, upscale presentation for a clean luxury identity."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {brands.map((brand, index) => (
            <motion.div
              key={brand}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
            >
              <Card className="flex h-28 items-center justify-center px-6 text-center shadow-[0_24px_60px_rgba(0,0,0,0.18)]">
                <span className="text-lg font-semibold uppercase tracking-[0.35em] text-zinc-200 sm:text-xl">
                  {brand}
                </span>
              </Card>
            </motion.div>
          ))}
        </div>
      </SectionContainer>
  );
}

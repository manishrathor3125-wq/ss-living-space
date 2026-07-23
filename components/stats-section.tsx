'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { Card } from './ui/card';
import { SectionContainer } from './common/section-container';
import { SectionHeading } from './section-heading';

const stats = [
  { label: 'Projects', value: 500, suffix: '+' },
  { label: 'Years Experience', value: 10, suffix: '+' },
  { label: 'Client Satisfaction', value: 100, suffix: '%' },
  { label: 'Years Warranty', value: 5, suffix: '' },
];

function useCountUp(target: number, active: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let frame: number;
    const duration = 1500;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        frame = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    frame = requestAnimationFrame(step);

    return () => cancelAnimationFrame(frame);
  }, [active, target]);

  return count;
}

export function StatsSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });

  return (
    <SectionContainer id="stats" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Milestones"
        title="A track record of premium spaces delivered with excellence."
        description="View our core performance metrics, animated on scroll for a subtle luxury reveal."
      />

      <div ref={ref} className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat, index) => {
          const count = useCountUp(stat.value, isInView);
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <Card className="text-center" variant="soft">
                <p className="text-5xl font-semibold tracking-[-0.04em] text-white">
                  {count}
                  <span className="text-3xl">{stat.suffix}</span>
                </p>
                <p className="mt-4 text-sm uppercase tracking-[0.4em] text-[#f5d28b]">
                  {stat.label}
                </p>
              </Card>
            </motion.div>
          );
        })}
      </div>
    </SectionContainer>
  );
}

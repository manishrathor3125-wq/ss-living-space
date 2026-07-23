'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { SectionHeading } from './section-heading';

export function BeforeAfterSection() {
  const [position, setPosition] = useState(50);

  return (
    <section id="before-after" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Before & After"
          title="Experience the transformation with an interactive luxury slider."
          description="Move the slider to compare the refined before and after styling of our premium interiors."
        />

        <div className="mt-12 space-y-8">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-black/50 shadow-[0_30px_90px_rgba(0,0,0,0.35)]">
            <div className="relative h-[540px] overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(212,168,79,0.18),transparent_35%)]" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(0,0,0,0.38),transparent_55%)]" />

              <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-2">
                <div className="relative overflow-hidden border-r border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.04),transparent)]" />
                  <div className="relative flex h-full items-end p-10">
                    <div className="max-w-sm">
                      <span className="text-xs uppercase tracking-[0.35em] text-[#f5d28b]">Before</span>
                      <h3 className="mt-4 text-4xl font-semibold text-white">Classic composition with muted tones.</h3>
                      <p className="mt-5 text-sm leading-7 text-zinc-300">A textured lounge before the premium installation gives way to an elevated aesthetic.</p>
                    </div>
                  </div>
                </div>
                <div className="relative overflow-hidden bg-[radial-gradient(circle_at_top_right,rgba(212,168,79,0.16),transparent_45%)]">
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.2),transparent)]" />
                  <div className="relative flex h-full items-end justify-end p-10 text-right">
                    <div className="max-w-sm">
                      <span className="text-xs uppercase tracking-[0.35em] text-[#f5d28b]">After</span>
                      <h3 className="mt-4 text-4xl font-semibold text-white">Sleek luxury finishes with crisp modernity.</h3>
                      <p className="mt-5 text-sm leading-7 text-zinc-300">The transformed space reveals premium hardware, bold textures, and luminous detailing.</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}>
                <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04),transparent_45%)] mix-blend-screen" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.12),transparent_18%)]" />
              </div>

              <div className="absolute top-1/2 z-20 -translate-y-1/2" style={{ left: `calc(${position}% - 26px)` }}>
                <motion.div
                  className="flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-[#f5d28b] shadow-[0_15px_40px_rgba(0,0,0,0.45)]"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut' }}
                >
                  ⇋
                </motion.div>
              </div>
            </div>

            <div className="border-t border-white/10 bg-black/80 px-6 py-8 backdrop-blur sm:px-8">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.35em] text-[#f5d28b]">Slide to compare</p>
                  <p className="mt-2 max-w-2xl text-sm leading-7 text-zinc-300">
                    Drag the handle to reveal the refined after image and see how premium design elevates every corner.
                  </p>
                </div>
                <div className="w-full max-w-2xl lg:w-1/2">
                  <input
                    type="range"
                    min={0}
                    max={100}
                    value={position}
                    onChange={(event) => setPosition(Number(event.target.value))}
                    className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-[#f5d28b]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

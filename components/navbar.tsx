'use client';

import Link from 'next/link';
import { useState } from 'react';

const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Portfolio', href: '#portfolio' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 sm:pt-6">
      <nav className="mx-auto flex max-w-7xl flex-wrap items-center justify-between rounded-full border border-white/10 bg-black/70 px-4 py-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl sm:px-6 lg:px-8">
        <Link href="#home" className="flex items-center gap-3 text-sm font-semibold tracking-[0.35em] text-white uppercase">
          <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 text-base font-semibold text-[#f5d28b]">
            SS
          </span>
          <span className="text-[0.95rem] sm:text-[1rem]">SS Living Space</span>
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-zinc-300 transition hover:text-[#f5d28b]"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <a
            href="tel:+919876543210"
            className="rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-4 py-2 text-sm font-semibold text-[#f5d28b] transition hover:-translate-y-0.5 hover:bg-[#d4a84f]/20"
          >
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210"
            target="_blank"
            rel="noreferrer"
            className="rounded-full bg-[#f5d28b] px-4 py-2 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f0c96d]"
          >
            WhatsApp
          </a>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </nav>

      {isOpen ? (
        <div className="mx-auto mt-3 max-w-7xl rounded-[1.5rem] border border-white/10 bg-black/80 p-4 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="rounded-2xl px-3 py-2 text-sm font-medium text-zinc-300 transition hover:bg-white/10 hover:text-[#f5d28b]"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex flex-col gap-2 sm:hidden">
              <a
                href="tel:+919876543210"
                className="rounded-full border border-[#d4a84f]/40 bg-[#d4a84f]/10 px-4 py-2 text-center text-sm font-semibold text-[#f5d28b]"
              >
                Call Now
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#f5d28b] px-4 py-2 text-center text-sm font-semibold text-black"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}

import { SectionHeading } from './section-heading';

export function ContactSection() {
  return (
    <section id="contact" className="px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto grid max-w-7xl gap-8 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.28)] lg:grid-cols-[0.95fr_1.05fr] lg:p-12">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let’s design a space that feels unmistakably yours."
            description="Whether you’re planning a kitchen, wardrobe, or whole-home interior, we would love to hear your vision."
          />

          <div className="mt-8 space-y-4 text-zinc-300">
            <p className="text-lg">📍 Mumbai, India</p>
            <p className="text-lg">📞 +91 98765 43210</p>
            <p className="text-lg">✉️ hello@sslivingspace.com</p>
          </div>
        </div>

        <form className="rounded-[1.5rem] border border-white/10 bg-black/30 p-6">
          <div className="grid gap-5 sm:grid-cols-2">
            <input
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-400"
              placeholder="Your Name"
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-400"
              placeholder="Email Address"
            />
            <input
              className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-400 sm:col-span-2"
              placeholder="Phone Number"
            />
            <textarea
              className="min-h-32 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-white outline-none ring-0 placeholder:text-zinc-400 sm:col-span-2"
              placeholder="Tell us about your project"
            />
          </div>

          <button
            type="button"
            className="mt-6 inline-flex rounded-full bg-[#f5d28b] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f0c96d]"
          >
            Request a Consultation
          </button>
        </form>
      </div>
    </section>
  );
}

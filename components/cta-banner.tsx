export function CtaBanner() {
  return (
    <section className="px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[2rem] border border-[#f5d28b]/30 bg-gradient-to-r from-[#f5d28b]/20 via-black/70 to-[#d4a84f]/15 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.3)] sm:p-10 lg:p-12">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#f5d28b]">
              Let’s Begin Your Project
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">
              Ready to transform your space into something extraordinary?
            </h2>
            <p className="mt-4 text-lg leading-8 text-zinc-300">
              Book a complimentary consultation and discover how premium interiors can elevate daily living.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#f5d28b] px-6 py-3.5 text-sm font-semibold text-black transition hover:-translate-y-0.5 hover:bg-[#f0c96d]"
          >
            Schedule Consultation
          </a>
        </div>
      </div>
    </section>
  );
}

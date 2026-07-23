export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-zinc-400 sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 SS Living Space. All rights reserved.</p>
        <div className="flex flex-wrap gap-4">
          <a href="#home" className="transition hover:text-[#f5d28b]">
            Home
          </a>
          <a href="#services" className="transition hover:text-[#f5d28b]">
            Services
          </a>
          <a href="#portfolio" className="transition hover:text-[#f5d28b]">
            Portfolio
          </a>
          <a href="#contact" className="transition hover:text-[#f5d28b]">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

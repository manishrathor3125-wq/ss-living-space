import { CtaBanner } from '@/components/cta-banner';
import { ContactSection } from '@/components/contact-section';
import { Footer } from '@/components/footer';
import { HeroSection } from '@/components/hero-section';
import { Navbar } from '@/components/navbar';
import { PortfolioSection } from '@/components/portfolio-section';
import { ProcessSection } from '@/components/process-section';
import { ServicesSection } from '@/components/services-section';
import { TestimonialsSection } from '@/components/testimonials-section';
import { WhyChooseUsSection } from '@/components/why-choose-us-section';

export default function Home() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(212,168,79,0.18),_transparent_22%),linear-gradient(135deg,_#060606_0%,_#111111_45%,_#050505_100%)] text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col px-3 py-3 sm:px-4 lg:px-6">
        <Navbar />
        <HeroSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <PortfolioSection />
        <ProcessSection />
        <TestimonialsSection />
        <CtaBanner />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}

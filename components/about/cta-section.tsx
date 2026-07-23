import { Button } from '../ui/button';
import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';
import { contactDetails } from '@/lib/constants';

export function AboutCtaSection() {
  return (
    <SectionContainer id="contact" className="px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <div className="mx-auto max-w-5xl rounded-[2rem] border border-[#f5d28b]/30 bg-gradient-to-r from-[#f5d28b]/20 via-black/70 to-[#d4a84f]/15 p-10 shadow-[0_24px_80px_rgba(0,0,0,0.3)]">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-3xl">
            <SectionHeading
              eyebrow="Final CTA"
              title="Ready to begin your premium interiors journey?"
              description="Connect with us for a complimentary consultation and discover how luxury design can transform your home."
            />
          </div>
          <Button href={`mailto:${contactDetails.email}`} variant="primary">
            Book Free Consultation
          </Button>
        </div>
      </div>
    </SectionContainer>
  );
}

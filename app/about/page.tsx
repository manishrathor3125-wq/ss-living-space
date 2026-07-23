import { AboutHero } from '@/components/about/hero';
import { StorySection } from '@/components/about/story-section';
import { MissionVisionSection } from '@/components/about/mission-vision';
import { WhyChooseUsSection } from '@/components/about/why-choose-us';
import { TimelineSection } from '@/components/about/timeline-section';
import { TeamSection } from '@/components/about/team-section';
import { AboutCtaSection } from '@/components/about/cta-section';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(212,168,79,0.18),_transparent_22%),linear-gradient(135deg,_#060606_0%,_#111111_45%,_#050505_100%)] text-white">
      <AboutHero />
      <StorySection />
      <MissionVisionSection />
      <WhyChooseUsSection />
      <TimelineSection />
      <TeamSection />
      <AboutCtaSection />
    </main>
  );
}

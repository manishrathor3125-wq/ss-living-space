import { Card } from '../ui/card';
import { SectionHeading } from '../ui/section-heading';
import { SectionContainer } from '../common/section-container';

const team = [
  { name: 'Aarav Patel', role: 'Design Director' },
  { name: 'Meera Joshi', role: 'Lead Project Manager' },
  { name: 'Riya Sharma', role: 'Senior Interior Architect' },
  { name: 'Karan Singh', role: 'Client Experience Lead' },
];

export function TeamSection() {
  return (
    <SectionContainer id="team">
      <SectionHeading
        eyebrow="Meet Our Team"
        title="A premium team dedicated to thoughtful interiors and seamless delivery."
        description="A carefully curated team of designers, project specialists, and delivery experts who bring every project to life." 
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {team.map((member) => (
          <Card key={member.name} variant="surface" className="space-y-5 p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-white/10 bg-white/5 text-3xl text-[#f5d28b]">
              {member.name.split(' ').map((part) => part[0]).join('')}
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white">{member.name}</h3>
              <p className="mt-2 text-sm uppercase tracking-[0.3em] text-zinc-400">{member.role}</p>
            </div>
          </Card>
        ))}
      </div>
    </SectionContainer>
  );
}

import type { ReactNode } from 'react';

type SectionContainerProps = {
  id?: string;
  className?: string;
  children: ReactNode;
};

export function SectionContainer({ id, className = '', children }: SectionContainerProps) {
  return (
    <section id={id} className={`px-4 py-20 sm:px-6 lg:px-8 lg:py-24 ${className}`.trim()}>
      <div className="mx-auto max-w-7xl">{children}</div>
    </section>
  );
}

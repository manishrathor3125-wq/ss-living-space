import type { HTMLAttributes, ReactNode } from 'react';

type CardProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: 'base' | 'surface' | 'soft';
};

const variantClasses: Record<NonNullable<CardProps['variant']>, string> = {
  base: 'rounded-[1.5rem] border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_rgba(0,0,0,0.24)]',
  surface: 'rounded-[1.25rem] border border-white/10 bg-black/25 p-6',
  soft: 'rounded-[1.75rem] border border-white/10 bg-white/5 p-8 shadow-[0_24px_80px_rgba(0,0,0,0.25)]',
};

export function Card({ children, className = '', variant = 'base', ...props }: CardProps) {
  return (
    <div className={`${variantClasses[variant]} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

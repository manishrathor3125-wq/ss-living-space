import type { HTMLAttributes } from 'react';

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: 'neutral' | 'accent' | 'outline';
};

const badgeStyles: Record<NonNullable<BadgeProps['variant']>, string> = {
  neutral: 'inline-flex rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.3em] text-zinc-200',
  accent: 'inline-flex rounded-full border border-[#f5d28b]/30 bg-[#f5d28b]/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-[#f5d28b]',
  outline: 'inline-flex rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.32em] text-zinc-200 backdrop-blur',
};

export function Badge({ className = '', variant = 'neutral', ...props }: BadgeProps) {
  return <span className={`${badgeStyles[variant]} ${className}`.trim()} {...props} />;
}

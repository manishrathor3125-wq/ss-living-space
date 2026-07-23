import type { HTMLAttributes, ReactNode } from 'react';

type IconWrapperProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
  variant?: 'primary' | 'soft' | 'outline';
};

const wrapperStyles: Record<NonNullable<IconWrapperProps['variant']>, string> = {
  primary: 'flex h-12 w-12 items-center justify-center rounded-2xl border border-[#f5d28b]/30 bg-[#f5d28b]/10 text-[#f5d28b]',
  soft: 'flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-[#f5d28b]',
  outline: 'flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/35 text-[#f5d28b]',
};

export function IconWrapper({ children, className = '', variant = 'primary', ...props }: IconWrapperProps) {
  return (
    <div className={`${wrapperStyles[variant]} ${className}`.trim()} {...props}>
      {children}
    </div>
  );
}

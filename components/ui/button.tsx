import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';

const baseStyles =
  'inline-flex items-center justify-center rounded-full px-6 py-3.5 text-sm font-semibold transition duration-300 ease-out';

const variants: Record<string, string> = {
  primary: 'bg-[#f5d28b] text-black hover:-translate-y-0.5 hover:bg-[#f0c96d]',
  secondary: 'border border-white/15 bg-white/5 text-white hover:-translate-y-0.5 hover:bg-white/10',
  accent: 'border border-[#d4a84f]/40 bg-[#d4a84f]/10 text-[#f5d28b] hover:-translate-y-0.5 hover:bg-[#d4a84f]/20',
  ghost: 'bg-transparent text-white hover:text-[#f5d28b]',
};

type ButtonBaseProps = {
  variant?: keyof typeof variants;
  className?: string;
  children: ReactNode;
};

type AnchorButtonProps = ButtonBaseProps & AnchorHTMLAttributes<HTMLAnchorElement> & { href: string };
type PlainButtonProps = ButtonBaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };

export type ButtonProps = AnchorButtonProps | PlainButtonProps;

export function Button({
  variant = 'primary',
  className = '',
  children,
  ...props
}: ButtonProps) {
  const classes = `${baseStyles} ${variants[variant]} ${className}`.trim();

  if ('href' in props && props.href) {
    const { href, target, rel, ...anchorProps } = props;
    return (
      <a href={href} target={target} rel={rel} className={classes} {...anchorProps}>
        {children}
      </a>
    );
  }

  const { type = 'button', ...buttonProps } = props as PlainButtonProps;
  return (
    <button type={type} className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

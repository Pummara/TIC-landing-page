import type { AnchorHTMLAttributes, ReactNode } from 'react'
import clsx from '../../lib/clsx'

type Variant = 'primary' | 'outline' | 'outline-light'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  children: ReactNode
}

const variantClasses: Record<Variant, string> = {
  primary:
    'sweep [--sweep-bg:theme(colors.ink.DEFAULT)] bg-gold text-ink hover:text-gold focus-visible:text-gold focus-visible:ring-gold-dark',
  outline:
    'sweep [--sweep-bg:theme(colors.ink.DEFAULT)] border-2 border-ink text-ink hover:text-paper-white focus-visible:text-paper-white focus-visible:ring-ink',
  'outline-light':
    'sweep [--sweep-bg:theme(colors.gold.DEFAULT)] border-2 border-paper-white/70 text-paper-white hover:border-gold hover:text-ink focus-visible:border-gold focus-visible:text-ink focus-visible:ring-paper-white',
}

export default function Button({ variant = 'primary', className, children, ...props }: ButtonProps) {
  return (
    <a
      className={clsx(
        'inline-flex items-center justify-center gap-2 px-8 py-3.5 font-display text-lg font-bold uppercase tracking-wide transition-colors duration-150',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
        variantClasses[variant],
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

import type { ComponentType, SVGProps } from 'react'
import clsx from '../../lib/clsx'

type Tone = 'ink' | 'outline-light' | 'outline-dark'

const toneClasses: Record<Tone, string> = {
  ink: 'bg-ink text-paper-white',
  'outline-light': 'bg-transparent text-paper-white border border-paper-white/60',
  'outline-dark': 'bg-transparent text-ink border border-ink/60',
}

interface IconBadgeProps {
  icon: ComponentType<SVGProps<SVGSVGElement>>
  tone?: Tone
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

const sizeClasses = {
  sm: 'h-10 w-10',
  md: 'h-14 w-14',
  lg: 'h-16 w-16',
}

const iconSizeClasses = {
  sm: 'h-5 w-5',
  md: 'h-6 w-6',
  lg: 'h-7 w-7',
}

/* A small notch clipped from the top-right corner — the ticket-stub stamp motif. */
const notchStyle = { clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }

export default function IconBadge({ icon: Icon, tone = 'ink', size = 'md', className }: IconBadgeProps) {
  return (
    <span
      style={notchStyle}
      className={clsx('inline-flex shrink-0 items-center justify-center', toneClasses[tone], sizeClasses[size], className)}
    >
      <Icon className={iconSizeClasses[size]} />
    </span>
  )
}

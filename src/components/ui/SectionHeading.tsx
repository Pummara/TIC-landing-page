import clsx from '../../lib/clsx'

interface SectionHeadingProps {
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'dark' | 'light'
  id?: string
}

export default function SectionHeading({ title, subtitle, align = 'left', tone = 'dark', id }: SectionHeadingProps) {
  const isCenter = align === 'center'
  const titleColor = tone === 'dark' ? 'text-ink' : 'text-paper-white'
  const subtitleColor = tone === 'dark' ? 'text-slatecopy' : 'text-paper-white/70'
  const ruleColor = tone === 'dark' ? 'bg-gold-dark' : 'bg-paper-white'

  return (
    <div className={clsx('max-w-2xl', isCenter && 'mx-auto text-center')}>
      <div className={clsx('flex items-center gap-3', isCenter && 'justify-center')}>
        <span className={clsx('h-[3px] w-10', ruleColor)} aria-hidden="true" />
        <h2
          id={id}
          className={clsx(
            'font-display text-4xl font-extrabold uppercase tracking-tightest sm:text-5xl',
            titleColor,
          )}
        >
          {title}
        </h2>
      </div>
      {subtitle && <p className={clsx('mt-3 text-lg sm:text-xl', subtitleColor)}>{subtitle}</p>}
    </div>
  )
}

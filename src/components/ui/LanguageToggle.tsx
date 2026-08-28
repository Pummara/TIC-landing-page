import { useI18n } from '../../i18n/I18nContext'
import clsx from '../../lib/clsx'

interface LanguageToggleProps {
  tone?: 'light' | 'dark'
}

export default function LanguageToggle({ tone = 'light' }: LanguageToggleProps) {
  const { locale, setLocale } = useI18n()

  const borderColor = tone === 'light' ? 'border-ink' : 'border-paper-white/60'

  return (
    <div role="group" aria-label="Language / ภาษา" className={clsx('inline-flex border', borderColor)}>
      {(['th', 'en'] as const).map((code, i) => {
        const active = locale === code
        return (
          <button
            key={code}
            type="button"
            aria-pressed={active}
            onClick={() => setLocale(code)}
            className={clsx(
              'px-3.5 py-3 font-mono text-sm font-semibold uppercase tracking-wide transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-1',
              i === 0 && (tone === 'light' ? 'border-r border-ink' : 'border-r border-paper-white/60'),
              active
                ? 'bg-gold text-ink'
                : clsx(
                    'sweep [--sweep-bg:theme(colors.gold.DEFAULT/15%)]',
                    tone === 'light' ? 'text-ink/70 hover:text-ink' : 'text-paper-white/60 hover:text-paper-white',
                  ),
            )}
          >
            {code}
          </button>
        )
      })}
    </div>
  )
}

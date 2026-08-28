import { useEffect, useState } from 'react'
import { useI18n } from '../../i18n/I18nContext'
import LanguageToggle from '../ui/LanguageToggle'
import { PhoneIcon } from '../../icons'
import ticLogo from '../../assets/logos/tic-logo-v2.png'
import clsx from '../../lib/clsx'
import { telHref } from '../../lib/tel'

export default function Header() {
  const { t } = useI18n()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={clsx(
        'sticky top-0 z-50 border-b-2 border-ink bg-paper-white transition-shadow duration-200',
        scrolled && 'shadow-[0_2px_0_0_theme(colors.ink.DEFAULT/8%)]',
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a
          href="#top"
          className="flex shrink-0 items-center opacity-100 transition-opacity duration-150 hover:opacity-70 focus-visible:opacity-70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark focus-visible:ring-offset-2"
        >
          <img src={ticLogo} alt="TIC — Tera International Commercial Co., Ltd." className="h-10 w-auto sm:h-12" />
        </a>

        <div className="flex items-center gap-3 sm:gap-5">
          <a
            href={telHref(t.header.phoneLabel)}
            className="group hidden items-center gap-2 border-l-2 border-ink pl-4 text-ink sm:flex focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
          >
            <PhoneIcon className="h-4 w-4 transition-colors duration-150 group-hover:text-gold-dark group-focus-visible:text-gold-dark" />
            <span className="leading-tight">
              <span className="rule-underline block font-mono text-base font-bold tabular">{t.header.phoneLabel}</span>
              <span className="block text-sm text-slatecopy">{t.header.hours}</span>
            </span>
          </a>
          <a
            href={telHref(t.header.phoneLabel)}
            aria-label={t.header.phoneLabel}
            className="sweep [--sweep-bg:theme(colors.ink.DEFAULT)] flex h-11 w-11 items-center justify-center border border-ink text-ink hover:text-paper-white focus-visible:text-paper-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark sm:hidden"
          >
            <PhoneIcon className="h-4 w-4" />
          </a>
          <LanguageToggle tone="light" />
        </div>
      </div>
    </header>
  )
}

import { useI18n } from '../../i18n/I18nContext'
import useInView from '../../lib/useInView'
import clsx from '../../lib/clsx'
import Button from '../ui/Button'
import RouteMap from '../ui/RouteMap'
import heroAirplane from '../../assets/hero/airplane.jpg'

export default function Hero() {
  const { t } = useI18n()
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="top" aria-labelledby="hero-heading" className="relative isolate overflow-hidden bg-ink">
      {/* Fallback ground, visible only while the photo above is still loading. */}
      <div className="absolute inset-0 bg-gradient-to-br from-ink via-ink-light/70 to-ink-deep" />

      {/*
        Mobile: full-bleed backdrop (no room for a "side" at this width).
        sm+: confined to the right ~58% and mask-faded into the ink ground on
        its own left edge, so the plane reads as sitting on the right rather
        than stretching the full section width.
      */}
      <img
        src={heroAirplane}
        alt=""
        className="absolute inset-0 h-full w-full object-cover object-[30%_45%] sm:left-auto sm:right-0 sm:w-[58%] sm:object-[center_38%] sm:[mask-image:linear-gradient(to_right,transparent,black_22%)] sm:[-webkit-mask-image:linear-gradient(to_right,transparent,black_22%)]"
      />

      {/* Legibility scrim — only meaningfully needed on mobile, where the photo still spans the text area. */}
      <div className="absolute inset-0 bg-gradient-to-r from-ink/95 via-ink/75 to-ink/60 sm:from-ink sm:via-ink/85 sm:to-ink/10" />

      <RouteMap className="pointer-events-none absolute inset-0 h-full w-full text-paper-white/10" />

      <div className="relative mx-auto flex min-h-[560px] max-w-6xl items-center px-4 py-20 sm:min-h-[640px] sm:px-6 sm:py-24 lg:min-h-[70vh]">
        <div
          ref={ref}
          className={clsx(
            'max-w-2xl transition-all duration-700 ease-out',
            inView ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0',
          )}
        >
          <h1
            id="hero-heading"
            className="font-display text-6xl font-black uppercase leading-[0.95] tracking-tightest text-paper-white sm:text-7xl lg:text-8xl"
          >
            <span className="block">{t.hero.headlineLine1}</span>
            <span className="block text-gold">{t.hero.headlineLine2}</span>
          </h1>
          <p className="mt-5 text-lg font-medium text-paper-white/90 sm:text-xl">{t.hero.eyebrow}</p>
          <p className="mt-1 font-mono text-sm text-paper-white/60">{t.hero.subtitle}</p>

          <ul className="mt-7 border-t-2 border-paper-white/30">
            {t.hero.bullets.map((bullet) => (
              <li key={bullet} className="flex items-baseline gap-3 border-b border-paper-white/15 py-3">
                <span className="font-mono text-gold" aria-hidden="true">
                  —
                </span>
                <span className="text-base text-paper-white/90 sm:text-lg">{bullet}</span>
              </li>
            ))}
          </ul>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button href="#contact" variant="primary">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="#services" variant="outline-light">
              {t.hero.ctaSecondary}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

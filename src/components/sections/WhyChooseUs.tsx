import { useI18n } from '../../i18n/I18nContext'
import { MedalIcon, CertificateIcon, UserBadgeIcon, ClipboardShieldIcon } from '../../icons'
import IconBadge from '../ui/IconBadge'

const whyIcons = [MedalIcon, CertificateIcon, UserBadgeIcon, ClipboardShieldIcon]

export default function WhyChooseUs() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="why-heading" className="bg-ink-deep py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-[3px] w-10 bg-gold" aria-hidden="true" />
          <h2 id="why-heading" className="font-display text-4xl font-extrabold uppercase tracking-tightest text-paper-white sm:text-5xl">
            {t.whyChooseUs.heading}
          </h2>
        </div>

        <div className="mt-10 grid gap-x-10 sm:grid-cols-2">
          {t.whyChooseUs.items.map((item, i) => {
            const Icon = whyIcons[i]
            return (
              <div key={item.title}>
                <div className="flex items-start gap-4 py-5">
                  <IconBadge icon={Icon} tone="outline-light" size="sm" />
                  <div>
                    <h3 className="font-display text-xl font-bold uppercase tracking-wide text-paper-white">{item.title}</h3>
                    <p className="mt-0.5 text-base text-paper-white/70">{item.description}</p>
                  </div>
                </div>
                <div className="perf-divider perf-divider--light" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

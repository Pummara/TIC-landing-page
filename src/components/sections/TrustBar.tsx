import { useI18n } from '../../i18n/I18nContext'
import { ShieldCheckIcon, UserBadgeIcon, BoltIcon, DiamondIcon } from '../../icons'
import IconBadge from '../ui/IconBadge'

export default function TrustBar() {
  const { t } = useI18n()

  const items = [
    { icon: ShieldCheckIcon, ...t.trustBar.trusted },
    { icon: UserBadgeIcon, ...t.trustBar.professional },
    { icon: BoltIcon, ...t.trustBar.fast },
    { icon: DiamondIcon, ...t.trustBar.value },
  ]

  return (
    <section aria-label="Why travelers trust TIC" className="border-y-2 border-ink bg-ink">
      <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-y divide-ink-light/40 px-4 sm:px-6 md:grid-cols-4 md:divide-y-0">
        {items.map(({ icon, label, sub }) => (
          <div key={label} className="flex items-center gap-3 px-4 py-6">
            <IconBadge icon={icon} tone="outline-light" size="md" />
            <div className="leading-tight">
              <p className="font-display text-lg font-bold uppercase tracking-wide text-paper-white">{label}</p>
              <p className="text-sm text-paper-white/60">{sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

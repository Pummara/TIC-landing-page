import { useI18n } from '../../i18n/I18nContext'
import { AirplaneIcon, PassportIcon, CarIcon, HotelIcon } from '../../icons'
import SectionHeading from '../ui/SectionHeading'
import IconBadge from '../ui/IconBadge'
import useInView from '../../lib/useInView'
import clsx from '../../lib/clsx'

const serviceIcons = [AirplaneIcon, PassportIcon, CarIcon, HotelIcon]

export default function Services() {
  const { t } = useI18n()
  const { ref, inView } = useInView<HTMLDivElement>()

  return (
    <section id="services" aria-labelledby="services-heading" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="services-heading" title={t.services.heading} subtitle={t.services.subheading} />

        <div ref={ref} className="mt-10 border-t-2 border-ink">
          {/* column header row, desktop only */}
          <div className="hidden grid-cols-[auto_1fr] gap-x-12 border-b border-ink/30 px-2 py-2 text-sm font-semibold uppercase tracking-widest text-slatecopy sm:grid">
            <span>Service</span>
            <span>Details</span>
          </div>

          {t.services.items.map((item, i) => {
            const Icon = serviceIcons[i]
            return (
              <div
                key={item.title}
                className={clsx(
                  'grid grid-cols-[auto_1fr] items-center gap-x-12 gap-y-3 border-b border-ink/20 px-2 py-6 transition-all duration-500',
                  i % 2 === 1 && 'bg-paper-ply/60',
                  inView ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0',
                )}
                style={{ transitionDelay: inView ? `${i * 80}ms` : '0ms' }}
              >
                <IconBadge icon={Icon} tone="ink" size="md" />
                <div>
                  <h3 className="font-display text-2xl font-bold uppercase tracking-tight text-ink">{item.title}</h3>
                  <p className="mt-2 text-base leading-relaxed text-slatecopy">{item.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

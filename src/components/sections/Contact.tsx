import { useI18n } from '../../i18n/I18nContext'
import { PhoneIcon, MailIcon, PinIcon } from '../../icons'
import IconBadge from '../ui/IconBadge'
import { telHref } from '../../lib/tel'

const cards = [
  { icon: PhoneIcon, key: 'phone' as const, href: (v: string) => telHref(v) },
  { icon: MailIcon, key: 'email' as const, href: (v: string) => `mailto:${v}` },
  { icon: PinIcon, key: 'address' as const, href: () => 'https://maps.app.goo.gl/LLaPT4fGXCm1oVy68' },
]

export default function Contact() {
  const { t } = useI18n()

  return (
    <section id="contact" aria-labelledby="contact-heading" className="bg-gold py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <span className="h-[3px] w-10 bg-ink" aria-hidden="true" />
          <h2 id="contact-heading" className="font-display text-4xl font-extrabold uppercase tracking-tightest text-ink sm:text-5xl">
            {t.contact.heading}
          </h2>
        </div>
        <p className="mt-3 max-w-xl text-lg text-ink/80 sm:text-xl">{t.contact.subheading}</p>

        <div className="mt-12 grid divide-y divide-ink/20 border-y-2 border-ink/70 sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {cards.map(({ icon, key, href }) => {
            if (key === 'phone') {
              const { label, value, mobile, sub } = t.contact.phone
              return (
                <div
                  key={key}
                  className="group sweep sweep-focus-within [--sweep-bg:theme(colors.ink.DEFAULT)] flex flex-col gap-3 px-2 py-8 sm:px-8"
                >
                  <IconBadge
                    icon={icon}
                    tone="outline-dark"
                    size="sm"
                    className="transition-colors duration-150 group-hover:border-gold group-hover:text-gold group-focus-within:border-gold group-focus-within:text-gold"
                  />
                  <p className="text-sm font-semibold uppercase tracking-widest text-ink/80 transition-colors duration-150 group-hover:text-gold group-focus-within:text-gold">
                    {label}
                  </p>
                  <div className="flex flex-col gap-1">
                    <a
                      href={href(value)}
                      className="font-[Prompt,sans-serif] text-2xl font-bold uppercase tracking-tight text-ink transition-colors duration-150 group-hover:text-paper-white group-focus-within:text-paper-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark sm:text-3xl"
                    >
                      {value}
                    </a>
                    <a
                      href={href(mobile)}
                      className="font-[Prompt,sans-serif] text-2xl font-bold uppercase tracking-tight text-ink transition-colors duration-150 group-hover:text-paper-white group-focus-within:text-paper-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark sm:text-3xl"
                    >
                      {mobile}
                    </a>
                  </div>
                  <p className="text-base text-ink/85 transition-colors duration-150 group-hover:text-paper-white/90 group-focus-within:text-paper-white/90">
                    {sub}
                  </p>
                </div>
              )
            }

            const data = t.contact[key]
            const link = href(data.value)
            const Wrapper = link ? 'a' : 'div'
            return (
              <Wrapper
                key={key}
                {...(link ? { href: link, ...(key === 'address' ? { target: '_blank', rel: 'noopener noreferrer' } : {}) } : {})}
                className="group sweep [--sweep-bg:theme(colors.ink.DEFAULT)] flex flex-col gap-3 px-2 py-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ink sm:px-8"
              >
                <IconBadge
                  icon={icon}
                  tone="outline-dark"
                  size="sm"
                  className="transition-colors duration-150 group-hover:border-gold group-hover:text-gold group-focus-visible:border-gold group-focus-visible:text-gold"
                />
                <p className="text-sm font-semibold uppercase tracking-widest text-ink/80 transition-colors duration-150 group-hover:text-gold group-focus-visible:text-gold">
                  {data.label}
                </p>
                <p className="font-[Prompt,sans-serif] text-2xl font-bold uppercase tracking-tight text-ink transition-colors duration-150 group-hover:text-paper-white group-focus-visible:text-paper-white sm:text-3xl">
                  {data.value}
                </p>
                <p className="text-base text-ink/85 transition-colors duration-150 group-hover:text-paper-white/90 group-focus-visible:text-paper-white/90">
                  {data.sub}
                </p>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}

import { useI18n } from '../../i18n/I18nContext'
import { PhoneIcon, MailIcon, PinIcon } from '../../icons'
import ticLogoFooter from '../../assets/logos/tic-logo-v2-footer.png'
import { telHref } from '../../lib/tel'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="bg-ink-deep text-paper-white">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6">
        <div className="grid gap-10 border-t-2 border-paper-white/20 pt-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <img src={ticLogoFooter} alt="TIC — Tera International Commercial Co., Ltd." className="h-11 w-auto" />
            <p className="mt-4 max-w-sm text-base leading-relaxed text-paper-white/65">{t.footer.tagline}</p>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-gold">{t.footer.servicesTitle}</h3>
            <ul className="mt-4 space-y-2 text-base text-paper-white/70">
              {t.footer.servicesList.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-sm font-semibold uppercase tracking-widest text-gold">{t.footer.contactTitle}</h3>
            <ul className="mt-4 space-y-3 text-base text-paper-white/70">
              <li className="flex items-start gap-2">
                <PhoneIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href={telHref(t.contact.phone.value)}
                  className="rule-underline hover:text-paper-white focus-visible:text-paper-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
                >
                  {t.contact.phone.value}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MailIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <a
                  href="mailto:info@ticpumra.com"
                  className="rule-underline hover:text-paper-white focus-visible:text-paper-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-dark"
                >
                  {t.contact.email.value}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <PinIcon className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <span>
                  {t.contact.address.value}
                  <br />
                  {t.contact.address.sub}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="perf-divider perf-divider--light mt-12" />
        <div className="pt-6 text-center font-mono text-sm text-paper-white/60">{t.footer.copyright}</div>
      </div>
    </footer>
  )
}

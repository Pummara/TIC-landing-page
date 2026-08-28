import { useI18n } from '../../i18n/I18nContext'
import SectionHeading from '../ui/SectionHeading'
import agcVinythai from '../../assets/clients/agc-vinythai.png'
import avient from '../../assets/clients/avient.png'
import cargohub from '../../assets/clients/cargohub.png'
import chabaa from '../../assets/clients/chabaa.png'
import gistda from '../../assets/clients/gistda.png'
import kih from '../../assets/clients/kih.png'
import ksJewelry from '../../assets/clients/ks-jewelry.png'
import kslGroup from '../../assets/clients/ksl-group.png'
import landAndHouses from '../../assets/clients/land-and-houses.png'
import partnerMark from '../../assets/clients/partner-mark.png'
import thaihealth from '../../assets/clients/thaihealth.png'
import tourismAuthorityThailand from '../../assets/clients/tourism-authority-thailand.png'
import virginActive from '../../assets/clients/virgin-active.png'

// Split into two disjoint sets — one per marquee row — so the same client logo
// can never appear in both rows at once, no matter where each track has scrolled to.
const clientsRow1 = [
  { src: agcVinythai, name: 'AGC Vinythai' },
  { src: kih, name: 'KIH' },
  { src: avient, name: 'Avient' },
  { src: cargohub, name: 'CargoHub' },
  { src: gistda, name: 'GISTDA' },
  { src: ksJewelry, name: 'K.S. Jewelry International' },
  { src: kslGroup, name: 'KSL Group' },
]

const clientsRow2 = [
  { src: thaihealth, name: 'ThaiHealth — Thai Health Promotion Foundation' },
  { src: chabaa, name: 'Chabaa' },
  { src: landAndHouses, name: 'Land & Houses' },
  { src: tourismAuthorityThailand, name: 'Tourism Authority of Thailand' },
  { src: virginActive, name: 'Virgin Active' },
  { src: partnerMark, name: 'Partner organization' },
]

function MarqueeRow({ items, reverse }: { items: typeof clientsRow1; reverse?: boolean }) {
  return (
    <div
      className="relative overflow-hidden"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 8%, black 92%, transparent)',
      }}
    >
      <div className={`marquee-track flex w-max items-center${reverse ? ' marquee-track--reverse' : ''}`}>
        {[...items, ...items].map((client, i) => (
          <img
            key={`${client.name}-${i}`}
            src={client.src}
            alt={client.name}
            aria-hidden={i >= items.length}
            className="mx-12 h-16 w-auto shrink-0 object-contain sm:h-20"
          />
        ))}
      </div>
    </div>
  )
}

export default function ClientLogos() {
  const { t } = useI18n()

  return (
    <section aria-labelledby="clients-heading" className="bg-paper-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="clients-heading" title={t.clients.heading} />
      </div>

      <div className="mt-16 space-y-16 sm:mt-20 sm:space-y-20">
        <MarqueeRow items={clientsRow1} />
        <MarqueeRow items={clientsRow2} reverse />
      </div>
    </section>
  )
}

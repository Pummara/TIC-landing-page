import { useI18n } from '../../i18n/I18nContext'
import SectionHeading from '../ui/SectionHeading'

import airfranceKlm from '../../assets/airlines/full-service/airfrance-klm.png'
import ana from '../../assets/airlines/full-service/ana.png'
import austrian from '../../assets/airlines/full-service/austrian.png'
import bangkokAirways from '../../assets/airlines/full-service/bangkok-airways.png'
import brusselsAirlines from '../../assets/airlines/full-service/brussels-airlines.png'
import cathayPacific from '../../assets/airlines/full-service/cathay-pacific.png'
import eurowings from '../../assets/airlines/full-service/eurowings.png'
import finnair from '../../assets/airlines/full-service/finnair.png'
import japanAirlines from '../../assets/airlines/full-service/japan-airlines.png'
import lufthansa from '../../assets/airlines/full-service/lufthansa.png'
import singaporeAirlines from '../../assets/airlines/full-service/singapore-airlines.png'
import swiss from '../../assets/airlines/full-service/swiss.png'
import thaiAirways from '../../assets/airlines/full-service/thai-airways.png'

import airasia from '../../assets/airlines/low-cost/airasia.png'
import nokAir from '../../assets/airlines/low-cost/nok-air.png'
import thaiLionAir from '../../assets/airlines/low-cost/thai-lion-air.png'
import vietjetAir from '../../assets/airlines/low-cost/vietjet-air.png'

const fullServiceAirlines = [
  { src: thaiAirways, name: 'Thai Airways' },
  { src: singaporeAirlines, name: 'Singapore Airlines' },
  { src: cathayPacific, name: 'Cathay Pacific' },
  { src: ana, name: 'ANA' },
  { src: japanAirlines, name: 'Japan Airlines' },
  { src: lufthansa, name: 'Lufthansa' },
  { src: airfranceKlm, name: 'Air France – KLM' },
  { src: swiss, name: 'SWISS' },
  { src: austrian, name: 'Austrian Airlines' },
  { src: brusselsAirlines, name: 'Brussels Airlines' },
  { src: eurowings, name: 'Eurowings' },
  { src: bangkokAirways, name: 'Bangkok Airways' },
  { src: finnair, name: 'Finnair' },
]

const lowCostCarriers = [
  { src: airasia, name: 'AirAsia' },
  { src: nokAir, name: 'Nok Air' },
  { src: thaiLionAir, name: 'Thai Lion Air' },
  { src: vietjetAir, name: 'VietJet Air' },
]

function AirlineGroup({ label, airlines }: { label: string; airlines: { src: string; name: string }[] }) {
  return (
    <div className="py-10 sm:py-14">
      <p className="text-center text-sm font-semibold uppercase tracking-widest text-slatecopy">{label}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-6 sm:gap-7">
        {airlines.map((airline) => (
          <div
            key={airline.name}
            className="flex h-20 items-center justify-center border border-ink/15 bg-paper-white px-6 sm:h-24 sm:px-7"
          >
            <img src={airline.src} alt={airline.name} className="max-h-11 w-auto max-w-[9rem] object-contain sm:max-h-14 sm:max-w-[10.5rem]" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function PartnerAirlines() {
  const { t } = useI18n()

  return (
    <section id="airlines" aria-labelledby="airlines-heading" className="bg-paper py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="airlines-heading" title={t.airlines.heading} subtitle={t.airlines.subheading} />

        <div className="mt-12 divide-y divide-ink/20 border-t-2 border-ink">
          <AirlineGroup label={t.airlines.fullService} airlines={fullServiceAirlines} />
          <AirlineGroup label={t.airlines.lowCost} airlines={lowCostCarriers} />
        </div>
      </div>
    </section>
  )
}

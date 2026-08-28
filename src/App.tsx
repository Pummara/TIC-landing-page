import { useEffect } from 'react'
import { useI18n } from './i18n/I18nContext'
import useSmoothScroll from './lib/useSmoothScroll'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import Services from './components/sections/Services'
import PartnerAirlines from './components/sections/PartnerAirlines'
import WhyChooseUs from './components/sections/WhyChooseUs'
import Contact from './components/sections/Contact'
import ClientLogos from './components/sections/ClientLogos'

export default function App() {
  const { t } = useI18n()

  useSmoothScroll()

  useEffect(() => {
    document.title = t.meta.title
    const meta = document.querySelector('meta[name="description"]')
    if (meta) meta.setAttribute('content', t.meta.description)
  }, [t])

  return (
    <div className="min-h-screen bg-paper-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100] focus:border-2 focus:border-ink focus:bg-gold focus:px-4 focus:py-2 focus:font-mono focus:text-sm focus:font-bold focus:uppercase focus:text-ink focus:outline-none"
      >
        {t.common.skipToContent}
      </a>
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <PartnerAirlines />
        <WhyChooseUs />
        <ClientLogos />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

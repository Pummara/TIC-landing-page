export type Locale = 'th' | 'en'

export interface ServiceItem {
  title: string
  description: string
}

export interface WhyItem {
  title: string
  description: string
}

export interface TrustItem {
  label: string
  sub: string
}

export interface Dictionary {
  meta: {
    title: string
    description: string
  }
  header: {
    phoneLabel: string
    hours: string
  }
  hero: {
    eyebrow: string
    headlineLine1: string
    headlineLine2: string
    subtitle: string
    bullets: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  trustBar: {
    trusted: TrustItem
    professional: TrustItem
    fast: TrustItem
    value: TrustItem
  }
  services: {
    eyebrow: string
    heading: string
    subheading: string
    items: ServiceItem[]
  }
  whyChooseUs: {
    heading: string
    items: WhyItem[]
  }
  airlines: {
    heading: string
    subheading: string
    fullService: string
    lowCost: string
  }
  contact: {
    eyebrow: string
    heading: string
    subheading: string
    phone: { label: string; value: string; mobile: string; sub: string }
    email: { label: string; value: string; sub: string }
    address: { label: string; value: string; sub: string }
  }
  clients: {
    heading: string
  }
  footer: {
    tagline: string
    servicesTitle: string
    servicesList: string[]
    contactTitle: string
    copyright: string
  }
  common: {
    langToggleTh: string
    langToggleEn: string
    skipToContent: string
  }
}

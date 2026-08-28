import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react'
import type { Dictionary, Locale } from './types'
import th from './th'
import en from './en'

const dictionaries: Record<Locale, Dictionary> = { th, en }

const STORAGE_KEY = 'tic-locale'

interface I18nContextValue {
  locale: Locale
  t: Dictionary
  setLocale: (locale: Locale) => void
  toggleLocale: () => void
}

const I18nContext = createContext<I18nContextValue | null>(null)

function getInitialLocale(): Locale {
  if (typeof window === 'undefined') return 'th'
  const stored = window.localStorage.getItem(STORAGE_KEY)
  return stored === 'en' || stored === 'th' ? stored : 'th'
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(getInitialLocale)

  useEffect(() => {
    document.documentElement.lang = locale
    window.localStorage.setItem(STORAGE_KEY, locale)
  }, [locale])

  const value = useMemo<I18nContextValue>(
    () => ({
      locale,
      t: dictionaries[locale],
      setLocale: setLocaleState,
      toggleLocale: () => setLocaleState((prev) => (prev === 'th' ? 'en' : 'th')),
    }),
    [locale],
  )

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error('useI18n must be used within an I18nProvider')
  return ctx
}

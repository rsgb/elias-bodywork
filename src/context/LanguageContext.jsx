import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { translations } from '../i18n/translations'

const LanguageContext = createContext(null)

const STORAGE_KEY = 'elias-lang'

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY)
      if (stored === 'de' || stored === 'en') return stored
    } catch {
      /* ignore */
    }
    return 'de'
  })

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
    document.documentElement.lang = lang
    const meta = translations[lang]?.meta
    if (meta?.title) document.title = meta.title
    const descEl = document.querySelector('meta[name="description"]')
    if (descEl && meta?.description) {
      descEl.setAttribute('content', meta.description)
    }
  }, [lang])

  const value = useMemo(() => ({ lang, setLang }), [lang])
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}

/** Full copy object for active language (defaults to German). */
export function useTranslations() {
  const { lang } = useLanguage()
  return translations[lang] ?? translations.de
}

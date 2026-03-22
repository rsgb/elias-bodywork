import { useLanguage } from '../../context/LanguageContext'
import styles from './LanguageSwitch.module.css'

export function LanguageSwitch() {
  const { lang, setLang } = useLanguage()

  return (
    <div className={styles.wrap} role="group" aria-label={lang === 'de' ? 'Sprache' : 'Language'}>
      <button
        type="button"
        className={[styles.btn, lang === 'de' ? styles.active : ''].filter(Boolean).join(' ')}
        onClick={() => setLang('de')}
        aria-pressed={lang === 'de'}
      >
        DE
      </button>
      <button
        type="button"
        className={[styles.btn, lang === 'en' ? styles.active : ''].filter(Boolean).join(' ')}
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
      >
        EN
      </button>
    </div>
  )
}

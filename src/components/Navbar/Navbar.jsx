import { useEffect, useId, useState } from 'react'
import { useTranslations } from '../../context/LanguageContext'
import { LanguageSwitch } from '../LanguageSwitch/LanguageSwitch'
import styles from './Navbar.module.css'

const linkDefs = [
  { href: '#intro', key: 'intro' },
  { href: '#about', key: 'about' },
  { href: '#support', key: 'support' },
  { href: '#session', key: 'session' },
  { href: '#offering', key: 'offering' },
  { href: '#contact', key: 'contact' },
]

export function Navbar() {
  const tr = useTranslations()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [isNarrow, setIsNarrow] = useState(false)
  const menuId = useId()

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 900px)')
    const sync = () => {
      const narrow = mq.matches
      setIsNarrow(narrow)
      if (!narrow) setMenuOpen(false)
    }
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const onKey = (e) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [menuOpen])

  useEffect(() => {
    if (isNarrow && menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [isNarrow, menuOpen])

  const closeMenu = () => setMenuOpen(false)
  const menuLabel = menuOpen ? tr.nav.closeMenu : tr.nav.openMenu

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <nav className={styles.nav} aria-label="Primary">
        <div className={styles.navStart}>
          <a href="#hero" className={styles.brand} onClick={closeMenu}>
            {tr.nav.brand}
          </a>
        </div>

        <ul
          id={menuId}
          className={[styles.list, menuOpen ? styles.listOpen : ''].filter(Boolean).join(' ')}
          aria-hidden={isNarrow && !menuOpen ? true : undefined}
        >
          {linkDefs.map(({ href, key }) => (
            <li key={href} className={styles.listItem}>
              <a href={href} className={styles.link} onClick={closeMenu}>
                {tr.nav[key]}
              </a>
            </li>
          ))}
        </ul>

        <div className={styles.navEnd}>
          <LanguageSwitch />
          <button
            type="button"
            className={[styles.menuToggle, menuOpen ? styles.menuToggleOpen : ''].filter(Boolean).join(' ')}
            aria-expanded={menuOpen}
            aria-controls={menuId}
            onClick={() => setMenuOpen((o) => !o)}
          >
            <span className={styles.srOnly}>{menuLabel}</span>
            <span className={styles.burger} aria-hidden="true">
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </span>
            <span className={styles.menuLabel} aria-hidden="true">
              {tr.nav.menu}
            </span>
          </button>
        </div>
      </nav>
      {isNarrow && menuOpen ? (
        <button
          type="button"
          className={styles.scrim}
          aria-label={tr.nav.closeMenuScrim}
          onClick={closeMenu}
        />
      ) : null}
    </header>
  )
}

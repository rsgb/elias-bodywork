import { useEffect, useState } from 'react'
import styles from './Navbar.module.css'

const links = [
  { href: '#intro', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#support', label: 'Support' },
  { href: '#session', label: 'Session' },
  { href: '#format', label: 'Format' },
  { href: '#contact', label: 'Contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={[styles.header, scrolled ? styles.scrolled : ''].filter(Boolean).join(' ')}>
      <nav className={styles.nav} aria-label="Primary">
        <a href="#hero" className={styles.brand}>
          Elias
        </a>
        <ul className={styles.list}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className={styles.link}>
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

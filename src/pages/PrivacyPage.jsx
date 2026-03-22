import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Section } from '../components/Section/Section'
import { Heading } from '../components/Heading/Heading'
import { useTranslations } from '../context/LanguageContext'
import styles from '../App.module.css'

export function PrivacyPage() {
  const tr = useTranslations()

  useEffect(() => {
    document.title = `${tr.legal.privacy.heading} — ${tr.footer.name}`
  }, [tr.legal.privacy.heading, tr.footer.name])

  return (
    <main className={styles.main}>
      <Section variant="spacious" className={styles.legalSection}>
        <Link to="/" className={styles.legalBack}>
          {tr.legal.backToHome}
        </Link>
        <Heading level={1} className={styles.legalPageTitle}>
          {tr.legal.privacy.heading}
        </Heading>
        <div className={styles.legalBlocks}>
          {tr.legal.privacy.sections.map((block) => (
            <div key={block.title} className={styles.legalBlock}>
              <Heading level={3} className={styles.legalSubheading}>
                {block.title}
              </Heading>
              <p className={styles.legalText}>{block.body}</p>
            </div>
          ))}
        </div>
      </Section>
    </main>
  )
}

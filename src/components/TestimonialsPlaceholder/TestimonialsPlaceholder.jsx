import { Section } from '../Section/Section'
import { Heading } from '../Heading/Heading'
import styles from './TestimonialsPlaceholder.module.css'

/**
 * Hidden until you pass `items` — e.g. [{ quote: '…', name: 'A.' }]
 */
export function TestimonialsPlaceholder({ items = [] }) {
  if (!items.length) return null

  return (
    <Section id="testimonials" variant="compact">
      <Heading level={2}>Voices</Heading>
      <ul className={styles.list}>
        {items.map((item, i) => (
          <li key={i} className={styles.item}>
            <blockquote className={styles.quote}>{item.quote}</blockquote>
            {item.name ? <p className={styles.name}>{item.name}</p> : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}

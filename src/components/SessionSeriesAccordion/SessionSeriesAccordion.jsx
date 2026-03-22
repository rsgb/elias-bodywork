import { useId, useState } from 'react'
import styles from './SessionSeriesAccordion.module.css'

export function SessionSeriesAccordion({ sessions }) {
  const baseId = useId()
  const [openIndex, setOpenIndex] = useState(null)

  if (!sessions?.length) return null

  return (
    <div className={styles.root}>
      {sessions.map((item, index) => {
        const isOpen = openIndex === index
        const panelId = `${baseId}-panel-${index}`
        const headerId = `${baseId}-header-${index}`

        return (
          <div key={`${index}-${item.title}`} className={styles.item}>
            <h3 className={styles.itemHeading}>
              <button
                type="button"
                id={headerId}
                className={styles.trigger}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <span className={styles.triggerText}>{item.title}</span>
                <span className={[styles.icon, isOpen ? styles.iconOpen : ''].filter(Boolean).join(' ')} aria-hidden />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              aria-hidden={!isOpen}
              className={[styles.panel, isOpen ? styles.panelOpen : ''].filter(Boolean).join(' ')}
            >
              <p className={styles.panelText}>{item.body}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

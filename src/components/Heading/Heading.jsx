import styles from './Heading.module.css'

const levelClass = {
  1: styles.h1,
  2: styles.h2,
  3: styles.h3,
}

export function Heading({ level = 2, variant, as, className = '', children, ...rest }) {
  const Tag = as ?? `h${level}`
  const sizeClass = variant === 'display' ? styles.display : levelClass[level] || styles.h2
  const cls = [styles.heading, sizeClass, className].filter(Boolean).join(' ')

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  )
}

export function Text({ lead = false, muted = false, className = '', as: Tag = 'p', children, ...rest }) {
  const cls = [
    styles.text,
    lead ? styles.lead : '',
    muted ? styles.muted : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag className={cls} {...rest}>
      {children}
    </Tag>
  )
}

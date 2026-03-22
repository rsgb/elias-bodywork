import styles from './Section.module.css'

export function Section({
  id,
  as: Tag = 'section',
  variant = 'default',
  bleed = false,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    styles.section,
    styles[variant],
    bleed ? styles.bleed : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  return (
    <Tag id={id} className={classes} {...rest}>
      <div className={bleed ? styles.innerBleed : styles.inner}>{children}</div>
    </Tag>
  )
}

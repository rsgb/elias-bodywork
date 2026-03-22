import { Link } from 'react-router-dom'
import styles from './Button.module.css'

export function Button({
  variant = 'primary',
  href,
  to,
  children,
  className = '',
  ...rest
}) {
  const cls = [styles.btn, styles[variant], className].filter(Boolean).join(' ')

  if (to) {
    return (
      <Link to={to} className={cls} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={cls} {...rest}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={cls} {...rest}>
      {children}
    </button>
  )
}

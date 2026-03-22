import styles from './ResponsiveImage.module.css'

export function ResponsiveImage({
  src,
  alt,
  className = '',
  ratio,
  priority = false,
  sizes = '(min-width: 960px) 50vw, 100vw',
  ...rest
}) {
  const style = ratio ? { aspectRatio: ratio } : undefined

  return (
    <figure className={[styles.figure, className].filter(Boolean).join(' ')} style={style}>
      <img
        src={src}
        alt={alt}
        className={styles.img}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
        sizes={sizes}
        {...rest}
      />
    </figure>
  )
}

import { useState } from 'react'
import { useTranslations } from '../../context/LanguageContext'
import { WEB3FORMS_SUBMIT_URL } from '../../data/contact'
import styles from '../../App.module.css'
import btnStyles from '../Button/Button.module.css'

const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY

export function ContactForm() {
  const tr = useTranslations()
  const [status, setStatus] = useState('idle')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('sending')
    const form = e.currentTarget
    const fd = new FormData(form)

    if (fd.get('botcheck')) {
      form.reset()
      setStatus('success')
      return
    }

    if (!accessKey?.trim()) {
      setStatus('error')
      return
    }

    const payload = {
      access_key: accessKey.trim(),
      subject: 'Kontakt — rebalancing-elias.com',
      name: String(fd.get('name') ?? '').trim(),
      email: String(fd.get('email') ?? '').trim(),
      message: String(fd.get('message') ?? '').trim(),
    }

    try {
      const res = await fetch(WEB3FORMS_SUBMIT_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
      })
      const data = res.ok ? await res.json() : null
      if (data?.success === true) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className={styles.contactFormBlock}>
      <h3 className={styles.contactFormHeading}>{tr.contact.formHeading}</h3>
      <form className={styles.contactForm} onSubmit={handleSubmit}>
        <p className={styles.contactFormHoneypot} aria-hidden="true">
          <label>
            {tr.contact.formHoneypotLabel}
            <input name="botcheck" tabIndex={-1} autoComplete="off" />
          </label>
        </p>
        <div className={styles.contactFormRow}>
          <label className={styles.contactFormField}>
            <span className={styles.contactFormLabel}>{tr.contact.formName}</span>
            <input
              className={styles.contactFormInput}
              type="text"
              name="name"
              autoComplete="name"
              required
            />
          </label>
          <label className={styles.contactFormField}>
            <span className={styles.contactFormLabel}>{tr.contact.formEmail}</span>
            <input
              className={styles.contactFormInput}
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </label>
        </div>
        <label className={styles.contactFormField}>
          <span className={styles.contactFormLabel}>{tr.contact.formMessage}</span>
          <textarea
            className={styles.contactFormTextarea}
            name="message"
            rows={4}
            required
          />
        </label>
        <div className={styles.contactFormFooter}>
          <button
            type="submit"
            className={`${btnStyles.btn} ${btnStyles.secondary} ${styles.contactFormSubmit}`}
            disabled={status === 'sending'}
          >
            {status === 'sending' ? tr.contact.formSending : tr.contact.formSubmit}
          </button>
          {status === 'success' && (
            <p className={styles.contactFormFeedback} role="status">
              {tr.contact.formSuccess}
            </p>
          )}
          {status === 'error' && (
            <p className={styles.contactFormFeedbackError} role="alert">
              {tr.contact.formError}
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

import { Navbar } from './components/Navbar/Navbar'
import { Section } from './components/Section/Section'
import { Button } from './components/Button/Button'
import { Heading, Text } from './components/Heading/Heading'
import { ResponsiveImage } from './components/ResponsiveImage/ResponsiveImage'
import { Reveal } from './components/Reveal/Reveal'
import { SectionDivider } from './components/SectionDivider/SectionDivider'
import { TestimonialsPlaceholder } from './components/TestimonialsPlaceholder/TestimonialsPlaceholder'
import { images } from './data/images'
import { contact } from './data/contact'
import styles from './App.module.css'

const supportReasons = [
  'relaxation and slowing down',
  'stress and overwhelm',
  'feeling more attuned to the body',
  'grounding and balance',
  'self-development',
  'support during challenging life phases',
  'integration after physical strain or injury',
  'accompaniment alongside conventional medical treatment',
  'moments of transition, change, or preparation',
]

export default function App() {
  const year = new Date().getFullYear()

  return (
    <>
      <Navbar />
      <main className={styles.main}>
        <section id="hero" className={styles.hero} aria-labelledby="hero-title">
          <div className={styles.heroGrid}>
            <Reveal className={styles.heroImage}>
              <ResponsiveImage
                src={images.hero.src}
                alt={images.hero.alt}
                priority
                ratio="4/3"
                className={styles.interludeFigure}
                sizes="(min-width: 900px) 42vw, 100vw"
              />
            </Reveal>
            <div className={styles.heroCopy}>
              <Heading id="hero-title" variant="display" level={1} as="h1">
                Fascia Rebalancing & Bodywork
              </Heading>
              <Text lead>
                A space to slow down, listen, and come back into contact with your body.
              </Text>
              <Text muted>
                Sessions that support relaxation, body awareness, grounding, and inner balance.
              </Text>
              <div className={styles.ctaRow}>
                <Button href="#contact">Book a session</Button>
                <Button href="#contact" variant="secondary">
                  Get in touch
                </Button>
              </div>
            </div>
          </div>
        </section>

        <SectionDivider />

        <Section id="intro" variant="spacious">
          <Reveal>
            <Heading level={2}>What this is</Heading>
            <div className={styles.proseStack}>
              <p>
                Rebalancing is a form of bodywork that works with the fascia system — the connective
                tissue network that runs through the whole body. It is influenced by Rolfing,
                craniosacral work, and the Rebalancing tradition that developed through the
                collaboration of bodyworkers and therapists.
              </p>
              <p>
                In this work, touch is not about &ldquo;fixing&rdquo; the body, but about creating
                the conditions for awareness, regulation, and integration.
              </p>
              <p>
                This is not a typical massage. Breath, presence, perception, and the way you
                experience yourself in your body are all part of the process.
              </p>
            </div>
          </Reveal>
        </Section>

        <TestimonialsPlaceholder items={[]} />

        <div className={styles.interlude}>
          <Reveal delay={80}>
            <ResponsiveImage
              src={images.interludeA.src}
              alt={images.interludeA.alt}
              ratio="21/9"
              className={styles.interludeFigure}
              sizes="100vw"
            />
          </Reveal>
        </div>

        <Section id="about" variant="spacious">
          <div className={`${styles.split} ${styles.splitReverse}`}>
            <Reveal>
              <div>
                <Heading level={2}>About Elias</Heading>
                <div className={styles.proseStack}>
                  <p>
                    I have long been drawn to receiving bodywork and to supporting people through
                    touch. What brought me to Rebalancing was the quality I experienced in it:
                    presence, depth, and a way of working that felt less like applying a technique
                    and more like entering into communication with another person&rsquo;s system.
                  </p>
                  <p>
                    I completed a two-year Rebalancing training in Germany and Switzerland, and I
                    currently continue deepening this path by assisting in the training itself.
                  </p>
                  <p>
                    For me, this work is about listening carefully, working with what is actually
                    present, and supporting people in becoming more connected with themselves.
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={100}>
              <ResponsiveImage
                src={images.about.src}
                alt={images.about.alt}
                ratio="3/4"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
            </Reveal>
          </div>
        </Section>

        <SectionDivider />

        <Section id="support" variant="default">
          <Reveal>
            <Heading level={2}>What this work can support</Heading>
            <Text>People may come for many different reasons, for example:</Text>
            <ul className={styles.supportList}>
              {supportReasons.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className={styles.note}>
              <p>
                The intention is not to diagnose, treat disease, or promise healing, but to offer
                supportive bodywork and a space for awareness and regulation.
              </p>
            </div>
          </Reveal>
        </Section>

        <div className={styles.interlude}>
          <Reveal delay={60}>
            <ResponsiveImage
              src={images.interludeB.src}
              alt={images.interludeB.alt}
              ratio="16/9"
              className={styles.interludeFigure}
              sizes="100vw"
            />
          </Reveal>
        </div>

        <Section id="session" variant="spacious">
          <Reveal>
            <Heading level={2}>What happens in a session</Heading>
            <div className={styles.proseStack}>
              <p>
                Each session can unfold differently. Many people leave feeling more grounded, more
                in touch with themselves, more balanced, or more relaxed. For others, the experience
                can also feel energising or activating.
              </p>
              <p>
                Because the work can affect the nervous system quite deeply, it helps to leave some
                spaciousness afterwards instead of rushing into the next thing.
              </p>
              <p>
                A session is usually around 90 minutes. It often begins with a short conversation,
                and sometimes with a quiet moment to arrive more fully in the present.
              </p>
              <p>
                From there, the work may include body awareness, posture observation, and hands-on
                touch. The focus is not on imposing an external interpretation, but on sensing what
                is actually present in your experience right now.
              </p>
              <p>
                The touch itself can be subtle or more direct, depending on what is needed. It may
                at times meet areas of discomfort, but the aim is not intensity for its own sake.
                More pressure is not &ldquo;better.&rdquo; The work follows communication, presence,
                and what the body is ready to meet.
              </p>
            </div>
          </Reveal>
        </Section>

        <Section id="format" variant="default">
          <Reveal>
            <Heading level={2}>Session format</Heading>
            <div className={styles.cards}>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Individual sessions</h3>
                <p>
                  Individual sessions are possible and can be shaped around what is currently alive
                  for you.
                </p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>10-session series</h3>
                <p>
                  Rebalancing traditionally follows a 10-session approach, moving through different
                  body areas and related themes.
                </p>
              </article>
              <article className={styles.card}>
                <h3 className={styles.cardTitle}>Rhythm</h3>
                <p>
                  The rhythm between sessions depends on the person and the process. Around two
                  weeks between sessions can be a useful orientation, though this can vary.
                </p>
              </article>
            </div>
          </Reveal>
        </Section>

        <section className={styles.gallery} aria-label="Practice impressions">
          <div className={styles.galleryGrid}>
            {images.gallery.map((img, i) => (
              <Reveal key={img.id} delay={i * 50}>
                <ResponsiveImage
                  src={img.src}
                  alt={img.alt}
                  className={styles.galleryItem}
                  sizes="(min-width: 900px) 18vw, 45vw"
                />
              </Reveal>
            ))}
          </div>
        </section>

        <SectionDivider />

        <Section id="contact" variant="spacious">
          <div className={styles.split}>
            <Reveal>
              <div>
                <Heading level={2}>Get in touch</Heading>
                <Text>
                  If you would like to book a session or ask a question, feel free to reach out.
                </Text>
                <ul className={styles.contactList}>
                  <li>
                    <span className={styles.contactLabel}>Email</span>
                    {contact.email.includes('@') ? (
                      <a href={`mailto:${contact.email}`}>{contact.email}</a>
                    ) : (
                      <span>{contact.email}</span>
                    )}
                  </li>
                  <li>
                    <span className={styles.contactLabel}>Phone / Signal / WhatsApp</span>
                    <span>{contact.phone}</span>
                  </li>
                  <li>
                    <span className={styles.contactLabel}>Location</span>
                    <span>{contact.location}</span>
                  </li>
                  <li>
                    <span className={styles.contactLabel}>Languages</span>
                    <span>{contact.languages}</span>
                  </li>
                </ul>
                <div className={styles.contactFootnote}>
                  <Text muted>
                    Pricing available on request. If finances are a concern, feel free to reach out.
                  </Text>
                </div>
              </div>
            </Reveal>
            <Reveal delay={80} className={styles.contactAside}>
              <ResponsiveImage
                src={images.contact.src}
                alt={images.contact.alt}
                ratio="4/5"
                sizes="(min-width: 768px) 38vw, 100vw"
              />
            </Reveal>
          </div>
        </Section>

        <div className={styles.ctaBand}>
          <div className={styles.ctaBandInner}>
            <p className={styles.ctaBandText}>Ready to slow down and listen in?</p>
            <Button href="#contact">Book a session</Button>
          </div>
        </div>

        <Section id="disclaimer" variant="compact">
          <Reveal>
            <Heading level={2}>Disclaimer</Heading>
            <div className={styles.disclaimerBox}>
              <p>
                This work is offered as bodywork for well-being, relaxation, and awareness. It is not
                a medical treatment, does not replace medical care, and does not include diagnosis or
                promises of healing. If you have acute or serious health concerns, please consult an
                appropriate medical professional.
              </p>
            </div>
          </Reveal>
        </Section>

        <footer id="footer" className={styles.footer}>
          <div className={styles.footerInner}>
            <p className={styles.footerName}>Elias</p>
            <p className={styles.footerTag}>Fascia Rebalancing & Bodywork</p>
            <p className={styles.footerContact}>
              {contact.email.includes('@') ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                <span>{contact.email}</span>
              )}
              {' · '}
              <span>{contact.phone}</span>
            </p>
            <p className={styles.footerCopy}>© {year} Elias</p>
          </div>
        </footer>
      </main>
    </>
  )
}

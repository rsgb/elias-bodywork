/**
 * All user-facing copy per language. Default site language: German (de).
 *
 * Ten-session themes were taken from the Rebalancing flyer in `/temp/Flyer.pdf`
 * (Katharina Krause / Rebalancing Murnau) and adapted for Elias’s site.
 *
 * Update prices in `pricing.items` (both `de` and `en`).
 * Update session copy in `series.sessions` per language.
 */
export const translations = {
  de: {
    meta: {
      title: 'Elias Krause — Rebalancing',
      description:
        'Rebalancing und Faszienarbeit mit Elias Krause — Raum für Wahrnehmung, Erdung und Balance.',
    },
    nav: {
      intro: 'Praxis',
      about: 'Über mich',
      support: 'Unterstützung',
      session: 'Ablauf',
      offering: 'Sitzungen & Preise',
      contact: 'Kontakt',
      menu: 'Menü',
      openMenu: 'Menü öffnen',
      closeMenu: 'Menü schließen',
      closeMenuScrim: 'Menü schließen',
    },
    lang: { de: 'DE', en: 'EN', label: 'Sprache' },
    hero: {
      name: 'Elias Krause',
      subtitle: 'Rebalancing',
      lead: 'Ein Raum, um langsamer zu werden, zuzuhören und wieder Kontakt mit dem eigenen Körper zu finden.',
      muted: 'Sitzungen, die Entspannung, Körperwahrnehmung, Erdung und innere Balance unterstützen.',
      book: 'Sitzung anfragen',
      contact: 'Kontakt',
    },
    intro: {
      heading: 'Was das ist',
      p1: 'Rebalancing ist eine Form von Körperarbeit, die mit dem Faszien­system arbeitet — dem Netz des Bindegewebes, das den ganzen Körper durchzieht. Es ist beeinflusst von Rolfing, kraniosakraler Arbeit und der Rebalancing-Tradition, die aus der Zusammenarbeit von Körperarbeitenden und Therapeutinnen entstanden ist.',
      p2: 'In dieser Arbeit geht es beim Berühren nicht darum, den Körper zu „reparieren“, sondern darum, Bedingungen für Wahrnehmung, Regulation und Integration zu schaffen.',
      p3: 'Das ist keine klassische Massage. Atem, Präsenz, Wahrnehmung und die Art, wie Sie sich im Körper erleben, gehören zum Prozess dazu.',
    },
    about: {
      heading: 'Über Elias',
      p1: 'Mich zieht es seit langem zur Körperarbeit — im eigenen Erleben und in der Begleitung anderer durch Berührung. Zu Rebalancing hat mich die Qualität geführt, die ich darin erfahren habe: Präsenz, Tiefe, und eine Art zu arbeiten, die weniger technisch wirkte und stärker einem Eintreten in den Dialog mit dem System einer anderen Person entsprach.',
      p2: 'Ich habe eine zweijährige Rebalancing-Ausbildung in Deutschland und der Schweiz abgeschlossen und vertiefe diesen Weg derzeit durch Assistenz in der Ausbildung selbst.',
      p3: 'Für mich geht es darin ums genaue Zuhören, mit dem zu arbeiten, was gerade da ist, und Menschen darin zu unterstützen, mit sich selbst verbundener zu werden.',
    },
    support: {
      heading: 'Wobei diese Arbeit unterstützen kann',
      intro: 'Menschen kommen aus unterschiedlichen Gründen, unter anderem:',
      note: 'Es geht nicht darum zu diagnostizieren, Krankheiten zu behandeln oder Heilung zu versprechen, sondern unterstützende Körperarbeit und einen Raum für Wahrnehmung und Regulation anzubieten.',
    },
    supportReasons: [
      'Entspannung und Entschleunigung',
      'Stress und Überforderung',
      'mehr Feingefühl für den Körper',
      'Erdung und Balance',
      'Persönlichkeitsentwicklung',
      'Begleitung in herausfordernden Lebensphasen',
      'Integration nach körperlicher Belastung oder Verletzung',
      'Begleitung neben ärztlicher oder therapeutischer Behandlung',
      'Übergänge, Veränderung oder Vorbereitung',
    ],
    session: {
      heading: 'Was in einer Sitzung passiert',
      p1: 'Jede Sitzung verläuft anders. Viele gehen gebundener, näher bei sich, ausgewogener oder entspannter. Für andere kann sich die Erfahrung auch aktivierend anfühlen.',
      p2: 'Weil die Arbeit das Nervensystem tief berühren kann, ist es hilfreich, danach etwas Raum zu lassen statt sofort in den nächsten Termin zu hetzen.',
      p3: 'Eine Sitzung dauert in der Regel etwa 90 Minuten. Sie beginnt oft mit einem kurzen Gespräch und manchmal mit einer stillen Ankommen-Phase.',
      p4: 'Darauf können Körperwahrnehmung, Haltungsbeobachtung und manuelle Arbeit folgen. Es geht nicht darum, eine äußere Deutung zu erzwingen, sondern wahrzunehmen, was sich in Ihrer Erfahrung gerade zeigt.',
      p5: 'Die Berührung kann fein oder kräftiger sein. Sie kann unbequeme Bereiche berühren, ohne dass Intensität um ihrer selbst willen das Ziel ist. Mehr Druck ist nicht „besser“. Es geht um Kontakt, Präsenz und das, was der Körper gerade tragen kann.',
    },
    offering: {
      heading: 'Format der Sitzungen',
      cardIndividualTitle: 'Einzelsitzungen',
      cardIndividualBody:
        'Einzelsitzungen sind möglich und können sich an dem orientieren, was Sie gerade bewegt.',
      cardRhythmTitle: 'Rhythmus',
      cardRhythmBody:
        'Der Abstand zwischen den Sitzungen hängt von Person und Prozess ab. Etwa zwei Wochen können eine Orientierung sein — variabel.',
    },
    pricing: {
      heading: 'Preise',
      intro: 'Rebalancing-Sitzungen',
      footnote:
        'Wenn die Kosten eine Hürde sind, sprechen Sie mich gerne an — es gibt oft eine Lösung.',
      items: [
        { duration: '60 Minuten', price: '90 €' },
        { duration: '90 Minuten', price: '120 €' },
        { duration: '120 Minuten', price: '160 €' },
      ],
    },
    series: {
      heading: 'Die zehn Sitzungen',
      intro:
        'Rebalancing ist traditionell in zehn aufeinander bezogene Sitzungen mit je einem thematischen Schwerpunkt gegliedert. Einzelsitzungen sind jederzeit möglich; für wiederkehrende Muster oder den Wunsch nach vertiefter Arbeit kann eine Serie von zehn Sitzungen ein sinnvoller Rahmen sein. Die folgenden Themen orientieren sich an der klassischen Rebalancing-Reihe (Inhalt angelehnt an öffentliche Rebalancing-Materialien).',
      sourceNote: '',
      sessions: [
        {
          title: '1 — Brustkorb & Zwerchfell',
          body: 'Inspiration, Aufrichtung, Atmung.',
        },
        {
          title: '2 — Beine',
          body: 'Den eigenen Standpunkt finden, zu sich stehen.',
        },
        {
          title: '3 — Schultern',
          body: 'Geben und Nehmen, Grenzen wahrnehmen, in Beziehung treten.',
        },
        {
          title: '4 — Becken',
          body: 'Kontrolle und Hingabe, Tragen und Getragen werden.',
        },
        {
          title: '5 — Bauch',
          body: 'Ins Zentrum kommen, Vertrauen, Verdauen, Selbstannahme.',
        },
        {
          title: '6 — Rücken',
          body: 'Aufrichtigkeit und Zurückhaltung.',
        },
        {
          title: '7 — Kopf',
          body: 'Wahrnehmung und Veränderung.',
        },
        {
          title: '8 — Integration',
          body: 'Zusammenhänge zwischen den Körperregionen vertiefen — erste Integration der Reihe.',
        },
        {
          title: '9 — Integration',
          body: 'Die Teile zusammenführen und zu einem erfahrbaren Ganzen verbinden.',
        },
        {
          title: '10 — Integration',
          body: 'Ganzheit spüren und Freiheit in Verbundenheit — Abschluss der Serie.',
        },
      ],
    },
    imageBand: {
      quote: 'Achtsame Berührung, langsames Tempo, Raum für Ihre Wahrnehmung.',
    },
    contact: {
      heading: 'Kontakt',
      intro: 'Wenn Sie eine Sitzung anfragen oder eine Frage stellen möchten, schreiben Sie mir gern.',
      email: 'E-Mail',
      phone: 'Telefon / Signal / WhatsApp',
      location: 'Ort',
      locationValue: 'Auf Anfrage',
      languages: 'Sprachen',
      languagesValue: 'Deutsch, Englisch',
    },
    ctaBand: {
      text: 'Lust, einen ersten Schritt zu wagen?',
      button: 'Sitzung anfragen',
    },
    disclaimer: {
      heading: 'Hinweis',
      body: 'Diese Arbeit wird als Körperarbeit für Wohlbefinden, Entspannung und Wahrnehmung angeboten. Sie ist keine medizinische Behandlung, ersetzt keine ärztliche Versorgung und beinhaltet weder Diagnosen noch Heilversprechen. Bei akuten oder schwerwiegenden gesundheitlichen Fragen wenden Sie sich bitte an die passenden Fachpersonen.',
    },
    footer: {
      name: 'Elias Krause',
      tag: 'Rebalancing',
    },
    galleryLabel: 'Impressionen aus der Praxis',
  },

  en: {
    meta: {
      title: 'Elias Krause — Rebalancing',
      description:
        'Rebalancing and fascia-informed bodywork with Elias Krause — space for awareness, grounding, and balance.',
    },
    nav: {
      intro: 'Practice',
      about: 'About',
      support: 'Support',
      session: 'Session',
      offering: 'Sessions & prices',
      contact: 'Contact',
      menu: 'Menu',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      closeMenuScrim: 'Close menu',
    },
    lang: { de: 'DE', en: 'EN', label: 'Language' },
    hero: {
      name: 'Elias Krause',
      subtitle: 'Rebalancing',
      lead: 'A space to slow down, listen, and come back into contact with your body.',
      muted: 'Sessions that support relaxation, body awareness, grounding, and inner balance.',
      book: 'Book a session',
      contact: 'Get in touch',
    },
    intro: {
      heading: 'What this is',
      p1: 'Rebalancing is a form of bodywork that engages the fascia system — the connective tissue network that runs through the whole body. It is influenced by Rolfing, craniosacral work, and the Rebalancing tradition that grew from collaboration between bodyworkers and therapists.',
      p2: 'In this work, touch is not about “fixing” the body, but about creating the conditions for awareness, regulation, and integration.',
      p3: 'This is not a typical massage. Breath, presence, perception, and how you experience yourself in your body are all part of the process.',
    },
    about: {
      heading: 'About Elias',
      p1: 'I have long been drawn to bodywork — in my own experience and in supporting others through touch. What brought me to Rebalancing was the quality I found there: presence, depth, and a way of working that felt less mechanical than applying a technique — more entering into dialogue with another person’s system.',
      p2: 'I completed a two-year Rebalancing training in Germany and Switzerland, and I continue to deepen this path by assisting in the training itself.',
      p3: 'For me, this work is about listening carefully, meeting what is actually present, and supporting people in becoming more connected with themselves.',
    },
    support: {
      heading: 'What this work can support',
      intro: 'People come for many different reasons, including:',
      note: 'The intention is not to diagnose, treat disease, or promise healing, but to offer supportive bodywork and a space for awareness and regulation.',
    },
    supportReasons: [
      'relaxation and slowing down',
      'stress and overwhelm',
      'feeling more attuned to the body',
      'grounding and balance',
      'personal development',
      'support during challenging life phases',
      'integration after physical strain or injury',
      'accompaniment alongside conventional medical care',
      'moments of transition, change, or preparation',
    ],
    session: {
      heading: 'What happens in a session',
      p1: 'Each session unfolds differently. Many people leave feeling more grounded, more in touch with themselves, more balanced, or more relaxed. For others, the experience can also feel energising.',
      p2: 'Because the work can touch the nervous system deeply, it helps to leave some spaciousness afterwards rather than rushing straight into the next thing.',
      p3: 'A session is usually around ninety minutes. It often begins with a short conversation, and sometimes with a quiet moment to arrive more fully in the present.',
      p4: 'From there, the work may include body awareness, posture observation, and hands-on touch. The focus is not on imposing an outside interpretation, but on sensing what is present in your experience right now.',
      p5: 'Touch may be subtle or more direct. It may meet areas of discomfort, but intensity for its own sake is not the goal. More pressure is not “better.” The work follows contact, presence, and what your body is ready to meet.',
    },
    offering: {
      heading: 'Session format',
      cardIndividualTitle: 'Individual sessions',
      cardIndividualBody: 'Individual sessions are possible and can be shaped around what is alive for you right now.',
      cardRhythmTitle: 'Rhythm',
      cardRhythmBody:
        'The space between sessions depends on the person and the process. About two weeks can be a useful orientation — and it can vary.',
    },
    pricing: {
      heading: 'Prices',
      intro: 'Rebalancing sessions',
      footnote: 'If cost is a concern, please reach out — there is often a way to make it work.',
      items: [
        { duration: '60 minutes', price: '€90' },
        { duration: '90 minutes', price: '€120' },
        { duration: '120 minutes', price: '€160' },
      ],
    },
    series: {
      heading: 'The ten sessions',
      intro:
        'Rebalancing is traditionally organised as ten sessions that build on one another, each with a thematic emphasis. Individual sessions are always possible; for recurring patterns or a wish to go deeper, a series of ten can be a supportive frame. The themes below follow the classical Rebalancing sequence (content informed by common Rebalancing materials).',
      sourceNote: '',
      sessions: [
        {
          title: '1 — Rib cage & diaphragm',
          body: 'Inspiration, uplift, breath.',
        },
        {
          title: '2 — Legs',
          body: 'Finding your footing, standing with yourself.',
        },
        {
          title: '3 — Shoulders',
          body: 'Giving and receiving, sensing boundaries, relating.',
        },
        {
          title: '4 — Pelvis',
          body: 'Control and surrender, holding and being held.',
        },
        {
          title: '5 — Abdomen',
          body: 'Coming into the centre, trust, digesting, self-acceptance.',
        },
        {
          title: '6 — Back',
          body: 'Uprightness and restraint.',
        },
        {
          title: '7 — Head',
          body: 'Perception and change.',
        },
        {
          title: '8 — Integration',
          body: 'Deepening how different regions connect — first integration pass of the series.',
        },
        {
          title: '9 — Integration',
          body: 'Bringing the parts together into a lived sense of wholeness.',
        },
        {
          title: '10 — Integration',
          body: 'Sensing wholeness and freedom in connection — closing the series.',
        },
      ],
    },
    imageBand: {
      quote: 'Attentive touch, unhurried pace, room for your perception.',
    },
    contact: {
      heading: 'Get in touch',
      intro: 'If you would like to book a session or ask a question, you are welcome to reach out.',
      email: 'Email',
      phone: 'Phone / Signal / WhatsApp',
      location: 'Location',
      locationValue: 'On request',
      languages: 'Languages',
      languagesValue: 'English, German',
    },
    ctaBand: {
      text: 'Curious about a first step?',
      button: 'Book a session',
    },
    disclaimer: {
      heading: 'Disclaimer',
      body: 'This work is offered as bodywork for well-being, relaxation, and awareness. It is not medical treatment, does not replace medical care, and does not include diagnosis or promises of healing. If you have acute or serious health concerns, please consult an appropriate professional.',
    },
    footer: {
      name: 'Elias Krause',
      tag: 'Rebalancing',
    },
    galleryLabel: 'Impressions from practice',
  },
}

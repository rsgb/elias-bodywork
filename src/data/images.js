/**
 * Central image registry — reorder or swap `src` imports to change photos site-wide.
 * Each entry: { id, src, alt }
 */
import heroImg from '../../assets/images/1.jpg'
import interludeA from '../../assets/images/3.jpg'
import interludeB from '../../assets/images/4.jpg'
import gallery1 from '../../assets/images/5.jpg'
import gallery2 from '../../assets/images/6.jpg'
import gallery3 from '../../assets/images/7.jpg'
/* About section uses 8.jpg; gallery cells 3–4 use 10.jpg and 7.jpg (order in array) */
import gallery4 from '../../assets/images/8.jpg'
import galleryGridLast from '../../assets/images/10.jpg'
import contactImg from '../../assets/images/9.jpg'

export const images = {
  hero: {
    id: 'hero',
    src: heroImg,
    alt: 'Hands-on bodywork session in calm light',
  },
  about: {
    id: 'about',
    src: gallery4,
    alt: 'Elias at work during a session',
  },
  interludeA: {
    id: 'interlude-a',
    src: interludeA,
    alt: 'Quiet moment of touch and presence',
  },
  interludeB: {
    id: 'interlude-b',
    src: interludeB,
    alt: 'Bodywork detail',
  },
  contact: {
    id: 'contact',
    src: contactImg,
    alt: 'Soft, grounded atmosphere in the practice space',
  },
  gallery: [
    { id: 'g1', src: gallery1, alt: 'Session documentation' },
    { id: 'g2', src: gallery2, alt: 'Session documentation' },
    { id: 'g3', src: galleryGridLast, alt: 'Session documentation' },
    { id: 'g4', src: gallery3, alt: 'Session documentation' },
  ],
}

import { socials } from '@/content/shared/person'
const baseURL = 'iamankurj.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: 'dark',        // dark | light
  neutral: 'gray',        // sand | gray | slate
  brand: 'emerald',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: 'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: 'contrast',    // color | contrast
  solidStyle: 'flat',        // flat | plastic
  border: 'playful',     // rounded | playful | conservative
  surface: 'translucent', // filled | translucent
  transition: 'all',         // all | micro | macro
  scaling: '100'         // 90 | 95 | 100 | 105 | 110
}

const title = 'Ankur Jain | Techie, Singer, Money Nerd, and Fitness Buff'
const description = 'My journey through singing, tech, personal finance, and fitness, and the lessons learned along the way.'
const name = 'Ankur Jain'

// metadata
const meta = {
  title: title,
  description: description,
  author: name,
  keywords: 'Ankur Jain, Tech Enthusiast, Singer, Money Nerd, Fitness Buff, Software Engineer, Personal Blog',
  robots: 'index, follow'
}

// open graph data
const og = {
  title: title,
  description: description,
  type: 'website',
  url: 'https://' + baseURL,
  image: 'https://' + baseURL + '/images/og_image.jpg', // Social media platforms typically recommend a specific size for og:image (e.g., 1200x630 pixels) to ensure the image is displayed correctly.
  site_name: name
}

// schema data
const schema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: name,
  description: description,
  url: "https://" + baseURL,
  sameAs: socials.map(social => social.href).filter(Boolean),
  image: "https://" + baseURL + "/images/og_image.jpg", // While there aren't strict size requirements for schema:image, it should be a high-quality image that accurately represents you or your brand.
  logo: '',
  email: 'tech.iamankurj@gmail.com',
}

export { baseURL, meta, og, schema, style }

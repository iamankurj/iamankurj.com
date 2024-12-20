const baseURL = 'demo.once-ui.com'

// default customization applied to the HTML in the main layout.tsx
const style = {
    theme:       'dark',        // dark | light
    neutral:     'gray',        // sand | gray | slate
    brand:       'cyan',        // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent:      'indigo',      // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid:       'contrast',    // color | contrast
    solidStyle:  'flat',        // flat | plastic
    border:      'playful',     // rounded | playful | conservative
    surface:     'translucent', // filled | translucent
    transition:  'all',         // all | micro | macro
    scaling:     '100',         // 90 | 95 | 100 | 105 | 110
}

// default metadata
const meta = {
    title: 'Ankur J | Senior Software Engineer, Part-time Singer and Full-time Learner',
    description: 'An open-source design system and component library for Next.js that emphasizes easy styling and accessibility in UI development.'
}


// default open graph data
const og = {
    title: 'Once UI for Next.js',
    description: 'We let designers code and developers design.',
    type: 'website'
}

// default schema data
const schema = {
    logo: '',
    type: 'Organization',
    name: 'One UI',
    description: 'Once UI is an open-source design system and component library for Next.js.',
    email: 'lorant@once-ui.com'
}

// social links
const social = {
    linkedin: 'https://www.linkedin.com/in/iamankurj/',
    instagram: 'https://instagram.com/i.am.ankur.j',
    github: 'https://github.com/iamankurj',
    youtube: 'https://youtube.com/@iamankurj'
}

export { baseURL, style, meta, og, schema, social };
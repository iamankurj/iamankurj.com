const baseURL = "https://iamankurj.com";

/** Default Open Graph / social share image. Per-page `meta.*.image` can override later. */
const defaultOgImage = "/images/og/me-by-the-river-og.jpg";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Ankur Jain | Product Engineer, Builder & Singer at Heart",
    description:
      "Personal site of Ankur Jain. Product Engineer with 10+ years of experience, creator of CourseCorrect.fyi, founder of Gaayak.org, and writer on sustainable finance & fitness.",
    image: defaultOgImage,
    canonical: baseURL,
    robots: "index,follow",
    alternates: [{ href: baseURL, hrefLang: "en" }],
  },
  experience: {
    path: "/tech/experience",
    title: "Experience | Ankur Jain",
    description:
      "Career history of Ankur Jain: Senior Product & Backend Engineer with 10+ years building resilient microservices and high-scale systems at Flybits, Meta, Morgan Stanley, and Credit Suisse.",
    image: defaultOgImage,
    robots: "index,follow",
  },
  projects: {
    path: "/tech/projects",
    title: "Projects | Ankur Jain",
    description:
      "Product experiments and case studies by Ankur Jain: architecture, stack choices, and engineering trade-offs.",
    image: defaultOgImage,
    robots: "index,follow",
  },
};

// default schema data
const schema = {
  logo: "",
  type: "Personal",
  name: "Ankur",
  description: meta.home.description,
  email: "tech.iamankurj@gmail.com",
};

export { baseURL, defaultOgImage, meta, schema };

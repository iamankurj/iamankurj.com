const baseURL = "https://iamankurj.com";

// metadata for pages
const meta = {
  home: {
    path: "/",
    title: "Ankur Jain | Product Engineer, Builder & Singer at Heart",
    description:
      "Personal site of Ankur Jain. Product Engineer with 10+ years of experience, creator of CourseCorrect.fyi, founder of Gaayak.org, and writer on sustainable finance & fitness.",
    image: "/images/og/me-by-the-river-og.jpg",
    canonical: baseURL,
    robots: "index,follow",
    alternates: [{ href: baseURL, hrefLang: "en" }],
  },
  // add more routes and reference them in page.tsx
};

// default schema data
const schema = {
  logo: "",
  type: "Personal",
  name: "Ankur",
  description: meta.home.description,
  email: "tech.iamankurj@gmail.com",
};

export { baseURL, meta, schema };

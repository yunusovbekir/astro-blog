import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "-",
  author: "Bakir Yunusov",
  desc: "A minimal, modest blog posts written by me.",
  title: "Bakir tries to learn",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "en",
  langTag: ["en-EN"],
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/yunusovbekir",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/bakir-yunusov-a19b0687",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:yunusovbekir@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];

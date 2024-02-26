import type { SocialObjects } from "./types";

export const SITE = {
  website: "https://grantsayre.dev/",
  author: "Grant Sayre",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "grantsayre.dev",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerPage: 10,
};

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/gsayre",
    linkTitle: ` ${SITE.title} on Github`,
    active: true,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/grant-sayre ",
    linkTitle: `${SITE.title} on LinkedIn`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:grantsayre1999@gmail.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: false,
  },
];

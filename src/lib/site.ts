const base = import.meta.env.BASE_URL.replace(/\/$/, "");

export const projectLinks = {
  article: {
    label: "Original Article",
    url: "https://kube.io/blog/liquid-glass-css-svg/",
    credit: "@kube",
  },
  github: {
    label: "GitHub Repository",
    url: "https://github.com/ricardious/liquid-glass-sandbox",
  },
};

export const primaryNav = [
  { href: `${base}/`, label: "Gallery" },
  { href: `${base}/how-it-works`, label: "How It Works" },
  { href: `${base}/svg-generator`, label: "SVG Generator" },
];

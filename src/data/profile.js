// Everything personal lives here — edit this file to update the site.

const CAREER_START = new Date(2023, 7, 1); // August 2023

export const yearsOfExperience = () => {
  const years = (Date.now() - CAREER_START.getTime()) / (365.25 * 24 * 3600 * 1000);
  return Math.max(1, Math.floor(years));
};

export const profile = {
  name: "Adarsh Priyadarshi",
  firstName: "Adarsh",
  roles: ["Full Stack Engineer", "Backend Systems", "AI / LLM Integration", "Creator"],
  location: "Bengaluru, India",
  available: true,
  email: "adarshpriyadarshi001@gmail.com",
  resume: "https://drive.google.com/file/d/1e_jVjGQcnkpCy-jvA7CBPjC_F5kQxhlP/view?usp=sharing",
  videoResume: "https://drive.google.com/file/d/1C2ir-vZKPYpP0yLQB8B8vFrO966DgjON/view?usp=sharing",
  socials: {
    github: "https://github.com/Adarsh9-dev",
    linkedin: "https://www.linkedin.com/in/adarshpriyadarshi-7b58711a7",
    instagram: "https://www.instagram.com/darshi.ai/",
  },
  tagline:
    "I build AI-powered products end to end — from the first prompt to production — and share how I do it.",
  bio: [
    "I'm a full stack engineer with 3+ years building high-scale backends and AI-integrated products in Node.js, NestJS, TypeScript, PostgreSQL and Kafka. At Buzzworks I build a multi-tenant enterprise HRMS with LLM-powered workflows; before that, as the first employee at IndianAppGuy, I led the MagicSlides backend to 1.5M+ users and mentored a team of 4.",
    "Outside work I ship my own products and share the prompts and workflows I use to build fast — every one of them is documented in my Prompt Library. I'm a National Merit-cum-Means Scholarship (NMMS) recipient, a cyclist, an NSS volunteer and a self-confessed pathetic dancer.",
  ],
  traits: ["Builder", "Explorer", "Critical thinker", "Tech lover", "Cyclist", "Fitness enthusiast", "NSS volunteer"],
};

export const stats = () => [
  { value: `${yearsOfExperience()}+`, label: "Years shipping production code" },
  { value: "1.5M+", label: "Users on MagicSlides backend" },
  { value: "20+", label: "Projects built & launched" },
  { value: "NMMS", label: "National Merit Scholar" },
];

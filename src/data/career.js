export const experience = [
  {
    role: "Software Engineer",
    company: "Buzzworks Business Services",
    link: null,
    start: "Sep 2025",
    end: "Present",
    location: "Bengaluru, India",
    summary:
      "Building a multi-tenant enterprise HRMS on NestJS and PostgreSQL, with LLM-powered automation.",
    highlights: [
      "Designed a horizontally scalable microservices architecture handling 50,000+ daily transactions at a 99.9% uptime SLA.",
      "Integrated LLM APIs to automate AI Pulse Survey analysis and summarization, cutting manual HR processing time by ~60%.",
      "Built Kafka-based async event pipelines across services, improving throughput by ~40%.",
      "Implemented hierarchical multi-tenant RBAC and tuned PostgreSQL, bringing p95 on heavy reads from 800ms to under 120ms.",
      "Owned the Leave and Exit Management modules end to end, and am building the Excel format mapper into the HRMS.",
    ],
    stack: ["NestJS", "PostgreSQL", "Kafka", "Docker", "GitHub Actions", "LLMs"],
  },
  {
    role: "Full Stack Developer",
    company: "IndianAppGuy",
    link: "https://indianappguy.com",
    start: "Aug 2023",
    end: "Sep 2025",
    location: "Bengaluru, India",
    summary:
      "First employee, reporting to the CEO. Led backend engineering of MagicSlides and mentored a team of 4.",
    highlights: [
      "Led the MagicSlides backend serving 1.5M+ users across Chrome, Google Slides, Figma and GPT integrations.",
      "Cut database query times by 50% with a Redis caching layer, sustaining 10,000+ concurrent users.",
      "Built 6+ revenue-generating AI products on OpenAI APIs: PPT generator, AI form builder, support chatbot and an AI calling app.",
      "Engineered JWT and OAuth 2.0 flows securing REST APIs across Google, Figma and Chrome integrations.",
      "Led and mentored 4 engineers, ran Node.js training sessions and owned delivery of all major releases.",
    ],
    stack: ["Node.js", "Next.js", "Redis", "PostgreSQL", "OpenAI", "AWS"],
  },
  {
    role: "Core Member",
    company: "Glucian",
    link: "https://glucian.com",
    start: "Aug 2021",
    end: "Mar 2023",
    location: "Bhubaneswar, India",
    summary: "Worked across design, business development, teaching assistance and software development.",
    highlights: [
      "Designed presentations, logos, posters and Photoshop creatives.",
      "Supported business development and taught as a teaching assistant.",
    ],
    stack: ["Design", "Photoshop", "Web"],
  },
];

export const education = [
  {
    title: "B.Sc. Computer Science",
    place: "Dhenkanal Autonomous College, Utkal University",
    period: "2020 — 2023",
    note: "CGPA 7.78 / 10 · NSS volunteer",
  },
  {
    title: "Higher Secondary (Class XII, Science)",
    place: "R.P Residential Higher Secondary School, Cuttack",
    period: "2018 — 2020",
    note: "70.5%",
  },
  {
    title: "Secondary (Class X)",
    place: "K.P.P BidyaPitha, Cuttack",
    period: "2016 — 2018",
    note: "80% · NMMS Scholar",
  },
];

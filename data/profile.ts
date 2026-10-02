// ─────────────────────────────────────────────────────────────
// Edit this file to update the site. All text lives here.
// Empty strings ("") are hidden automatically.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: "Tu Nguyen",
  role: "Full-Stack Developer",
  headline: "Fast, reliable websites for small businesses — built carefully, delivered on time.",
  intro:
    "I'm Tu, a full-stack developer from Saigon with 5+ years of experience. I turn designs into clean websites, fix what's broken, and connect online payments — with clear updates at every step. My landing pages were built to a 95+ Google PageSpeed standard.",
  location: "Saigon, Vietnam (GMT+7) · Remote",
  tagline: "Made with care in Saigon",
  photo: "/photo.jpg", // put your photo in /public (e.g. photo.jpg) and write "/photo.jpg"
  email: "forteennice@gmail.com",
  upwork: "", // TODO: paste your Upwork profile URL
  github: "", // TODO: paste your GitHub URL
  linkedin: "", // TODO: paste your LinkedIn URL
  cv: "", // optional: put Tu_Nguyen_CV.pdf in /public and write "/Tu_Nguyen_CV.pdf"
};

export const services = [
  {
    title: "Business websites & landing pages",
    text: "From your Figma design or idea to a fast, mobile-friendly website that scores 90+ on Google PageSpeed.",
  },
  {
    title: "Website fixes & improvements",
    text: "Something broken or slow? I find the cause, fix it safely and explain what I changed in plain words.",
  },
  {
    title: "Online payments & integrations",
    text: "Add payments, booking or contact forms, and connect your site to the tools you already use.",
  },
];

export type Project = {
  title: string;
  company: string;
  problem: string;
  solution: string;
  result: string;
  stack: string[];
  link?: string;
};

export const projects: Project[] = [
  {
    title: "Marketing landing pages",
    company: "EMOBI Pte. Ltd., Singapore",
    problem: "Campaign pages for many markets had to load fast, even on slow mobile networks.",
    solution:
      "Built pages with Next.js, optimized images, lazy loading and minimal JavaScript, on top of a shared API SDK.",
    result: "Met the company standard of PageSpeed 95+ on desktop and 80+ on mobile.",
    stack: ["Next.js", "JavaScript", "HTML/CSS", "PHP"],
  },
  {
    title: "Payment gateway & partner integrations",
    company: "EMOBI Pte. Ltd., Singapore",
    problem: "Each payment gateway and partner in each country had different APIs and rules.",
    solution: "Built and maintained REST APIs in Java (Spring Boot, Play) and Scala with clear integration layers.",
    result: "Payment flows running in production across multiple countries.",
    stack: ["Java", "Spring Boot", "Play", "Scala", "REST"],
  },
  {
    title: "Reusable API SDK + internal dashboard",
    company: "EMOBI Pte. Ltd., Singapore",
    problem: "Every new landing page repeated the same backend API code; the team needed an internal dashboard.",
    solution: "Wrote a reusable SDK for backend API calls, and a dashboard with ReactJS and PHP Phalcon.",
    result: "New pages reused tested logic instead of rewriting it.",
    stack: ["JavaScript", "React", "PHP Phalcon"],
  },
];

export const experience = [
  { period: "Mar 2021 – Jan 2026", role: "Software Engineer", company: "EMOBI Pte. Ltd. · Singapore" },
  { period: "2020", role: "Android Developer Intern", company: "Vinova Pte. Ltd." },
];

export const skills = {
  Frontend: ["Next.js", "React", "TypeScript", "JavaScript", "HTML/CSS", "Tailwind"],
  Backend: ["Java", "Spring Boot", "Play", "Scala", "PHP Phalcon", "REST APIs"],
  "Data & DevOps": ["MySQL", "MariaDB", "Redis", "Docker", "CI/CD", "AWS"],
  "AI tools": ["Claude Code", "Codex"],
};

export const education = "B.Eng. Software Engineering — University of Information Technology (VNU-HCM), 2023";

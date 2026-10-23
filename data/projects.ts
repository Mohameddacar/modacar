export type Project = {
  id: string;
  number: string;
  category: string;
  title: string;
  description: string;
  stack: string[];
  image: string;
  liveUrl?: string;
  sourceUrl?: string;
  slug: string;
};

export const projects: Project[] = [
  {
    id: "bms-bookshop",
    number: "01",
    category: "Full-Stack Business System",
    title: "BMS Bookshop System",
    description:
      "A web platform that replaces fragmented bookshop processes with connected inventory, ordering, payment and delivery workflows.",
    stack: ["Next.js", "TypeScript", "Express", "PostgreSQL", "Prisma"],
    image: "/projects/bms-bookshop.webp",
    slug: "bms-bookshop",
  },
  {
    id: "heartguard-ai",
    number: "02",
    category: "Applied Machine Learning",
    title: "HeartGuard AI",
    description:
      "An educational heart-disease risk screening experience connecting a Logistic Regression model, FastAPI service and clear Next.js interface.",
    stack: ["Python", "FastAPI", "scikit-learn", "Next.js"],
    image: "/projects/heartguard.webp",
    slug: "heartguard-ai",
  },
  {
    id: "climate-signals",
    number: "03",
    category: "Data Science and Early Warning",
    title: "Somalia Climate Signals",
    description:
      "A rainfall, drought and flood early-warning research project using decades of Somali climate observations and time-aware validation.",
    stack: ["Python", "Pandas", "Time Series", "Machine Learning"],
    image: "/projects/climate-signals.webp",
    slug: "somalia-climate-signals",
  },
  {
    id: "student-at-risk",
    number: "04",
    category: "Human-Centered AI",
    title: "Student At-Risk System",
    description:
      "A decision-support prototype that identifies students who may need support while keeping intervention decisions with human educators.",
    stack: ["Python", "FastAPI", "Machine Learning", "Responsible AI"],
    image: "/projects/student-at-risk.webp",
    slug: "student-at-risk",
  },
  {
    id: "shaqomatch-ai",
    number: "05",
    category: "Local AI Product",
    title: "ShaqoMatch AI",
    description:
      "A local-first résumé analysis workflow that turns candidate documents into structured hiring insights using an on-device language model.",
    stack: ["Ollama", "FastAPI", "Next.js", "PostgreSQL"],
    image: "/projects/shaqomatch.webp",
    slug: "shaqomatch-ai",
  },
];

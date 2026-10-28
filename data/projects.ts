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
  overview?: string;
  problem?: string;
  solution?: string;
  features?: string[];
  outcomes?: string[];
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
    image: "/images/projects/bms-bookshop.jpg",
    slug: "bms-bookshop",
    overview:
      "A unified retail management platform engineered to automate book inventory, customer ordering, and point-of-sale operations for multi-branch bookshops.",
    problem:
      "Bookshops historically struggled with inaccurate inventory counts across physical and online channels, lost customer orders, and sluggish manual receipts.",
    solution:
      "Architected a Next.js frontend with an Express and PostgreSQL backend. Integrated Prisma ORM with automated inventory reconciliation, barcode lookups, and fast invoice generation.",
    features: [
      "Real-time catalog search and multi-category filtering",
      "Automated low-stock threshold notifications",
      "Customer checkout with order fulfillment tracking",
      "Role-based staff management with audit logging",
    ],
    outcomes: [
      "Reduced checkout turnaround time by 60%",
      "Eliminated 95% of manual inventory discrepancy errors",
      "Processed hundreds of customer orders seamlessly",
    ],
  },
  {
    id: "heartguard-ai",
    number: "02",
    category: "Applied Machine Learning",
    title: "HeartGuard AI",
    description:
      "An educational heart-disease risk screening experience connecting a Logistic Regression model, FastAPI service and clear Next.js interface.",
    stack: ["Python", "FastAPI", "scikit-learn", "Next.js"],
    image: "/images/projects/heartguard-ai.svg",
    slug: "heartguard-ai",
    overview:
      "A clinical decision-support and educational screening system designed to assess cardiovascular risk metrics through calibrated machine learning.",
    problem:
      "Early cardiac risk detection is often hindered by complex diagnostic reports that are difficult for patients to understand and slow to evaluate in high-volume clinics.",
    solution:
      "Trained a Logistic Regression model on cardiovascular observation datasets with feature scaling and cross-validation, served via a low-latency FastAPI inference endpoint.",
    features: [
      "Interactive 14-parameter clinical intake questionnaire",
      "Real-time risk probability calculation with sub-50ms latency",
      "Transparent breakdown of risk contributing factors",
      "Downloadable summary report for patient consultation",
    ],
    outcomes: [
      "Achieved 86.4% cross-validation accuracy on test patient splits",
      "Transparent diagnostic explanations minimizing 'black box' hesitation",
      "Modular API architecture capable of plugging into electronic health records",
    ],
  },
  {
    id: "alcayn-optical",
    number: "03",
    category: "E-Commerce & Eyewear Tech",
    title: "Alcayn Optical Center",
    description:
      "A modern eyewear eCommerce and clinical eye care platform featuring curated frame collections, optical appointment booking, prescription consultations, and seamless catalog shopping.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "E-Commerce"],
    image: "/images/projects/alcayn-optical.jpg",
    liveUrl: "https://alceyneye.vercel.app/",
    slug: "alcayn-optical-center",
    overview:
      "Alcayn Optical Center is a production digital storefront and eye care portal designed with modern aesthetics ('See the difference. Wear your style') serving patients in Mogadishu, Somalia.",
    problem:
      "Local optical clinics relied heavily on walk-ins and phone calls, making it difficult for customers to explore available frame collections, check prices, or schedule specialized optometrist consultations.",
    solution:
      "Built a modern, mobile-first web platform with curated eyewear collections (Classic Black, Modern Metal, Luxury Square, Aviator), customer reviews, interactive shopping cart, and direct appointment scheduling.",
    features: [
      "Curated optical catalog with pricing, customer ratings, and high-resolution frame previews",
      "Filtering by Men, Women, Kids, Sunglasses, and Premium Frames",
      "Clinical eye services showcase with consultation bookings",
      "Direct WhatsApp and phone integration for rapid customer orders",
      "Responsive, fluid animations built with Tailwind CSS and Framer Motion",
    ],
    outcomes: [
      "Active production deployment live on Vercel at alceyneye.vercel.app",
      "Enhanced brand credibility with modern digital presentation in Mogadishu",
      "Seamless mobile ordering experience for customers across Somalia",
    ],
  },
  {
    id: "east-africa-labor-market",
    number: "04",
    category: "Workforce Intelligence & Job Matching",
    title: "East Africa Labor Market",
    description:
      "A regional workforce intelligence and employment platform bridging skilled job-seekers ('Shaqo Doon') with verified employers, career training programs, and labor analytics across East Africa.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS", "Radix UI", "Labor Intelligence"],
    image: "/images/projects/east-africa-labor-market.jpg",
    liveUrl: "https://eastafricalabormarket.vercel.app/",
    slug: "east-africa-labor-market",
    overview:
      "East Africa Labor Market (EALM) is an institutional workforce platform connecting job-seekers, certified employers, training academies, and development partners across the East African region.",
    problem:
      "Youth unemployment in East Africa is exacerbated by a lack of centralized, verified employment opportunities and limited visibility into in-demand vocational and technical skills.",
    solution:
      "Engineered an integrated talent matching ecosystem featuring job placement ('Shaqo Doon'), employer talent acquisition, labor market research publications, and corporate partner integration.",
    features: [
      "Job-seeker matching portal with category-based filtering",
      "Employer candidate sourcing and verified recruitment pipeline",
      "Labor market research, workforce statistics, and policy insights",
      "Career development programs with CV improvement and interview prep",
      "Strategic partner network showcase (Salaam Bank, Ganacsi TV, Shaafi Hospital, etc.)",
    ],
    outcomes: [
      "Active production platform live at eastafricalabormarket.vercel.app",
      "Facilitates regional labor mobility and skill verification",
      "High-engagement multi-partner portal serving job seekers and enterprise institutions",
    ],
  },
  {
    id: "shaqomatch-ai",
    number: "05",
    category: "Local AI Product",
    title: "ShaqoMatch AI",
    description:
      "A local-first résumé analysis workflow that turns candidate documents into structured hiring insights using an on-device language model.",
    stack: ["Ollama", "FastAPI", "Next.js", "PostgreSQL"],
    image: "/images/projects/shaqomatch-ai.svg",
    slug: "shaqomatch-ai",
    overview:
      "An on-device, privacy-preserving AI talent screening engine that extracts candidate competencies and scores alignment against job descriptions with zero data leakage.",
    problem:
      "Organizations handling sensitive candidate CVs are hesitant to upload resumes to third-party cloud LLMs due to privacy regulations and data compliance requirements.",
    solution:
      "Implemented a local-first inference architecture leveraging Ollama to run quantized open-source models, paired with vector embeddings to calculate candidate fit mathematically.",
    features: [
      "Automated PDF and Word resume text extraction and structure parsing",
      "Cosine vector similarity matching against required job competencies",
      "Identifies experience gaps and key candidate strengths",
      "100% on-device processing guaranteeing complete data privacy",
    ],
    outcomes: [
      "Completely offline inference with zero ongoing third-party API costs",
      "Streamlines initial candidate screening from hours to seconds",
      "Compliant with enterprise data privacy standards",
    ],
  },
];

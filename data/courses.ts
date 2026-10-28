export interface CourseModule {
  title: string;
  duration?: string;
  description: string;
  topics: string[];
}

export interface RealWorldProject {
  title: string;
  category: string;
  description: string;
  features: string[];
}

export interface Course {
  id: string;
  title: string;
  tagline: string;
  category: "Full Stack AI" | "Data Analysis & Automation" | "Mentorship";
  level: "Beginner Friendly" | "Intermediate" | "All Levels";
  duration: string;
  durationNote?: string;
  format: string;
  status: "Enrollment Open" | "Coming Soon";
  language: string;
  languageNote?: string;
  featured?: boolean;
  image: string;
  instructor: {
    name: string;
    role: string;
    avatar: string;
  };
  shortDescription: string;
  fullDescription: string[];
  workflowSteps: {
    step: string;
    label: string;
    description: string;
  }[];
  techStack: {
    name: string;
    category: string;
    badge?: string;
  }[];
  realWorldProjects: RealWorldProject[];
  modules: CourseModule[];
  learningOutcomes: string[];
  targetAudience: string[];
  prerequisites: string[];
  includedFeatures: string[];
  whatsappMessage: string;
}

export const courses: Course[] = [
  // 1. FULL STACK AI (Active Flagship Course)
  {
    id: "ai-powered-fullstack-development",
    title: "AI-Powered Full-Stack Development",
    tagline: "Vibe Coding, AI Agents & Real-World Projects",
    category: "Full Stack AI",
    level: "Beginner Friendly",
    duration: "4 Weeks (Based on Effort)",
    durationNote: "Ku xiran diyaargarowgaaga iyo dadaalkaaga (Self-paced, not time-restricted)",
    format: "Video Lessons + Hands-on Projects + 1-on-1 WhatsApp Support",
    status: "Enrollment Open",
    language: "Somali (Af-Soomaali)",
    languageNote: "Casharrada oo dhan waa Af-Soomaali (100% Somali voiceover & explanations)",
    featured: true,
    image: "/images/ai-fullstack-course-banner.jpg",
    instructor: {
      name: "Mohamed Dacar",
      role: "Software Engineer & Applied AI Builder",
      avatar: "/images/mohamed-dacar-suit.jpg",
    },
    shortDescription:
      "This practical course teaches students how to build complete web applications using modern programming technologies and AI-powered development tools. All video lessons are fully explained in Somali.",
    fullDescription: [
      "This practical course teaches students how to build complete web applications using modern programming technologies and AI-powered development tools.",
      "You will learn how to turn an idea into a real software product. Starting with project planning and UI/UX design, you will progress through frontend development, backend development, database design, authentication, testing, debugging, and deployment.",
      "The course introduces vibe coding, where developers use AI tools (ChatGPT, GitHub Copilot, Cursor) to help generate, improve, and debug code while guiding the development process. You will also learn how to work with AI agents, write effective prompts, understand generated code, and solve common development problems.",
      "Throughout the course, you will work on practical features such as user management, dashboards, reports, inventory, sales, income and expenses, and role-based access control.",
      "You will use modern development tools and technologies, including React, JavaScript, Node.js, Express.js, databases, Git, GitHub, and cloud deployment platforms, alongside suitable AI coding assistants.",
      "Muhiim: Dhammaan casharrada muuqaalka ah (videos) waxaa lagu sharxay Af-Soomaali fudud oo qoto-dheer si aad si dhab ah u fahanto una dhisato mashaariicda.",
    ],
    workflowSteps: [
      { step: "01", label: "From Idea", description: "Plan project structure, scope features, and define system architecture" },
      { step: "02", label: "UI/UX Design", description: "Design responsive, modern interfaces using Figma with AI prompts" },
      { step: "03", label: "Code with AI", description: "Master vibe coding with ChatGPT, Copilot, & AI agents to build full logic" },
      { step: "04", label: "Deploy", description: "Ship production databases & live web apps to Vercel and Render" },
      { step: "05", label: "Real Project", description: "Finish with high-value portfolio apps: Inventory, School, E-Commerce systems" },
    ],
    techStack: [
      { name: "ChatGPT & AI Agents", category: "AI Tools", badge: "AI Core" },
      { name: "GitHub Copilot", category: "AI Tools", badge: "Coding Assistant" },
      { name: "Figma", category: "UI/UX Design", badge: "Design" },
      { name: "HTML5 & Modern CSS3", category: "Frontend", badge: "Foundations" },
      { name: "JavaScript (ES6+)", category: "Frontend & Backend", badge: "Core Logic" },
      { name: "React", category: "Frontend", badge: "UI Framework" },
      { name: "Tailwind CSS", category: "Frontend", badge: "Styling" },
      { name: "Node.js", category: "Backend", badge: "Runtime" },
      { name: "Express.js", category: "Backend", badge: "API Server" },
      { name: "PostgreSQL & MySQL", category: "Database", badge: "Data Store" },
      { name: "Git & GitHub", category: "DevOps", badge: "Version Control" },
      { name: "Vercel & Render", category: "Deployment", badge: "Cloud Hosting" },
    ],
    realWorldProjects: [
      {
        title: "Enterprise Inventory & Stock Management",
        category: "Full-Stack Enterprise App",
        description:
          "A multi-location inventory tracker handling incoming stock, supplier orders, real-time alerts for low inventory, and batch exports.",
        features: ["Barcode/SKU tracking", "Stock in/out ledger", "Low inventory alerts", "Supplier directories"],
      },
      {
        title: "School & Academic Management Portal",
        category: "Multi-Role SaaS Portal",
        description:
          "Complete educational platform managing student enrollments, teacher assignments, attendance logging, grade reporting, and fee payments.",
        features: ["Role-Based Access (Admin/Teacher/Student)", "Fee collection tracking", "Attendance records", "Automated PDF report cards"],
      },
      {
        title: "Modern E-Commerce & Order Management",
        category: "Commercial Platform",
        description:
          "Production-ready digital store featuring product catalogs, cart workflows, checkout pipelines, order fulfillment tracking, and sales analytics.",
        features: ["Dynamic catalog with search & filters", "Cart state & checkout", "Order fulfillment panel", "Receipt printing"],
      },
      {
        title: "Executive Business Analytics Dashboard",
        category: "Data & Financial Control",
        description:
          "Executive analytics dashboard displaying sales volume, revenue charts, expense tracking, net profit metrics, and downloadable audit reports.",
        features: ["Interactive KPI metrics", "Income & expense categorizer", "Sales trends graphs", "Data export to Excel/CSV"],
      },
    ],
    modules: [
      {
        title: "Module 1: Project Planning, Architecture & AI-Assisted UI/UX Design",
        duration: "Part 1 (Self-Paced)",
        description: "Transform ideas into software specs and high-fidelity user interfaces with modern design principles and AI prompts.",
        topics: [
          "Breaking down product requirements and creating user journey maps",
          "Designing responsive layouts and modern components in Figma",
          "Using AI prompts to rapidly generate design inspiration, color palettes, and UI copy",
          "Setting up the developer environment: Node.js, VS Code, Git, and AI plugins",
        ],
      },
      {
        title: "Module 2: Frontend Engineering with React & Tailwind CSS",
        duration: "Part 2 (Self-Paced)",
        description: "Build interactive, component-driven client applications that are fast, accessible, and responsive across all screens.",
        topics: [
          "Modern JavaScript (ES6+), async/await, and DOM manipulation foundations",
          "React architecture: components, props, hooks (useState, useEffect, useMemo)",
          "Building slick, ultra-responsive layouts with Tailwind CSS utility classes",
          "Client-side routing, navigation, modals, forms, and responsive mobile drawers",
        ],
      },
      {
        title: "Module 3: Vibe Coding Mastery & AI Coding Agents",
        duration: "Part 3 (Self-Paced)",
        description: "Master the art of AI-assisted engineering—leveraging AI agents, writing clear engineering context, and verifying code safely.",
        topics: [
          "What is Vibe Coding: guiding AI models to generate entire features and modules",
          "Effective prompt engineering for code architecture, API endpoints, and SQL schemas",
          "AI debugging workflows: diagnosing runtime errors, stack traces, and edge cases",
          "Understanding AI-generated code, security caveats, and refactoring with confidence",
        ],
      },
      {
        title: "Module 4: Backend API Development with Node.js & Express.js",
        duration: "Part 4 (Self-Paced)",
        description: "Build robust, scalable RESTful APIs that process client requests, validate data, and orchestrate business logic.",
        topics: [
          "Node.js runtime foundations, event loop, and modular architecture",
          "Building RESTful APIs with Express.js: routes, controllers, and middleware",
          "Request validation, status codes, and centralized error handling mechanisms",
          "Connecting frontend React applications with backend API endpoints using Fetch/Axios",
        ],
      },
      {
        title: "Module 5: Database Architecture with PostgreSQL & MySQL",
        duration: "Part 5 (Self-Paced)",
        description: "Model complex real-world data structures, define relational tables, enforce constraints, and query data efficiently.",
        topics: [
          "Relational database design: primary keys, foreign keys, indexes, and normal forms",
          "Writing SQL queries: joins, aggregations, transactions, and filters",
          "Using modern ORMs/Query builders (Prisma / Drizzle) for type-safe database access",
          "Database migrations, seed data, and connection pooling in cloud environments",
        ],
      },
      {
        title: "Module 6: Authentication, Security & Role-Based Access Control (RBAC)",
        duration: "Part 6 (Self-Paced)",
        description: "Secure your applications with industrial-strength authentication, password hashing, JWTs, and multi-tier user permissions.",
        topics: [
          "Secure user registration, password hashing (bcrypt), and email verification concepts",
          "JSON Web Tokens (JWT) & session cookies for stateless authentication",
          "Implementing Role-Based Access Control (RBAC): SuperAdmin, Manager, Staff, Customer",
          "Protecting sensitive API endpoints and frontend route guards",
        ],
      },
      {
        title: "Module 7: Core Business Systems (Inventory, Sales, Reports & Expense Tracking)",
        duration: "Part 7 (Self-Paced)",
        description: "Implement the crucial revenue and operational engines every business application requires.",
        topics: [
          "Building user management tables with search, filters, and bulk status updates",
          "Implementing inventory ledgers with stock addition, deduction, and supplier links",
          "Sales point-of-sale recording, tax calculation, and automated invoice printing",
          "Expense categorization, monthly profit/loss calculations, and interactive charts",
        ],
      },
      {
        title: "Module 8: Git, GitHub, Automated Testing & Production Deployment",
        duration: "Part 8 (Self-Paced)",
        description: "Package, version-control, and deploy your full-stack applications to global cloud platforms for the world to see.",
        topics: [
          "Git branch workflows, commits, pull requests, and collaborative code reviews on GitHub",
          "Testing backend routes and frontend components for bugs and regressions",
          "Deploying frontend to Vercel and backend APIs/databases to Render, Railway, or Supabase",
          "Custom domains, HTTPS configuration, environment variables, and live monitoring",
          "Polishing your developer portfolio to showcase your production projects",
        ],
      },
    ],
    learningOutcomes: [
      "Plan and structure a software project from scratch.",
      "Design modern and responsive user interfaces using Figma and AI.",
      "Build production-ready frontend and backend applications.",
      "Design relational databases (PostgreSQL/MySQL) and connect them securely.",
      "Use AI tools and agents (ChatGPT, Copilot, Cursor) effectively during development.",
      "Implement multi-role authentication and granular user permissions (RBAC).",
      "Test, debug, and systematically improve software codebases.",
      "Use Git and GitHub to manage version history and collaborate like a pro.",
      "Deploy full-stack applications online with custom domains and cloud databases.",
      "Build an undeniable portfolio of practical, real-world commercial projects.",
    ],
    targetAudience: [
      "Beginners with basic computer skills wanting a clear, guided roadmap to professional coding.",
      "University students looking to bridge the gap between classroom theory and real tech jobs.",
      "Aspiring software developers looking to build portfolio projects that land client contracts.",
      "Entrepreneurs, founders, and creators who want to turn their digital product ideas into working software.",
    ],
    prerequisites: [
      "Basic computer literacy (navigating files, using a web browser)",
      "A laptop or desktop computer with internet access",
      "No prior coding background is required — everything is taught from first principles with AI assistance",
    ],
    includedFeatures: [
      "Video Lectures: 100% Af-Soomaali (Narrated in Somali)",
      "Muddada: 4 Weeks (Ku xiran dadaalkaaga / Self-Paced)",
      "Step-by-Step High-Definition Video Modules",
      "Complete Source Code & Project Starter Repositories",
      "Vibe Coding Prompt Templates & Cheatsheets",
      "1-on-1 Direct WhatsApp Support & Code Debugging (+252 61 779 1483)",
      "Official Certificate of Course Completion",
      "Lifetime Access to Course Materials & Future Updates",
    ],
    whatsappMessage:
      "Asc Mohamed! I want to enroll in 'AI-Powered Full-Stack Development: Vibe Coding, AI Agents & Real-World Projects' (Casharrada Af-Soomaaliga). Please share the enrollment details!",
  },

  // 2. DATA ANALYSIS & AUTOMATION (Coming Soon)
  {
    id: "data-analysis-automation",
    title: "Data Analysis & Business Automation (Python, Excel, Power BI)",
    tagline: "Master Practical Data Insights, Automated Spreadsheets & Interactive Dashboards",
    category: "Data Analysis & Automation",
    level: "Beginner Friendly",
    duration: "Coming Soon (Dhawaan Filo)",
    durationNote: "Koorsadu waxay ku jirtaa diyaarinta casharrada (In Active Preparation)",
    format: "Hands-on Practical Labs + Guided Automation Scripts",
    status: "Coming Soon",
    language: "Somali (Af-Soomaali)",
    languageNote: "Casharrada oo dhan waa Af-Soomaali (100% Somali voiceover)",
    image: "/images/data-automation-coming-soon.jpg",
    instructor: {
      name: "Mohamed Dacar",
      role: "Software Engineer & Applied AI Builder",
      avatar: "/images/mohamed-dacar-suit.jpg",
    },
    shortDescription:
      "Master modern data analysis, automated spreadsheets, and interactive visual dashboards using Python, Microsoft Excel, and Power BI. This course is currently in active preparation — join the waitlist.",
    fullDescription: [
      "This comprehensive program is currently in active preparation by Mohamed Dacar to help students and professionals master data analytics and workflow automation using the industry's top three tools: Python, Excel, and Power BI.",
      "You will learn how to turn raw spreadsheets and business exports into automated reports, clean messy datasets with Python, build complex Excel models, and design high-impact Power BI executive dashboards.",
      "Muhiim: Koorsadani hadda waxay ku jirtaa diyaarinta casharrada iyo duubista muuqaallada (In Active Preparation). Iska diiwaangeli liiska hore ee WhatsApp-ka si aad u hesho qiimo dhimis gaar ah iyo ogeysiin toos ah marka ay furanto.",
    ],
    workflowSteps: [
      { step: "01", label: "Advanced Excel", description: "Mastering complex formulas, pivot tables, data modeling, and automated spreadsheet workflows" },
      { step: "02", label: "Python & Pandas", description: "Writing scripts to automate repetitive data wrangling, file merging, and cleaning" },
      { step: "03", label: "Power BI Dashboards", description: "Building interactive visual business intelligence dashboards and executive reports" },
      { step: "04", label: "Full Automation", description: "End-to-end data pipelines connecting raw data to finished visual reports automatically" },
    ],
    techStack: [
      { name: "Python & Pandas", category: "Programming", badge: "Data Wrangling" },
      { name: "Microsoft Excel", category: "Spreadsheets", badge: "Advanced Formulas" },
      { name: "Microsoft Power BI", category: "Business Intelligence", badge: "Interactive Dashboards" },
      { name: "SQL & Databases", category: "Querying", badge: "Data Ingestion" },
      { name: "NumPy & Matplotlib", category: "Analytics", badge: "Data Science" },
      { name: "Automated Reporting", category: "Automation", badge: "Scheduled Pipelines" },
    ],
    realWorldProjects: [
      {
        title: "Executive Business KPI & Sales Dashboard (Power BI)",
        category: "Power BI BI Project",
        description: "Interactive visual dashboard showing real-time revenue trends, product category sales, profit margins, and regional maps.",
        features: ["Drill-down interactive visual charts", "Automated daily data refresh", "Key executive metric scorecards"],
      },
      {
        title: "Automated Multi-Source Financial Reconciliation (Python & Excel)",
        category: "Python Automation Script",
        description: "Automated Python script that merges multiple POS exports and bank statement CSVs, flags discrepancies, and outputs a clean Excel summary.",
        features: ["Duplicate transaction detection", "Automated spreadsheet formatting", "Scheduled email delivery to managers"],
      },
    ],
    modules: [
      {
        title: "Module 1: Advanced Microsoft Excel for Business Analytics",
        duration: "In Preparation",
        description: "Mastering essential formulas (XLOOKUP, INDEX/MATCH), dynamic arrays, Pivot Tables, and automated templates.",
        topics: ["Advanced formulas and nested logic", "Pivot Tables & Pivot Charts for business insights", "Data validation, conditional formatting, and dashboard templates"],
      },
      {
        title: "Module 2: Python Scripting & Data Wrangling with Pandas",
        duration: "In Preparation",
        description: "Moving from manual spreadsheets to automated Python code that cleans, filters, and transforms massive datasets in seconds.",
        topics: ["Python fundamentals for non-programmers", "Cleaning messy data with Pandas & NumPy", "Merging, grouping, and exporting automated spreadsheets"],
      },
      {
        title: "Module 3: Business Intelligence & Dashboards with Microsoft Power BI",
        duration: "In Preparation",
        description: "Connecting datasets, modeling relationships (DAX), and designing interactive visual dashboards that stakeholders love.",
        topics: ["Importing data from Excel, CSV, and SQL into Power BI", "Data modeling, relationships, and basic DAX measures", "Designing responsive visual cards, graphs, slicers, and interactive filters"],
      },
    ],
    learningOutcomes: [
      "Eliminate repetitive manual Excel work through automated Python scripts.",
      "Build interactive, executive-ready dashboards with Microsoft Power BI.",
      "Clean, analyze, and interpret complex corporate datasets with confidence.",
      "Connect multiple disparate data sources into unified automated reports.",
    ],
    targetAudience: [
      "Professionals and accountants who spend hours manually managing Excel files.",
      "Students seeking high-demand data analyst and business intelligence skills.",
      "Entrepreneurs wanting clear visual data on their revenue and operational metrics.",
    ],
    prerequisites: ["Basic familiarity with computers and spreadsheets. No programming background required."],
    includedFeatures: [
      "Video Lectures: 100% Af-Soomaali (Voiceover)",
      "Hands-on Python scripts & Power BI dashboard templates",
      "Real-world business dataset case studies",
      "Priority Early-Bird Waitlist Access & Launch Discount",
    ],
    whatsappMessage:
      "Asc Mohamed! I want to join the early-bird waitlist for 'Data Analysis & Business Automation (Python, Excel, Power BI)'. Please notify me as soon as it launches!",
  },

  // 3. MENTORSHIP: TECH, AI, PRODUCTIVITY & SKILL DEVELOPMENT (Active 1-to-1)
  {
    id: "1-on-1-mentorship",
    title: "1-on-1 Mentorship: Tech, AI, Productivity & Skill Development",
    tagline: "Personalized Coaching in Modern Engineering, AI Workflows, High Productivity & Marketable Skills",
    category: "Mentorship",
    level: "All Levels",
    duration: "Flexible (Ku xiran Baahidaada)",
    durationNote: "Waqti go'an kuma xirna — tailored to your individual goals and pace",
    format: "Private 1-on-1 Video Sessions + Code Audits + Daily WhatsApp Access",
    status: "Enrollment Open",
    language: "Somali (Af-Soomaali)",
    languageNote: "1-on-1 coaching delivered directly in Somali (Af-Soomaali toos ah)",
    featured: true,
    image: "/images/mohamed-dacar-suit.jpg",
    instructor: {
      name: "Mohamed Dacar",
      role: "Software Engineer & Applied AI Builder",
      avatar: "/images/mohamed-dacar-suit.jpg",
    },
    shortDescription:
      "Work directly with Mohamed Dacar in personalized 1-on-1 coaching sessions across 4 key pillars: Tech & Software Engineering, Applied AI & Prompting, High Productivity Systems, and Marketable Skill Development.",
    fullDescription: [
      "In this dedicated 1-on-1 mentorship, you work directly with Mohamed Dacar to accelerate your technical skills, build high-income capabilities, and eliminate learning roadblocks.",
      "Pillar 1: Tech & Modern Software Engineering — Line-by-line code reviews on your projects, mastering full-stack architecture, clean code standards, and debugging complex production errors.",
      "Pillar 2: Applied AI & Prompt Engineering — Integrating frontier AI into your daily development workflow, building AI agents, and using Vibe Coding to build software 5x faster.",
      "Pillar 3: Productivity & Deep Work Systems — Structuring your daily schedule for high-focus output, overcoming procrastination, managing time effectively, and building unbreakable building habits.",
      "Pillar 4: High-Income Skill Development & Freelancing — Creating a client-converting portfolio, writing winning project proposals, pricing your services, and closing freelance software clients.",
      "Muhiim: Tababarka iyo wada-hadalka 1-on-1-ka ah waxaad Mohamed Dacar kula yeelaneysaa toos Af-Soomaali (100% in Somali).",
    ],
    workflowSteps: [
      { step: "01", label: "Skills & Goal Audit", description: "Deep assessment of your current coding level, career goals, and areas to upgrade" },
      { step: "02", label: "Personalized Roadmap", description: "Tailored execution plan with clear weekly learning and building milestones" },
      { step: "03", label: "1-on-1 Deep Dives", description: "Private video calls, line-by-line GitHub code reviews, and direct problem solving" },
      { step: "04", label: "Execution & Proof", description: "Completing portfolio proof-of-work projects and executing the freelance playbook" },
    ],
    techStack: [
      { name: "1-on-1 Video Deep Dives", category: "Mentorship", badge: "Personalized" },
      { name: "GitHub Code Reviews", category: "Engineering", badge: "Direct Feedback" },
      { name: "Applied AI & Agent Tooling", category: "AI Workflows", badge: "5x Speed" },
      { name: "Productivity & Focus Systems", category: "Habits", badge: "Deep Work" },
      { name: "Freelance Client Playbook", category: "Monetization", badge: "High-Income" },
      { name: "Priority WhatsApp Access", category: "Support", badge: "Daily Support" },
    ],
    realWorldProjects: [
      {
        title: "Personalized High-Impact Portfolio Showcase",
        category: "Career Proof of Work",
        description: "Transform your portfolio into a client-attracting asset with production-ready, verified case studies.",
        features: ["Clean, professional GitHub repositories", "Live deployed case studies with problem-solution breakdowns", "Client-focused copy"],
      },
      {
        title: "Tailored Client Solution Build",
        category: "Freelance Project",
        description: "Direct guidance and oversight to design, build, and deliver your first paid commercial client project.",
        features: ["Client project scoping", "Direct architectural & debugging assistance", "Contract structuring and project handover"],
      },
    ],
    modules: [
      {
        title: "Pillar 1: Tech & Modern Software Engineering Mastery",
        duration: "Pillar 1",
        description: "Refining your code quality, mastering full-stack architecture, and writing clean, maintainable software companies trust.",
        topics: [
          "Direct line-by-line code reviews on your active GitHub repositories",
          "Architectural patterns, database schema design, and robust API contracts",
          "Debugging edge cases and establishing senior engineering instincts",
        ],
      },
      {
        title: "Pillar 2: Applied AI, Vibe Coding & Agent Workflows",
        duration: "Pillar 2",
        description: "Turn AI into your daily force multiplier to build, iterate, and ship software at 5x developer speed.",
        topics: [
          "Advanced prompt engineering for code generation and debugging",
          "Deploying AI agents and coding tools into your active development workflow",
          "Building software with integrated AI capabilities (LLM APIs, automation)",
        ],
      },
      {
        title: "Pillar 3: Productivity, Focus & Deep Work Systems",
        duration: "Pillar 3",
        description: "Building an unbreakable routine of deep focus, eliminating distractions and procrastination, and maintaining momentum.",
        topics: [
          "Deep Work frameworks and managing cognitive focus",
          "Designing high-leverage weekly schedules to hit tangible milestones",
          "Maximizing output in limited hours to ship major projects consistently",
        ],
      },
      {
        title: "Pillar 4: Skill Development, Freelancing & Career Growth",
        duration: "Pillar 4",
        description: "Transforming technical skills into financial value through freelance client acquisition and remote opportunities.",
        topics: [
          "Writing compelling, winning client project proposals",
          "Structuring project pricing, scope boundaries, and negotiation",
          "Building your personal brand on LinkedIn and GitHub",
        ],
      },
    ],
    learningOutcomes: [
      "Get direct 1-on-1 guidance from Mohamed Dacar on your daily code and tech projects.",
      "Integrate AI workflows to build and ship software significantly faster than traditional developers.",
      "Build a rock-solid productivity system that eliminates procrastination and confusion.",
      "Develop an undeniable portfolio of real projects that attracts high-paying clients.",
      "Gain the confidence to pitch, negotiate, and deliver high-value freelance software projects.",
    ],
    targetAudience: [
      "Developers looking for direct 1-on-1 accountability and accelerated technical growth.",
      "Builders looking to supercharge their productivity and build with AI.",
      "Freelancers wanting to increase their project rates and win quality commercial clients.",
    ],
    prerequisites: [
      "Commitment to consistent building, open feedback, and weekly execution",
      "Laptop and internet access",
    ],
    includedFeatures: [
      "1-on-1 Coaching: Direct Af-Soomaali sessions with Mohamed Dacar",
      "Private 1-on-1 Video Consultation & Strategy Calls",
      "Line-by-line GitHub Code Reviews & Audits",
      "Custom Tailored Execution Roadmap",
      "Priority Daily WhatsApp Access (+252 61 779 1483)",
      "Vibe Coding Prompt Templates & Freelance Proposals",
    ],
    whatsappMessage:
      "Asc Mohamed! I am looking for 1-on-1 Mentorship (Tech, AI, Productivity & Skill Development). Let's discuss getting started!",
  },
];

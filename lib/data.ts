export const navItems = [
  { label: "About", href: "#about", id: "about" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Stack", href: "#stack", id: "stack" },
  { label: "Projects", href: "#projects", id: "projects" },
  { label: "Mission", href: "#mission", id: "mission" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export const heroMetrics = [
  ["Experience", "Enterprise systems, legacy modernization"],
  ["Focus", "Frontend craft + backend architecture"],
  ["Environment", "Fedora KDE · Linux-first workflow"],
];

export const profileSnapshot = [
  ["Role", "Senior Full-Stack Software Developer"],
  ["Core Stack", "Java, Spring Boot, React, TypeScript"],
  ["Data", "PostgreSQL, MongoDB, ETL, KPI systems"],
  ["Current Arc", "Modern frontend + design systems mastery"],
];

export const skillGroups = [
  {
    label: "Languages",
    items: ["Java", "JavaScript", "TypeScript", "SQL", "Python"],
  },
  {
    label: "Backend",
    items: [
      "Spring Boot",
      "Struts",
      "Hibernate/JPA",
      "REST APIs",
      "WebSockets",
      "JWT",
      "Spring Security",
      "STOMP",
      "SOAP APIs",
    ],
  },
  {
    label: "Frontend",
    items: ["React", "Tailwind CSS", "Framer Motion", "Axios"],
  },
  {
    label: "Data / Infra",
    items: ["PostgreSQL", "MongoDB", "Docker", "Linux", "AWS"],
  },
  {
    label: "Systems / Concepts",
    items: [
      "System Design",
      "Monolith & Microservices",
      "Realtime Systems",
      "Performance Optimization",
      "RBAC",
      "FFmpeg",
      "Ollama",
    ],
  },
];

export const coreFocus = [
  "Java",
  "Spring Boot",
  "React",
  "TypeScript",
  "PostgreSQL",
  "MongoDB",
  "Linux",
  "Docker",
  "Realtime Systems",
];

export const projects = [
  {
    name: "SkillSphere",
    stack: ["React", "TypeScript", "Spring Boot", "PostgreSQL", "WebSockets"],
    summary:
      "A gamified full-stack learning platform with skill-tree progression, collaborative study rooms, project workflows, JWT-based authentication, RBAC, and realtime communication.",
    highlights: [
      "Designed layered backend architecture with DTO mapping and scalable service patterns",
      "Built realtime collaboration using WebSockets/STOMP with live chat and presence tracking",
      "Positioned as a system-driven product rather than a simple CRUD app",
    ],
    status: "Flagship build",
  },
  {
    name: "URL Shortener Service",
    stack: ["Spring Boot", "PostgreSQL", "React", "REST APIs"],
    summary:
      "A scalable URL shortener focused on short-code generation, fast redirect handling, analytics-oriented design, and query optimization.",
    highlights: [
      "Built RESTful APIs for creation, lookup, and redirection flows",
      "Optimized query paths for retrieval and redirect performance",
      "Useful showcase for clean backend architecture and practical system design",
    ],
    status: "Backend-focused",
  },
  {
    name: "AI Shorts Automation Pipeline",
    stack: ["Python", "Ollama", "Coqui TTS", "FFmpeg"],
    summary:
      "An AI-assisted content automation pipeline that aggregates trending news, ranks topics, generates scripts, creates voiceovers, subtitles, and assembles upload-ready short-form videos.",
    highlights: [
      "Integrated local LLM inference and GPU-accelerated TTS workflows",
      "Automated subtitle generation and FFmpeg-based video assembly",
      "Shows applied AI engineering beyond simple wrapper apps",
    ],
    status: "Experimental systems build",
  },
];

export const experienceItems = [
  {
    company: "GSPL",
    role: "Software Engineer",
    period: "Aug 2022 – Present",
    location: "New Delhi, India",
    summary:
      "Building and maintaining enterprise-scale service management platforms across multi-country deployments with strong emphasis on backend engineering, data performance, integrations, security, and realtime operational workflows.",
    highlights: [
      "Developed and maintained enterprise-scale platforms using Java, Struts, PostgreSQL, and REST APIs for deployments across India, UAE, Vietnam, and KSA.",
      "Built secure backend APIs for mobile applications using JWT authentication, session management, and role-based authorization.",
      "Redesigned KPI dashboard aggregation architecture by replacing inefficient CUBE-based querying with GROUPING SETS, improved indexing, and paginated loading for faster analytics performance.",
      "Implemented realtime chat systems and live engineer-tracking functionality using WebSockets and polling-based synchronization.",
      "Integrated Google Maps APIs, BillDesk payment gateway, SMS vendor APIs, and legacy SOAP/REST services into hybrid monolithic ecosystems.",
      "Resolved OWASP-reported vulnerabilities including XSS, insecure headers, and authentication loopholes across customer-facing deployments.",
    ],
    stack: [
      "Java",
      "Struts",
      "PostgreSQL",
      "REST APIs",
      "JWT",
      "WebSockets",
      "SOAP",
      "System Integration",
      "Security",
    ],
  },
];

export const missionItems = [
  {
    label: "Frontend Journey",
    text: "Using this portfolio as a practical environment to learn Next.js, TypeScript, Tailwind, Framer Motion, and modern UI architecture through real implementation.",
  },
  {
    label: "Design Systems",
    text: "Building a visual language that feels engineered, cinematic, readable, and recruiter-friendly instead of using a generic developer template.",
  },
  {
    label: "Full-Stack Growth",
    text: "Evolving this project toward Spring Boot integration, dynamic project data, live status systems, and a more production-grade architecture over time.",
  },
];

export const contactLinks = [
  {
    label: "Email",
    value: "shivamkumar16385@gmail.com",
    href: "mailto:shivamkumar16385@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 7004633987",
    href: "tel:+917004633987",
  },
  {
    label: "GitHub",
    value: "github.com/draco9codes",
    href: "https://github.com/draco9codes",
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/skumar16385",
    href: "https://linkedin.com/in/skumar16385",
  },
  {
    label: "Website",
    value: "draco9codes.dev",
    href: "https://draco9codes.dev",
  },
];
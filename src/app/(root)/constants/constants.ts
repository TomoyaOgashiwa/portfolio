export const TechIcon = [
  { image: "/reactjs.svg", alt: "React Icon" },
  { image: "/nextjs.svg", alt: "Nextjs Icon" },
  { image: "/typescript.svg", alt: "Typescript Icon" },
  { image: "/tailwindcss.svg", alt: "Tailwindcss Icon" },
  { image: "/nodejs.svg", alt: "Nodejs Icon" },
  { image: "/shadcnui.svg", alt: "Shadcn Icon" },
];

export enum CareerHistoryId {
  LightblueAssistant = "lightblue-assistant",
  MynaPortal = "myna-portal",
  Gacci = "gacci",
  Keywalker = "keywalker",
}

export const CareerHistory = [
  {
    id: CareerHistoryId.LightblueAssistant,
    name: "Lightblue Assistant",
    abstraction:
      "Lightblue Assistant integrates ChatGPT with Slack and Teams, helping employees boost productivity",
    description:
      "Developed detailed settings to enhance chat-answering functionalities with a practical UI. Refactored imports to avoid barrel files and minimize unnecessary code usage. Organized globally used components and defined Tailwind configurations based on design specifications provided by designers.",
    image: "/lightblue-assistant.jpeg",
  },
  {
    id: CareerHistoryId.MynaPortal,
    name: "Myna Portal",
    abstraction:
      "My Number Portal is an online gateway for administrative procedures",
    description:
      "Worked as a frontend tech lead for several new feature developments in a large-scale project. Main responsibilities included understanding the existing coding standards and directory structure and sharing this information with my team, conducting code reviews, addressing and resolving development concerns, and building relationships with other teams.",
    image: "/myna-portal.jpeg",
  },
  {
    id: CareerHistoryId.Gacci,
    name: "GACCI",
    abstraction:
      "A quotation management application for construction contractors, enabling general contractors to centrally review and select subcontractor estimates",
    description:
      "Contributed to the development of a web application that allows general contractors to manage and compare subcontractor quotations in a unified interface. The project focused on creating a user-friendly, spreadsheet-style experience to replace traditional manual workflows.",
    image: "/gacci.png",
  },
  {
    id: CareerHistoryId.Keywalker,
    name: "Keywalker",
    abstraction:
      "Keywalker specializes in AI-driven data analysis, web scraping, and digital transformation solutions for businesses.",
    description:
      "Worked on full-stack development projects across multiple industries, focusing on building internal tools and admin systems to improve business efficiency and data management",
    image: "/keywalker.png",
  },
];

export const CareerHistoryDetail = {
  [CareerHistoryId.LightblueAssistant]: {
    name: "Lightblue Assistant",
    abstraction:
      "Lightblue Assistant integrates ChatGPT with Slack and Teams, helping employees boost productivity",
    description:
      "Developed detailed settings to enhance chat-answering functionalities with a practical UI. Refactored imports to avoid barrel files and minimize unnecessary code usage. Organized globally used components and defined Tailwind configurations based on design specifications provided by designers.",
    image: "/lightblue-assistant.jpeg",
    tech: [
      { image: "/reactjs.svg", alt: "React Icon" },
      { image: "/typescript.svg", alt: "Typescript Icon" },
      { image: "/tailwindcss.svg", alt: "Tailwindcss Icon" },
      { image: "/shadcnui.svg", alt: "Shadcn Icon" },
    ],
    achievements: [
      "Reduced unnecessary code loading by 100% in shared modules by eliminating barrel files, improving initial load performance",
      "Enabled smooth rendering of 1,000+ chat entries and management data using virtualized infinite scroll, enhancing responsiveness on data-heavy screens",
      "Established a reusable component system covering 80%+ of common UI elements, improving development speed and design consistency",
      "Decreased onboarding time for new developers by approximately 40% through documentation of directory structures, coding conventions and checking vulnerabilities",
      "Prevented dependency issues and improved build stability by managing around 100 npm packages with regular updates and peer reviews",
      "Improved accessibility scores by over 20% by applying Semantic HTML and screen reader–friendly markup",
      "Reduced client-side storage size by 30% by selecting only essential data to store in localStorage/sessionStorage",
      "Organized and optimized the routing and layout structure for over 30 management and main pages, improving navigation efficiency and maintainability",
    ],
  },
  [CareerHistoryId.MynaPortal]: {
    name: "Myna Portal",
    abstraction:
      "My Number Portal is an online gateway for administrative procedures",
    description:
      " Worked as a frontend tech lead for several new feature developments in a large-scale project. Main responsibilities included understanding the existing coding standards and directory structure and sharing this information with my team, conducting code reviews, addressing and resolving development concerns, and building relationships with other teams.",
    image: "/myna-portal.jpeg",
    tech: [
      { image: "/reactjs.svg", alt: "React Icon" },
      { image: "/nextjs.svg", alt: "Nextjs Icon" },
      { image: "/typescript.svg", alt: "Typescript Icon" },
      { image: "/tailwindcss.svg", alt: "Tailwindcss Icon" },
    ],
    achievements: [
      "Acted as a bridge between engineers and management as a tech lead during a waterfall development project where requirements remained unclear, and managed to keep the project roughly on schedule (90% of milestones met) despite ongoing instability and changes.",
      "Identified a security risk where personal information such as email addresses and names were stored in localStorage/sessionStorage, and proposed a solution to retrieve such data securely from the backend cache instead. This led to improved data protection and reduced exposure to potential data breaches.",
      "Reduced onboarding time by approximately 20% by organizing the directory structure based on existing code and creating thorough documentation.",
      "Improved entry-level engineer skills by approximately 10% by organizing and leading coding training sessions.",
    ],
  },
  [CareerHistoryId.Gacci]: {
    name: "GACCI",
    abstraction:
      "A quotation management application for construction contractors, enabling general contractors to centrally review and select subcontractor estimates",
    description:
      "Contributed to the development of a web application that allows general contractors to manage and compare subcontractor quotations in a unified interface. The project focused on creating a user-friendly, spreadsheet-style experience to replace traditional manual workflows.",
    image: "/gacci.png",
    tech: [
      { image: "/reactjs.svg", alt: "React Icon" },
      { image: "/nextjs.svg", alt: "Nextjs Icon" },
      { image: "/typescript.svg", alt: "Typescript Icon" },
    ],
    achievements: [
      "Delivered an intuitive spreadsheet-like UI used by end users, achieving a 80% client satisfaction rate.",
      "Refactored legacy spaghetti code, reducing code complexity by 30% and improving maintainability, which shortened bug-fix time by 25%.",
      "Introduced Atomic Design methodology, standardizing over 40 UI components and improving design consistency across all projects.",
      "Facilitated weekly cross-functional meetings between PMs and TLs, reducing requirement misunderstandings by 50%.",
    ],
  },
  [CareerHistoryId.Keywalker]: {
    name: "Keywalker",
    abstraction:
      "Keywalker specializes in AI-driven data analysis, web scraping, and digital transformation solutions for businesses.",
    description:
      "Worked on full-stack development projects across multiple industries, focusing on building internal tools and admin systems to improve business efficiency and data management",
    image: "/keywalker.png",
    tech: [
      { image: "/reactjs.svg", alt: "React Icon" },
      { image: "/typescript.svg", alt: "Typescript Icon" },
      { image: "/tailwindcss.svg", alt: "Tailwindcss Icon" },
      { image: "/nodejs.svg", alt: "Nodejs Icon" },
    ],
    achievements: [
      "Facilitated clear communication between technical and non-technical stakeholders, reducing project misalignments by 50%.",
      "Quickly learned and integrated Elasticsearch, and documented the setup process, reducing onboarding time for new developers by 40%.",
      "Authored and implemented specifications for more than 20 APIs, ensuring smooth integration and communication with front-end systems.",
      "Initiated and implemented a frontend trainee onboarding program for new employees, creating comprehensive documentation",
    ],
  },
};

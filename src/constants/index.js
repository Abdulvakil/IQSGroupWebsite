import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Truck Loading",
    icon: web,
  },
  {
    title: "Truck & Trailer Rental",
    icon: mobile,
  },
  {
    title: "Hook and Drop",
    icon: backend,
  },
  {
    title: "Satellite Tracking",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Management",
    company_name: "Strategic Oversight & Operational Excellence",
    icon: starbucks,
    iconBg: "#064665",
    date: "",
    points: [
      "Ensuring efficiency, compliance, and long-term sustainability across all business operations:",
      "Operations Management – Oversees company-wide strategy, streamlining processes, and improving service delivery.",
      "Safety Management – Implements and enforces industry safety standards, ensuring DOT and FMCSA compliance.",
      "Fleet Management – Supervises vehicle acquisition, maintenance, and cost optimization for maximum uptime.",
      "Policy & Compliance – Ensures legal and regulatory adherence across all operational aspects."
    ],
  },
  {
    title: "Dispatch & Logistics",
    company_name: "Load Coordination & Real-Time Fleet Management",
    icon: tesla,
    iconBg: "#064665",
    date: "",
    points: [
      "Optimizing freight movement, driver communication, and compliance to enhance delivery efficiency: ",
      "Load Tracking & Updates – Communicates critical shipment updates and maintains accurate system records",
      "Fleet Coordination – Schedules vehicle maintenance and ensures operational readiness.",
      "ELD Compliance – Monitors driver logs to prevent violations and maintain federal Hours of Service (HOS) standards.",
    ],
  },
  {
    title: "Accounting & Financial Services",
    company_name: "Financial Planning, Payroll & Compliance",
    icon: shopify,
    iconBg: "#064665",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Managing all financial operations to ensure stability and regulatory compliance: ",
      "Payroll & Salary Distribution – Processes employee payments, deductions, and benefits.",
      "Expense & Budget Management – Tracks company expenses, including fuel, fleet maintenance, and operational costs.",
      "Tax Compliance – Ensures proper tax filings, regulatory adherence, and accurate financial reporting.",
      "Accounts & Settlements – Manages invoicing, client payments, and dispute resolutions."
    ],
  },
  {
    title: "Compliance, Support, and Safety",
    company_name: "Regulatory Adherence, Legal Affairs & Business Development",
    icon: meta,
    iconBg: "#064665",
    date: "Jan 2023 - Present",
    points: [
      "Ensuring safety, legal compliance, and asset protection while supporting business growth: ",
      "Safety & Risk Management – Enforces compliance checks, workplace safety standards, and operational risk assessments.",
      "Hiring & HR – Manages talent acquisition, training, employee benefits, and workforce compliance.",
      "Asset & Legal Protection – Safeguards company assets, insurance policies, and contractual obligations.",
      "Broker & Business Relations – Secures profitable contracts and negotiates strategic business partnerships."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
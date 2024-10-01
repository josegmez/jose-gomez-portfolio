import {
  IconAffiliate,
  IconCode,
  IconDatabaseCog,
  IconDevices,
  IconGitFork,
} from "@tabler/icons-react";

export const EDUCATION_EXPERIENCES = [
  {
    company: "Universidad de Antioquia",
    rol: "Student",
    title: "Systems Engineering",
    description:
      "I am currently pursuing a degree in Systems Engineering at the Universidad de Antioquia. This program is equipping me with a solid foundation in software development, system architecture, and analytical problem-solving. Through hands-on projects and coursework, I am gaining valuable skills in programming, algorithm design, and project management, preparing me for a successful career in technology.",
    startDate: new Date(2021, 2),
    endDate: "Actual",
  },
  {
    company: "Universidad de Antioquia",
    rol: "Student",
    title: "Diploma in SQL",
    description:
      " I completed a diploma in SQL at the Universidad de Antioquia, which deepened my understanding of database management and data manipulation. This program provided me with practical experience in writing complex queries, optimizing database performance, and ensuring data integrity. My skills in SQL enable me to efficiently manage and analyze data, which is essential for any development project.",
    startDate: new Date(2023, 5),
    endDate: new Date(2023, 10),
  },
  {
    company: "GitHub",
    rol: "Student",
    title: "GitHub Foundations Certification",
    description:
      "I earned the GitHub Foundations certification, which has enhanced my understanding of version control and collaborative development practices. This certification taught me how to effectively use Git and GitHub for managing projects, tracking changes, and collaborating with teams. It has been instrumental in improving my workflow and ensuring code quality in my projects.",
    startDate: new Date(2024, 6),
    endDate: new Date(2024, 6),
  },
];

export const KNOWLAGES = [
  {
    title: "Web Development",
    description:
      "I have a strong foundation in web development, with expertise in front-end and back-end technologies",
    icon: IconDevices,
  },
  {
    title: "Programming",
    description:
      "I am proficient in several programming languages, including JavaScript, Python, and Java",
    icon: IconCode,
  },
  {
    title: "Database Management",
    description:
      "I have experience working with databases, writing SQL queries, and optimizing database performance",
    icon: IconDatabaseCog,
  },
  {
    title: "Version Control",
    description:
      "I am skilled in version control systems like Git and GitHub, enabling effective collaboration and code management",
    icon: IconGitFork,
  },
  {
    title: "Project Management",
    description:
      "I have experience managing projects, coordinating teams, and delivering high-quality software solutions",
    icon: IconAffiliate,
  },
  {
    title: "Additional Skills",
    description:
      "I have additional soft skills, such as problem-solving, critical thinking, and communication, that enhance my ability to work effectively in a team environment",
    link: "/skills",
  },
];

export const PROJECTS = [
  {
    title: "PLA UdeA",
    description:
      "This web application, developed for educational purposes, is part of the CodeF@ctory project at Universidad de Antioquia and simulates the curriculum management module.",
    image: "/images/project1.png",
    ctaLink: "https://pla-udea-front.vercel.app/",
  },
  {
    title: "PortIQ Sectorial",
    description:
      "This web application manages information on exports and imports of products in Colombia, providing users with insights and data for effective trade decision-making.",
    image: "/images/project2.png",
    ctaLink: "#",
  },
  {
    title: "FDC Landing Page",
    description:
      "This web page showcases the research group's work on fauna and flora, providing information about their projects, findings, and contributions to biodiversity studies.",
    image: "/images/project3.png",
    ctaLink: "https://fdc-web-project.web.app/",
  },
];

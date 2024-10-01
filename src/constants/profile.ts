export const PROFILE: {
  name: string;
  role: string;
  contact: {
    age: number;
    residence: string;
    freelance: "available" | "busy";
    email: string;
  };
} = {
  name: "Jose David Gómez",
  role: "Web Developer",
  contact: {
    age: 24,
    email: "josdavi0304@gmail.com",
    freelance: "available",
    residence: "Medellín, Colombia",
  },
};

export const LANGUAGES = [
  {
    title: "Spanish",
    progress: 100,
  },

  {
    title: "English",
    progress: 60,
  },

  {
    title: "Italian",
    progress: 20,
  },
];

export const EXTRA_SKILLS = [
  [{ title: "React" }, { title: "Next.js" }, { title: "Gatsby" }],
  [{ title: "Node.js" }, { title: "Express" }, { title: "Nest.js" }],
  [{ title: "PostgreSQL" }, { title: "MySQL" }],
  [{ title: "Docker" }, { title: "Kubernetes" }, { title: "AWS" }],
];

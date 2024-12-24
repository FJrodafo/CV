import { GitHubIcon, LinkedInIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Francisco José Rodríguez Afonso",
  initials: "FJrodafo",
  location: "La Orotava, Canary Islands, Spain",
  locationLink: "https://www.google.com/maps/place/Canarias",
  about: "Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.",
  summary: "As a Full-Stack web application developer, I design and develop both the frontend and backend, providing comprehensive and satisfying solutions for my clients.",
  avatarUrl: "https://avatars.githubusercontent.com/u/126250262?v=4",
  personalWebsiteUrl: "https://fjrodafo.vercel.app/",
  contact: {
    email: "fjrodafo@gmail.com",
    tel: "+0",
    mainSocialNetworks: [
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/fjrodafo",
        icon: LinkedInIcon,
      },
      {
        name: "GitHub",
        url: "https://github.com/FJrodafo",
        icon: GitHubIcon,
      },
    ],
    otherSocialNetworks: [
      {
        name: "GitLab",
        url: "https://gitlab.com/FJrodafo",
      },
      {
        name: "Bitbucket",
        url: "https://bitbucket.org/fjrodafo",
      },
      {
        name: "npmjs",
        url: "https://www.npmjs.com/~fjrodafo",
      },
      {
        name: "Docker Hub",
        url: "https://hub.docker.com/u/fjrodafo",
      },
      {
        name: "Stack Overflow",
        url: "https://stackoverflow.com/users/26261359/fjrodafo",
      },
      {
        name: "Crowdin",
        url: "https://crowdin.com/profile/fjrodafo",
      },
      {
        name: "Discord",
        url: "https://discord.com/users/1259949570964590705",
      },
      {
        name: "PayPal",
        url: "https://paypal.me/FJrodafo",
      },
    ],
  },
  experience: [
    {
      company: "...",
      link: "...",
      badges: ["..."],
      title: "...",
      start: "...",
      end: "...",
      description: "...",
    },
  ],
  education: [
    {
      school: "IES Puerto de la Cruz - Telesforo Bravo",
      degree: "Higher Degree Training Cycle, Web Application Development",
      start: "2022",
      end: "Present",
    },
    {
      school: "CSMC - Conservatorio Superior de Música de Canarias",
      degree: "Musical performance, Trumpet",
      start: "2020",
      end: "Present",
    },
    {
      school: "CPMT - Conservatorio Profesional de Música de Tenerife",
      degree: "Musical performance, Trumpet",
      start: "2018",
      end: "2021",
    },
  ],
  skills: [
    "Git",
    "HTML",
    "CSS",
    "React",
    "Node.js",
    "JavaScript",
    "Java",
    "PHP",
    "SQL",
    "MySQL",
  ],
  projects: [
    {
      title: "DiscordAPP",
      techStack: ["App", "JavaScript"],
      description: "A simple Discord APP made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/DiscordAPP",
      },
    },
    {
      title: "DiscordCRPS",
      techStack: ["App", "JavaScript"],
      description: "A simple Discord Custom Rich Presence Status made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/DiscordCRPS",
      },
    },
    {
      title: "dauntless-builder-legacy",
      techStack: ["Contribution", "TypeScript"],
      description: "Create and share Dauntless builds with your friends!",
      link: {
        label: "github.com",
        href: "https://github.com/atomicptr/dauntless-builder-legacy",
      },
    },
    {
      title: "dauntless-leaderboards",
      techStack: ["Contribution", "TypeScript"],
      description: "Dauntless Gauntlet and Trial leaderboards!",
      link: {
        label: "github.com",
        href: "https://github.com/PierreYvesFlamand/Dauntless-Leaderboards",
      },
    },
    {
      title: "free-port",
      techStack: ["Package", "JavaScript"],
      description: "Fast and minimalist port finder!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/free-port",
      },
    },
    {
      title: "to-do",
      techStack: ["Package", "JavaScript"],
      description: "Fast and minimalist to-do app!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/to-do",
      },
    },
  ],
} as const;

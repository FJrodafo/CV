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
        name: "npmjs",
        url: "https://www.npmjs.com/~fjrodafo",
      },
      {
        name: "Docker Hub",
        url: "https://hub.docker.com/u/fjrodafo",
      },
      {
        name: "Crowdin",
        url: "https://crowdin.com/profile/fjrodafo",
      },
      {
        name: "Telegram",
        url: "https://t.me/FJrodafo",
      },
      {
        name: "Discord",
        url: "https://discord.com/users/1259949570964590705",
      },
      {
        name: "PayPal",
        url: "https://paypal.me/FJrodafo",
      },
      {
        name: "Gravatar",
        url: "https://gravatar.com/fjrodafo",
      },
    ],
  },
  experience: [
    {
      company: "Temp1",
      link: "Temp2",
      badges: ["Temp3", "Temp4"],
      title: "Temp5",
      start: "Temp6",
      end: "Present",
      description: (
        <>
          Temp7
          <ul className="list-inside list-disc">
            <li>
              Temp8
            </li>
            <li>
              Temp9
            </li>
          </ul>
        </>
      ),
    },
  ],
  education: [
    {
      school: "IES Puerto de la Cruz - Telesforo Bravo",
      degree: "Higher Degree Training Cycle, Web Application Development",
      start: "2022",
      end: "2026",
    },
    {
      school: "CSMC - Conservatorio Superior de Música de Canarias",
      degree: "Musical performance, Trumpet",
      start: "2020",
      end: "2025",
    },
    {
      school: "CPMT - Conservatorio Profesional de Música de Tenerife",
      degree: "Musical performance, Trumpet",
      start: "2018",
      end: "2021",
    },
  ],
  skills: [
    "Linux",
    "Bash",
    "Shell",
    "EWW",
    "Git",
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Java",
    "PHP",
    "SQL",
    "MySQL",
    "Docker",
  ],
  projects: [
    {
      title: "DiscordAPP",
      techStack: ["App", "npm", "Node.js", "JavaScript"],
      description: "A simple Discord APP made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/DiscordAPP",
      },
    },
    {
      title: "DiscordCRPS",
      techStack: ["App", "npm", "Node.js", "JavaScript"],
      description: "A simple Discord Custom Rich Presence Status made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/DiscordCRPS",
      },
    },
    {
      title: "dauntless-builder-legacy",
      techStack: ["Contribution", "Website", "React", "TypeScript"],
      description: "Create and share Dauntless builds with your friends!",
      link: {
        label: "github.com",
        href: "https://github.com/atomicptr/dauntless-builder-legacy",
      },
    },
    {
      title: "dauntless-leaderboards",
      techStack: ["Contribution", "Website", "Angular", "TypeScript"],
      description: "Dauntless Gauntlet and Trial leaderboards!",
      link: {
        label: "github.com",
        href: "https://github.com/PierreYvesFlamand/Dauntless-Leaderboards",
      },
    },
    {
      title: "port-finder",
      techStack: ["npm", "Package", "Server", "JavaScript"],
      description: "Fast and minimalist port finder!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/port-finder",
      },
    },
    {
      title: "to-do",
      techStack: ["Docker", "Container", "SQL", "JavaScript"],
      description: "Fast and minimalist to-do app!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/to-do",
      },
    },
    {
      title: "Portfolio",
      techStack: ["Website", "React", "Next.js", "Javascript"],
      description: "My professional minimalist portfolio!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/Portfolio",
      },
    },
    {
      title: "CV",
      techStack: ["Website", "React", "Next.js", "Typescript"],
      description: "My professional minimalist curriculum vitae!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/CV",
      },
    },
    {
      title: "University",
      techStack: ["Cheat-sheets", "Learning", "Languages", "Exercices"],
      description: "A library of basic concepts!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/University",
      },
    },
    {
      title: "Dotfiles",
      techStack: ["Linux", "Debian", "Bash", "Shell"],
      description: "My scripts and settings!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/Dotfiles",
      },
    },
  ],
} as const;

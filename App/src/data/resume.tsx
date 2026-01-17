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
    tel: "+34635431024",
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
        name: "RubyGems",
        url: "https://rubygems.org/profiles/FJrodafo",
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
        name: "PayPal",
        url: "https://paypal.me/FJrodafo",
      },
      {
        name: "YouTube",
        url: "https://www.youtube.com/@FJrodafo",
      },
      {
        name: "Discord",
        url: "https://discord.com/users/1259949570964590705",
      },
      {
        name: "Gravatar",
        url: "https://gravatar.com/fjrodafo",
      },
    ],
  },
  experience: [
    {
      company: "OFT - Orquesta Filarmónica de Tenerife",
      link: "https://www.facebook.com/orquestafilarmonicadetenerife/",
      badges: ["Music", "Trumpet"],
      title: "Trumpeter",
      start: "2018",
      end: "Present",
      description: (
        <>
          {/*La OFT, compuesta por jóvenes músicos de entre 18 y 25 años, que provienen de la OFJT-MJ y de otros ámbitos de la realidad musical y cultura de nuestra comunidad, materializa el objetivo fundacional de PROMUCAN: la promoción de los jóvenes músicos de Canarias.*/}
          The OFT, made up of young musicians between the ages of 18 and 25, who come from the OFJT-MJ and other areas of the musical and cultural scene in our community, embodies PROMUCAN&apos;s founding objective: the promotion of young musicians in the Canary Islands.
          {/*
          <ul className="list-inside list-disc">
            <li>
              Temp
            </li>
            <li>
              Temp
            </li>
          </ul>
          */}
        </>
      ),
    },
    {
      company: "OFJT-MJ - Orquesta Filarmónica Juvenil...",
      link: "https://www.facebook.com/OrquestaFilarmonicaJuvenildeTenerifeMiguelJaubert/",
      badges: ["Music", "Trumpet"],
      title: "Trumpeter",
      start: "2017",
      end: "2019",
      description: (
        <>
          {/*&quot;Un niño entenderá mejor la música, cuando la vea interpretada por otros niños.&quot;*/}
          &quot;A child will understand music better when he or she sees it performed by other children.&quot;
          - Miguel Jaubert Gómez
          {/*
          <ul className="list-inside list-disc">
            <li>
              Temp
            </li>
            <li>
              Temp
            </li>
          </ul>
          */}
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
      school: "CPMT - Conservatorio Profesional de Música de Santa...",
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
    "PostgreSQL",
    "Nginx",
    "Docker",
  ],
  projects: [
    {
      title: "Dotfiles",
      techStack: ["Linux", "Debian", "Bash", "Shell"],
      description: "My scripts and settings!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/Dotfiles",
      },
    },
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
      title: "ShrikeBot",
      techStack: ["App", "npm", "Node.js", "JavaScript"],
      description: "A ShrikeBot clone made in JavaScript!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/ShrikeBot",
      },
    },
    {
      title: "ThraxBoT",
      techStack: ["Contribution", "Docker", "Python", "Shell"],
      description: "Utility Discord Bot for community server Thrax Enjoyers!",
      link: {
        label: "github.com",
        href: "https://github.com/Super-EvilTeam/ThraxBoT",
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
        href: "https://github.com/FJrodafo/port-finder/pkgs/npm/port-finder",
      },
    },
    {
      title: "Slugify",
      techStack: ["RubyGems", "Package", "Utility", "Ruby"],
      description: "A simple slugify gem!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/Slugify/pkgs/rubygems/fjrodafo-slugify",
      },
    },
    {
      title: "to-do",
      techStack: ["Docker", "Container", "SQL", "JavaScript"],
      description: "Fast and minimalist to-do app!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/to-do/pkgs/container/to-do",
      },
    },
    {
      title: "Awesome",
      techStack: ["Awesome", "Template", "ReadMe", "Markdown"],
      description: "Awesome lists about all kinds of interesting topics!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/Awesome",
      },
    },
    {
      title: "FJrodafo",
      techStack: ["FJrodafo", "Profile", "ReadMe", "Markdown"],
      description: "This is my special repository!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/FJrodafo",
      },
    },
    {
      title: "FJrodafo.github.io",
      techStack: ["FJrodafo", "Pages", "ReadMe", "Markdown"],
      description: "Bookmark this to keep an eye on my project updates!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/FJrodafo.github.io",
      },
    },
    {
      title: "University",
      techStack: ["Cheat-sheets", "Learning", "Languages", "Exercises"],
      description: "A library of basic concepts!",
      link: {
        label: "github.com",
        href: "https://github.com/FJrodafo/University",
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
  ],
} as const;

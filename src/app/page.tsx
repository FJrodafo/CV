import { Metadata } from "next";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Education } from "@/app/components/Education";
import { Summary } from "@/app/components/Summary";
import { Skills } from "@/app/components/Skills";
import { Header } from "@/app/components/Header";

export const metadata: Metadata = {
  metadataBase: new URL("https://fjrodafo-cv.vercel.app/"),
  applicationName: "FJrodafo's Curriculum Vitae",
  title: {
    default: 'FJrodafo (Francisco José Rodríguez Afonso)',
    template: '%s | Curriculum Vitae',
  },
  description: "Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.",
  creator: "Francisco José Rodríguez Afonso",
  publisher: "Francisco José Rodríguez Afonso",
  authors: [
    {
      name: "Francisco José Rodríguez Afonso",
      url: "https://fjrodafo-cv.vercel.app/",
    },
  ],
  keywords: [
    "fjrodafo",
    "website",
    "cv",
    "curriculum",
    "vitae",
    "developer",
    'musician',
    'trumpeter',
    'pianist',
    'canary',
    'islands',
    "vercel",
    "next",
    "nextjs",
    "typescript",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    locale: "en_US",
    type: "website",
    siteName: "FJrodafo's Curriculum Vitae",
    url: "https://fjrodafo-cv.vercel.app/",
    title: {
      default: 'FJrodafo (Francisco José Rodríguez Afonso)',
      template: '%s | Curriculum Vitae',
    },
    description: "Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.",
    images: [
      {
        url: "https://avatars.githubusercontent.com/u/126250262",
        width: 460,
        height: 460,
        alt: "FJrodafo's Avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    creator: "@fjrodafo",
    title: {
      default: 'FJrodafo (Francisco José Rodríguez Afonso)',
      template: '%s | Curriculum Vitae',
    },
    description: "Full-Stack web application developer, musician, trumpeter and pianist from the Canary Islands.",
    images: ["https://avatars.githubusercontent.com/u/126250262"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

function getCommandMenuLinks() {
  const links = [];

  if (RESUME_DATA.personalWebsiteUrl) {
    links.push({
      url: RESUME_DATA.personalWebsiteUrl,
      title: "Personal Website",
    });
  };

  return [
    ...links,
    ...RESUME_DATA.contact.mainSocialNetworks.map((socialNetwork) => ({
      url: socialNetwork.url,
      title: socialNetwork.name,
    })),
    ...RESUME_DATA.contact.otherSocialNetworks.map((socialNetwork) => ({
      url: socialNetwork.url,
      title: socialNetwork.name,
    })),
  ];
};

export default function ResumePage() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 print:p-11 md:p-16" id="main-content">
      <div className="sr-only">
        <h1>{RESUME_DATA.initials}&apos;s Resume</h1>
      </div>
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-4" aria-label="Resume Content">
        <Header />
        <div className="space-y-8 print:space-y-4">
          <Summary summary={RESUME_DATA.summary} />
          <Experience experience={RESUME_DATA.experience} />
          <Education education={RESUME_DATA.education} />
          <Skills skills={RESUME_DATA.skills} />
          <Projects projects={RESUME_DATA.projects} />
        </div>
      </section>
      <nav className="print:hidden" aria-label="Quick navigation">
        <CommandMenu links={getCommandMenuLinks()} />
      </nav>
    </main>
  );
};

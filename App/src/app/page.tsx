import { Metadata } from "next";
import { CommandMenu } from "@/components/command-menu";
import { RESUME_DATA } from "@/data/resume";
import { Experience } from "@/app/components/Experience";
import { Projects } from "@/app/components/Projects";
import { Education } from "@/app/components/Education";
import { Summary } from "@/app/components/Summary";
import { Skills } from "@/app/components/Skills";
import { Header } from "@/app/components/Header";

const SITE_URL = "https://fjrodafo-cv.vercel.app/";
const AVATAR_URL = "https://avatars.githubusercontent.com/u/126250262?v=4";

export const metadata: Metadata = {
  title: {
    default: RESUME_DATA.name,
    template: "%s | FJrodafo",
  },
  description: RESUME_DATA.about,
  openGraph: {
    title: `${RESUME_DATA.name} | ${RESUME_DATA.initials}`,
    description: RESUME_DATA.about,
    url: SITE_URL,
    siteName: "FJrodafo's Curriculum Vitae",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: AVATAR_URL,
        width: 1200,
        height: 1200,
        alt: "FJrodafo's Avatar",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: `${RESUME_DATA.name} | ${RESUME_DATA.initials}`,
    description: RESUME_DATA.about,
    creator: "@fjrodafo",
    images: [AVATAR_URL],
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
        <h1>{RESUME_DATA.name}&apos;s Resume</h1>
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

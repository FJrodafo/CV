import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.css";
import React from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

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

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
};

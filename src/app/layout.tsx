import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const defaultSiteUrl =
  process.env.NODE_ENV === "production"
    ? "https://tamilselvancinnaiyan.github.io/portfolio"
    : "http://localhost:3000";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Tamilselvan | Software Engineer",
    template: "%s | Tamilselvan ",
  },

  description:
    "Tamilselvan C is a Software Engineer with 4+ years of experience building scalable applications using Node.js, NestJS, TypeScript, PostgreSQL, Redis, and AWS. Explore projects in microservices, distributed systems, cloud infrastructure, and AI-powered applications.",

  applicationName: "Tamilselvan C | Engineering Portfolio",

  keywords: [
    "Tamilselvan C",
    "Tamilselvan Software Engineer",
    "Tamilselvan Backend Developer",
    "Backend Software Engineer",
    "Backend Engineer",
    "Node.js Developer",
    "NestJS Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "Redis",
    "AWS",
    "Docker",
    "Kubernetes",
    "Microservices",
    "Distributed Systems",
    "System Design",
    "REST API Development",
    "Cloud Infrastructure",
    "AI-Powered Applications",
    "Software Engineering Portfolio",
  ],

  authors: [
    {
      name: "Tamilselvan C",
      url: siteUrl,
    },
  ],

  creator: "Tamilselvan C",
  publisher: "Tamilselvan C",
  category: "technology",

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

  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/apple-icon.png",
  },

  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Tamilselvan C | Portfolio",
    title: "Tamilselvan C | Software Engineer",
    description:
      "Software Engineer specializing in Node.js, NestJS, PostgreSQL, AWS, microservices, and scalable backend architecture. Explore my engineering projects and case studies.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tamilselvan C — Software Engineer",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Tamilselvan C | Software Engineer",
    description:
      "Building scalable backend systems, cloud-native applications, and AI-powered workflows with Node.js, NestJS, PostgreSQL, and AWS.",
    images: ["/twitter-image"],
  },

  verification: {
    // google: "YOUR_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE",
  },
};


import ParticleCursor from "@/components/ParticleCursor";
import Navbar from "@/components/Navbar";
import StardustBackground from "@/components/StardustBackground";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <StardustBackground />
        <Navbar />
        <ParticleCursor />
        {children}
        <GoogleAnalytics gaId="G-5MMC2NPX1T" />
      </body>
    </html>
  );
}

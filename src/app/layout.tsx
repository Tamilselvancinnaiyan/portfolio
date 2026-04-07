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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Tamilselvan | Full-Stack Engineer",
    template: "%s | Tamilselvan",
  },
  description:
    "Tamilselvan is a full-stack engineer focused on scalable backend systems, cloud infrastructure, and reliable product engineering.",
  applicationName: "Tamilselvan Portfolio",
  keywords: [
    "Tamilselvan",
    "Full-Stack Engineer",
    "Backend Engineer",
    "Software Engineer",
    "Node.js",
    "Next.js",
    "Cloud Infrastructure",
    "Portfolio",
  ],
  authors: [{ name: "Tamilselvan" }],
  creator: "Tamilselvan",
  publisher: "Tamilselvan",
  category: "technology",
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    title: "Tamilselvan | Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable backend systems, cloud-ready platforms, and reliable digital products.",
    type: "website",
    siteName: "Tamilselvan Portfolio",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tamilselvan, Full-Stack Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tamilselvan | Full-Stack Engineer",
    description:
      "Full-stack engineer building scalable backend systems, cloud-ready platforms, and reliable digital products.",
    images: ["/twitter-image"],
  },
};

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
        {children}
        <GoogleAnalytics gaId="G-5MMC2NPX1T" />
      </body>
    </html>
  );
}

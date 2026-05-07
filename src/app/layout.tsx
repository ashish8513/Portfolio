import type { Metadata } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/content";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const title = `${site.name} — ${site.role}`;
const description = `${site.tagline} React, Next.js, Node.js, MongoDB, PostgreSQL, Socket.io, Docker & AWS.`;

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  keywords: [
    "Full Stack Engineer",
    "MERN",
    "Next.js",
    "Node.js",
    "MongoDB",
    "PostgreSQL",
    "Socket.io",
    "AWS",
    site.name,
  ],
  authors: [{ name: site.name }],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[var(--bg-deep)] text-[var(--text-main)]">
        <SmoothScroll />
        <CustomCursor />
        <div className="bg-orbs bg-mesh min-h-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}

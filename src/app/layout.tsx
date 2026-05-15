import type { Metadata, Viewport } from "next";
import { CustomCursor } from "@/components/custom-cursor";
import { SmoothScroll } from "@/components/effects/smooth-scroll";
import { PersonJsonLd } from "@/components/person-json-ld";
import { SkipToContent } from "@/components/skip-to-content";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { site, siteUrl } from "@/lib/content";

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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: title,
    template: `%s · ${site.name}`,
  },
  description,
  alternates: {
    canonical: "/",
  },
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
    url: siteUrl,
    siteName: site.name,
    images: [
      {
        url: "/Logo.png",
        width: 512,
        height: 512,
        alt: `${site.name} — ${site.role}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/Logo.png"],
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
    { media: "(prefers-color-scheme: light)", color: "#000000" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-theme="dark"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem("theme");if(t==="light"||t==="dark")document.documentElement.setAttribute("data-theme",t);}catch(e){}})();`,
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col bg-[var(--bg-deep)] text-[var(--text-main)]"
        suppressHydrationWarning
      >
        <PersonJsonLd />
        <SkipToContent />
        <SmoothScroll />
        <CustomCursor />
        <div className="bg-orbs bg-mesh min-h-full flex flex-col">{children}</div>
      </body>
    </html>
  );
}

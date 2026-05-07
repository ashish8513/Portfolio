import { profiles, site, siteUrl, skills } from "@/lib/content";

/** Rich results–friendly Person schema for recruiters & search */
export function PersonJsonLd() {
  const knowsAbout = skills.map((s) => s.name);
  const sameAs = profiles.map((p) => p.href);

  const baseUrl = siteUrl.replace(/\/$/, "");
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role,
    description: `${site.heroSubtitle} ${site.tagline}`,
    email: site.email,
    telephone: site.phoneTel,
    url: siteUrl,
    sameAs,
    knowsAbout,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chandigarh",
      addressRegion: "Punjab",
      addressCountry: "IN",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Chandigarh University",
    },
    ...(baseUrl.includes("localhost") ? {} : { image: `${baseUrl}/Logo.png` }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

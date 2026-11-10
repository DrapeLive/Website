import {
  CONTACT_EMAIL,
  ORGANIZATION_ID,
  SITE_NAME,
  SITE_URL,
  SOCIAL_LINKS,
  WEBSITE_ID,
} from "./site";

type JsonLdNode = Record<string, unknown>;

const areaServed = [
  { "@type": "City", name: "Malappuram" },
  { "@type": "State", name: "Kerala" },
  { "@type": "Country", name: "India" },
];

const organization: JsonLdNode = {
  "@type": "Organization",
  "@id": ORGANIZATION_ID,
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/web-app-manifest-512x512.png`,
  image: `${SITE_URL}/opengraph-image.jpg`,
  email: CONTACT_EMAIL,
  description:
    "Drape is a software and app development company in Malappuram, Kerala. We build custom websites, mobile apps, and business software.",
  sameAs: SOCIAL_LINKS,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malappuram",
    addressRegion: "Kerala",
    addressCountry: "IN",
  },
  areaServed,
};

const website: JsonLdNode = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: SITE_URL,
  name: SITE_NAME,
  inLanguage: "en-IN",
  publisher: { "@id": ORGANIZATION_ID },
};

export const siteSchema: JsonLdNode = {
  "@context": "https://schema.org",
  "@graph": [organization, website],
};

const serviceDefinitions = [
  {
    name: "Website development",
    description:
      "Modern, responsive websites built for small and medium businesses.",
  },
  {
    name: "Mobile app development",
    description:
      "Cross-platform mobile apps for Android and iOS built for performance and engagement.",
  },
  {
    name: "Custom software",
    description:
      "Tailored management systems and internal tools built to fit how your business works.",
  },
];

export const servicesSchema: JsonLdNode = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Services offered by Drape",
  itemListElement: serviceDefinitions.map((service, index) => ({
    "@type": "ListItem",
    position: index + 1,
    item: {
      "@type": "Service",
      name: service.name,
      description: service.description,
      provider: { "@id": ORGANIZATION_ID },
      areaServed,
    },
  })),
};

interface SoftwareApplicationInput {
  name: string;
  description: string;
  applicationCategory: string;
  operatingSystem?: string;
  path: string;
  image: string;
}

export function softwareApplicationSchema({
  name,
  description,
  applicationCategory,
  operatingSystem,
  path,
  image,
}: SoftwareApplicationInput): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name,
    description,
    applicationCategory,
    ...(operatingSystem ? { operatingSystem } : {}),
    url: `${SITE_URL}${path}`,
    image: `${SITE_URL}${image}`,
    inLanguage: "en",
    publisher: { "@id": ORGANIZATION_ID },
  };
}

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function breadcrumbSchema(items: BreadcrumbItem[]): JsonLdNode {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

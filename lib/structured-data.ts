import { siteConfig } from "@/config/site";

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}/icon`,
    description: siteConfig.longDescription,
    foundingDate: siteConfig.founded,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.contact.address.street,
      addressLocality: siteConfig.contact.address.city,
      addressRegion: siteConfig.contact.address.stateAbbr,
      postalCode: siteConfig.contact.address.zip,
      addressCountry: siteConfig.contact.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "37.8502", // Add actual coordinates
      longitude: "-122.0322",
    },
    telephone: siteConfig.contact.phone,
    email: siteConfig.contact.email,
    areaServed: [
      {
        "@type": "City",
        name: siteConfig.contact.address.city,
      },
      ...siteConfig.serviceArea.primary.map((city) => ({
        "@type": "City",
        name: city,
      })),
    ],
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "17:00",
      },
    ],
    sameAs: [
      siteConfig.social.yelp,
      siteConfig.social.google,
      siteConfig.social.facebook,
      siteConfig.social.instagram,
    ].filter(Boolean),
  };
}

export function generateServiceSchema(
  service: (typeof siteConfig.services)[0],
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@id": `${siteConfig.url}/#organization`,
    },
    areaServed: {
      "@type": "State",
      name: siteConfig.serviceArea.state,
    },
    description: service.description,
  };
}

export function generateBreadcrumbSchema(
  items: Array<{ name: string; url: string }>,
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}

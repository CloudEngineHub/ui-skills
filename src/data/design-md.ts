export type DesignMdEntry = {
  slug: string;
  title: string;
  logoUrl: string;
};

export const designMd: DesignMdEntry[] = [
  {
    slug: "mintlify",
    title: "Mintlify",
    logoUrl: "https://assets.querrel.com/design.md/mintlify/mintlify-logo.webp",
  },
  {
    slug: "atlassian",
    title: "Atlassian",
    logoUrl: "https://assets.querrel.com/design.md/atlassian/atlassian-logo.webp",
  },
  {
    slug: "amplitude",
    title: "Amplitude",
    logoUrl: "https://assets.querrel.com/design.md/amplitude/amplitude-logo.webp",
  },
  {
    slug: "firecrawl",
    title: "Firecrawl",
    logoUrl: "https://assets.querrel.com/design.md/firecrawl/firecrawl-logo.webp",
  },
  {
    slug: "vercel",
    title: "Vercel",
    logoUrl: "https://assets.querrel.com/design.md/vercel/vercel-logo.webp",
  },
  {
    slug: "quiverai",
    title: "QuiverAI",
    logoUrl: "https://assets.querrel.com/design.md/quiverai/quiverai-logo.webp",
  },
  {
    slug: "voltagent",
    title: "Volt",
    logoUrl: "https://assets.querrel.com/design.md/voltagent/voltagent-logo.webp",
  },
  {
    slug: "unicef",
    title: "Unicef",
    logoUrl: "https://assets.querrel.com/design.md/unicef/unicef-logo.webp",
  },
  {
    slug: "open-food-facts",
    title: "Open Food Facts",
    logoUrl: "https://assets.querrel.com/design.md/openfoodfacts/openfoodfacts-logo.webp",
  },
  {
    slug: "nuxt",
    title: "Nuxt",
    logoUrl: "https://assets.querrel.com/design.md/nuxt/nuxt-logo.webp",
  },
  {
    slug: "hyperframes",
    title: "HyperFrames",
    logoUrl: "https://assets.querrel.com/design.md/hyperframes/hyperframes-logo.webp",
  },
  {
    slug: "culture-amp",
    title: "Culture Amp",
    logoUrl: "https://assets.querrel.com/design.md/cultureamp/cultureamp-logo.webp",
  },
  {
    slug: "beta-gouv-dsfr",
    title: "Beta.gouv (DSFR)",
    logoUrl: "https://assets.querrel.com/design.md/dsfr/dsfr-logo.webp",
  },
  {
    slug: "design-ant",
    title: "Design Ant",
    logoUrl: "https://assets.querrel.com/design.md/antdesign/antdesign-logo.webp",
  },
];

export const designMdBySlug = new Map(
  designMd.map((entry) => [entry.slug, entry]),
);

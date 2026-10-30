import type { DirectoryLink } from "./directory-links";

export type DesignSystemCollection =
  "product" | "open-source" | "public-sector";

export type DesignSystem = {
  name: string;
  description: string;
  websiteUrl: string;
  githubRepo?: string;
  collection: DesignSystemCollection;
  bestFor: string;
  platform: string;
  maintainer: string;
  featured?: boolean;
};

export const designSystemCollections: Array<{
  slug: DesignSystemCollection;
  routeSlug: string;
  title: string;
  controlTitle: string;
  description: string;
  intro: string;
  seoTitle: string;
  metaDescription: string;
  relatedLinks?: DirectoryLink[];
}> = [
  {
    slug: "product",
    routeSlug: "product",
    title: "Product design systems",
    controlTitle: "Product",
    description:
      "Published design systems from product teams, with documented foundations, components, and implementation guidance.",
    intro:
      "Compare public product design systems used by teams shipping large applications, including tokens, components, and documented patterns.",
    seoTitle: "Product Design Systems",
    metaDescription:
      "Browse public product design systems, including Material, Carbon, Fluent, Polaris, Primer, and Spectrum.",
  },
  {
    slug: "open-source",
    routeSlug: "open-source",
    title: "Open-source design systems",
    controlTitle: "Open source",
    description:
      "Community design systems with public documentation, source, and a component model you can adopt or study.",
    intro:
      "Find open-source design systems with public docs and source, from component systems to utility-first UI kits.",
    seoTitle: "Open-Source Design Systems",
    metaDescription:
      "Browse open-source design systems, including Radix Themes, shadcn/ui, Ant Design, Mantine, and Bootstrap.",
  },
  {
    slug: "public-sector",
    routeSlug: "public-sector",
    title: "Public-sector design systems",
    controlTitle: "Public sector",
    description:
      "Government and civic design systems built for accessible, consistent public services.",
    intro:
      "Explore government and civic design systems built for accessible public services, shared patterns, and multi-team delivery.",
    seoTitle: "Public-Sector Design Systems",
    metaDescription:
      "Browse public-sector design systems, including GOV.UK, the U.S. Web Design System, and the French government design system.",
  },
];

export const designSystems: DesignSystem[] = [
  {
    name: "Material Design",
    description:
      "Google's design system for multi-platform products, with documented color, type, shape, motion, and component guidance.",
    websiteUrl: "https://m3.material.io/",
    githubRepo: "material-components/material-web",
    collection: "product",
    bestFor: "Multi-platform product systems",
    platform: "Web, Android, and iOS",
    maintainer: "Google",
    featured: true,
  },
  {
    name: "Carbon",
    description:
      "IBM's design system for enterprise products, with tokens, accessible components, and patterns for data-heavy interfaces.",
    websiteUrl: "https://carbondesignsystem.com/",
    githubRepo: "carbon-design-system/carbon",
    collection: "product",
    bestFor: "Enterprise product teams",
    platform: "Web",
    maintainer: "IBM",
    featured: true,
  },
  {
    name: "Fluent 2",
    description:
      "Microsoft's design system for cohesive product experiences across web, Windows, and cross-platform applications.",
    websiteUrl: "https://fluent2.microsoft.design/",
    githubRepo: "microsoft/fluentui",
    collection: "product",
    bestFor: "Microsoft-aligned products",
    platform: "Web and Windows",
    maintainer: "Microsoft",
  },
  {
    name: "Polaris",
    description:
      "Shopify's design system for commerce admin experiences, with practical patterns for dense product workflows.",
    websiteUrl: "https://polaris.shopify.com/",
    githubRepo: "Shopify/polaris-react-archive",
    collection: "product",
    bestFor: "Commerce admin interfaces",
    platform: "Web",
    maintainer: "Shopify",
  },
  {
    name: "Primer",
    description:
      "GitHub's design system for product UI, covering primitives, brand, and interface patterns used across GitHub.",
    websiteUrl: "https://primer.style/",
    githubRepo: "primer/react",
    collection: "product",
    bestFor: "Developer product interfaces",
    platform: "Web",
    maintainer: "GitHub",
  },
  {
    name: "Spectrum",
    description:
      "Adobe's design system for creative and productivity tools, with detailed guidance for accessible, multi-platform UI.",
    websiteUrl: "https://spectrum.adobe.com/",
    githubRepo: "adobe/react-spectrum",
    collection: "product",
    bestFor: "Complex creative tools",
    platform: "Web",
    maintainer: "Adobe",
  },
  {
    name: "Radix Themes",
    description:
      "A styled design system from the Radix team, with accessible components, a theme layer, and room to own the visual language.",
    websiteUrl: "https://www.radix-ui.com/themes",
    githubRepo: "radix-ui/themes",
    collection: "open-source",
    bestFor: "Custom product interfaces",
    platform: "Web",
    maintainer: "Radix UI",
    featured: true,
  },
  {
    name: "shadcn/ui",
    description:
      "A source-first design system of composed components that you copy into a React and Tailwind codebase and keep as your own.",
    websiteUrl: "https://ui.shadcn.com/",
    githubRepo: "shadcn-ui/ui",
    collection: "open-source",
    bestFor: "Owned component source",
    platform: "Web",
    maintainer: "shadcn",
    featured: true,
  },
  {
    name: "Ant Design",
    description:
      "An enterprise design system with a dense component language, design tokens, and patterns for data-heavy applications.",
    websiteUrl: "https://ant.design/",
    githubRepo: "ant-design/ant-design",
    collection: "open-source",
    bestFor: "Enterprise dashboards",
    platform: "Web",
    maintainer: "Ant Group",
  },
  {
    name: "Mantine",
    description:
      "A React design system with a large component set, hooks, and theme defaults aimed at application interfaces.",
    websiteUrl: "https://mantine.dev/",
    githubRepo: "mantinedev/mantine",
    collection: "open-source",
    bestFor: "Application UI kits",
    platform: "Web",
    maintainer: "Mantine",
  },
  {
    name: "Chakra UI",
    description:
      "A composable React design system with an accessible component model and a straightforward styling and theme API.",
    websiteUrl: "https://www.chakra-ui.com/",
    githubRepo: "chakra-ui/chakra-ui",
    collection: "open-source",
    bestFor: "Themeable React apps",
    platform: "Web",
    maintainer: "Chakra UI",
  },
  {
    name: "Bootstrap",
    description:
      "A long-standing design system of reusable components, grid, and utilities for consistent responsive websites.",
    websiteUrl: "https://getbootstrap.com/",
    githubRepo: "twbs/bootstrap",
    collection: "open-source",
    bestFor: "Broad web projects",
    platform: "Web",
    maintainer: "Bootstrap team",
  },
  {
    name: "GOV.UK Design System",
    description:
      "The UK government design system for consistent, accessible public services, with researched components and patterns.",
    websiteUrl: "https://design-system.service.gov.uk/",
    githubRepo: "alphagov/govuk-design-system",
    collection: "public-sector",
    bestFor: "Public service teams",
    platform: "Web",
    maintainer: "Government Digital Service",
    featured: true,
  },
  {
    name: "U.S. Web Design System",
    description:
      "A design system for U.S. federal websites, with accessible components, tokens, and guidance for government teams.",
    websiteUrl: "https://designsystem.digital.gov/",
    githubRepo: "uswds/uswds",
    collection: "public-sector",
    bestFor: "Federal websites",
    platform: "Web",
    maintainer: "U.S. General Services Administration",
  },
  {
    name: "Système de Design de l'État",
    description:
      "The French government's design system for public digital services, with components, foundations, and content guidance.",
    websiteUrl: "https://www.systeme-de-design.gouv.fr/",
    githubRepo: "GouvernementFR/dsfr",
    collection: "public-sector",
    bestFor: "French public services",
    platform: "Web",
    maintainer: "DINUM",
  },
];

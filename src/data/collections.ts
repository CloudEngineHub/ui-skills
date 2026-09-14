export type CollectionSkill = {
  slug: string;
  pathSlug?: string;
  role: string;
};

export type Collection = {
  slug: string;
  title: string;
  keyword: string;
  seoTitle: string;
  cardDescription: string;
  metaDescription: string;
  intro: string;
  playbook: string[];
  skills: CollectionSkill[];
  improvements: string[];
  relatedSlugs: string[];
};

export const collections: Collection[] = [
  {
    slug: "mobile-app-design",
    title: "Mobile App Design",
    keyword: "mobile app design",
    seoTitle: "Mobile app design UI patterns | UI Skills",
    cardDescription:
      "Improve mobile screens with better hierarchy, touch targets, accessible controls, and restrained motion.",
    metaDescription:
      "Explore UI skills for mobile app design, including touch targets, screen hierarchy, accessibility, responsive layouts, and motion.",
    intro:
      "Use practical UI skills to improve mobile app screens, from touch comfort and screen hierarchy to accessible controls and responsive motion.",
    playbook: [
      "use-large-touch-targets",
      "inset-primary-actions",
      "give-targets-breathing-room",
      "keep-secondary-text-readable",
      "use-structural-skeletons",
    ],
    skills: [
      {
        slug: "better-accessibility",
        role: "Make controls comfortable to use on touch devices.",
      },
      {
        slug: "better-layout",
        role: "Improve screen density and layout rhythm.",
      },
      {
        slug: "interaction-design",
        role: "Design clear mobile interactions and feedback.",
      },
      {
        slug: "make-interfaces-feel-better",
        role: "Refine the details that make screens feel native.",
      },
      {
        slug: "fixing-motion-performance",
        role: "Keep transitions responsive on constrained devices.",
      },
    ],
    improvements: [
      "Readability",
      "Touch comfort",
      "Layout density",
      "Mobile hierarchy",
      "Motion restraint",
    ],
    relatedSlugs: ["button-design", "form-design", "visual-hierarchy"],
  },
  {
    slug: "website-layout",
    title: "Website Layout",
    keyword: "website layout",
    seoTitle: "Website layout for clear UI structure | UI Skills",
    cardDescription:
      "Build clearer website layouts with stronger hierarchy, spacing, responsive structure, and stable content flow.",
    metaDescription:
      "Learn practical UI skills for website layout, including composition, spacing, responsive structure, hierarchy, and layout stability.",
    intro:
      "Build clearer website layouts with practical guidance for composition, spacing, responsive structure, hierarchy, and stable content flow.",
    playbook: [
      "group-with-space-not-lines",
      "reserve-space-with-aspect-ratio",
      "cap-line-length",
      "use-text-balance",
    ],
    skills: [
      {
        slug: "better-layout",
        role: "Correct crowded, flat, or misaligned compositions.",
      },
      {
        slug: "layout",
        role: "Strengthen spacing and hierarchy rhythm across a page.",
      },
      {
        slug: "frontend-design",
        role: "Turn a layout direction into a production-ready interface.",
      },
      {
        slug: "baseline-ui",
        role: "Apply a practical quality baseline while implementing.",
      },
    ],
    improvements: [
      "Composition",
      "Responsive structure",
      "Spacing",
      "Content flow",
      "Layout stability",
    ],
    relatedSlugs: ["visual-hierarchy", "landing-page-design", "dashboard-ui"],
  },
  {
    slug: "visual-hierarchy",
    title: "Visual Hierarchy",
    keyword: "visual hierarchy",
    seoTitle: "Visual hierarchy in UI design | UI Skills",
    cardDescription:
      "Make interfaces easier to scan with better type, spacing, contrast, emphasis, and content order.",
    metaDescription:
      "Improve visual hierarchy in UI design with practical guidance for typography, spacing, contrast, emphasis, and content order.",
    intro:
      "Make interfaces easier to scan by strengthening typography, spacing, contrast, emphasis, and the order in which content is understood.",
    playbook: [
      "use-text-balance",
      "tighten-heading-line-height",
      "keep-secondary-text-readable",
      "limit-accent-color-usage",
    ],
    skills: [
      {
        slug: "better-typography",
        role: "Create clearer type hierarchy and reading rhythm.",
      },
      {
        slug: "better-layout",
        role: "Establish a stronger spatial order for content.",
      },
      {
        slug: "better-colors",
        role: "Use contrast and color emphasis with intent.",
      },
      {
        slug: "improve-ui",
        role: "Identify verified hierarchy problems before changing code.",
      },
    ],
    improvements: [
      "Scanability",
      "Emphasis",
      "Readability",
      "Content order",
      "Decision clarity",
    ],
    relatedSlugs: ["website-layout", "design-principles", "ui-design-tips"],
  },
  {
    slug: "design-principles",
    title: "Design Principles",
    keyword: "design principles",
    seoTitle: "Practical design principles for UI | UI Skills",
    cardDescription:
      "Apply design principles that improve clarity, consistency, usability, visual balance, and accessibility.",
    metaDescription:
      "Apply practical design principles to UI with guidance for clarity, consistency, usability, visual balance, and accessibility.",
    intro:
      "Apply practical design principles to make interfaces clearer, more consistent, easier to use, visually balanced, and accessible.",
    playbook: [
      "group-with-space-not-lines",
      "pair-status-with-labels",
      "use-concentric-border-radius",
      "reserve-brand-color-for-links",
    ],
    skills: [
      {
        slug: "baseline-ui",
        role: "Apply dependable interface conventions during implementation.",
      },
      {
        slug: "better-interface",
        role: "Improve the foundations of usability and visual quality.",
      },
      {
        slug: "frontend-design",
        role: "Create a distinctive interface without generic patterns.",
      },
      {
        slug: "improve-ui",
        role: "Use evidence from the product to guide improvements.",
      },
    ],
    improvements: [
      "Consistency",
      "Usability",
      "Clarity",
      "Visual balance",
      "Accessibility",
    ],
    relatedSlugs: [
      "visual-hierarchy",
      "ui-design-tips",
      "design-system-guidelines",
    ],
  },
  {
    slug: "landing-page-design",
    title: "Landing Page Design",
    keyword: "landing page design",
    seoTitle: "Landing page design UI patterns | UI Skills",
    cardDescription:
      "Design landing pages with clear messaging, focused hierarchy, responsive sections, and stronger conversion paths.",
    metaDescription:
      "Explore landing page design skills for messaging, hero sections, visual hierarchy, responsive layouts, trust, and conversion flow.",
    intro:
      "Design landing pages around clear messaging, focused hierarchy, responsive sections, trust signals, and a deliberate conversion path.",
    playbook: [
      "use-text-balance",
      "reserve-space-with-aspect-ratio",
      "stagger-infrequent-entrances",
      "avoid-glow-primary-actions",
    ],
    skills: [
      {
        slug: "landing-page",
        role: "Build a landing page around hierarchy and conversion flow.",
      },
      {
        slug: "landing-page-design",
        role: "Plan conversion copy, SEO, and visual system together.",
      },
      {
        slug: "frontend-design",
        role: "Implement a polished, distinctive frontend surface.",
      },
      {
        slug: "better-layout",
        role: "Keep page sections composed and easy to scan.",
      },
    ],
    improvements: [
      "Conversion flow",
      "Hero clarity",
      "Visual pacing",
      "Responsive layout",
      "Trust signals",
    ],
    relatedSlugs: ["website-layout", "pricing-page-design", "ai-generated-ui"],
  },
  {
    slug: "button-design",
    title: "Button Design",
    keyword: "button design",
    seoTitle: "Button design and interaction states | UI Skills",
    cardDescription:
      "Design buttons with clear priority, comfortable targets, accessible states, and useful interaction feedback.",
    metaDescription:
      "Improve button design with guidance for hierarchy, touch targets, focus states, feedback, accessibility, and interaction quality.",
    intro:
      "Design buttons with clear priority, comfortable targets, accessible focus and loading states, and feedback that matches the action.",
    playbook: [
      "use-large-touch-targets",
      "add-scale-on-press",
      "avoid-glow-primary-actions",
      "show-visible-focus-rings",
    ],
    skills: [
      {
        slug: "better-ui",
        role: "Refine visual states and interaction details.",
      },
      {
        slug: "better-accessibility",
        role: "Make button controls easier for everyone to operate.",
      },
      {
        slug: "interaction-design",
        role: "Choose feedback and behavior that matches the action.",
      },
      {
        slug: "fixing-accessibility",
        role: "Audit keyboard and focus behavior before shipping.",
      },
    ],
    improvements: [
      "Action clarity",
      "Touch targets",
      "Focus states",
      "Feedback",
      "Visual priority",
    ],
    relatedSlugs: [
      "form-design",
      "website-navigation-design",
      "mobile-app-design",
    ],
  },
  {
    slug: "form-design",
    title: "Form Design",
    keyword: "form design",
    seoTitle: "Form design for usable interfaces | UI Skills",
    cardDescription:
      "Create forms with visible labels, clear validation, accessible controls, and focused submission actions.",
    metaDescription:
      "Improve form design with practical UI skills for labels, validation, keyboard access, touch comfort, errors, and recovery.",
    intro:
      "Create forms that are easier to complete with visible labels, clear validation, accessible controls, and focused recovery from errors.",
    playbook: [
      "label-every-form-field",
      "show-errors-beside-fields",
      "use-large-touch-targets",
      "show-visible-focus-rings",
    ],
    skills: [
      {
        slug: "fixing-accessibility",
        role: "Fix labels, focus management, and form errors.",
      },
      {
        slug: "better-accessibility",
        role: "Improve inclusive form behavior and touch comfort.",
      },
      {
        slug: "baseline-ui",
        role: "Apply sensible interaction and error-state defaults.",
      },
      {
        slug: "interaction-design",
        role: "Make validation and submission feedback feel clear.",
      },
    ],
    improvements: [
      "Completion rate",
      "Validation clarity",
      "Keyboard access",
      "Touch comfort",
      "Error recovery",
    ],
    relatedSlugs: ["button-design", "mobile-app-design", "empty-state-design"],
  },
  {
    slug: "dashboard-ui",
    title: "Dashboard UI",
    keyword: "dashboard ui",
    seoTitle: "Dashboard UI layout and data hierarchy | UI Skills",
    cardDescription:
      "Design dashboards with scannable data, balanced density, clear hierarchy, and resilient interface states.",
    metaDescription:
      "Explore dashboard UI skills for data hierarchy, information density, navigation, readability, loading states, and empty states.",
    intro:
      "Design dashboard UI that makes dense information easier to scan through stronger data hierarchy, balanced density, navigation, and resilient states.",
    playbook: [
      "use-tabular-nums-for-data",
      "clamp-overflowing-titles",
      "group-with-space-not-lines",
      "use-structural-skeletons",
    ],
    skills: [
      {
        slug: "better-layout",
        role: "Organize dense information without making it feel crowded.",
      },
      {
        slug: "better-typography",
        role: "Improve data readability and label hierarchy.",
      },
      {
        slug: "baseline-ui",
        role: "Apply practical patterns for dense application UI.",
      },
      {
        slug: "harden",
        role: "Cover loading, error, and empty states before launch.",
      },
    ],
    improvements: [
      "Data scanability",
      "Information density",
      "Loading states",
      "Navigation",
      "Readability",
    ],
    relatedSlugs: ["website-layout", "empty-state-design", "visual-hierarchy"],
  },
  {
    slug: "pricing-page-design",
    title: "Pricing Page Design",
    keyword: "pricing page design",
    seoTitle: "Pricing page design for clear decisions | UI Skills",
    cardDescription:
      "Make pricing pages easier to compare with clearer plans, readable details, and focused conversion paths.",
    metaDescription:
      "Improve pricing page design with UI patterns for plan comparison, price clarity, trust, responsive reading, and conversion.",
    intro:
      "Make pricing pages easier to understand and compare with clear plan structure, readable details, trust signals, and focused actions.",
    playbook: [
      "use-tabular-nums-for-data",
      "group-with-space-not-lines",
      "reserve-brand-color-for-links",
      "cap-line-length",
    ],
    skills: [
      {
        slug: "pricing-page",
        role: "Structure plans around comparison and conversion.",
      },
      {
        slug: "better-layout",
        role: "Create a clear progression from plan details to action.",
      },
      {
        slug: "better-typography",
        role: "Improve legibility for features, terms, and prices.",
      },
      {
        slug: "frontend-design",
        role: "Implement a polished, responsive pricing surface.",
      },
    ],
    improvements: [
      "Plan comparison",
      "Price clarity",
      "Conversion focus",
      "Trust",
      "Responsive reading",
    ],
    relatedSlugs: ["landing-page-design", "website-layout", "button-design"],
  },
  {
    slug: "website-navigation-design",
    title: "Website Navigation Design",
    keyword: "website navigation design",
    seoTitle: "Website navigation design patterns | UI Skills",
    cardDescription:
      "Create predictable navigation with clear destinations, responsive menus, accessible focus, and easy wayfinding.",
    metaDescription:
      "Improve website navigation design with practical patterns for menus, wayfinding, keyboard access, focus, and responsive behavior.",
    intro:
      "Create website navigation with clear destinations, predictable menus, accessible keyboard and focus behavior, and reliable wayfinding.",
    playbook: [
      "show-visible-focus-rings",
      "anchor-popovers-to-triggers",
      "fade-menus-out",
      "fade-scroll-edges",
    ],
    skills: [
      {
        slug: "interaction-design",
        role: "Design clear navigation behavior and feedback.",
      },
      {
        slug: "fixing-accessibility",
        role: "Audit focus, keyboard navigation, and menu semantics.",
      },
      {
        slug: "better-layout",
        role: "Give navigation controls a clear spatial structure.",
      },
      {
        slug: "better-ui",
        role: "Polish navigation states without adding noise.",
      },
    ],
    improvements: [
      "Wayfinding",
      "Keyboard access",
      "Menu clarity",
      "Interaction feedback",
      "Responsive behavior",
    ],
    relatedSlugs: ["button-design", "website-layout", "mobile-app-design"],
  },
  {
    slug: "ai-generated-ui",
    title: "AI Generated UI",
    keyword: "ai generated ui",
    seoTitle: "AI generated UI refinement skills | UI Skills",
    cardDescription:
      "Turn AI-generated interface concepts into consistent, distinctive, accessible, production-ready UI.",
    metaDescription:
      "Refine AI generated UI with skills for visual direction, prompt quality, design consistency, accessibility, and production readiness.",
    intro:
      "Turn AI-generated UI concepts into usable products by improving visual direction, consistency, accessibility, and production readiness.",
    playbook: [
      "limit-accent-color-usage",
      "use-concentric-border-radius",
      "use-text-balance",
      "use-structural-skeletons",
    ],
    skills: [
      {
        slug: "frontend-design",
        role: "Create distinctive UI without settling for generic output.",
      },
      {
        slug: "design-first-ui-prompting",
        role: "Turn a product goal into a constrained visual direction.",
      },
      {
        slug: "prototype",
        pathSlug: "emilkowalski/prototype",
        role: "Compare genuinely different interface directions before committing.",
      },
      {
        slug: "improve-ui",
        role: "Critique generated UI against the product's actual design evidence.",
      },
    ],
    improvements: [
      "Visual direction",
      "Prompt quality",
      "Concept selection",
      "Production readiness",
      "Design consistency",
    ],
    relatedSlugs: [
      "landing-page-design",
      "ui-design-tips",
      "design-system-guidelines",
    ],
  },
  {
    slug: "ui-design-tips",
    title: "UI Design Tips",
    keyword: "ui design tips",
    seoTitle: "Practical UI design tips | UI Skills",
    cardDescription:
      "Improve everyday interface decisions across hierarchy, spacing, typography, accessibility, and visual polish.",
    metaDescription:
      "Get practical UI design tips for improving hierarchy, spacing, typography, accessibility, consistency, and interface polish.",
    intro:
      "Improve everyday interface decisions with practical guidance for hierarchy, spacing, typography, accessibility, consistency, and polish.",
    playbook: [
      "use-text-balance",
      "give-targets-breathing-room",
      "keep-secondary-text-readable",
      "use-shadow-for-elevation",
    ],
    skills: [
      {
        slug: "baseline-ui",
        role: "Apply a concise baseline for everyday UI decisions.",
      },
      {
        slug: "better-interface",
        role: "Improve quality across the interface, not just one component.",
      },
      {
        slug: "improve-ui",
        role: "Prioritize the most important verified changes.",
      },
      {
        slug: "polish",
        role: "Run a final pass for spacing, alignment, and consistency.",
      },
    ],
    improvements: [
      "Polish",
      "Spacing",
      "Typography",
      "Accessibility",
      "Consistency",
    ],
    relatedSlugs: ["design-principles", "visual-hierarchy", "website-layout"],
  },
  {
    slug: "empty-state-design",
    title: "Empty State Design",
    keyword: "empty state design",
    seoTitle: "Empty state design patterns | UI Skills",
    cardDescription:
      "Design empty states that explain the situation and give users one clear, useful next action.",
    metaDescription:
      "Improve empty state design with UI guidance for messaging, onboarding, recovery, accessibility, and clear next actions.",
    intro:
      "Design empty states that explain the situation clearly, support recovery, and give users one useful next action.",
    playbook: [
      "give-empty-states-one-action",
      "use-structural-skeletons",
      "keep-secondary-text-readable",
      "show-visible-focus-rings",
    ],
    skills: [
      {
        slug: "harden",
        role: "Cover empty states, edge cases, and recovery paths.",
      },
      {
        slug: "baseline-ui",
        role: "Keep the state focused on one useful action.",
      },
      {
        slug: "better-writing",
        role: "Write helpful, concise empty-state copy.",
      },
      {
        slug: "better-accessibility",
        role: "Make the next action accessible to every user.",
      },
    ],
    improvements: [
      "Next-step clarity",
      "Recovery",
      "Onboarding",
      "Accessibility",
      "Product resilience",
    ],
    relatedSlugs: ["form-design", "dashboard-ui", "ui-design-tips"],
  },
  {
    slug: "design-system-guidelines",
    title: "Design System Guidelines",
    keyword: "design system guidelines",
    seoTitle: "Design system guidelines for UI teams | UI Skills",
    cardDescription:
      "Create consistent design system guidelines for components, tokens, patterns, documentation, and implementation.",
    metaDescription:
      "Build design system guidelines with practical skills for tokens, components, documentation, consistency, governance, and scale.",
    intro:
      "Create design system guidelines that keep components, tokens, patterns, documentation, and implementation decisions consistent as the product grows.",
    playbook: [
      "use-concentric-border-radius",
      "reserve-brand-color-for-links",
      "match-icon-stroke-weight",
      "use-sentence-case-labels",
    ],
    skills: [
      {
        slug: "design-system",
        role: "Define tokens and component specifications.",
      },
      {
        slug: "create-design-md",
        role: "Document real design evidence from an existing product.",
      },
      {
        slug: "baseline-ui",
        role: "Set a practical baseline for consistent implementation.",
      },
      {
        slug: "audit-design-system",
        role: "Review the system for gaps before scaling it.",
      },
    ],
    improvements: [
      "Component consistency",
      "Token clarity",
      "Documentation",
      "Scalability",
      "Implementation quality",
    ],
    relatedSlugs: ["design-principles", "ai-generated-ui", "ui-design-tips"],
  },
];

export const collectionBySlug = new Map(
  collections.map((collection) => [collection.slug, collection]),
);

import type { TopicSlug } from "./registry.ts";
import { agents } from "./agents.ts";

export type GuideSection = {
  heading: string;
  paragraphs: string[];
  commands?: string[];
  topicSlugs?: TopicSlug[];
  skillPathSlugs?: string[];
};

export type Guide = {
  slug: string;
  title: string;
  description: string;
  sections: GuideSection[];
};

export const guides: Guide[] = [
  {
    slug: "install-ui-skills-claude-code",
    title: "How to install UI skills in Claude Code",
    description:
      "Set up UI Skills in Claude Code with the CLI, then install the skills that match your project.",
    sections: [
      {
        heading: "Start with the CLI",
        paragraphs: [
          "Run these commands from your project root. The CLI lists categories and skills so you can pick what Claude Code should load.",
        ],
        commands: [
          "npx ui-skills start",
          "npx ui-skills categories",
          "npx ui-skills list --category motion",
        ],
      },
      {
        heading: "Install a skill",
        paragraphs: [
          "Each skill installs with one command. Installed skills become available to Claude Code in every session in the project.",
        ],
        skillPathSlugs: [
          "nextlevelbuilder/ui-ux-pro-max",
          "pbakaus/impeccable",
        ],
      },
      {
        heading: "Choose by topic",
        paragraphs: [
          "Start from the topic that matches the work in front of you, then install the skills that cover it.",
        ],
        topicSlugs: ["accessibility", "motion", "systems", "frontend"],
      },
    ],
  },
  {
    slug: "frontend-design-skills",
    title: "Frontend design skills for AI coding agents",
    description:
      "A starting set of frontend design skills, grouped by topic, with install commands for AI coding agents.",
    sections: [
      {
        heading: "How to choose",
        paragraphs: [
          "Start with the topic that matches the problem you are solving. Visual covers hierarchy and interface direction, Craft covers finish and detail, Motion covers animation timing, and Accessibility covers inclusive patterns.",
        ],
        topicSlugs: ["visual", "craft", "motion", "accessibility"],
      },
      {
        heading: "Start with these skills",
        paragraphs: [
          "These skills are a good first install for frontend design work. Each one lists its own install command.",
        ],
        skillPathSlugs: [
          "nextlevelbuilder/ui-ux-pro-max",
          "pbakaus/impeccable",
          "emilkowalski/improve-animations",
          "jakubkrehel/better-ui",
          "anthropics/frontend-design",
          "0xdesign/design-lab",
        ],
      },
      {
        heading: "Browse more",
        paragraphs: [
          "The full library covers more topics, including frontend architecture, taste, and testing.",
        ],
        topicSlugs: ["frontend", "taste", "testing"],
      },
    ],
  },
];

// Skill picks are the same for every agent: skills work across agents, so
// only the setup section changes per agent.
export const sharedSkillPathSlugs = [
  "nextlevelbuilder/ui-ux-pro-max",
  "pbakaus/impeccable",
  "emilkowalski/improve-animations",
  "jakubkrehel/better-ui",
  "anthropics/frontend-design",
  "0xdesign/design-lab",
];

export const agentGuides: Guide[] = agents.map((agent) => {
  const skillsLocation = agent.skills
    ? `${agent.name} looks for skills in ${agent.skills.path} (see ${agent.skills.docsUrl}).`
    : `Check the ${agent.name} documentation for where it loads skills: ${agent.websiteUrl ?? agent.sourceUrl}.`;
  return {
    slug: `ui-skills-for-${agent.id}`,
    title: `How to use UI Skills with ${agent.name}`,
    description: `Set up UI Skills for ${agent.name}, install the skills that fit your work, and pick skills by topic.`,
    sections: [
      {
        heading: `Set up ${agent.name}`,
        paragraphs: [
          `Run these commands from your ${agent.name} project root. They list the categories and skills available to ${agent.name}.`,
          skillsLocation,
        ],
        commands: [
          agent.setupCommand ?? "npx ui-skills start",
          "npx ui-skills categories",
        ],
      },
      {
        heading: "Install a skill",
        paragraphs: [
          `Each skill installs with one command. Installed skills are available to ${agent.name} in the project.`,
        ],
        skillPathSlugs: sharedSkillPathSlugs,
      },
      {
        heading: "Choose by topic",
        paragraphs: [
          `Start from the topic that matches the work you are doing in ${agent.name}.`,
        ],
        topicSlugs: ["visual", "craft", "motion", "accessibility"],
      },
    ],
  };
});

export const allGuides: Guide[] = [...guides, ...agentGuides];

export const guideBySlug = new Map(
  allGuides.map((guide) => [guide.slug, guide]),
);

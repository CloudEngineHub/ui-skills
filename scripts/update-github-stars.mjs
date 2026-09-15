import { writeFile } from "node:fs/promises";
import { formatStarCount } from "../src/lib/format-stars.ts";

const repositoryUrl = "https://api.github.com/repos/ibelick/ui-skills";
const headers = {
  Accept: "application/vnd.github+json",
  "User-Agent": "ui-skills-build",
};

if (process.env.GITHUB_TOKEN) {
  headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;
}

const response = await fetch(repositoryUrl, {
  headers,
  signal: AbortSignal.timeout(5000),
});

if (!response.ok) {
  throw new Error(`GitHub returned ${response.status} while fetching stars`);
}

const payload = await response.json();
const stars = payload.stargazers_count;

if (!Number.isInteger(stars) || stars <= 0) {
  throw new Error("GitHub returned an invalid star count");
}

const source = `export const githubStars = ${JSON.stringify({
  stars,
  label: formatStarCount(stars),
})} as const;\n`;

await writeFile(new URL("../src/data/github-stars.ts", import.meta.url), source);

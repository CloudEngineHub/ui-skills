export type FoundationColor = { name: string; value: string };
export type FoundationTypography = {
  name: string;
  fontFamily?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  letterSpacing?: string;
};
export type FoundationValue = { name: string; value: string };

function frontmatter(markdown: string) {
  const match = markdown.match(/^---\s*\r?\n([\s\S]*?)\r?\n---(?:\s*\r?\n|$)/);
  return match?.[1] ?? "";
}

function section(markdown: string, key: string) {
  const lines = frontmatter(markdown).split(/\r?\n/);
  const start = lines.findIndex((line) => new RegExp(`^${key}:\\s*$`, "i").test(line));
  if (start < 0) return [];
  const values: string[] = [];
  for (const line of lines.slice(start + 1)) {
    if (line.trim() && !/^\s{2}/.test(line)) break;
    values.push(line);
  }
  return values;
}

function clean(value: string) {
  return value.replace(/^['"]|['"]$/g, "").trim();
}

function markdownSection(markdown: string, pattern: RegExp) {
  const lines = markdown.split(/\r?\n/);
  const start = lines.findIndex((line) => /^#{1,6}\s+/.test(line) && pattern.test(line));
  if (start < 0) return [];
  const level = lines[start].match(/^(#+)/)?.[1].length ?? 2;
  const end = lines.slice(start + 1).findIndex((line) => {
    const headingLevel = line.match(/^(#+)\s+/)?.[1].length;
    return headingLevel !== undefined && headingLevel <= level;
  });
  return lines.slice(start + 1, end < 0 ? undefined : start + 1 + end);
}

function tableRows(lines: string[]) {
  return lines
    .filter((line) => /^\s*\|/.test(line) && !/^\s*\|\s*:?-+/.test(line))
    .map((line) => line.split("|").slice(1, -1).map((cell) => clean(cell.replace(/[`*_]/g, ""))))
    .filter((cells) => cells.length > 1);
}

export function parseDesignMdFoundations(markdown: string) {
  const colors: FoundationColor[] = [];
  for (const line of section(markdown, "colors")) {
    const match = line.match(/^\s{2,}["']?([^"':]+)["']?\s*:\s*["']?((?:#[\da-f]{3,8}|rgba?\([^)]*\)|hsla?\([^)]*))['"]?/i);
    if (match) colors.push({ name: clean(match[1]), value: clean(match[2]) });
  }
  if (colors.length === 0) {
    for (const cells of tableRows(markdownSection(markdown, /colou?rs?|palette/i))) {
      const value = cells.find((cell) => /^(?:#|rgba?\(|hsla?\()/i.test(cell));
      if (value) colors.push({ name: cells[0], value });
    }
  }

  const typography: FoundationTypography[] = [];
  const typographyLines = section(markdown, "typography");
  const aliases = new Map<string, string>();
  for (const line of typographyLines) {
    const alias = line.match(/^\s+["']?(font-(?:sans|serif|mono|display))["']?\s*:\s*["']?(.+?)["']?\s*$/i);
    if (alias) aliases.set(alias[1], clean(alias[2]));
  }
  if (typography.length === 0) {
    const lines = markdownSection(markdown, /typograph|type scale/i);
    const rows = tableRows(lines);
    const header = rows[0]?.map((cell) => cell.toLowerCase()) ?? [];
    for (const cells of rows.slice(1)) {
      const style: FoundationTypography = { name: cells[0] };
      for (const [index, cell] of cells.entries()) {
        const column = header[index] ?? "";
        if (/font|family|stack/.test(column)) style.fontFamily = cell;
        if (/size/.test(column)) style.fontSize = cell;
        if (/weight/.test(column)) style.fontWeight = cell;
        if (/line|leading/.test(column)) style.lineHeight = cell;
        if (/letter|tracking/.test(column)) style.letterSpacing = cell;
      }
      if (Object.keys(style).length > 1) typography.push(style);
    }
    const font = lines.join(" ").match(/\*\*Font(?: family)?\*\*:\s*([^\n]+)/i);
    if (font) typography.push({ name: "Font family", fontFamily: font[1].trim() });
  }
  const propertyNames: Record<string, keyof FoundationTypography> = {
    fontfamily: "fontFamily",
    "font-family": "fontFamily",
    fontsize: "fontSize",
    "font-size": "fontSize",
    fontweight: "fontWeight",
    "font-weight": "fontWeight",
    lineheight: "lineHeight",
    "line-height": "lineHeight",
    letterspacing: "letterSpacing",
    "letter-spacing": "letterSpacing",
    tracking: "letterSpacing",
  };
  for (const line of typographyLines) {
    const match = line.match(/^\s{2}["']?([\w-]+)["']?\s*:\s*\{([^{}]+)\}\s*,?\s*$/);
    if (!match) continue;
    const style: FoundationTypography = { name: match[1] };
    for (const pair of match[2].split(/,\s*(?=[\w-]+\s*:)/)) {
      const property = pair.match(/^\s*["']?([\w-]+)["']?\s*:\s*(.*?)\s*$/);
      if (!property) continue;
      const key = propertyNames[property[1].toLowerCase()];
      if (!key) continue;
      const value = clean(property[2]);
      style[key] = key === "fontFamily" ? aliases.get(value) ?? value : value;
    }
    if (Object.keys(style).length > 1) typography.push(style);
  }
  let current: FoundationTypography | undefined;
  for (const line of typographyLines) {
    const heading = line.match(/^\s{2}["']?([\w-]+)["']?\s*:\s*$/);
    if (heading) {
      current = { name: heading[1] };
      typography.push(current);
      continue;
    }
    const property = line.match(/^\s{4}([\w-]+):\s*(.+)$/);
    if (!current || !property) continue;
    const key = propertyNames[property[1].toLowerCase()];
    if (key) current[key] = key === "fontFamily" ? aliases.get(clean(property[2])) ?? clean(property[2]) : clean(property[2]);
  }

  const parseValues = (key: string, headingPattern: RegExp) => {
    const yamlValues = section(markdown, key).flatMap((line) => {
    const match = line.match(/^\s{2,}["']?([\w-]+)["']?\s*:\s*["']?([^"']+?)["']?\s*$/);
    return match ? [{ name: match[1], value: clean(match[2]) }] : [];
    });
    if (yamlValues.length > 0) return yamlValues;
    const rows = tableRows(markdownSection(markdown, headingPattern));
    return rows.slice(1).flatMap((cells) => cells.length > 1 ? [{ name: cells[0], value: cells[1] }] : []);
  };

  return {
    colors,
    typography,
    spacing: parseValues("spacing", /spacing|grid/i),
    shapes: parseValues("rounded", /radius|rounded|shape/i),
  };
}

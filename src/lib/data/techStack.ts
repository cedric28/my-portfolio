export type TechCategory = "frontend" | "backend" | "database" | "devops" | "testing";

export type TechItem = {
  slug: string; // simpleicons slug (used in /cdn.simpleicons.org/{slug}) OR internal key when iconOverride is set
  name: string;
  color: string; // hex without leading # (applied only to simpleicons)
  category: TechCategory;
  iconOverride?: string; // full URL to icon (bypasses simpleicons)
};

// Devicon fallbacks for brands that Simple Icons removed (AWS, Heroku, SQL Server).
const devicon = (path: string) => `https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${path}`;

export const techStack: TechItem[] = [
  // Frontend
  { slug: "typescript", name: "TypeScript", color: "3178C6", category: "frontend" },
  { slug: "nextdotjs", name: "Next.js", color: "FFFFFF", category: "frontend" },
  { slug: "react", name: "React", color: "61DAFB", category: "frontend" },
  { slug: "tailwindcss", name: "Tailwind CSS", color: "06B6D4", category: "frontend" },
  { slug: "shadcnui", name: "shadcn/ui", color: "FFFFFF", category: "frontend" },
  { slug: "framer", name: "Framer Motion", color: "0055FF", category: "frontend" },
  { slug: "greensock", name: "GSAP", color: "88CE02", category: "frontend" },
  { slug: "threedotjs", name: "Three.js", color: "FFFFFF", category: "frontend" },
  { slug: "mui", name: "MUI", color: "007FFF", category: "frontend" },
  { slug: "storybook", name: "Storybook", color: "FF4785", category: "frontend" },
  { slug: "vuedotjs", name: "Vue.js", color: "4FC08D", category: "frontend" },
  { slug: "nuxt", name: "Nuxt", color: "00DC82", category: "frontend" },

  // Backend
  { slug: "nodedotjs", name: "Node.js", color: "5FA04E", category: "backend" },
  { slug: "nestjs", name: "NestJS", color: "E0234E", category: "backend" },
  { slug: "express", name: "Express", color: "FFFFFF", category: "backend" },
  { slug: "python", name: "Python", color: "3776AB", category: "backend" },
  { slug: "laravel", name: "Laravel", color: "FF2D20", category: "backend" },
  { slug: "symfony", name: "Symfony", color: "FFFFFF", category: "backend" },
  { slug: "php", name: "PHP", color: "777BB4", category: "backend" },
  { slug: "graphql", name: "GraphQL", color: "E10098", category: "backend" },

  // Database
  { slug: "postgresql", name: "PostgreSQL", color: "4169E1", category: "database" },
  { slug: "mongodb", name: "MongoDB", color: "47A248", category: "database" },
  { slug: "mysql", name: "MySQL", color: "4479A1", category: "database" },
  { slug: "redis", name: "Redis", color: "FF4438", category: "database" },
  {
    slug: "sql",
    name: "SQL",
    color: "CC2927",
    category: "database",
    iconOverride: devicon("microsoftsqlserver/microsoftsqlserver-plain.svg"),
  },
  { slug: "firebase", name: "Firebase", color: "DD2C00", category: "database" },

  // Testing
  { slug: "jest", name: "Jest", color: "C21325", category: "testing" },
  { slug: "cypress", name: "Cypress", color: "69D3A7", category: "testing" },

  // DevOps / Cloud
  {
    slug: "aws",
    name: "AWS",
    color: "FF9900",
    category: "devops",
    iconOverride: devicon("amazonwebservices/amazonwebservices-plain-wordmark.svg"),
  },
  { slug: "docker", name: "Docker", color: "2496ED", category: "devops" },
  { slug: "jenkins", name: "Jenkins", color: "D24939", category: "devops" },
  { slug: "githubactions", name: "GitHub Actions", color: "2088FF", category: "devops" },
  { slug: "gitlab", name: "GitLab", color: "FC6D26", category: "devops" },
  { slug: "vercel", name: "Vercel", color: "FFFFFF", category: "devops" },
  {
    slug: "heroku",
    name: "Heroku",
    color: "430098",
    category: "devops",
    iconOverride: devicon("heroku/heroku-original.svg"),
  },
  { slug: "sentry", name: "Sentry", color: "362D59", category: "devops" },
  { slug: "grafana", name: "Grafana", color: "F46800", category: "devops" },
];

export const techBySlug = Object.fromEntries(techStack.map((t) => [t.slug, t]));

export const categoryLabels: Record<TechCategory, string> = {
  frontend: "Frontend",
  backend: "Backend",
  database: "Databases",
  testing: "Testing",
  devops: "DevOps & Cloud",
};

export function iconUrl(slug: string, color?: string): string {
  const item = techBySlug[slug];
  if (item?.iconOverride) return item.iconOverride;
  return color ? `https://cdn.simpleicons.org/${slug}/${color}` : `https://cdn.simpleicons.org/${slug}`;
}

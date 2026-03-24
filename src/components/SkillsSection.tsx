import { getSkillCategories } from "@/sanity/queries";

type SkillCategory = { title: string; skills: string[] };

const fallbackCategories: SkillCategory[] = [
  {
    title: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "HTML/CSS", "Redux"],
  },
  {
    title: "Mobile",
    skills: ["React Native", "Expo", "iOS", "Android", "Flutter"],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Express", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
  },
  {
    title: "Tools & Other",
    skills: ["Git", "Docker", "Vercel", "Firebase", "Figma", "CI/CD"],
  },
];

export default async function SkillsSection() {
  let categories: SkillCategory[] = [];
  try {
    categories = await getSkillCategories();
  } catch {
    /* Sanity not configured */
  }
  if (!categories || categories.length === 0) categories = fallbackCategories;

  return (
    <section id="skills" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Skills &amp; Technologies
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.title}
              className="rounded-xl border border-card-border bg-card-bg p-6"
            >
              <h3 className="mb-4 text-lg font-semibold text-accent">{category.title}</h3>
              <ul className="space-y-2">
                {category.skills?.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { createClient } from "@sanity/client";
import "dotenv/config";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});

async function test() {
  const projects = await client.fetch(`*[_type == "project"]{ title, "slug": slug.current, projectType }`);
  console.log(`\nProjects (${projects.length}):`);
  projects.forEach((p) => console.log(`  - [${p.projectType}] ${p.title} (/${p.slug})`));

  const about = await client.fetch(`*[_type == "about"][0]{ heading, "statCount": count(stats) }`);
  console.log(`\nAbout: "${about?.heading}" with ${about?.statCount} stats`);

  const skills = await client.fetch(`*[_type == "skillCategory"]{ title, "count": count(skills) }`);
  console.log(`\nSkill Categories (${skills.length}):`);
  skills.forEach((s) => console.log(`  - ${s.title} (${s.count} skills)`));

  const books = await client.fetch(`*[_type == "book"]{ title, author, status }`);
  console.log(`\nBooks (${books.length}):`);
  books.forEach((b) => console.log(`  - [${b.status}] "${b.title}" by ${b.author}`));
}

test().catch(console.error);

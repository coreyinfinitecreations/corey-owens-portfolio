import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import type { SanityProject } from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import BooksSection from "@/components/BooksSection";
import ContactSection from "@/components/ContactSection";
import { getProjects } from "@/sanity/queries";
import { projects as fallbackProjects } from "@/data/projects";

export default async function Home() {
  let projects: SanityProject[] = [];
  try {
    projects = await getProjects();
  } catch {
    /* Sanity not configured */
  }

  if (!projects || projects.length === 0) {
    projects = fallbackProjects.map((p) => ({
      title: p.title,
      slug: p.slug,
      description: p.description,
      longDescription: p.longDescription,
      projectType: p.type,
      technologies: p.technologies,
      features: p.features,
      liveUrl: p.liveUrl,
      repoUrl: p.repoUrl,
    }));
  }

  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection projects={projects} />
      <SkillsSection />
      <BooksSection />
      <ContactSection />
    </main>
  );
}

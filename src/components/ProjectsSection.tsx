"use client";

import { useState, useEffect } from "react";
import ProjectCard from "./ProjectCard";

export type SanityProject = {
  title: string;
  slug: string;
  description: string;
  longDescription?: string;
  projectType: "web" | "mobile";
  image?: { asset: { _ref: string } };
  technologies?: string[];
  features?: string[];
  liveUrl?: string;
  repoUrl?: string;
};

const filters = ["all", "web", "mobile"] as const;
type Filter = (typeof filters)[number];

export default function ProjectsSection({ projects }: { projects: SanityProject[] }) {
  const [active, setActive] = useState<Filter>("all");
  const [filtered, setFiltered] = useState(projects);

  useEffect(() => {
    setFiltered(
      active === "all" ? projects : projects.filter((p) => p.projectType === active)
    );
  }, [active, projects]);

  return (
    <section id="projects" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          My Projects
        </h2>
        <div className="mx-auto mb-8 h-1 w-16 rounded bg-accent" />
        <p className="mx-auto mb-10 max-w-xl text-center text-muted">
          A selection of web and mobile applications I&apos;ve built. Click on any project
          to learn more about it.
        </p>

        {/* Filter buttons */}
        <div className="mb-10 flex justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`rounded-lg px-5 py-2 text-sm font-medium capitalize transition-colors ${
                active === f
                  ? "bg-accent text-white"
                  : "border border-card-border text-muted hover:text-foreground"
              }`}
            >
              {f === "all" ? "All Projects" : `${f} Apps`}
            </button>
          ))}
        </div>

        {/* Project grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

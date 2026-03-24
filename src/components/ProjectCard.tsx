import Image from "next/image";
import Link from "next/link";
import type { SanityProject } from "./ProjectsSection";
import { urlFor } from "@/sanity/image";

export default function ProjectCard({ project }: { project: SanityProject }) {
  const imageUrl = project.image
    ? urlFor(project.image).width(600).height(400).url()
    : "/projects/placeholder.svg";

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col overflow-hidden rounded-xl border border-card-border bg-card-bg transition-colors hover:border-accent/40"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-card-bg">
        <Image
          src={imageUrl}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-3 right-3 rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white capitalize">
          {project.projectType}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="mb-2 text-lg font-semibold group-hover:text-accent transition-colors">
          {project.title}
        </h3>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.technologies?.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-background px-2 py-1 text-xs text-muted"
            >
              {tech}
            </span>
          ))}
          {(project.technologies?.length || 0) > 4 && (
            <span className="rounded-md bg-background px-2 py-1 text-xs text-muted">
              +{project.technologies!.length - 4}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}

import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjects, getProjectBySlug } from "@/sanity/queries";
import { projects as fallbackProjects } from "@/data/projects";
import { urlFor } from "@/sanity/image";
import type { Metadata } from "next";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  let projects: { slug: string }[] = [];
  try {
    projects = await getProjects();
  } catch {
    /* Sanity not configured */
  }
  if (!projects || projects.length === 0) {
    projects = fallbackProjects.map((p) => ({ slug: p.slug }));
  }
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  let project: { title: string; description: string } | null = null;
  try {
    project = await getProjectBySlug(slug);
  } catch {
    /* fallback */
  }
  if (!project) {
    const fb = fallbackProjects.find((p) => p.slug === slug);
    if (fb) project = { title: fb.title, description: fb.description };
  }

  if (!project) return { title: "Project Not Found" };
  return {
    title: `${project.title} | Corey Owens`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;

  // Try Sanity first, then fallback
  let project: {
    title: string;
    slug: string;
    description: string;
    longDescription?: string;
    projectType: string;
    image?: { asset: { _ref: string } };
    technologies?: string[];
    features?: string[];
    liveUrl?: string;
    repoUrl?: string;
  } | null = null;

  try {
    project = await getProjectBySlug(slug);
  } catch {
    /* Sanity not configured */
  }

  let imageUrl = "/projects/placeholder.svg";
  let usingSanityImage = false;

  if (!project) {
    const fb = fallbackProjects.find((p) => p.slug === slug);
    if (!fb) notFound();
    project = {
      title: fb.title,
      slug: fb.slug,
      description: fb.description,
      longDescription: fb.longDescription,
      projectType: fb.type,
      technologies: fb.technologies,
      features: fb.features,
      liveUrl: fb.liveUrl,
      repoUrl: fb.repoUrl,
    };
    imageUrl = fb.imageUrl;
  } else {
    if (project.image) {
      imageUrl = urlFor(project.image).width(900).height(500).url();
      usingSanityImage = true;
    }
  }

  if (!project) notFound();

  return (
    <main className="min-h-screen pt-24 pb-16 px-6">
      <div className="mx-auto max-w-4xl">
        {/* Back link */}
        <Link
          href="/#projects"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Projects
        </Link>

        {/* Header */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-3">
            <span className="rounded-full bg-accent/90 px-3 py-1 text-xs font-medium text-white capitalize">
              {project.projectType}
            </span>
          </div>
          <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.title}
          </h1>
          <p className="text-lg leading-relaxed text-muted">
            {project.longDescription || project.description}
          </p>
        </div>

        {/* Project image */}
        <div className="relative mb-10 aspect-video w-full overflow-hidden rounded-xl border border-card-border">
          <Image
            src={imageUrl}
            alt={project.title}
            fill
            className="object-cover"
            {...(usingSanityImage ? {} : { unoptimized: true })}
          />
        </div>

        {/* Tech stack */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Technologies Used</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-lg border border-card-border bg-card-bg px-3 py-1.5 text-sm text-muted"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Features */}
        {project.features && project.features.length > 0 && (
          <div className="mb-10">
            <h2 className="mb-4 text-xl font-semibold">Key Features</h2>
            <ul className="grid gap-3 sm:grid-cols-2">
              {project.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-muted">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 shrink-0 text-accent">
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span className="text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Links */}
        <div className="flex gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View Live
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-card-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-muted"
            >
              View Code
            </a>
          )}
        </div>
      </div>
    </main>
  );
}

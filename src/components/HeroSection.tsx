export default function HeroSection() {
  return (
    <section className="flex min-h-screen items-center justify-center px-6">
      <div className="mx-auto max-w-3xl text-center">
        <p className="mb-4 text-sm font-medium tracking-widest text-accent uppercase">
          Web &amp; Mobile Developer
        </p>
        <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Hi, I&apos;m{" "}
          <span className="text-accent">Corey Owens</span>
        </h1>
        <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-muted">
          I build modern web and mobile applications with clean code and thoughtful
          user experiences. Let me bring your ideas to life.
        </p>
        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href="#projects"
            className="rounded-lg bg-accent px-8 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-lg border border-card-border px-8 py-3 font-medium text-foreground transition-colors hover:border-muted"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

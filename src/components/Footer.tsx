export default function Footer() {
  return (
    <footer className="border-t border-card-border bg-background">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-8 text-sm text-muted sm:flex-row sm:justify-between">
        <p>&copy; {new Date().getFullYear()} Corey Owens. All rights reserved.</p>
        <div className="flex gap-6">
          <a
            href="https://www.github.com/coreyinfinitecreations"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn
          </a>
          <a href="mailto:corey@coreyowens.com" className="transition-colors hover:text-foreground">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}

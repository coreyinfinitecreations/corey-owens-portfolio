import { getAbout } from "@/sanity/queries";

type Stat = { value: string; label: string };
type AboutData = {
  heading?: string;
  whoIAm?: string;
  whatIDo?: string;
  stats?: Stat[];
};

const fallback: AboutData = {
  heading: "About Me",
  whoIAm:
    "I'm a passionate full-stack developer specializing in building exceptional web and mobile applications. With a strong foundation in modern JavaScript frameworks and a keen eye for design, I create products that are both functional and beautiful.",
  whatIDo:
    "From responsive websites to cross-platform mobile apps, I deliver end-to-end solutions. I focus on writing clean, maintainable code and building intuitive user interfaces that solve real problems for real people.",
  stats: [
    { value: "3+", label: "Years Experience" },
    { value: "20+", label: "Projects Completed" },
    { value: "10+", label: "Technologies" },
    { value: "100%", label: "Client Satisfaction" },
  ],
};

export default async function AboutSection() {
  let data: AboutData | null = null;
  try {
    data = await getAbout();
  } catch {
    /* Sanity not configured */
  }
  if (!data) data = fallback;

  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          {data.heading || "About Me"}
        </h2>
        <div className="mx-auto mb-12 h-1 w-16 rounded bg-accent" />

        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          <div>
            <h3 className="mb-4 text-xl font-semibold">Who I Am</h3>
            <p className="leading-relaxed text-muted">{data.whoIAm}</p>
          </div>
          <div>
            <h3 className="mb-4 text-xl font-semibold">What I Do</h3>
            <p className="leading-relaxed text-muted">{data.whatIDo}</p>
          </div>
        </div>

        {data.stats && data.stats.length > 0 && (
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-6 text-center sm:grid-cols-4">
            {data.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-card-border bg-card-bg p-6"
              >
                <p className="text-3xl font-bold text-accent">{stat.value}</p>
                <p className="mt-1 text-sm text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

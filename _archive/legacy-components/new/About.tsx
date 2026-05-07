// Server Component — no animations, no Framer Motion.
import { about, WA_GENERAL } from "@/data/site-content";

export function About() {
  return (
    <section className="py-16 md:py-24 bg-bg" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              {about.title}
            </h2>
            <p className="text-lg text-muted-2 font-medium mb-6">{about.subtitle}</p>
            <p className="text-muted leading-relaxed mb-4">{about.body}</p>
            <p className="text-muted leading-relaxed mb-8">{about.body2}</p>
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              {about.cta}
            </a>
          </div>

          {/* Right — stats grid */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 bg-surface border border-border rounded-xl"
              >
                <div className="text-2xl font-bold text-accent mb-1.5">{stat.value}</div>
                <div className="text-sm text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

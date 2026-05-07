// Server Component — no animations, no Framer Motion.
import { ArrowRight } from "lucide-react";
import type { SiteContent } from "@/data/site-content";

interface AboutProps {
  about: SiteContent["about"];
}

export function About({ about }: AboutProps) {
  return (
    <section id="sobre" className="py-16 md:py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight">
              {about.title}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-4">{about.subtitle}</p>
            <p className="text-muted text-base leading-relaxed mb-4">{about.body}</p>
            <p className="text-muted text-base leading-relaxed mb-8">{about.body2}</p>

            {/* CTA — internal anchor to contact section */}
            <a
              href="#contato"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-accent text-bg font-bold text-sm hover:bg-accent-light hover:scale-[1.03] active:scale-[0.97] transition-all duration-200 shadow-lg shadow-accent/20"
            >
              {about.cta}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>

          {/* Right — stats */}
          <div className="grid grid-cols-2 gap-4">
            {about.stats.map((stat) => (
              <div
                key={stat.label}
                className="p-6 rounded-xl bg-surface border border-border hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-md hover:shadow-accent/5 transition-all duration-300 flex flex-col gap-1"
              >
                <span className="text-2xl font-bold text-accent">{stat.value}</span>
                <span className="text-xs text-muted-2 uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

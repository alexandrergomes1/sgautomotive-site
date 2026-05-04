import { getTranslations } from "next-intl/server";
import { CheckCircle, ArrowRight } from "lucide-react";

export async function ImportacaoSection() {
  const t = await getTranslations("import_section");

  const included = t.raw("included") as string[];
  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-surface border-y border-border" id="importacao">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-accent/30 bg-accent/5 text-accent text-xs font-medium tracking-widest uppercase mb-6">
          {t("badge")}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4 leading-tight">
              {t("title")}
            </h2>
            <p className="text-muted text-lg leading-relaxed mb-8">{t("subtitle")}</p>

            <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-2 mb-5">
              {t("included_title")}
            </h3>
            <ul className="space-y-3 mb-8">
              {included.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted">
                  <CheckCircle size={16} className="text-accent mt-0.5 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
            >
              {t("cta")}
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="flex flex-col gap-5">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex gap-5 p-5 bg-bg border border-border rounded-xl hover:border-accent/30 transition-colors"
              >
                <div className="shrink-0 w-10 h-10 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center">
                  <span className="text-accent font-bold text-xs">{step.number}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-fg mb-1">{step.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

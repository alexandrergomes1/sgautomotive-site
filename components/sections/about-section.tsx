import { getTranslations } from "next-intl/server";

export async function AboutSection() {
  const t = await getTranslations("about");
  const stats = t.raw("stats") as Array<{ value: string; label: string }>;

  return (
    <section className="py-16 md:py-24 bg-bg" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-2 font-medium mb-6">{t("subtitle")}</p>
            <p className="text-muted leading-relaxed mb-4">{t("body")}</p>
            <p className="text-muted leading-relaxed mb-8">{t("body_2")}</p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent-light transition-colors"
            >
              {t("cta")}
            </a>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat) => (
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

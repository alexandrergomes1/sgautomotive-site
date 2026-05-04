import { getTranslations } from "next-intl/server";
import { FadeUp, AnimateItem } from "@/components/ui/animate";

export async function HowItWorks() {
  const t = await getTranslations("how_it_works");

  const steps = t.raw("steps") as Array<{
    number: string;
    title: string;
    description: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-bg" id="como-funciona">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeUp className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted text-lg">{t("subtitle")}</p>
        </FadeUp>

        <div className="relative">
          <div
            aria-hidden="true"
            className="hidden lg:block absolute top-8 left-[calc(10%+2rem)] right-[calc(10%+2rem)] h-px bg-gradient-to-r from-transparent via-border to-transparent"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <AnimateItem key={step.number} delay={i * 0.1} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-surface border border-border flex items-center justify-center text-accent font-bold text-xl mb-5">
                  {step.number}
                </div>
                <h3 className="font-semibold text-fg mb-2">{step.title}</h3>
                <p className="text-muted text-sm leading-relaxed">{step.description}</p>
              </AnimateItem>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

// Server Component — uses getTranslations directly, no NextIntlClientProvider needed.
// Static text (questions, answers, title) is in the SSR HTML.
// Only the accordion toggle is client (FAQAccordion).
import { getTranslations } from "next-intl/server";
import { FAQAccordion } from "./faq-accordion";

export async function FAQ() {
  const t = await getTranslations("faq");

  const items = t.raw("items") as Array<{
    question: string;
    answer: string;
  }>;

  return (
    <section className="py-16 md:py-24 bg-surface" id="faq">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
            {t("title")}
          </h2>
          <p className="text-muted">{t("subtitle")}</p>
        </div>

        <FAQAccordion items={items} />
      </div>
    </section>
  );
}

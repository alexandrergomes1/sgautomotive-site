"use client";
import dynamic from "next/dynamic";

// Splits FAQ JS into a separate chunk — same SSR HTML, smaller initial bundle.
// ssr: true keeps questions/answers in static HTML for SEO.
export const FAQLazy = dynamic(
  () => import("./faq").then((m) => ({ default: m.FAQ })),
  {
    ssr: true,
    loading: () => <section className="py-16 md:py-24 bg-surface" id="faq" />,
  }
);

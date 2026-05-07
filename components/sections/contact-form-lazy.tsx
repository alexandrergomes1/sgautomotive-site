"use client";

import dynamic from "next/dynamic";
import type { ContactFormStrings } from "./contact-form";

// Splits Zod + react-hook-form + sonner into a separate chunk.
// ssr: false — the form has no SEO-critical content and relies on browser APIs.
const ContactFormDynamic = dynamic(
  () => import("./contact-form").then((m) => ({ default: m.ContactForm })),
  {
    ssr: false,
    loading: () => <div className="h-[400px] rounded-lg bg-surface-2 animate-pulse" />,
  }
);

export function ContactFormLazy({ strings }: { strings: ContactFormStrings }) {
  return <ContactFormDynamic strings={strings} />;
}

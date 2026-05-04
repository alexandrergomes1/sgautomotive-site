"use client";
import dynamic from "next/dynamic";

// Splits ContactSection (Zod + react-hook-form + sonner) into a separate chunk.
// ssr: false is safe — the contact form has no SEO-critical content.
export const ContactSectionLazy = dynamic(
  () => import("./contact-section").then((m) => ({ default: m.ContactSection })),
  {
    ssr: false,
    loading: () => <section className="py-16 md:py-24 bg-bg" id="contato" />,
  }
);

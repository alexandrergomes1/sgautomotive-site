"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Mail, MapPin, Clock } from "lucide-react";
import { SlideIn } from "@/components/ui/animate";
import { toast } from "sonner";

const WHATSAPP_NUMBER = "34662625953";
const WHATSAPP_DISPLAY = "+34 662 62 59 53";
const EMAIL_ADDRESS = "sgautomotive.es@gmail.com";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const t = useTranslations("contact");
  const services = t.raw("form.services") as string[];

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  async function onSubmit(data: FormData) {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      toast.success(t("form.success"));
      reset();
    } else {
      toast.error(t("form.error"));
    }
  }

  const inputClass =
    "w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-colors";

  return (
    <section className="py-16 md:py-24 bg-bg" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left */}
          <SlideIn from="left">
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              {t("title")}
            </h2>
            <p className="text-muted text-lg mb-10">{t("subtitle")}</p>

            <div className="space-y-4">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-trust/40 hover:bg-trust/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-trust/15 border border-trust/30 flex items-center justify-center shrink-0 group-hover:bg-trust/20 transition-colors">
                  <svg viewBox="0 0 24 24" width={18} height={18} fill="currentColor" className="text-trust-light" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-medium text-fg">
                    {t("whatsapp_label")}
                  </div>
                  <div className="text-xs text-muted">{WHATSAPP_DISPLAY}</div>
                </div>
              </a>

              <a
                href={`mailto:${EMAIL_ADDRESS}`}
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-accent/40 hover:bg-accent/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0 group-hover:bg-accent/15 transition-colors">
                  <Mail size={18} className="text-accent" />
                </div>
                <div>
                  <div className="text-sm font-medium text-fg">
                    {t("email_label")}
                  </div>
                  <div className="text-xs text-muted">{EMAIL_ADDRESS}</div>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl">
                <div className="w-10 h-10 rounded-full bg-border flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-muted" />
                </div>
                <div>
                  <div className="text-sm font-medium text-fg">
                    {t("location")}
                  </div>
                  <div className="text-xs text-muted">
                    <Clock size={10} className="inline mr-1" />
                    {t("response_time")}
                  </div>
                </div>
              </div>
            </div>
          </SlideIn>

          {/* Form */}
          <SlideIn from="right" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              noValidate
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <input
                    {...register("name")}
                    placeholder={t("form.name")}
                    className={inputClass}
                    aria-label={t("form.name")}
                  />
                  {errors.name && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                <div>
                  <input
                    {...register("email")}
                    type="email"
                    placeholder={t("form.email")}
                    className={inputClass}
                    aria-label={t("form.email")}
                  />
                  {errors.email && (
                    <p className="mt-1 text-xs text-red-400">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>

              <input
                {...register("phone")}
                type="tel"
                placeholder={t("form.phone")}
                className={inputClass}
                aria-label={t("form.phone")}
              />

              <div>
                <select
                  {...register("service")}
                  className={inputClass}
                  defaultValue=""
                  aria-label={t("form.service")}
                >
                  <option value="" disabled>
                    {t("form.service_placeholder")}
                  </option>
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
                {errors.service && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.service.message}
                  </p>
                )}
              </div>

              <div>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder={t("form.message_placeholder")}
                  className={`${inputClass} resize-none`}
                  aria-label={t("form.message")}
                />
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3.5 bg-accent text-bg font-semibold text-sm rounded-lg hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isSubmitting ? t("form.submitting") : t("form.submit")}
              </button>
            </form>
          </SlideIn>
        </div>
      </div>
    </section>
  );
}

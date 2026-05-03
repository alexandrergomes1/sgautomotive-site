"use client";

import { useTranslations } from "next-intl";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "framer-motion";
import { MessageCircle, Mail, MapPin, Clock } from "lucide-react";
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
    <section className="py-24 md:py-32 bg-bg" id="contato">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
              {t("title")}
            </h2>
            <p className="text-muted text-lg mb-10">{t("subtitle")}</p>

            <div className="space-y-5">
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-surface border border-border rounded-xl hover:border-trust/40 hover:bg-trust/5 transition-all group"
              >
                <div className="w-10 h-10 rounded-full bg-trust/15 border border-trust/30 flex items-center justify-center shrink-0 group-hover:bg-trust/20 transition-colors">
                  <MessageCircle size={18} className="text-trust-light" />
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
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.1 }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}

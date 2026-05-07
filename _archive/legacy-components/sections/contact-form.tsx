"use client";

// Pure client form — receives all translated strings as props.
// No useTranslations, no NextIntlClientProvider needed.
// Lazy-loaded via contact-form-lazy.tsx to split Zod+RHF into a separate chunk.
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast, Toaster } from "sonner";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional(),
  service: z.string().min(1),
  message: z.string().min(10),
});

type FormData = z.infer<typeof schema>;

export interface ContactFormStrings {
  name: string;
  email: string;
  phone: string;
  service: string;
  servicePlaceholder: string;
  services: string[];
  messagePlaceholder: string;
  message: string;
  submit: string;
  submitting: string;
  success: string;
  error: string;
}

interface ContactFormProps {
  strings: ContactFormStrings;
}

const inputClass =
  "w-full bg-surface-2 border border-border rounded-lg px-4 py-3 text-sm text-fg placeholder:text-muted focus:outline-none focus:ring-1 focus:ring-accent/50 focus:border-accent/50 transition-colors";

export function ContactForm({ strings: s }: ContactFormProps) {
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
      toast.success(s.success);
      reset();
    } else {
      toast.error(s.error);
    }
  }

  return (
    <>
      <Toaster
        theme="dark"
        toastOptions={{
          style: {
            background: "#111827",
            border: "1px solid #1f2937",
            color: "#f8fafc",
          },
        }}
      />
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4" noValidate>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <input
              {...register("name")}
              placeholder={s.name}
              className={inputClass}
              aria-label={s.name}
            />
            {errors.name && (
              <p className="mt-1 text-xs text-red-400">{errors.name.message}</p>
            )}
          </div>
          <div>
            <input
              {...register("email")}
              type="email"
              placeholder={s.email}
              className={inputClass}
              aria-label={s.email}
            />
            {errors.email && (
              <p className="mt-1 text-xs text-red-400">{errors.email.message}</p>
            )}
          </div>
        </div>

        <input
          {...register("phone")}
          type="tel"
          placeholder={s.phone}
          className={inputClass}
          aria-label={s.phone}
        />

        <div>
          <select
            {...register("service")}
            className={inputClass}
            defaultValue=""
            aria-label={s.service}
          >
            <option value="" disabled>
              {s.servicePlaceholder}
            </option>
            {s.services.map((svc) => (
              <option key={svc} value={svc}>
                {svc}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-xs text-red-400">{errors.service.message}</p>
          )}
        </div>

        <div>
          <textarea
            {...register("message")}
            rows={5}
            placeholder={s.messagePlaceholder}
            className={`${inputClass} resize-none`}
            aria-label={s.message}
          />
          {errors.message && (
            <p className="mt-1 text-xs text-red-400">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full py-3.5 bg-accent text-bg font-semibold text-sm rounded-lg hover:bg-accent-light transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? s.submitting : s.submit}
        </button>
      </form>
    </>
  );
}

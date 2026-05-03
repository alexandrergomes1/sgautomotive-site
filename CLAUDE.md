@AGENTS.md

## Stack

| Layer | Tech | Version |
|---|---|---|
| Framework | Next.js App Router | 16.2.4 |
| Runtime | React | 19 |
| Language | TypeScript (strict) | 5 |
| Styles | Tailwind CSS v4 (`@theme` inline, no `tailwind.config.ts`) | 4 |
| Animations | Framer Motion | 12 |
| i18n | next-intl | 4 |
| Forms | react-hook-form + Zod + @hookform/resolvers | 7 / 4 / 5 |
| Email | Resend (via `RESEND_API_KEY` env var) | — |
| Icons | lucide-react | 1 |
| Toast | sonner | 2 |
| Package manager | pnpm | — |

## Architecture

- **Single-page, anchor navigation.** All sections live on `app/[locale]/page.tsx`.
- All sub-routes (`/veiculos`, `/importacao`, `/servicos`, `/sobre`, `/contato`) redirect to `/${locale}`.
- Middleware lives in `proxy.ts` (Next.js 16 renamed `middleware.ts` → `proxy.ts`).
- Dictionaries: `dictionaries/es.json` (primary) · `dictionaries/en.json`.
- i18n routing: `i18n/routing.ts` · config: `i18n/request.ts`.
- Vehicle mock data: `data/cars.ts`.
- JSON-LD schema builders: `lib/schema-org.ts`.
- AI-SEO: `public/llms.txt`.

## Anchor map

| Nav label | `href` | Section `id` |
|---|---|---|
| Inicio | `#inicio` | hero.tsx |
| Vehículos | `#veiculos` | catalog-preview.tsx |
| Importación | `#importacao` | importacao-section.tsx |
| Servicios | `#servicos` | services.tsx |
| Nosotros | `#sobre` | about-section.tsx |
| Contacto | `#contato` | contact-section.tsx |

Other section IDs on page: `#planos`, `#como-funciona`, `#diferenciais`, `#faq`

## Design tokens (globals.css @theme)

| Token | Value | Usage |
|---|---|---|
| `--color-bg` | `#0b0f14` | Page background |
| `--color-surface` | `#111827` | Cards, alternating sections |
| `--color-fg` | `#f8fafc` | Primary text |
| `--color-muted` | `#6b7280` | Secondary text |
| `--color-accent` | `#c8a96a` | Brand gold — CTAs, highlights |
| `--color-trust` | `#1f7a5a` | WhatsApp green |
| `--color-border` | `#1f2937` | Borders |

## Contacts (production)

| Channel | Value |
|---|---|
| WhatsApp (`wa.me/`) | `34662625953` |
| WhatsApp display | `+34 662 62 59 53` |
| Email | `sgautomotive.es@gmail.com` |

## Environment variables

| Var | Required | Purpose |
|---|---|---|
| `RESEND_API_KEY` | Prod only | Delivers contact form emails |

Without `RESEND_API_KEY`, the contact form logs submissions to console (dev fallback).

## Framer Motion TypeScript note

Use `ease: "easeOut" as const` (not `ease: "easeOut"`) to satisfy `Easing` strict type.

## Logo

- `public/logo-dark.png` — white logo, for dark backgrounds (`variant="light"`)
- `public/logo-light.png` — black logo, for light backgrounds (`variant="dark"`)
- Component: `components/logo.tsx` — wraps `next/image`.

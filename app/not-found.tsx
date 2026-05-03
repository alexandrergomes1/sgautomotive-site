import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-4 text-center">
      <p className="text-accent text-xs font-semibold uppercase tracking-widest mb-4">404</p>
      <h1 className="text-3xl sm:text-4xl font-bold text-fg mb-4">
        Página no encontrada
      </h1>
      <p className="text-muted max-w-sm mb-8 leading-relaxed">
        La página que buscas no existe o ha sido movida.
      </p>
      <Link
        href="/es"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-bg font-semibold text-sm hover:bg-accent-light transition-colors"
      >
        Volver al inicio
      </Link>
    </div>
  );
}

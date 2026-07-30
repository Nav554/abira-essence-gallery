import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowLeft, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { getProduct } from "@/data/productIndex";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/product/$kind/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.kind, params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Fragrance Unavailable | Abira Fragrances" }, { name: "robots", content: "noindex" }] };
    }
    const p = loaderData.product;
    const title = `${p.name} — ${p.brandName} | Abira Fragrances`;
    const description = p.description.slice(0, 155);
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  errorComponent: ({ error }) => (
    <div role="alert" className="mx-auto max-w-3xl px-6 py-32 text-center text-muted-foreground">
      {error.message}
    </div>
  ),
  notFoundComponent: () => (
    <div className="mx-auto max-w-3xl px-6 py-32 text-center">
      <h1 className="font-serif text-4xl text-gold-gradient">Fragrance not found</h1>
      <p className="mt-4 text-muted-foreground">This bottle isn't on our shelf. Browse the collection instead.</p>
      <Link to="/collection" className="mt-8 inline-flex rounded-full border border-primary/50 px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
        Back to Collection
      </Link>
    </div>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();

  const backTo =
    p.kind === "branded" ? "/branded" : p.kind === "celebrity" ? "/celebrity" : "/collection";
  const backLabel =
    p.kind === "branded" ? "Branded" : p.kind === "celebrity" ? "Celebrity" : "Inspired Collection";

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:px-8">
      <Link
        to={backTo}
        className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
      >
        <ArrowLeft className="h-3.5 w-3.5" /> Back to {backLabel}
      </Link>

      <div className="mt-8 grid gap-10 md:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl glass p-4"
        >
          <img
            src={p.image}
            alt={`${p.brandName} ${p.name} perfume bottle`}
            className="h-[420px] w-full rounded-2xl object-contain md:h-[520px]"
            onError={(e) => {
              const img = e.currentTarget;
              if (!img.src.endsWith("/placeholder.svg")) img.src = "/placeholder.svg";
            }}
          />
        </motion.div>

        <div>
          <Reveal>
            <p className="text-[10px] uppercase tracking-[0.3em] text-primary">{p.brandName}</p>
            <h1 className="mt-2 font-serif text-4xl leading-tight text-gold-gradient md:text-5xl">
              {p.name}
            </h1>
            {p.inspiration && (
              <p className="mt-3 text-sm text-muted-foreground">
                {p.kind === "celebrity" ? "Associated with" : "Inspired by"}{" "}
                <span className="text-foreground/90">{p.inspiration}</span>
              </p>
            )}
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

            <div className="mt-6 inline-flex items-center gap-2 rounded-2xl border border-primary/40 bg-primary/[0.06] px-5 py-3 backdrop-blur-xl">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-serif text-lg text-foreground">{p.price}</span>
            </div>
          </Reveal>

          {p.notes && (
            <Reveal delay={0.08}>
              <div className="mt-8 space-y-3">
                <NoteRow label="Top" notes={p.notes.top} />
                <NoteRow label="Heart" notes={p.notes.heart} />
                <NoteRow label="Base" notes={p.notes.base} />
              </div>
            </Reveal>
          )}

          {p.flatNotes && p.flatNotes.length > 0 && (
            <Reveal delay={0.08}>
              <div className="mt-8">
                <NoteRow label={p.kind === "celebrity" ? "Scents" : "Notes"} notes={p.flatNotes} />
              </div>
            </Reveal>
          )}

          <Reveal delay={0.14}>
            <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-2 text-xs sm:grid-cols-2">
              <Spec label="Fragrance Family" value={p.family} />
              <Spec label="Scent Profile" value={p.scentProfile} />
              <Spec label="Concentration" value={p.concentration} />
              <Spec label="Year" value={p.year ? String(p.year) : undefined} />
              <Spec label="Nose" value={p.perfumer} />
              <Spec label="Gender" value={p.gender} />
              <Spec label="Best Season" value={p.season} />
              <Spec label="Best Time to Wear" value={p.bestTime} />
              <Spec label="Longevity" value={p.longevity} />
              <Spec label="Projection" value={p.projection} />
              <Spec label="Performance" value={p.longevity && p.projection ? `${p.longevity} · ${p.projection}` : undefined} />
              <Spec label="Occasion" value={p.occasion} />
            </dl>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(p.whatsappText)}`}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground gold-glow transition-transform hover:scale-[1.03]"
              >
                <MessageCircle className="h-4 w-4" /> Inquire on WhatsApp
              </a>
              <a
                href={`tel:${brand.phoneIntl}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value?: string }) {
  if (!value) return null;
  return (
    <div className="flex items-baseline justify-between gap-4 border-b border-primary/10 py-2">
      <dt className="text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm text-foreground/90">{value}</dd>
    </div>
  );
}

function NoteRow({ label, notes }: { label: string; notes: string[] }) {
  if (!notes.length) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 w-16 shrink-0 text-[9px] uppercase tracking-[0.3em] text-primary/80">
        {label}
      </span>
      <div className="flex flex-wrap gap-1.5">
        {notes.map((n) => (
          <span
            key={`${label}-${n}`}
            className="rounded-full border border-primary/15 bg-primary/[0.04] px-2.5 py-0.5 text-[10px] text-foreground/85"
          >
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, MessageCircle, BadgeCheck, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { brandedPerfumes, type BrandedPerfume } from "@/data/branded";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/branded")({
  head: () => ({
    meta: [
      { title: "Branded Perfumes — Gucci, Dior, Tom Ford & More | Abira" },
      { name: "description", content: "Authentic branded perfumes at Abira Fragrances Dubai — Gucci Flora, Dior Sauvage, Tom Ford, Rasasi Hawas, Louis Vuitton, Amouage and more, with full Fragrantica-sourced note pyramids." },
      { property: "og:title", content: "Branded Perfumes at Abira Fragrances" },
      { property: "og:description", content: "Curated designer fragrances — Gucci, Dior, Tom Ford, Louis Vuitton, Amouage, Rasasi, D&G." },
    ],
    links: [{ rel: "canonical", href: "/branded" }],
  }),
  component: Branded,
});

const CATEGORIES: Array<BrandedPerfume["category"] | "All"> = [
  "All",
  "Oriental",
  "Woody",
  "Fresh",
  "Floral",
  "Gourmand",
  "Leather",
];

function allNotes(p: BrandedPerfume) {
  return [...p.notes.top, ...p.notes.heart, ...p.notes.base];
}

function Branded() {
  const [q, setQ] = useState("");
  const [category, setCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const houses = useMemo(
    () => ["All", ...Array.from(new Set(brandedPerfumes.map((p) => p.house)))],
    []
  );
  const [house, setHouse] = useState<string>("All");

  const filtered = useMemo(() => {
    return brandedPerfumes.filter((p) => {
      const mh = house === "All" || p.house === house;
      const mc = category === "All" || p.category === category;
      const query = q.trim().toLowerCase();
      const mq =
        !query ||
        p.name.toLowerCase().includes(query) ||
        p.house.toLowerCase().includes(query) ||
        p.family.toLowerCase().includes(query) ||
        allNotes(p).some((n) => n.toLowerCase().includes(query));
      return mh && mc && mq;
    });
  }, [q, house, category]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <SectionTitle
        eyebrow="Branded Perfumes"
        title="The Designer House"
        subtitle="Curated designer fragrances — every note pyramid transcribed from the official Fragrantica listing, so what you smell is exactly what the perfumer intended."
      />

      <Reveal>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-primary">
            <BadgeCheck className="h-3.5 w-3.5" /> 100% Authentic · Sealed
          </span>
          <span className="glass inline-flex items-center gap-2 rounded-full px-5 py-2 text-[10px] uppercase tracking-[0.3em] text-primary">
            <Sparkles className="h-3.5 w-3.5" /> Notes verified on Fragrantica
          </span>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search name, house, notes…"
              className="w-full rounded-full border border-primary/25 bg-background/50 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 backdrop-blur-lg outline-none transition-all focus:border-primary/60 focus:gold-glow"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {houses.map((h) => (
              <button
                key={h}
                onClick={() => setHouse(h)}
                className={`rounded-full px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition-all ${
                  house === h
                    ? "bg-gold-gradient text-primary-foreground gold-glow"
                    : "border border-primary/25 text-muted-foreground hover:text-primary"
                }`}
              >
                {h}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-4 flex flex-wrap justify-center gap-2 md:justify-start">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setCategory(c)}
              className={`rounded-full px-3.5 py-1.5 text-[10px] uppercase tracking-[0.25em] transition-all ${
                category === c
                  ? "border border-primary/60 bg-primary/10 text-primary"
                  : "border border-primary/15 text-muted-foreground/80 hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: (i % 6) * 0.06, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass transition-shadow duration-500 hover:gold-glow"
          >
            <div className="absolute right-4 top-4 z-10 rounded-full border border-primary/40 bg-background/70 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-primary backdrop-blur">
              {p.concentration}
            </div>
            <Link
              to="/product/$kind/$id"
              params={{ kind: "branded", id: p.id }}
              className="relative block aspect-[4/5] w-full overflow-hidden"
            >
              <img
                src={p.image}
                alt={`${p.house} ${p.name} luxury perfume bottle`}
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.src.endsWith("/placeholder.svg")) img.src = "/placeholder.svg";
                }}
                className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-110"
              />
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: "linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.85) 100%)" }}
              />
              <div className="absolute inset-x-0 bottom-0 px-6 pb-5">
                <p className="text-[10px] uppercase tracking-[0.3em] text-primary">
                  {p.house}{p.year ? ` · ${p.year}` : ""}
                </p>
                <h3 className="mt-1 font-serif text-2xl leading-tight text-foreground drop-shadow-md">
                  {p.name}
                </h3>
              </div>
            </Link>


            <div className="p-6">
              <div className="flex flex-wrap items-center gap-2 text-[10px] uppercase tracking-[0.25em]">
                <span className="rounded-full border border-primary/40 bg-primary/5 px-2.5 py-0.5 text-primary">
                  {p.category}
                </span>
                <span className="text-muted-foreground/80">{p.family}</span>
                <span className="text-muted-foreground/60">·</span>
                <span className="text-muted-foreground/80">{p.gender}</span>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-muted-foreground/90">
                {p.description}
              </p>

              <div className="mt-5 space-y-3">
                <NoteRow label="Top" notes={p.notes.top} />
                <NoteRow label="Heart" notes={p.notes.heart} />
                <NoteRow label="Base" notes={p.notes.base} />
              </div>

              {p.perfumer && (
                <p className="mt-4 text-[10px] uppercase tracking-[0.25em] text-muted-foreground/60">
                  Nose · <span className="text-primary/80">{p.perfumer}</span>
                </p>
              )}

              <a
                href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                  `Hello Abira, I'd like to inquire about ${p.house} ${p.name}.`
                )}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 py-2.5 text-xs uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:gold-glow"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Inquire on WhatsApp
              </a>
              <Link
                to="/product/$kind/$id"
                params={{ kind: "branded", id: p.id }}
                className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
              >
                View Details
              </Link>

            </div>
          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">
          No perfumes match your search.
        </div>
      )}
    </div>
  );
}

function NoteRow({ label, notes }: { label: string; notes: string[] }) {
  if (!notes.length) return null;
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 w-14 shrink-0 text-[9px] uppercase tracking-[0.3em] text-primary/80">
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

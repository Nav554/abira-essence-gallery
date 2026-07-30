import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, MessageCircle } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { products } from "@/data/catalog";
import { brand } from "@/data/brand";
import bottleAsset from "@/assets/abira-inspired-bottle.png.asset.json";

export const Route = createFileRoute("/collection")({
  head: () => ({
    meta: [
      { title: "Inspired Collection — Abira Fragrance Dubai" },
      { name: "description", content: "Browse the Abira Fragrance inspired collection — 30+ premium perfumes crafted in Dubai. Starting from AED 35 to AED 100." },
      { property: "og:title", content: "Inspired Collection — Abira Fragrance Dubai" },
      { property: "og:description", content: "30+ luxury inspired perfumes. Starting from AED 35 to AED 100." },
    ],
    links: [{ rel: "canonical", href: "/collection" }],
  }),
  component: Collection,
});

const genders = ["All", "Men", "Women", "Unisex"] as const;

function Collection() {
  const [q, setQ] = useState("");
  const [gender, setGender] = useState<(typeof genders)[number]>("All");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchGender = gender === "All" || p.gender === gender;
      const matchQ =
        !q ||
        p.inspiredBy.toLowerCase().includes(q.toLowerCase()) ||
        p.family.toLowerCase().includes(q.toLowerCase()) ||
        p.notes.some((n) => n.toLowerCase().includes(q.toLowerCase()));
      return matchGender && matchQ;
    });
  }, [q, gender]);

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 md:px-8">
      <SectionTitle
        eyebrow="Inspired Collection"
        title="The Abira Library"
        subtitle="Not affiliated with the original brands. Every fragrance is our tribute — inspired, never claimed."
      />

      <Reveal>
        <div className="mt-8 inline-flex w-full items-center justify-center">
          <div className="glass rounded-full px-6 py-2 text-xs uppercase tracking-[0.3em] text-primary">
            <Sparkles className="mr-1.5 inline h-3 w-3" /> {brand.priceRange}
          </div>
        </div>
      </Reveal>

      {/* Controls */}
      <Reveal delay={0.1}>
        <div className="mt-10 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="relative w-full md:max-w-sm">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search inspired name, family, notes…"
              className="w-full rounded-full border border-primary/25 bg-background/50 py-3 pl-11 pr-4 text-sm text-foreground placeholder:text-muted-foreground/70 backdrop-blur-lg outline-none transition-all focus:border-primary/60 focus:gold-glow"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            {genders.map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`rounded-full px-5 py-2 text-xs uppercase tracking-[0.2em] transition-all ${
                  gender === g
                    ? "bg-gold-gradient text-primary-foreground gold-glow"
                    : "border border-primary/25 text-muted-foreground hover:text-primary"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Grid */}
      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 6) * 0.05 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:gold-glow"
          >
            <div className="absolute right-4 top-4 rounded-full border border-primary/40 bg-background/60 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-primary">
              Inspired
            </div>
            <Link to="/product/$kind/$id" params={{ kind: "inspired", id: p.id }} className="block">
              <div className="mb-6 flex justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-background/40 to-background/80">
                <img
                  src={bottleAsset.url}
                  alt={`Abira fragrance inspired by ${p.inspiredBy}`}
                  loading="lazy"
                  className="h-64 w-auto object-contain transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Inspired By</p>
              <h3 className="mt-1 font-serif text-2xl leading-tight text-foreground">
                {p.inspiredBy}
              </h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.family}</p>
            </Link>


            <dl className="mt-5 grid grid-cols-2 gap-y-2 text-xs">
              <Meta label="Gender" value={p.gender} />
              <Meta label="Longevity" value={p.longevity} />
              <Meta label="Projection" value={p.projection} />
              <Meta label="Occasion" value={p.occasion} />
              <Meta label="Season" value={p.season} />
            </dl>

            <div className="mt-4 flex flex-wrap gap-1.5">
              {p.notes.map((n) => (
                <span key={n} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] text-primary/90">
                  {n}
                </span>
              ))}
            </div>

            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                `Hello Abira, I'd like to inquire about the fragrance inspired by ${p.inspiredBy}.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 py-2.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Inquire on WhatsApp
            </a>
            <Link
              to="/product/$kind/$id"
              params={{ kind: "inspired", id: p.id }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
            >
              View Details
            </Link>

          </motion.article>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mt-16 text-center text-muted-foreground">
          No fragrances match your search. Try another note.
        </div>
      )}
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <>
      <dt className="text-muted-foreground">{label}</dt>
      <dd className="text-right text-foreground/90">{value}</dd>
    </>
  );
}

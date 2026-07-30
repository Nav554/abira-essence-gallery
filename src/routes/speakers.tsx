import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Speaker as SpeakerIcon, MessageCircle } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { speakers } from "@/data/catalog";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/speakers")({
  head: () => ({
    meta: [
      { title: "Bluetooth Speakers — JBL, Haino Teko & Calus | Abira" },
      { name: "description", content: "Explore our curated selection of premium bluetooth speakers from JBL, Haino Teko and Calus. Inquire on WhatsApp for details." },
      { property: "og:title", content: "Bluetooth Speakers at Abira" },
      { property: "og:description", content: "JBL, Haino Teko and Calus — premium bluetooth speakers on display." },
    ],
    links: [{ rel: "canonical", href: "/speakers" }],
  }),
  component: Speakers,
});

function Speakers() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="On Display"
        title="Premium Bluetooth Speakers"
        subtitle="A curated line-up of JBL, Haino Teko and Calus — for display only. Contact us to inquire."
      />

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {speakers.map((s, i) => (
          <motion.article
            key={s.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group relative overflow-hidden rounded-3xl glass p-6 transition-all duration-500 hover:-translate-y-1 hover:gold-glow"
          >
            <div className="absolute right-4 top-4 rounded-full border border-primary/40 bg-background/60 px-3 py-1 text-[9px] uppercase tracking-[0.25em] text-primary">
              Display Only
            </div>
            <div className="relative mb-4 h-48 overflow-hidden rounded-2xl bg-onyx/60">
              <img
                src={s.image}
                alt={`${s.brand} ${s.model} bluetooth speaker`}
                loading="lazy"
                onError={(e) => {
                  const img = e.currentTarget;
                  if (!img.src.endsWith("/placeholder.svg")) img.src = "/placeholder.svg";
                }}
                className="h-full w-full object-contain p-3 transition-transform duration-700 group-hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)" }} />
              <SpeakerIcon className="absolute right-3 top-3 h-5 w-5 text-primary/80" strokeWidth={1.4} />
            </div>

            <p className="text-[10px] uppercase tracking-[0.35em] text-primary">{s.brand}</p>
            <h3 className="mt-1 font-serif text-2xl text-foreground">{s.model}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{s.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {s.features.map((f) => (
                <span key={f} className="rounded-full border border-primary/20 bg-primary/5 px-2.5 py-0.5 text-[10px] text-primary/90">
                  {f}
                </span>
              ))}
            </div>
            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                `Hello Abira, I'd like to inquire about the ${s.brand} ${s.model} speaker.`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full border border-primary/40 py-2.5 text-xs uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Inquire
            </a>
          </motion.article>
        ))}
      </div>
    </div>
  );
}

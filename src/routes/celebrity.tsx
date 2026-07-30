import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { MessageCircle, Star, Sparkles } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { brand } from "@/data/brand";
import { celebs } from "@/data/celebrities";
const bottleImage = "/images/abira-hero-bottle.png";


export const Route = createFileRoute("/celebrity")({
  head: () => ({
    meta: [
      { title: "Celebrity Perfumes — Fragrances Inspired by the Stars | Abira" },
      { name: "description", content: "Explore inspired versions of fragrances popularly associated with celebrities like Shah Rukh Khan and Alia Bhatt — hand-blended by Abira Fragrances in Dubai." },
      { property: "og:title", content: "Celebrity Perfumes | Abira Fragrances" },
      { property: "og:description", content: "Inspired versions of fragrances popularly associated with your favourite celebrities." },
    ],
    links: [{ rel: "canonical", href: "/celebrity" }],
  }),
  component: CelebrityPerfumes,
});




function CelebrityPerfumes() {
  return (
    <div id="celebrity-perfumes" className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="Worn by the Stars"
        title="Celebrity Perfumes"
        subtitle="Fragrances popularly associated with icons of stage and screen — reimagined as Abira inspired blends, hand-poured in Dubai."
      />

      <div className="mt-14 grid gap-8 md:grid-cols-2">
        {celebs.map((c, i) => (
          <motion.article
            key={c.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -6 }}
            className="group relative overflow-hidden rounded-3xl glass p-8 transition-shadow duration-500 hover:gold-glow"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
            <Link
              to="/product/$kind/$id"
              params={{ kind: "celebrity", id: c.id }}
              className="flex items-start gap-6"
            >
              <div className="relative h-32 w-24 shrink-0 overflow-hidden rounded-2xl border border-primary/30 bg-gradient-to-b from-primary/5 to-background/60">
                <img
                  src={bottleImage}
                  alt={`Abira inspired bottle for ${c.name}`}
                  className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="flex-1">
                <div className="mb-2 flex items-center gap-2">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-[10px] uppercase tracking-[0.3em] text-primary">
                    Celebrity Pick
                  </span>
                </div>
                <h3 className="font-serif text-3xl text-gold-gradient">{c.name}</h3>
                {c.heading && (
                  <p className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                    {c.heading}
                  </p>
                )}
              </div>
            </Link>


            <ul className="mt-6 space-y-2">
              {c.perfumes.map((p) => (
                <li
                  key={p}
                  className="flex items-center gap-3 rounded-xl border border-primary/15 bg-primary/[0.04] px-4 py-2.5"
                >
                  <Sparkles className="h-3.5 w-3.5 text-primary" />
                  <span className="font-serif text-lg text-foreground">{p}</span>
                </li>
              ))}
            </ul>

            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              {c.description}
            </p>

            <a
              href={`https://wa.me/${brand.whatsapp}?text=${encodeURIComponent(
                `Hello Abira, I'd like the inspired version associated with ${c.name} (${c.perfumes.join(" + ")}).`
              )}`}
              target="_blank"
              rel="noreferrer"
              className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold-gradient px-6 py-3 text-xs uppercase tracking-[0.2em] text-primary-foreground gold-glow transition-transform hover:scale-[1.02]"
            >
              <MessageCircle className="h-3.5 w-3.5" /> Shop Inspired Version
            </a>
            <Link
              to="/product/$kind/$id"
              params={{ kind: "celebrity", id: c.id }}
              className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-full py-2 text-[10px] uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
            >
              View Details
            </Link>

          </motion.article>
        ))}
      </div>

      <Reveal delay={0.2}>
        <p className="mx-auto mt-12 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground/70">
          Celebrity fragrance references are provided for inspiration only.
          ABIRA FRAGRANCE is not affiliated with or endorsed by any celebrity
          or luxury fragrance brand.
        </p>
      </Reveal>
    </div>
  );
}

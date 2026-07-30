import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionTitle } from "@/components/Reveal";
const bottleImage = "/images/abira-hero-bottle.png";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Abira Fragrance — Dubai's Luxury Inspired Perfume House" },
      { name: "description", content: "Discover Abira Fragrance — a Dubai-based luxury perfume brand delivering affordable, inspired fragrances crafted for everyday elegance." },
      { property: "og:title", content: "About Abira Fragrance — Dubai's Luxury Inspired Perfume House" },
      { property: "og:description", content: "Dubai-based fragrance brand delivering luxury-inspired scents without luxury pricing." },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

function About() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16 md:px-8">
      <SectionTitle eyebrow="Our Story" title="The House of Abira" />
      <div className="mt-16 grid gap-16 md:grid-cols-2 md:items-center">
        <Reveal>
          <div className="relative mx-auto h-[480px] w-72">
            <div className="absolute inset-0 -z-10 rounded-full blur-3xl"
                 style={{ background: "radial-gradient(circle, oklch(0.82 0.14 85 / 0.3), transparent 65%)" }} />
            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-primary/30 animate-float gold-glow">
              <img
                src={bottleImage}
                alt="Abira Fragrance premium inspired perfume bottle"
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Born in the heart of Dubai — the perfume capital of the world —
              <span className="text-primary"> Abira Fragrance</span> was founded on a
              simple belief: luxury should be lived, not saved for occasions.
            </p>
            <p>
              We craft <span className="text-foreground">premium inspired perfumes</span>
              that echo the world's most iconic fragrances, blended with concentrated
              oils and elegant notes that last from dawn to midnight.
            </p>
            <p>
              Every bottle is a quiet nod to craftsmanship — affordable enough
              for daily wear, yet refined enough to become your signature.
            </p>
            <div className="mt-8 rounded-2xl glass p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-primary">Our Mission</p>
              <p className="mt-3 font-serif text-2xl text-gold-gradient">
                "Deliver luxury-inspired fragrances without luxury pricing."
              </p>
            </div>
          </div>
        </Reveal>
      </div>

      <div className="mt-24 grid gap-6 md:grid-cols-3">
        {[
          { title: "Dubai Based", text: "Rooted in the perfume capital, inspired by its heritage." },
          { title: "Premium Inspired", text: "Every scent pays tribute to the great houses of perfumery." },
          { title: "Everyday Elegance", text: "Crafted to accompany you from morning meetings to moonlit dinners." },
        ].map((it, i) => (
          <Reveal key={it.title} delay={i * 0.1}>
            <div className="glass h-full rounded-3xl p-8">
              <h3 className="font-serif text-2xl text-gold-gradient">{it.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{it.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

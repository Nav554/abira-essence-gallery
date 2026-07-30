import { createFileRoute } from "@tanstack/react-router";
import { Clock, Gem, Sparkles, Package, Gift, MapPin } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";

export const Route = createFileRoute("/why-abira")({
  head: () => ({
    meta: [
      { title: "Why Abira — Luxury Inspired Perfumes That Last" },
      { name: "description", content: "Long-lasting projection, affordable luxury, premium packaging, and a Dubai-crafted collection. Discover why Abira Fragrance is the choice for elegance." },
      { property: "og:title", content: "Why Abira Fragrance" },
      { property: "og:description", content: "Long-lasting, affordable luxury inspired perfumes crafted in Dubai." },
    ],
    links: [{ rel: "canonical", href: "/why-abira" }],
  }),
  component: WhyAbira,
});

const cards = [
  { icon: Clock, title: "Long Lasting Fragrance", text: "Concentrated oils deliver 8–12 hours of projection, from morning to midnight." },
  { icon: Gem, title: "Affordable Luxury", text: "Iconic scent profiles at accessible prices — luxury without compromise." },
  { icon: Sparkles, title: "Inspired Collection", text: "Tributes to the world's most beloved perfume houses, crafted with respect." },
  { icon: Package, title: "Premium Packaging", text: "Elegant bottles and finishes worthy of your dressing table — or a gift." },
  { icon: Gift, title: "Perfect Gift", text: "A memorable, thoughtful gesture — for birthdays, weddings, or just because." },
  { icon: MapPin, title: "Dubai Based Brand", text: "Blended in the perfume capital of the world, delivered with Emirati hospitality." },
];

function WhyAbira() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="Why Abira"
        title="Elegance, Engineered"
        subtitle="Six reasons Abira has become a signature choice for those who value refinement."
      />
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="group relative h-full overflow-hidden rounded-3xl glass p-8 transition-all duration-500 hover:-translate-y-1 hover:gold-glow">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <div className="grid h-14 w-14 place-items-center rounded-2xl bg-primary/10 text-primary transition-transform group-hover:scale-110">
                <c.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-6 font-serif text-2xl text-gold-gradient">{c.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

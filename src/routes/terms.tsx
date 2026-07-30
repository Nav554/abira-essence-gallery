import { createFileRoute } from "@tanstack/react-router";
import { Reveal, SectionTitle } from "@/components/Reveal";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Abira Fragrance" },
      { name: "description", content: "Terms and conditions for browsing the Abira Fragrance website and inquiring about our inspired perfumes." },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-16 md:px-8">
      <SectionTitle eyebrow="Legal" title="Terms & Conditions" />
      <Reveal>
        <div className="prose prose-invert mt-12 max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Last updated: {new Date().getFullYear()}</p>
          <h3 className="font-serif text-xl text-primary">Inspired, Not Affiliated</h3>
          <p>
            All fragrances listed as "Inspired By" are original blends crafted
            by Abira Fragrance. We are not affiliated with, endorsed by, or
            connected to any of the referenced perfume houses. All trademarks
            remain the property of their respective owners; we reference these
            names solely to describe the olfactory inspiration.
          </p>
          <h3 className="font-serif text-xl text-primary">No Online Sales</h3>
          <p>
            This website is a brand showcase. Prices displayed as "Starting
            from AED 35 to AED 100" are indicative. All orders and payments are
            arranged directly through WhatsApp, phone or in person at our
            Dubai location.
          </p>
          <h3 className="font-serif text-xl text-primary">Content Use</h3>
          <p>
            All content, imagery and text on this website are the property of
            Abira Fragrance and may not be reproduced without written consent.
          </p>
          <h3 className="font-serif text-xl text-primary">Liability</h3>
          <p>
            Fragrance products may cause allergic reactions in sensitive
            individuals. Please patch-test before regular use. Abira Fragrance
            is not liable for individual reactions.
          </p>
        </div>
      </Reveal>
    </div>
  );
}

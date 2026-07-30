import { createFileRoute } from "@tanstack/react-router";
import { MessageCircle, Phone, Mail, Instagram, MapPin } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { brand } from "@/data/brand";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Abira Fragrance — Dubai" },
      { name: "description", content: "Reach Abira Fragrance via WhatsApp, phone, Instagram or email. Located in Ayal Nasir, Near Saify Masjid, Dubai." },
      { property: "og:title", content: "Contact Abira Fragrance" },
      { property: "og:description", content: "WhatsApp, phone, email and Instagram — get in touch with our Dubai atelier." },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const actions = [
    { icon: MessageCircle, label: "WhatsApp", href: `https://wa.me/${brand.whatsapp}`, primary: true },
    { icon: Phone, label: "Call Now", href: `tel:${brand.phoneIntl}` },
    { icon: Instagram, label: "Instagram", href: brand.instagram },
    { icon: Mail, label: "Email", href: `mailto:${brand.email}` },
  ];
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="Get in Touch"
        title="Visit Our Atelier"
        subtitle="We'd love to help you find your signature. Reach out anytime."
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="glass h-full rounded-3xl p-8 md:p-10">
            <h3 className="font-serif text-2xl text-gold-gradient">Business Information</h3>
            <ul className="mt-8 space-y-5 text-sm">
              <Row icon={Phone} label="Phone">
                <a href={`tel:${brand.phoneIntl}`} className="hover:text-primary">{brand.phone}</a>
              </Row>
              <Row icon={Mail} label="Email">
                <a href={`mailto:${brand.email}`} className="break-all hover:text-primary">{brand.email}</a>
              </Row>
              <Row icon={Instagram} label="Instagram">
                <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                  {brand.instagramHandle}
                </a>
              </Row>
              <Row icon={MapPin} label="Location">
                <span>{brand.address}</span>
              </Row>
            </ul>

            <div className="mt-10 flex flex-wrap gap-3">
              {actions.map((a) => (
                <a
                  key={a.label}
                  href={a.href}
                  target={a.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className={`inline-flex items-center gap-2 rounded-full px-6 py-3 text-xs uppercase tracking-[0.2em] transition-all ${
                    a.primary
                      ? "bg-gold-gradient text-primary-foreground gold-glow hover:scale-[1.03]"
                      : "border border-primary/40 text-primary hover:bg-primary hover:text-primary-foreground"
                  }`}
                >
                  <a.icon className="h-4 w-4" /> {a.label}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="relative h-full min-h-[420px] overflow-hidden rounded-3xl glass p-2">
            <iframe
              title="Abira Fragrance location"
              src={brand.mapsEmbed}
              className="h-full w-full rounded-[1.4rem]"
              style={{ border: 0, minHeight: 400 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Reveal>
      </div>

      {/* FAQ */}
      <div className="mt-24">
        <SectionTitle eyebrow="Common Questions" title="Frequently Asked" />
        <div className="mx-auto mt-12 max-w-3xl space-y-4">
          {faq.map((f, i) => (
            <Reveal key={f.q} delay={i * 0.05}>
              <details className="group glass rounded-2xl px-6 py-5">
                <summary className="cursor-pointer list-none font-serif text-lg text-foreground marker:hidden">
                  <span className="mr-2 text-primary">✦</span>{f.q}
                </summary>
                <p className="mt-3 text-sm text-muted-foreground">{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}

function Row({ icon: Icon, label, children }: { icon: any; label: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-4">
      <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-primary/30 bg-primary/5 text-primary">
        <Icon className="h-4 w-4" />
      </div>
      <div className="min-w-0">
        <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">{label}</p>
        <p className="mt-1 text-foreground">{children}</p>
      </div>
    </li>
  );
}

const faq = [
  { q: "Are these original branded perfumes?", a: "No. Abira Fragrance offers premium inspired perfumes crafted as tributes to well-known fragrances. We do not claim any brand affiliation." },
  { q: "How long do the fragrances last?", a: "Most fragrances last 8–12 hours depending on skin chemistry, projection type, and application." },
  { q: "Do you deliver in Dubai?", a: "Yes. Contact us on WhatsApp for delivery options within Dubai and across the UAE." },
  { q: "What's the price range?", a: "Our collection starts from AED 35 and goes up to AED 100 depending on size and formulation." },
  { q: "Do you offer gift packaging?", a: "Yes. Every Abira bottle ships in premium packaging — perfect for gifting." },
];

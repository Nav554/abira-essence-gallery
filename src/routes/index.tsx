import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, MessageCircle, Sparkles, Award, Gem, Crown, Instagram, Phone, Star, Droplets, Wind, Hand, Shirt, Layers, Sun, Truck, PackageCheck, ShieldCheck, Headset } from "lucide-react";
import { Reveal, SectionTitle } from "@/components/Reveal";
import { Particles } from "@/components/Visuals";
import { brand } from "@/data/brand";
import { products } from "@/data/catalog";
const heroImage = "/images/abira-hero.png";
const bottleImage = "/images/abira-hero-bottle.png";
const courtyardImage = "/images/abira-courtyard.png";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Abira Fragrances — Luxury Perfumes Hand-Blended in Dubai" },
      { name: "description", content: "Hand-blended luxury perfumes from Ayal Nasir, Dubai. Oud, amber, rose and musk drawn from the world's most storied fragrances. Bottles from AED 35 to AED 100." },
      { property: "og:title", content: "Abira Fragrances — Luxury Perfumes Hand-Blended in Dubai" },
      { property: "og:description", content: "Hand-blended luxury perfumes from Ayal Nasir, Dubai. Oud, amber, rose and musk drawn from the world's most storied fragrances. Bottles from AED 35 to AED 100." },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <HeroDisclaimer />
      <ApplyLikeAPro />
      <BrandMarquee />
      <Stats />
      <Featured />
      <Philosophy />
      <ShippingStrip />
      <Quote />
      <InstagramStrip />
      <CTABanner />
    </>
  );
}

function HeroDisclaimer() {
  return (
    <section className="mx-auto max-w-4xl px-6 pb-4 md:px-8">
      <Reveal>
        <p className="rounded-2xl border border-primary/10 bg-primary/[0.03] px-6 py-4 text-center text-[11px] leading-relaxed tracking-wide text-muted-foreground/70 backdrop-blur-sm">
          Luxury-inspired fragrances by ABIRA FRAGRANCE. Brand names are used only
          for fragrance reference and comparison. ABIRA FRAGRANCE is not affiliated
          with, endorsed by, or sponsored by any designer fragrance house or celebrity.
        </p>
      </Reveal>
    </section>
  );
}

function ApplyLikeAPro() {
  const tips = [
    { icon: Droplets, title: "Target the pulse points", text: "Neck, wrists, behind the ears and the inner elbows — warmth is what lifts the scent." },
    { icon: Gem, title: "Moisturise first", text: "Perfume grips hydrated skin. A plain, unscented lotion before spraying buys you hours." },
    { icon: Wind, title: "Spray 5–7 inches away", text: "Close enough to land, far enough to bloom into a soft, even veil." },
    { icon: Hand, title: "Never rub your wrists", text: "Rubbing crushes the top notes and shortens the life of the whole composition." },
    { icon: Sparkles, title: "Clean, dry skin only", text: "Straight out of the shower, fully dry — that's the window where it holds best." },
    { icon: Shirt, title: "Fabric with care", text: "Spray clothes only when the material is safe; silk and light fabrics can stain." },
    { icon: Layers, title: "Layer for longevity", text: "An unscented moisturiser underneath makes the drydown last noticeably longer." },
    { icon: Sun, title: "Store away from light", text: "Keep bottles out of sunlight and heat — a cool, dark shelf protects the oils." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle
        eyebrow="The Ritual"
        title="How to Apply Perfume Like a Pro"
        subtitle="Small habits that make an AED 35 bottle behave like a designer flacon."
      />
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {tips.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: (i % 4) * 0.08 }}
            whileHover={{ y: -4 }}
            className="glass h-full rounded-3xl p-6 transition-shadow hover:gold-glow"
          >
            <div className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10">
              <t.icon className="h-5 w-5 text-primary" />
            </div>
            <h3 className="mt-5 font-serif text-xl text-foreground">{t.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function ShippingStrip() {
  const items = [
    { icon: Truck, label: "Fast Dispatch" },
    { icon: PackageCheck, label: "Secure Packaging" },
    { icon: ShieldCheck, label: "Trusted Quality" },
    { icon: Headset, label: "Premium Customer Support" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 md:px-8">
      <Reveal>
        <div className="glass grid grid-cols-2 gap-5 rounded-3xl px-8 py-8 md:grid-cols-4">
          {items.map((it) => (
            <div key={it.label} className="flex items-center gap-3">
              <it.icon className="h-5 w-5 shrink-0 text-primary" />
              <span className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
                {it.label}
              </span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}


function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bottleY = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const bottleRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);
  const glowScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  const headline = ["Wear", "the", "Scent", "of", "a", "Thousand", "Dubai", "Nights."];

  return (
    <section ref={ref} className="relative isolate overflow-hidden">
      <Particles count={40} />
      <motion.div
        style={{ scale: glowScale }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 60% 40% at 50% 20%, oklch(0.82 0.14 85 / 0.22), transparent 60%)",
          }}
        />
      </motion.div>

      {/* Rotating gold ring behind the bottle */}
      <div className="pointer-events-none absolute right-[-6rem] top-1/2 hidden -translate-y-1/2 md:block">
        <div className="animate-ring h-[520px] w-[520px] rounded-full border border-primary/20"
             style={{ boxShadow: "inset 0 0 80px oklch(0.82 0.14 85 / 0.08)" }} />
      </div>

      <div className="mx-auto grid min-h-[86vh] max-w-7xl grid-cols-1 items-center gap-10 px-6 py-16 md:grid-cols-2 md:px-8">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-8 inline-flex items-center gap-4 rounded-2xl border border-primary/40 bg-gradient-to-br from-primary/15 via-primary/5 to-transparent px-5 py-3 backdrop-blur-xl animate-pulse-gold"
          >
            <div className="relative">
              <Sparkles className="h-5 w-5 text-primary" />
              <motion.span
                className="absolute inset-0 rounded-full"
                animate={{ opacity: [0.2, 0.6, 0.2] }}
                transition={{ duration: 2.4, repeat: Infinity }}
                style={{ boxShadow: "0 0 22px oklch(0.82 0.14 85 / 0.7)" }}
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-[9px] uppercase tracking-[0.35em] text-primary/80">Bottles from</span>
              <span className="font-serif text-2xl">
                <span className="text-shimmer">AED 35</span>{" "}
                <span className="text-sm text-muted-foreground">to</span>{" "}
                <span className="text-shimmer">AED 100</span>
              </span>
            </div>
          </motion.div>

          <h1 className="font-serif text-5xl leading-[1.05] tracking-tight md:text-7xl">
            {headline.map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 28, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 0.85, delay: 0.15 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className={`mr-3 inline-block ${
                  [0, 2, 5, 6, 7].includes(i) ? "text-gold-gradient" : "text-foreground/90"
                }`}
              >
                {word}
              </motion.span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.9 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Poured by hand a few doors down from the Gold Souk — where oud is
            weighed like jewellery and every accord is mixed to order. Two
            sprays before you leave, and Dubai walks with you until sunrise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 1.05 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              to="/collection"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gold-gradient px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary-foreground gold-glow transition-transform hover:scale-[1.04]"
            >
              <span className="relative z-10">Smell the Collection</span>
              <ArrowRight className="relative z-10 h-4 w-4 transition-transform group-hover:translate-x-1" />
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/45 to-transparent transition-transform duration-700 group-hover:translate-x-full"
              />
            </Link>
            <a
              href={`https://wa.me/${brand.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3.5 text-sm font-medium uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.4 }}
            className="mt-10 flex items-center gap-4 text-xs text-muted-foreground"
          >
            <div className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" />
              ))}
            </div>
            <span>Trusted by 2,400+ Dubai residents · Free delivery inside UAE</span>
          </motion.div>
        </div>

        <motion.div
          style={{ y: bottleY, rotate: bottleRotate }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative mx-auto aspect-[3/4] w-full max-w-md"
        >
          <div className="absolute inset-0 -z-10 rounded-[3rem] blur-3xl"
               style={{ background: "radial-gradient(circle, oklch(0.82 0.14 85 / 0.45), transparent 65%)" }} />
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ rotate: 2 }}
            className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-primary/30 animate-pulse-gold"
          >
            <img
              src={heroImage}
              alt="Abira Fragrance luxury perfume bottle with oriental gold ornament"
              className="h-full w-full object-cover"
              loading="eager"
            />
            {/* Subtle shine sweep */}
            <motion.div
              aria-hidden
              className="pointer-events-none absolute inset-y-0 -left-1/3 w-1/3"
              style={{ background: "linear-gradient(120deg, transparent 20%, oklch(1 0 0 / 0.22) 50%, transparent 80%)" }}
              animate={{ x: ["0%", "500%"] }}
              transition={{ duration: 5, repeat: Infinity, repeatDelay: 3, ease: "easeInOut" }}
            />
            <div className="pointer-events-none absolute inset-0" style={{ background: "linear-gradient(180deg, transparent 55%, rgba(0,0,0,0.55) 100%)" }} />
            <div className="absolute inset-x-0 bottom-0 flex items-center justify-between px-6 py-5">
              <span className="text-[10px] uppercase tracking-[0.3em] text-primary">Signature Edition</span>
              <span className="text-[10px] uppercase tracking-[0.3em] text-foreground/80">Dubai · UAE</span>
            </div>
          </motion.div>

          {/* Floating accent chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="glass absolute -left-4 top-10 hidden rounded-2xl px-4 py-3 md:block"
          >
            <p className="text-[9px] uppercase tracking-[0.3em] text-primary">Longevity</p>
            <p className="font-serif text-xl text-foreground">8 hrs</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.35, duration: 0.8 }}
            className="glass absolute -right-4 bottom-16 hidden rounded-2xl px-4 py-3 md:block"
          >
            <p className="text-[9px] uppercase tracking-[0.3em] text-primary">Blended</p>
            <p className="font-serif text-xl text-foreground">Ayal Nasir</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function BrandMarquee() {
  const houses = [
    "Gucci", "Dior", "Tom Ford", "Louis Vuitton", "Amouage", "Chanel",
    "YSL", "Versace", "Creed", "Giorgio Armani", "Dolce & Gabbana", "Rasasi",
  ];
  const loop = [...houses, ...houses];
  return (
    <section className="relative overflow-hidden border-y border-primary/15 bg-gradient-to-r from-transparent via-primary/[0.04] to-transparent py-6">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-24 bg-gradient-to-r from-background to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-24 bg-gradient-to-l from-background to-transparent" />
      <div className="animate-marquee flex w-max items-center gap-14 whitespace-nowrap">
        {loop.map((h, i) => (
          <span
            key={i}
            className="font-serif text-2xl italic tracking-[0.15em] text-foreground/60 transition-colors hover:text-primary md:text-3xl"
          >
            {h}
            <span className="mx-8 text-primary/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}

function Stats() {
  const items = [
    { value: "30+", label: "Inspired Fragrances" },
    { value: "8h", label: "Avg. Longevity" },
    { value: "100%", label: "Made in Dubai" },
    { value: "5★", label: "Client Rated" },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <div className="glass grid grid-cols-2 gap-6 rounded-3xl px-8 py-10 md:grid-cols-4">
        {items.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
            className="text-center"
          >
            <div className="font-serif text-4xl md:text-5xl text-gold-gradient">{s.value}</div>
            <div className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Featured() {
  const picks = products.slice(0, 6);
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <SectionTitle
        eyebrow="Signature Selection"
        title="Six You'll Reach For First"
        subtitle="A slice of the Abira shelf — each bottle tuned after a legend, poured for Dubai's climate and its late evenings."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {picks.map((p, i) => (
          <motion.div
            key={p.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            whileHover={{ y: -8 }}
          >
            <Link
              to="/product/$kind/$id"
              params={{ kind: "inspired", id: p.id }}
              className="group relative block overflow-hidden rounded-3xl glass p-6 transition-shadow duration-500 hover:gold-glow"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
              <div className="mb-4 flex justify-center">
                <motion.div
                  whileHover={{ rotate: [0, -2, 2, 0] }}
                  transition={{ duration: 0.6 }}
                  className="relative h-60 w-44 overflow-hidden rounded-2xl bg-gradient-to-b from-primary/5 to-background/60"
                >
                  <img src={bottleImage} alt={`Abira bottle inspired by ${p.inspiredBy}`} className="h-full w-full object-contain p-2 transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                </motion.div>
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-primary">Inspired By</p>
              <h3 className="mt-1 font-serif text-2xl text-foreground">{p.inspiredBy}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.family} · {p.gender}</p>
            </Link>

          </motion.div>
        ))}
      </div>
      <div className="mt-12 text-center">
        <Link
          to="/collection"
          className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-8 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:gold-glow"
        >
          View Full Collection <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

function Philosophy() {
  const items = [
    { icon: Crown, title: "Long Lasting", text: "10–12 hour projection built on a concentrated oil base — you spray once, you smell it all day." },
    { icon: Gem, title: "Affordable Luxury", text: "The same notes you'd find in a designer flacon — priced so you can wear a different mood each day." },
    { icon: Award, title: "Dubai Made", text: "Blended by hand in Ayal Nasir, the perfume quarter that has scented the Gulf for three generations." },
  ];
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <SectionTitle eyebrow="Our Philosophy" title="Elegance in Every Drop" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="glass h-full rounded-3xl p-8 transition-shadow hover:gold-glow"
          >
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/30 bg-primary/10"
            >
              <it.icon className="h-6 w-6 text-primary" />
            </motion.div>
            <h3 className="mt-6 font-serif text-2xl text-gold-gradient">{it.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-24 text-center md:px-8">
      <Reveal>
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="inline-block font-serif text-8xl text-primary/40"
        >
          "
        </motion.span>
        <p className="-mt-6 font-serif text-2xl italic leading-relaxed text-foreground md:text-3xl">
          A fragrance is more than a scent — it is a memory you wear, a
          signature the world remembers you by.
        </p>
        <p className="mt-6 text-xs uppercase tracking-[0.4em] text-primary">— The Abira House</p>
      </Reveal>
    </section>
  );
}

function InstagramStrip() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:px-8">
      <SectionTitle eyebrow="@abira_fragrance" title="From Our Atelier" />
      <div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: i * 0.06 }}
            whileHover={{ scale: 1.03 }}
            className="group relative aspect-square overflow-hidden rounded-2xl glass"
          >
            <img
              src={[heroImage, bottleImage, courtyardImage][i % 3]}
              alt="Abira Fragrance atelier"
              className="h-full w-full object-cover transition-transform duration-[900ms] group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "rgba(0,0,0,0.55)" }}>
              <Instagram className="h-6 w-6 text-primary" />
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <a href={brand.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] text-primary hover:underline">
          <Instagram className="h-4 w-4" /> Follow {brand.instagramHandle}
        </a>
      </div>
    </section>
  );
}

function CTABanner() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-20 md:px-8">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl glass-strong px-8 py-16 text-center md:px-16">
          <motion.div
            aria-hidden
            className="absolute inset-0 -z-10"
            animate={{ opacity: [0.3, 0.55, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            style={{ background: "radial-gradient(ellipse at center, oklch(0.82 0.14 85 / 0.25), transparent 70%)" }}
          />
          <h2 className="font-serif text-4xl md:text-5xl text-gold-gradient">
            Ready to Discover Your Signature?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Message us on WhatsApp for a personal recommendation, or drop by
            the atelier in Ayal Nasir. We'll match you to a bottle in a minute.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer"
               className="inline-flex items-center gap-2 rounded-full bg-gold-gradient px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary-foreground gold-glow transition-transform hover:scale-105">
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
            <a href={`tel:${brand.phoneIntl}`}
               className="inline-flex items-center gap-2 rounded-full border border-primary/50 px-7 py-3 text-sm uppercase tracking-[0.2em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              <Phone className="h-4 w-4" /> Call Now
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

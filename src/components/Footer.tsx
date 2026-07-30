import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin, Phone } from "lucide-react";
import { brand } from "@/data/brand";
const logo = "/images/abira-logo.png";


export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-primary/15 bg-onyx/60 backdrop-blur-xl">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-8">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-12 w-12 place-items-center overflow-hidden rounded-full border border-primary/40 bg-background/60">
              <img src={logo} alt="Abira Fragrances logo" className="h-full w-full object-cover" />
            </span>
            <span className="font-serif text-lg tracking-[0.3em] text-gold-gradient">
              {brand.short}
            </span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            Luxury inspired fragrances handcrafted in Dubai. Long-lasting,
            elegant, and made for those who appreciate the finer notes of life.
          </p>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Quick Links
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/collection", label: "Inspired Collection" },
              { to: "/branded", label: "Branded Perfumes" },
              { to: "/why-abira", label: "Why Abira" },
              { to: "/speakers", label: "Speakers" },
              { to: "/contact", label: "Contact" },
            ].map((l) => (

              <li key={l.to}>
                <Link to={l.to} className="transition-colors hover:text-primary">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Legal
          </h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/privacy" className="hover:text-primary">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-primary">Terms & Conditions</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 text-xs uppercase tracking-[0.25em] text-primary">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`tel:${brand.phoneIntl}`} className="hover:text-primary">{brand.phone}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="mt-0.5 h-4 w-4 text-primary" />
              <a href={`mailto:${brand.email}`} className="hover:text-primary break-all">{brand.email}</a>
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="mt-0.5 h-4 w-4 text-primary" />
              <a href={brand.instagram} target="_blank" rel="noreferrer" className="hover:text-primary">
                {brand.instagramHandle}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 text-primary" />
              <span>{brand.address}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-muted-foreground md:flex-row md:px-8">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p className="tracking-[0.2em] uppercase">Designed with elegance</p>
        </div>
      </div>
    </footer>
  );
}

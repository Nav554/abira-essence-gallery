import { products } from "./catalog";
import { brandedPerfumes } from "./branded";
import { celebs } from "./celebrities";
import { brand } from "./brand";
const inspiredBottle = "/images/abira-inspired-bottle.png";
const heroBottle = "/images/abira-hero-bottle.png";

export type ProductKind = "inspired" | "branded" | "celebrity";

export type ProductDetail = {
  kind: ProductKind;
  id: string;
  name: string;
  brandName: string;
  image: string;
  inspiration?: string;
  family?: string;
  category?: string;
  concentration?: string;
  year?: number;
  perfumer?: string;
  notes?: { top: string[]; heart: string[]; base: string[] };
  flatNotes?: string[];
  scentProfile?: string;
  season?: string;
  bestTime?: string;
  longevity?: string;
  projection?: string;
  occasion?: string;
  gender?: string;
  description: string;
  price: string;
  whatsappText: string;
};

function timeFromOccasion(occasion?: string) {
  if (!occasion) return "Day & Evening";
  const o = occasion.toLowerCase();
  if (o.includes("evening")) return "Evening & Night";
  if (o.includes("office") || o.includes("daily") || o.includes("sport")) return "Daytime";
  if (o.includes("formal")) return "Evening";
  return "Day & Evening";
}

export function getProduct(kind: string, id: string): ProductDetail | null {
  if (kind === "inspired") {
    const p = products.find((x) => x.id === id);
    if (!p) return null;
    return {
      kind: "inspired",
      id: p.id,
      name: `Abira Inspired by ${p.inspiredBy}`,
      brandName: brand.name,
      image: inspiredBottle,
      inspiration: p.inspiredBy,
      family: p.family,
      flatNotes: p.notes,
      scentProfile: p.family,
      season: p.season,
      bestTime: timeFromOccasion(p.occasion),
      longevity: p.longevity,
      projection: p.projection,
      occasion: p.occasion,
      gender: p.gender,
      description: `An Abira hand-blended tribute to ${p.inspiredBy} — a ${p.family.toLowerCase()} composition built around ${p.notes.join(", ").toLowerCase()}, poured in Ayal Nasir, Dubai.`,
      price: brand.priceRange,
      whatsappText: `Hello Abira, I'd like to inquire about the fragrance inspired by ${p.inspiredBy}.`,
    };
  }

  if (kind === "branded") {
    const p = brandedPerfumes.find((x) => x.id === id);
    if (!p) return null;
    return {
      kind: "branded",
      id: p.id,
      name: p.name,
      brandName: p.house,
      image: p.image,
      family: p.family,
      category: p.category,
      concentration: p.concentration,
      year: p.year,
      perfumer: p.perfumer,
      notes: p.notes,
      scentProfile: `${p.category} · ${p.family}`,
      gender: p.gender,
      description: p.description,
      price: "Price on inquiry",
      whatsappText: `Hello Abira, I'd like to inquire about ${p.house} ${p.name}.`,
    };
  }

  if (kind === "celebrity") {
    const c = celebs.find((x) => x.id === id);
    if (!c) return null;
    return {
      kind: "celebrity",
      id: c.id,
      name: c.name,
      brandName: brand.name,
      image: heroBottle,
      inspiration: c.perfumes.join(" + "),
      flatNotes: c.notes ?? c.perfumes,
      description: c.description,
      price: brand.priceRange,
      whatsappText: `Hello Abira, I'd like the inspired version associated with ${c.name} (${c.perfumes.join(" + ")}).`,
    };
  }

  return null;
}

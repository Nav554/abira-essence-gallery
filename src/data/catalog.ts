import sp5 from "@/assets/speaker-5.png.asset.json";
import sp6 from "@/assets/speaker-6.png.asset.json";
import sp7 from "@/assets/speaker-7.png.asset.json";
import sp8 from "@/assets/speaker-8.png.asset.json";
import sp9 from "@/assets/speaker-9.png.asset.json";
import sp10 from "@/assets/speaker-10.png.asset.json";

export type Product = {
  id: string;
  inspiredBy: string;
  family: string;
  gender: "Men" | "Women" | "Unisex";
  notes: string[];
  longevity: string;
  projection: string;
  occasion: string;
  season: string;
};

export const products: Product[] = [
  { id: "bleu-de-chanel", inspiredBy: "Bleu de Chanel", family: "Woody Aromatic", gender: "Men", notes: ["Citrus", "Ginger", "Cedar", "Sandalwood"], longevity: "4–10 hrs", projection: "Strong", occasion: "Office & Evening", season: "All Seasons" },
  { id: "gucci-flora", inspiredBy: "Gucci Flora", family: "Floral", gender: "Women", notes: ["Peony", "Rose", "Patchouli"], longevity: "4–10 hrs", projection: "Moderate", occasion: "Daily", season: "Spring & Summer" },
  { id: "creed-aventus", inspiredBy: "Creed Aventus", family: "Fruity Chypre", gender: "Men", notes: ["Pineapple", "Birch", "Musk", "Oakmoss"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Signature", season: "All Seasons" },
  { id: "dunhill-red", inspiredBy: "Dunhill Red", family: "Oriental Woody", gender: "Men", notes: ["Bergamot", "Cinnamon", "Amber"], longevity: "4–10 hrs", projection: "Moderate", occasion: "Evening", season: "Fall & Winter" },
  { id: "polo-sport", inspiredBy: "Polo Sport", family: "Aromatic Fresh", gender: "Men", notes: ["Marine", "Mint", "Musk"], longevity: "4–10 hrs", projection: "Fresh", occasion: "Sport & Casual", season: "Summer" },
  { id: "acqua-di-gio-profumo", inspiredBy: "Acqua Di Gio Profumo", family: "Aromatic Aquatic", gender: "Men", notes: ["Sea Notes", "Bergamot", "Incense", "Patchouli"], longevity: "4–10 hrs", projection: "Strong", occasion: "Formal", season: "All Seasons" },
  { id: "bvlgari-tygar", inspiredBy: "Bvlgari Tygar", family: "Oriental Spicy", gender: "Unisex", notes: ["Saffron", "Tonka", "Amber"], longevity: "4–10 hrs", projection: "Strong", occasion: "Evening", season: "Fall & Winter" },
  { id: "chanel-no-5", inspiredBy: "Chanel No.5", family: "Floral Aldehyde", gender: "Women", notes: ["Rose", "Jasmine", "Sandalwood"], longevity: "4–10 hrs", projection: "Elegant", occasion: "Signature", season: "All Seasons" },
  { id: "chanel-chance", inspiredBy: "Chanel Chance", family: "Floral Fruity", gender: "Women", notes: ["Pink Pepper", "Jasmine", "Amber Patchouli"], longevity: "4–10 hrs", projection: "Moderate", occasion: "Daily", season: "Spring" },
  { id: "burberry-her", inspiredBy: "Burberry Her", family: "Gourmand Fruity", gender: "Women", notes: ["Berries", "Violet", "Musk"], longevity: "4–10 hrs", projection: "Sweet", occasion: "Daily", season: "Fall & Winter" },
  { id: "versace-bright-crystal", inspiredBy: "Versace Bright Crystal", family: "Floral Fruity", gender: "Women", notes: ["Pomegranate", "Peony", "Musk"], longevity: "4–10 hrs", projection: "Fresh", occasion: "Daily", season: "Spring & Summer" },
  { id: "madawi", inspiredBy: "Madawi", family: "Oriental Oud", gender: "Unisex", notes: ["Oud", "Rose", "Saffron"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Signature", season: "All Seasons" },
  { id: "gissah-imperial-valley", inspiredBy: "Gissah Imperial Valley", family: "Oriental Woody", gender: "Unisex", notes: ["Oud", "Amber", "Sandalwood"], longevity: "4–10 hrs", projection: "Strong", occasion: "Evening", season: "Fall & Winter" },
  { id: "gissah-akoya", inspiredBy: "Gissah Akoya", family: "Marine Oriental", gender: "Unisex", notes: ["Sea Salt", "Amber", "Musk"], longevity: "4–10 hrs", projection: "Moderate", occasion: "Daily", season: "All Seasons" },
  { id: "gissah-la-luna", inspiredBy: "Gissah La Luna", family: "Floral Musky", gender: "Women", notes: ["White Flowers", "Musk", "Vanilla"], longevity: "4–10 hrs", projection: "Elegant", occasion: "Evening", season: "All Seasons" },
  { id: "paco-invictus", inspiredBy: "Paco Rabanne Invictus", family: "Aquatic Fresh", gender: "Men", notes: ["Grapefruit", "Marine", "Ambergris"], longevity: "4–10 hrs", projection: "Strong", occasion: "Sport", season: "Summer" },
  { id: "paco-one-million", inspiredBy: "Paco Rabanne One Million", family: "Oriental Spicy", gender: "Men", notes: ["Cinnamon", "Leather", "Amber"], longevity: "4–10 hrs", projection: "Strong", occasion: "Evening", season: "Fall & Winter" },
  { id: "dior-sauvage", inspiredBy: "Dior Sauvage", family: "Aromatic Fougère", gender: "Men", notes: ["Bergamot", "Ambroxan", "Pepper"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Signature", season: "All Seasons" },
  { id: "tf-ombre-leather", inspiredBy: "Tom Ford Ombre Leather", family: "Leather", gender: "Unisex", notes: ["Leather", "Jasmine", "Amber"], longevity: "4–10 hrs", projection: "Strong", occasion: "Evening", season: "Fall & Winter" },
  { id: "tf-oud-wood", inspiredBy: "Tom Ford Oud Wood", family: "Woody Oud", gender: "Unisex", notes: ["Oud", "Rosewood", "Sandalwood"], longevity: "4–10 hrs", projection: "Elegant", occasion: "Signature", season: "All Seasons" },
  { id: "tf-tobacco-vanille", inspiredBy: "Tom Ford Tobacco Vanille", family: "Oriental Gourmand", gender: "Unisex", notes: ["Tobacco", "Vanilla", "Tonka"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Evening", season: "Fall & Winter" },
  { id: "tf-tuscan-leather", inspiredBy: "Tom Ford Tuscan Leather", family: "Leather Suede", gender: "Unisex", notes: ["Raspberry", "Leather", "Saffron"], longevity: "4–10 hrs", projection: "Strong", occasion: "Signature", season: "All Seasons" },
  { id: "lv-imagination", inspiredBy: "Louis Vuitton Imagination", family: "Citrus Woody", gender: "Men", notes: ["Bergamot", "Tea", "Ambrox"], longevity: "4–10 hrs", projection: "Fresh", occasion: "Daily", season: "All Seasons" },
  { id: "lv-stellar-times", inspiredBy: "Louis Vuitton Stellar Times", family: "Aromatic Woody", gender: "Unisex", notes: ["Coriander", "Iris", "Musk"], longevity: "4–10 hrs", projection: "Moderate", occasion: "Signature", season: "All Seasons" },
  { id: "lv-pacific-chill", inspiredBy: "Louis Vuitton Pacific Chill", family: "Fresh Fruity", gender: "Unisex", notes: ["Grapefruit", "Basil", "Mint"], longevity: "4–10 hrs", projection: "Fresh", occasion: "Daily", season: "Summer" },
  { id: "lv-ombre-nomade", inspiredBy: "Louis Vuitton Ombre Nomade", family: "Oud Amber", gender: "Unisex", notes: ["Oud", "Raspberry", "Incense"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Signature", season: "Fall & Winter" },
  { id: "lv-symphony", inspiredBy: "Louis Vuitton Symphony", family: "Oud Floral", gender: "Unisex", notes: ["Rose", "Oud", "Musk"], longevity: "4–10 hrs", projection: "Elegant", occasion: "Evening", season: "All Seasons" },
  { id: "amouage-purpose-50", inspiredBy: "Amouage Purpose 50", family: "Oriental Woody", gender: "Unisex", notes: ["Saffron", "Oud", "Amber"], longevity: "4–10 hrs", projection: "Beast Mode", occasion: "Signature", season: "All Seasons" },
  { id: "amouage-guidance", inspiredBy: "Amouage Guidance", family: "Gourmand Woody", gender: "Unisex", notes: ["Almond", "Vanilla", "Sandalwood"], longevity: "4–10 hrs", projection: "Strong", occasion: "Evening", season: "Fall & Winter" },
  { id: "amouage-outlands", inspiredBy: "Amouage Outlands", family: "Oriental Spicy", gender: "Unisex", notes: ["Pepper", "Amber", "Musk"], longevity: "4–10 hrs", projection: "Strong", occasion: "Signature", season: "All Seasons" },
];

export type Speaker = {
  id: string;
  brand: string;
  model: string;
  tagline: string;
  features: string[];
  image: string;
};


export const speakers: Speaker[] = [
  { id: "jbl-charge", brand: "JBL", model: "Charge Series", tagline: "Signature deep bass, built to travel.", features: ["Waterproof", "Powerbank", "Wireless"], image: sp5.url },
  { id: "jbl-boombox", brand: "JBL", model: "Boombox Series", tagline: "Room-filling sound with iconic style.", features: ["Massive Bass", "24hr Playtime", "Party Boost"], image: sp6.url },
  { id: "haino-teko-mega", brand: "HAINO TEKO", model: "Mega Series", tagline: "Bold, thunderous sound for every gathering.", features: ["LED Lights", "Karaoke", "Mic Included"], image: sp7.url },
  { id: "haino-teko-pro", brand: "HAINO TEKO", model: "Pro Wireless", tagline: "Rich acoustics with premium build.", features: ["Bluetooth 5.0", "USB / SD", "Remote"], image: sp8.url },
  { id: "calus-tower", brand: "CALUS", model: "Tower Speaker", tagline: "Statement sound with striking presence.", features: ["Tower Design", "DJ Effects", "FM Radio"], image: sp9.url },
  { id: "calus-portable", brand: "CALUS", model: "Portable Pro", tagline: "Take luxury sound anywhere.", features: ["Rechargeable", "Bluetooth", "Aux/USB"], image: sp10.url },
];


export type Celeb = {
  id: string;
  name: string;
  heading?: string;
  perfumes: string[];
  notes?: string[];
  description: string;
};

export const celebs: Celeb[] = [
  {
    id: "shah-rukh-khan",
    name: "Shah Rukh Khan",
    heading: "Reported Signature Layering",
    perfumes: ["Diptyque Tam Dao", "Alfred Dunhill"],
    notes: ["Sandalwood", "Cypress", "Amber", "Musk"],
    description:
      "A layering combination popularly associated with Shah Rukh Khan by fragrance enthusiasts.",
  },
  {
    id: "alia-bhatt",
    name: "Alia Bhatt",
    perfumes: ["Gucci Flora Gorgeous Gardenia"],
    notes: ["Pear", "Red Berries", "Gardenia", "Jasmine", "Brown Sugar", "Patchouli"],
    description:
      "A floral fragrance popularly associated with Alia Bhatt in media reports.",
  },
  {
    id: "salman-khan",
    name: "Salman Khan",
    perfumes: ["Calvin Klein Obsession"],
    notes: ["Mandarin", "Bergamot", "Coriander", "Jasmine", "Amber", "Vanilla", "Musk"],
    description:
      "A warm oriental amber long linked with Salman Khan in fan lore — spicy, resinous and unmistakably 90s Bollywood.",
  },
  {
    id: "deepika-padukone",
    name: "Deepika Padukone",
    perfumes: ["Jo Malone London Orange Blossom"],
    notes: ["Clementine Flower", "Water Lily", "Orange Blossom", "Orris", "Balsamic Notes"],
    description:
      "A luminous white-floral cologne popularly associated with Deepika Padukone — bright orange blossom softened by orris and balsam.",
  },
  {
    id: "kareena-kapoor-khan",
    name: "Kareena Kapoor Khan",
    perfumes: ["Jean Paul Gaultier Classique Essence de Parfum"],
    notes: ["Pear", "Orange Blossom", "Tuberose", "Jasmine", "Vanilla", "Sandalwood", "Musk"],
    description:
      "The richer, creamier take on the iconic bust-shaped bottle — fruity florals wrapped in vanilla and sandalwood, often linked with Kareena Kapoor Khan.",
  },
  {
    id: "ranveer-singh",
    name: "Ranveer Singh",
    perfumes: ["Tom Ford Tuscan Leather"],
    notes: ["Raspberry", "Saffron", "Thyme", "Leather", "Jasmine", "Olibanum", "Suede", "Amber"],
    description:
      "Bold, raspberry-laced leather with a raw suede heart — a statement scent that suits Ranveer Singh's flamboyant style.",
  },
  {
    id: "saif-ali-khan",
    name: "Saif Ali Khan",
    perfumes: ["Ajmal Wisal Dhahab"],
    notes: ["Bergamot", "Apple", "Lavender", "Geranium", "Amberwood", "Patchouli", "Vanilla", "Musk"],
    description:
      "An Arabian ambery-woody signature — fresh fruit up top, warm amberwood and vanilla below, popularly associated with Saif Ali Khan.",
  },
];

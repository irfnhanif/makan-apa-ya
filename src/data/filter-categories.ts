import {
  Utensils,
  Drumstick,
  CookingPot,
  Cookie,
  Hamburger,
  CupSoda,
  Dessert,
  Globe,
  Croissant,
  Coffee,
  Soup,
  CakeSlice,
  Fish,
  Beef,
  Pizza,
  MoonStar,
  LeafyGreen,
  Flame,
} from "lucide-react";

// cspell:disable
export const mainCategories = [
  { name: "Makanan Utama", icon: Utensils },
  { name: "Snack", icon: Cookie },
  { name: "Minuman", icon: CupSoda },
];

export const attributeCategories = {
  bahan: [
    { name: "Nasi", icon: Utensils },
    { name: "Mie", icon: CookingPot },
    { name: "Ayam", icon: Drumstick },
    { name: "Daging", icon: Beef },
    { name: "Seafood", icon: Fish },
    { name: "Sayuran", icon: LeafyGreen },
  ],
  asal: [
    { name: "Indonesia", icon: "🇮🇩" },
    { name: "Jepang", icon: "🇯🇵" },
    { name: "Korea", icon: "🇰🇷" },
    { name: "Tiongkok", icon: "🇨🇳" },
    { name: "Timur Tengah", icon: MoonStar },
    { name: "Western", icon: Pizza },
    { name: "Internasional", icon: Globe },
  ],
  jenis: [
    { name: "Berkuah", icon: Soup },
    { name: "Sate", icon: Flame },
    { name: "Cepat Saji", icon: Hamburger },
    { name: "Sarapan", icon: Croissant },
    { name: "Penutup", icon: Dessert },
    { name: "Kue dan Roti", icon: CakeSlice },
    { name: "Kopi", icon: Coffee },
  ],
};

export const categoryVisibility = {
  "Makanan Utama": {
    bahan: ["Nasi", "Mie", "Ayam", "Daging", "Seafood", "Sayuran"],
    asal: [
      "Indonesia",
      "Jepang",
      "Korea",
      "Tiongkok",
      "Timur Tengah",
      "Western",
      "Internasional",
    ],
    jenis: ["Berkuah", "Sate", "Cepat Saji", "Sarapan"],
  },
  Snack: {
    bahan: ["Nasi", "Mie", "Ayam", "Daging", "Seafood", "Sayuran"],
    asal: [
      "Indonesia",
      "Jepang",
      "Korea",
      "Tiongkok",
      "Timur Tengah",
      "Western",
      "Internasional",
    ],
    jenis: [
      "Berkuah",
      "Sate",
      "Cepat Saji",
      "Sarapan",
      "Penutup",
      "Kue dan Roti",
    ],
  },
  Minuman: {
    bahan: [],
    asal: [
      "Indonesia",
      "Jepang",
      "Korea",
      "Tiongkok",
      "Timur Tengah",
      "Western",
      "Internasional",
    ],
    jenis: ["Cepat Saji", "Sarapan", "Penutup", "Kopi"],
  },
};

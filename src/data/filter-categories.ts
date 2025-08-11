import {
  Utensils,
  Cookie,
  CupSoda,
  Soup,
} from "lucide-react";

// cspell:disable
export const mainCategories = [
  { name: "Makanan Utama", icon: Utensils },
  { name: "Snack", icon: Cookie },
  { name: "Minuman", icon: CupSoda },
];

export const attributeCategories = {
  lainnya: [
    { name: "Nasi", icon: Utensils },
    { name: "Berkuah", icon: Soup },
  ],
};

export const categoryVisibility = {
  "Makanan Utama": {
    lainnya: ["Nasi", "Berkuah",],
  },
  Snack: {
    lainnya: [],
  },
  Minuman: {
    lainnya: [],
  }
};

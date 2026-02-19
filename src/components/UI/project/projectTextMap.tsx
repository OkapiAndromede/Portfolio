import { BookiIntroduction, BookiCore, BookiConclusion } from "./BookiText";
import { FoodIntroduction, FoodCore, FoodConclusion } from "./FoodText";
import { KasaIntroduction, KasaCore, KasaConclusion } from "./KasaText";

export const projectTextMap = {
  booki: {
    introduction: BookiIntroduction,
    core: BookiCore,
    conclusion: BookiConclusion,
  },
  ohmyfood: {
    introduction: FoodIntroduction,
    core: FoodCore,
    conclusion: FoodConclusion,
  },
  kasa: {
    introduction: KasaIntroduction,
    core: KasaCore,
    conclusion: KasaConclusion,
  },
} as const;

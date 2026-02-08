import bookiActiviteOpti from "../images/booki_activite_opti.webp";
import bookiHebergementOpti from "../images/booki_hebergement_opti.webp";
import bookiVideo from "../videos/booki_video.mp4";

import foodPrincipleOpti from "../images/food_principle_opti.webp";
import foodRestaurantOpti from "../images/food_menu_opti.webp";
import foodVideo from "../videos/food_video.mp4";

import kasaHouseOpti from "../images/kasa_house_opti.webp";
import kasaHouse2Opti from "../images/kasa_house2_opti.webp";
import kasaVideo from "../videos/kasa_video.mp4";

export type Project = {
  id: "booki" | "kasa" | "ohmyfood";
  number: string;
  title: string;
  images: {
    first: string;
    second: string;
  };
  video: string;
};
export const projects: Project[] = [
  {
    id: "booki",
    number: "001",
    title: "Booki",
    images: {
      first: bookiActiviteOpti,
      second: bookiHebergementOpti,
    },
    video: bookiVideo,
  },
  {
    id: "ohmyfood",
    number: "002",
    title: "Oh my food",
    images: {
      first: foodPrincipleOpti,
      second: foodRestaurantOpti,
    },
    video: foodVideo,
  },
  {
    id: "kasa",
    number: "003",
    title: "Kasa",
    images: {
      first: kasaHouseOpti,
      second: kasaHouse2Opti,
    },
    video: kasaVideo,
  },
];

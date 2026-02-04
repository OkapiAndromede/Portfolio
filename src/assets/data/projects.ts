import bookiActiviteDesktop from "../images/booki_activites_desktop.webp";
import bookiActiviteIpad from "../images/booki_activites_ipad.webp";
import bookiActiviteMobile from "../images/booki_activites_mobile.webp";

import bookiHebergementDesktop from "../images/booki_hebergement_desktop.webp";
import bookiHebergementIpad from "../images/booki_hebergement_ipad.webp";
import bookiHebergementMobile from "../images/booki_hebergement_mobile.webp";
import bookiVideo from "../videos/booki_video.mp4";

import foodMenuDesktop from "../images/food_menu_desktop.webp";
import foodMenuIpad from "../images/food_menu_ipad.webp";
import foodMenuMobile from "../images/food_menu_mobile.webp";
import foodOrder from "../images/food_commande.png";

import foodVideo from "../videos/food_video.mp4";

import kasaHouseDesktop from "../images/kasa_appartement_desktop.webp";
import kasaHouseIpad from "../images/kasa_appartement_ipad.webp";
import kasaHouseMobile from "../images/kasa_appartement_mobile.webp";

import kasaExplain from "../images/kasa_explication.png";
import kasaVideo from "../videos/kasa_video.mp4";

export type Project = {
  id: "booki" | "kasa" | "ohmyfood";
  number: string;
  title: string;
  images: {
    first: {
      small: string;
      medium: string;
      large: string;
    };
    second: {
      small: string;
      medium: string;
      large: string;
    };
  };
  video: string;
};
export const projects: Project[] = [
  {
    id: "booki",
    number: "001",
    title: "Booki",
    images: {
      first: {
        small: bookiActiviteMobile,
        medium: bookiActiviteIpad,
        large: bookiActiviteDesktop,
      },
      second: {
        small: bookiHebergementMobile,
        medium: bookiHebergementIpad,
        large: bookiHebergementDesktop,
      },
    },
    video: bookiVideo,
  },
  {
    id: "ohmyfood",
    number: "002",
    title: "Oh my food",
    images: {
      first: {
        small: foodMenuMobile,
        medium: foodMenuIpad,
        large: foodMenuDesktop,
      },
      second: {
        small: foodOrder,
        medium: foodOrder,
        large: foodOrder,
      },
    },
    video: foodVideo,
  },
  {
    id: "kasa",
    number: "003",
    title: "Kasa",
    images: {
      first: {
        small: kasaHouseMobile,
        medium: kasaHouseIpad,
        large: kasaHouseDesktop,
      },
      second: {
        small: kasaExplain,
        medium: kasaExplain,
        large: kasaExplain,
      },
    },
    video: kasaVideo,
  },
];

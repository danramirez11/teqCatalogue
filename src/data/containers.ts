import type { ConLine } from "../types/containers";
import { images } from "./images";

const PharmacyLine: ConLine = {
  id: "pharmacy",
  header: {
    name: "Línea Famacéutica",
    desc: "Envases para",
    image: images.varsol,
    tags: ["Salud", "Bienestar", "Medicamentos"],
  },
  categories: [
    {
      name: "Goteros",
      images: [images.varsol],
    },
    {
      name: "Jaraberos",
      lids: [images.varsol],
      images: [images.varsol],
    },
  ],
};

export const allLines: ConLine[] = [PharmacyLine];

import type { ConLine } from "../types/containers";
import { images } from "./images";

const PharmacyLine: ConLine = {
  id: "pharmacy",
  header: {
    name: "Línea Famacéutica",
    desc: "Envases para",
    image: images["150_varsol"].src,
    tags: ["Salud", "Bienestar", "Medicamentos"],
  },
  categories: [
    {
      name: "Goteros",
      images: [
        images.gotero_homeopatico.src,
        images.gotero_laboratorio_blanco.src,
        images.gotero_laboratorio_natural.src,
      ],
    },
    {
      name: "Jaraberos",
      lids: [images.tapa_distop_24_410.src],
      images: [
        images.jarabero_pet_ambar.src,
        images.jarabero_pet_blanco.src,
        images.jarabero_pet_cristal.src,
      ],
    },
  ],
};

export const allLines: ConLine[] = [PharmacyLine];

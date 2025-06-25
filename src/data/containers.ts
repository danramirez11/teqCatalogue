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

const foodLine: ConLine = {
  id: "food",
  header: {
    name: "Línea Alimentaria",
    desc: "Envases para alimentos",
    image: images.salsero_perry.src,
    tags: ["Alimentos", "Bebidas", "Conservas"],
  },
  categories: [
    {
      name: "Vidrios",
      images: [
        images.vidrio_ambar_30_60.src,
        images.vidrio_bebida.src,
        images.vidrio_compota_mayonesa.src,
        images.vidrio_conserva.src,
        images.vidrio_diamante_miel.src,
        images.vidrio_peque_os_compota_30_hexagonal_45.src,
        images.vidrio_vela_pudin_50_corcho.src,
      ],
    },
    {
      name: "Potes",
      lids: [images.tapa_sencilla_24.src],
      images: [
        images.pote_1000_500_220.src,
        images.pote_250_160_120_tapa_52.src,
        images.pote_500_250_120.src,
        images.pote_opal_500_200.src,
        images.pote_pet_tapa_aluminio_350_200.src,
      ],
    },
  ],
};

export const allLines: ConLine[] = [PharmacyLine, foodLine];

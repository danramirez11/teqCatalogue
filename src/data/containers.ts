import type { ConLine } from "../types/containers";
import { images } from "./images";

const PharmacyLine: ConLine = {
  id: "pharmacy",
  header: {
    name: "Línea Famacéutica",
    desc: "Envases para",
    image:
      "https://wallpapers.com/images/hd/pharmacy-background-l3fkq9y81ntprmwh.jpg",
    tags: [
      "Productos Farmaéuticos",
      "Vaselina",
      "Cremas",
      "Pastillas",
      "Cápsulas",
      "Jarabes",
      "Productos Homeopáticos",
    ],
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
      images: [
        images.jarabero_pet_ambar.src,
        images.jarabero_pet_blanco.src,
        images.jarabero_pet_cristal.src,
      ],
    },
    {
      name: "Potes",
      images: [
        images.pote_1000_500_220.src,
        images.pote_250_160_120_tapa_52.src,
        images.pote_opal_500_200.src,
      ],
    },
    {
      name: "Otros",
      images: [
        images.pomada_20.src,
        images.vinilo_tempera.src,
        images.pastillero_120_80_40_pote.src,
      ],
    },
  ],
};

const cosmeticLine: ConLine = {
  id: "cosmetic",
  header: {
    name: "Línea Cosmética",
    desc: "Envases para",
    image:
      "https://images.squarespace-cdn.com/content/v1/5c4f6ba1e2ccd1ee6075495d/1624288712010-08OMGX6V80Z0S5DNTP3C/The+Difference+Between+Pharmaceutical+vs.+Cosmetic+Products",
    tags: [
      "Shampoo",
      "Acondicionador",
      "Jabón",
      "Crema corporal",
      "Exfoliante",
      "Antibacterial",
      "Cremas",
      "Gel",
      "Splash",
    ],
  },
  categories: [
    {
      name: "Potes",
      images: [
        images.pote_cosmetico.src,
        images.pote_500_250_120.src,
        images.pote_pet_tapa_aluminio_350_200.src,
        images.potes_peque_os_falta_20.src,
      ],
    },
    {
      name: "Tapa 28mm",
      images: [
        images.bala_pet_grandes_con_tapas.src,
        images["440_blanco_transparente_con_tapas"].src,
        images.bala_pet_blanco.src,
      ],
    },
    {
      name: "Tapa 24mm",
      images: [
        images.bala_120_250_r24_con_tapas.src,
        images.bala_250_120_r24_con_tapas.src,
        images.bala_pet_120_250_r24.src,
        images.champa_a_victoria_210_250_260_con_tapas.src,
      ],
    },
    {
      name: "Tapa 18mm",
      images: [
        images.bala_pet_peque_os.src,
        images.removedor_geordy_champa_a_con_tapas.src,
      ],
    },
    {
      name: "Otros",
      images: [
        images.cosmetico_cilindrico_splash.src,
        images.bala_neutro.src,
        images.espumeros.src,
        images.talquera.src,
        images.antibacterial_pet_y_colores.src,
        images.bolita_100.src,
        images.colapsible.src,
        images.probador_rollon.src,
      ],
    },
  ],
};

const foodLine: ConLine = {
  id: "food",
  header: {
    name: "Línea Alimentos",
    desc: "Envases para",
    image:
      "https://nutritionrealm.com/wp-content/uploads/2020/05/Full-Liquid-Diet-Foods-Plan-Benefits-and-How-It-Works-scaled.jpeg",
    tags: [
      "Dulces",
      "Gomitas",
      "Mecato",
      "Yogurth",
      "Salsas",
      "Agua-Jugos-Bebidas",
      "Arrechón-Viche",
      "Aceite",
      "Miel",
    ],
  },
  categories: [
    {
      name: "Agua",
      images: [images.ondas_agua_con_color.src],
    },
    {
      name: "Bomboneras",
      images: [images.bomboneras_con_dulces.src],
    },
    {
      name: "Garrafas-Yogurt",
      images: [
        images.garr_yogurt.src,
        images.garr_yogurt_1800.src,
        images.garr_original_redonda.src,
      ],
    },
    {
      name: "Miel, Arrechón-Viche",
      images: [images.botella_y_caneca_con_colores.src],
    },
    {
      name: "Salsas y Aderezos",
      images: [images.salsero_perry.src],
    },
  ],
};

const CleaningLine: ConLine = {
  id: "cleaning",
  header: {
    name: "Línea de Aseo",
    desc: "Envases para",
    tags: [
      "Antibacterial",
      "Crema",
      "Jabón",
      "Aromatizante",
      "Limpiador de pisos",
      "Blanqueador",
      "Desengrasante",
      "Desinfectante",
    ],
    image:
      "https://imagenes.eltiempo.com/files/image_1200_600/uploads/2020/07/01/5efd11efc84c6.jpeg",
  },
  categories: [
    {
      name: "Garrafas",
      images: [
        images.garr_4lt_cuadrada.src,
        images.garr_cuadrada_1lt_450_120.src,
        images.garr_original_redonda.src,
        images.garr_recuperada_redonda.src,
        images.garr_galon_4litros_premium.src,
      ],
    },
    {
      name: "Tapa 28mm",
      images: [
        images.jaboneros_campana_con_tapas.src,
        images.jaboneros_campana_con_cremera.src,
        images["500_varsol_generico_cuadrado"].src,
      ],
    },
    {
      name: "Atomizadores",
      images: [
        images.bala_pet_grandes_con_pistola_spray_atomizadores.src,
        images.limpiavidrios_anatomico.src,
        images.aseo.src,
      ],
    },
    {
      name: "Otros",
      images: [images["150_varsol"].src],
    },
  ],
};

const glassLine: ConLine = {
  id: "glass",
  header: {
    name: "Línea de Vidrio",
    desc: "Envases para",
    image:
      "https://images.squarespace-cdn.com/content/v1/5e1077b0019b062397153b23/1598924780140-S0K1H3TGXA2375EVUYJX/image-asset.jpeg",
    tags: [
      "Jarabes",
      "Alimentos",
      "Mermelada",
      "Dulces",
      "Bebidas",
      "Velas",
      "Serum",
      "Aceites",
      "Esencias",
    ],
  },
  categories: [
    {
      name: "Goteros",
      images: [images.goteros_vidrio.src],
    },
    {
      name: "Bebidas",
      images: [images.envases_vidrio_bebida.src],
    },
    {
      name: "Compotas y Conservas",
      images: [
        images.vidrio_compota_mayonesa.src,
        images.vidrio_conserva.src,
        images.envases_vidrio_mayonesa.src,
      ],
    },
    {
      name: "Otros",
      images: [
        images.vidrio_ambar_30_60.src,
        images.vidrio_vela_pudin_50_corcho.src,
        images.vidrio_diamante_miel.src,
        images.vidrio_peque_os_compota_30_hexagonal_45.src,
      ],
    },
  ],
};

const lidsLine: ConLine = {
  id: "lids",
  header: {
    name: "Tapas",
    desc: "Tapas para envases",
    image:
      "https://www.wastenotwantnotliving.co.uk/wp-content/uploads/2018/11/bottletops.jpg",
    tags: [],
  },
  categories: [
    {
      name: "Spray",
      images: [
        images.tapa_spray_18.src,
        images.tapa_spray_24.src,
        images.tapa_spray_28.src,
      ],
    },
    {
      name: "Fliptop",
      images: [
        images.tapa_fliptop_18.src,
        images.tapa_fliptop_24.src,
        images.tapa_fliptop_28.src,
      ],
    },
    {
      name: "Push Pull",
      images: [images.tapa_push_pull_24.src, images.tapa_push_pull_28.src],
    },
    {
      name: "Distop",
      images: [images.tapa_distop_24_410.src, images.tapa_distop_28.src],
    },
    {
      name: "Sencilla",
      images: [images.tapa_sencilla_18.src, images.tapa_sencilla_24.src],
    },
    {
      name: "Tapas de Seguridad",
      images: [
        images.tapa_seguridad_28.src,
        images.tapa_38_seguridad_garrafa.src,
      ],
    },
    {
      name: "Otras",
      images: [images.tapa_gotero.src, images.tapa_twist_28.src],
    },
  ],
};

export const allLines: ConLine[] = [
  cosmeticLine,
  foodLine,
  CleaningLine,
  PharmacyLine,
  lidsLine,
];

export const onlyGlassLine: ConLine[] = [glassLine];

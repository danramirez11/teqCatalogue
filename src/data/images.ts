const imageData = {
  "150_varsol": "150 varsol",
  "200_60_30_20_neutro": "200 60 30 20 Neutro",
  "200_y_60_neutro_tapa_pico": "200 y 60 neutro tapa pico",
  "210_260_cilindrico": "210 260 cilindrico",
  "440_blanco_transparente_con_tapas": "440 blanco transparente con tapas",
  "440_blanco_transparente": "440 blanco transparente",
  "500_varsol_generico_cuadrado": "500 varsol generico cuadrado",
  antibacterial_pet_y_colores: "Antibacterial Pet y Colores",
  aseo: "Aseo",
  bala_120_250_r24_con_tapas: "Bala 120 250 R24 con tapas",
  bala_250_120_r24_con_tapas: "Bala 250 120 R24 con tapas",
  bala_250_dorado_negro: "Bala 250 Dorado Negro",
  bala_neutro: "Bala Neutro",
  bala_pet_120_250_r24: "Bala Pet 120 250 R24",
  bala_pet_blanco: "Bala Pet Blanco",
  bala_pet_peque_os_con_tapas: "Bala Pet Pequeños con tapas",
  bala_pet_grandes_con_pistola_spray_atomizadores:
    "Bala Pet grandes con Pistola Spray Atomizadores",
  bala_pet_grandes_con_tapas: "Bala Pet grandes con Tapas",
  bala_pet_grandes: "Bala Pet grandes",
  bala_pet_peque_os: "Bala Pet pequeños",
  bolita_100: "Bolita 100",
  bomboneras_cuadradas: "Bomboneras Cuadradas",
  bomboneras_redondos: "Bomboneras Redondos",
  caneca_botellas: "Caneca Botellas",
  champa_a_30_con_tapas: "Champaña 30 con tapas",
  champa_a_victoria_210_250_260_con_tapas:
    "Champaña victoria 210 250 260 con tapas",
  colapsible: "Colapsible",
  cosmetico_cilindrico_splash: "Cosmetico Cilindrico Splash",
  espumeros: "Espumeros",
  galon_pet: "Galon Pet",
  garr_4lt_cuadrada: "Garr. 4lt cuadrada",
  garr_galon_4litros_premium: "Garr. Galon 4litros Premium",
  garr_cuadrada_1lt_450_120: "Garr. cuadrada 1lt 450 120",
  garr_original_redonda: "Garr. original redonda",
  garr_recuperada_redonda: "Garr. recuperada redonda",
  garr_yogurt_1800: "Garr. yogurt 1800",
  garr_yogurt: "Garr. yogurt",
  gotero_homeopatico: "Gotero Homeopatico",
  gotero_laboratorio_blanco: "Gotero Laboratorio Blanco",
  gotero_laboratorio_natural: "Gotero Laboratorio Natural",
  goteros_vidrio: "Goteros Vidrio",
  industrial: "Industrial",
  jaboneros_campana_con_cremera: "Jaboneros Campana con Cremera",
  jaboneros_campana_con_tapas: "Jaboneros campana con tapas",
  jarabero_pet_ambar: "Jarabero Pet Ambar",
  jarabero_pet_blanco: "Jarabero Pet Blanco",
  jarabero_pet_cristal: "Jarabero Pet Cristal",
  limpiavidrios_anatomico: "Limpiavidrios Anatomico",
  ondas_agua_con_color: "Ondas Agua con Color",
  ondas_agua: "Ondas Agua",
  pastillero_120_80_40_pote: "Pastillero 120 80 40 pote",
  pilfer_recuperado: "Pilfer Recuperado",
  pomada_20: "Pomada 20",
  pote_1000_500_220: "Pote 1000 500 220",
  pote_250_160_120_tapa_52: "Pote 250 160 120 tapa 52",
  pote_500_250_120: "Pote 500 250 120",
  pote_opal_500_200: "Pote Opal 500 200",
  pote_pet_tapa_aluminio_350_200: "Pote Pet tapa Aluminio 350 200",
  potes_peque_os_falta_20: "Potes pequeños (falta 20)",
  probador_rollon: "Probador Rollon",
  removedor_geordy_champa_a_con_tapas: "Removedor Geordy champaña con tapas",
  removedor_geordy_champa_a: "Removedor Geordy champaña",
  salsero_perry: "Salsero Perry",
  talquera: "Talquera",
  tapa_38_seguridad_garrafa: "Tapa 38 seguridad Garrafa",
  tapa_distop_24_410: "Tapa Distop 24 410",
  tapa_distop_28: "Tapa Distop 28",
  tapa_fliptop_18: "Tapa Fliptop 18",
  tapa_fliptop_24: "Tapa Fliptop 24",
  tapa_fliptop_28: "Tapa Fliptop 28",
  tapa_gotero: "Tapa Gotero",
  tapa_push_pull_24: "Tapa Push Pull 24",
  tapa_push_pull_28: "Tapa Push Pull 28",
  tapa_seguridad_28: "Tapa Seguridad 28",
  tapa_sencilla_18: "Tapa Sencilla 18",
  tapa_sencilla_24: "Tapa Sencilla 24",
  tapa_spray_18: "Tapa Spray 18",
  tapa_spray_24: "Tapa Spray 24",
  tapa_spray_28: "Tapa Spray 28",
  tapa_twist_28: "Tapa Twist 28",
  varios_envases: "Varios Envases",
  victoria_champa_a: "Victoria champaña",
  vidrio_ambar_30_60: "Vidrio Ambar 30 60",
  vidrio_bebida: "Vidrio Bebida",
  vidrio_compota_mayonesa: "Vidrio Compota Mayonesa",
  vidrio_conserva: "Vidrio Conserva",
  vidrio_diamante_miel: "Vidrio diamante miel",
  vidrio_peque_os_compota_30_hexagonal_45:
    "Vidrio pequeños compota 30 hexagonal 45",
  vidrio_vela_pudin_50_corcho: "Vidrio vela pudin 50 corcho",
  vinilo_tempera: "Vinilo Tempera",
  pote_cosmetico: "pote cosmetico",
};

type ImageKey = keyof typeof imageData;

interface ImageEntry {
  key: ImageKey;
  name: string;
  src: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const images: Record<ImageKey, ImageEntry> = {} as any;

const imageModules = import.meta.glob("../photos/*.jpg", {
  eager: true,
  import: "default",
});

//CODE FOR GENERATING THE TYPES (KIND OF)
/*const generatedImageData: Record<string, string> = {};

for (const path in imageModules) {
  const filename = path.split("/").pop()!.replace(".jpg", "");
  const key = filename
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "_") // replace spaces & symbols with _
    .replace(/_+/g, "_") // reduce multiple underscores
    .replace(/^_+|_+$/g, ""); // trim start/end

  generatedImageData[key] = filename;
}

console.log(
  "✅ Paste this into your code:\n\n",
  JSON.stringify(generatedImageData, null, 2)
);*/

for (const path in imageModules) {
  const src = imageModules[path] as string;

  const filename = path.split("/").pop()?.replace(".jpg", "") || "";

  for (const key in imageData) {
    const name = imageData[key as ImageKey];
    if (name === filename) {
      images[key as ImageKey] = {
        key: key as ImageKey,
        name,
        src,
      };
      break;
    }
  }
}

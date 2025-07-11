const imageData = {
  boticaria_24: "boticaria 24",
  boticaria_28: "boticaria 28",
  cremera_24: "cremera 24",
  cremera_28: "cremera 28",
  cremera_lujo_28: "cremera lujo 28",
  distop_24: "distop 24",
  distop_28: "distop 28",
  fliptop_18: "fliptop 18",
  fliptop_24: "fliptop 24",
  fliptop_28: "fliptop 28",
  industrial_28: "industrial 28",
  pico_28: "pico 28",
  pistola_28: "pistola 28",
  pistola_mini_28: "pistola mini 28",
  push_pull_24: "push pull 24",
  push_pull_28: "push pull 28",
  seguridad_28: "seguridad 28",
  seguridad_38: "seguridad 38",
  semi_industrial_28: "semi industrial 28",
  sencilla_18: "sencilla 18",
  sencilla_24: "sencilla 24",
  spray_18: "spray 18",
  spray_24: "spray 24",
  spray_28: "spray 28",
  spray_lujo_24: "spray lujo 24",
  twist_28: "twist 28",
};

type ImageKey = keyof typeof imageData;

interface ImageEntry {
  key: ImageKey;
  name: string;
  src: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const imagesLids: Record<ImageKey, ImageEntry> = {} as any;

const imageModules = import.meta.glob("../assets/tapas/*.jpg", {
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
      imagesLids[key as ImageKey] = {
        key: key as ImageKey,
        name,
        src,
      };
      break;
    }
  }
}

export const imagesLidsBySize: Record<string, ImageEntry[]> = {};

for (const key in imagesLids) {
  const match = key.match(/_(\d+)$/); // match the number at the end
  if (match) {
    const size = match[1]; // e.g., "18", "24", "28"

    if (!imagesLidsBySize[size]) {
      imagesLidsBySize[size] = [];
    }

    // ✅ Cast key as ImageKey to satisfy the type checker
    imagesLidsBySize[size].push(imagesLids[key as ImageKey]);
  }
}

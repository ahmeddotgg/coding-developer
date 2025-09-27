import { glob } from "glob";
import sharp from "sharp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { GalleryImage } from "./gallery-image";

type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  base64: string;
};

async function fetchImageMetadata(pattern: string): Promise<ImageMetadata[]> {
  try {
    const files = glob.sync(pattern, { posix: true });

    const imagePromises = files.map(async (file) => {
      try {
        const src = file.replace(/^public/, "");
        const image = sharp(file);
        const metadata = await image.metadata();

        if (!metadata?.width || !metadata?.height || !metadata.format) {
          throw new Error(`Incomplete metadata for ${file}`);
        }

        const mimeType = metadata.format === "jpeg" ? "jpg" : metadata.format;
        const buffer = await image
          .clone()
          .resize(10, 10, { fit: "inside" })
          .toBuffer();
        const base64 = `data:image/${mimeType};base64,${buffer.toString(
          "base64",
        )}`;

        return { src, width: metadata.width, height: metadata.height, base64 };
      } catch (err) {
        console.warn(`Skipping image ${file}:`, err);
        return null;
      }
    });

    return (await Promise.all(imagePromises)).filter(
      (img): img is ImageMetadata => Boolean(img),
    );
  } catch (error) {
    console.error("Error fetching image metadata:", error);
    return [];
  }
}

export const Gallery = async () => {
  const images = await fetchImageMetadata(
    "public/gallery/*.{jpg,jpeg,png,webp}",
  );

  if (!images.length) {
    return (
      <p className="py-10 text-center text-muted-foreground">
        No images found in the gallery.
      </p>
    );
  }

  return images.map(({ src, base64, width, height }) => {
    const altText =
      src
        .split("/")
        .pop()
        ?.replace(/\..+$/, "")
        .replace(/[-_]/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase())
        .trim() || "Gallery image";

    return (
      <div
        key={src}
        className="lg:nth-last-[1]:col-span-2 lg:nth-last-[2]:col-span-2 lg:nth-last-[1]:block min-[660px]:nth-last-[1]:hidden"
      >
        <AspectRatio
          ratio={3 / 2}
          className="group relative overflow-hidden rounded-lg"
        >
          <GalleryImage
            src={src}
            width={width}
            height={height}
            altText={altText}
            base64={base64}
          />
        </AspectRatio>
      </div>
    );
  });
};

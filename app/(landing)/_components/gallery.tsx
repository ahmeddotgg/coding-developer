import { glob } from "glob";
import Image from "next/image";
import sharp from "sharp";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

export type ImageMetadata = {
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

        return {
          src,
          width: metadata.width,
          height: metadata.height,
          base64,
        };
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

  return (
    <div className="py-22">
      <div className="container space-y-16">
        <h2 className="text-center font-bold text-4xl">معرض الاكاديمية</h2>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-4 min-[400px]:grid-cols-2 min-[660px]:grid-cols-3">
          {images.map(({ src, base64, width, height }) => {
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
                <Dialog>
                  <DialogTrigger asChild>
                    <AspectRatio
                      ratio={3 / 2}
                      className="group relative cursor-zoom-in overflow-hidden rounded-lg"
                    >
                      <Image
                        src={src}
                        placeholder="blur"
                        blurDataURL={base64}
                        height={height}
                        width={width}
                        alt={altText}
                        className="h-full w-full rounded-lg object-contain transition-transform duration-300 ease-in-out group-hover:scale-105"
                        loading="lazy"
                      />
                    </AspectRatio>
                  </DialogTrigger>
                  <DialogContent className="flex min-w-[50vw]! cursor-zoom-out items-center justify-center p-0 [&>button]:rounded-full [&>button]:bg-black/70 [&>button]:p-1 [&>button]:text-white">
                    <DialogTitle className="sr-only">{altText}</DialogTitle>
                    <DialogDescription className="sr-only">
                      {altText}
                    </DialogDescription>
                    <DialogClose asChild>
                      <Image
                        src={src}
                        placeholder="blur"
                        blurDataURL={base64}
                        height={height}
                        width={width}
                        alt={altText}
                        className="h-full w-full rounded-lg object-contain"
                        loading="lazy"
                      />
                    </DialogClose>
                  </DialogContent>
                </Dialog>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

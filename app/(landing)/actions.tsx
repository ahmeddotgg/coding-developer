"use server";

import { glob } from "glob";
import sharp from "sharp";
import type { ImageMetadata } from "./_components/gallery";

export async function fetchImageMetadata(
  pattern: string,
): Promise<ImageMetadata[]> {
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

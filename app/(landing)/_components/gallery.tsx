"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { fetchImageMetadata } from "../actions";

export type ImageMetadata = {
  src: string;
  width: number;
  height: number;
  base64: string;
};

export const Gallery = () => {
  const [images, setImages] = useState<ImageMetadata[]>([]);

  useEffect(() => {
    async function fetchImages() {
      const images = await fetchImageMetadata(
        "public/gallery/*.{jpg,jpeg,png,webp}",
      );
      setImages(images);
    }
    fetchImages();
  }, []);

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
          <DialogContent className="flex min-w-[70vw]! cursor-zoom-out items-center justify-center p-0 [&>button]:rounded-full [&>button]:bg-black/70 [&>button]:p-1">
            <DialogTitle className="sr-only">{altText}</DialogTitle>
            <DialogDescription className="sr-only">{altText}</DialogDescription>
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
  });
};

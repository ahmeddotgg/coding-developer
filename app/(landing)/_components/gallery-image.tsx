"use client";

import Image from "next/image";

interface Props {
  src: string;
  base64: string;
  height: number;
  width: number;
  altText: string;
}
export const GalleryImage = ({
  src,
  base64,
  width,
  height,
  altText,
}: Props) => {
  return (
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
  );
};

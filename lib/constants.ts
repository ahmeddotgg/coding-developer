import { Geist } from "next/font/google";
import localFont from "next/font/local";

export const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});
export const estedad = localFont({
  src: "../public/estedad.woff2",
  variable: "--font-estedad",
  preload: true,
  display: "swap",
});

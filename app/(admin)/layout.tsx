import type { Metadata } from "next";
import type { ReactNode } from "react";
import { estedad, geistSans } from "@/lib/constants";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Coding Developer",
    default: "Coding Developer",
  },
};

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="" data-scroll-behavior="smooth">
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        {children}
      </body>
    </html>
  );
}

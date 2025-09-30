import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import { estedad, geistSans } from "@/lib/constants";
import "../globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | Coding Developer",
    default: "Coding Developer",
  },
};

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="rtl" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${estedad.variable} grid min-h-svh gap-4 p-4 lg:grid-cols-2`}
      >
        <section className="relative hidden overflow-hidden rounded-xl lg:block">
          <Image
            src="/code-unsplash.jpg"
            alt="Image"
            width={6336}
            height={9504}
            priority
            className="absolute inset-0 h-full w-full object-cover"
          />
        </section>

        <section className="flex flex-1 flex-col items-center justify-center gap-4">
          <Link href="/" className="self-center">
            <Image
              src="/GPTlogo.svg"
              alt="logo"
              width={120}
              height={90}
              style={{ width: 120, height: 90 }}
              unoptimized
              priority
            />
          </Link>
          {children}
        </section>
      </body>
    </html>
  );
}

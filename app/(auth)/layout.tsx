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
    <html lang="en" dir="rtl" className="dark" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${estedad.variable} grid min-h-svh gap-8 p-4 lg:grid-cols-2 lg:p-16`}
      >
        <div className="relative hidden lg:block">
          <Image
            src="/code-unsplash.jpg"
            alt="Image"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="hidden rounded-2xl object-cover lg:block"
          />
        </div>

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

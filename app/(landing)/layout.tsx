import type { Metadata } from "next";
import type { ReactNode } from "react";
import { estedad, geistSans } from "@/lib/constants";
import { Header } from "./_components/header";
import "../globals.css";
import { Toaster } from "sonner";
import { Footer } from "./_components/footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Coding Developer",
    default: "Coding Developer",
  },
  description:
    "خطوتك نحو المستقبل تبدأ هنا: تعلم تطوير الويب، الموبايل، والبرمجة الحديثة بأسلوب ممتع واحترافي، كورسات و تدريبات عملية وجهاً لوجه مع خبراء في مجال تطوير البرمجيات.",
};

export default function LandingLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" dir="rtl" data-scroll-behavior="smooth">
      <body
        className={`${geistSans.variable} ${estedad.variable} flex min-h-svh flex-col`}
      >
        <Header />
        <main className="flex-1 py-12">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}

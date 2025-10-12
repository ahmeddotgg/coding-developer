import type { Metadata } from "next";
import type { ReactNode } from "react";
import { estedad, geistSans } from "@/lib/constants";
import "../globals.css";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "./_components/footer";
import { LandingHeader } from "./_components/landing-header";
import { LandingSidebar } from "./_components/landing-sidebar";

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
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        <SidebarProvider>
          <SidebarInset dir="rtl">
            <LandingHeader />
            <main className="flex-1 py-4 sm:py-18">{children}</main>
            <Footer />
          </SidebarInset>
          <LandingSidebar />
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}

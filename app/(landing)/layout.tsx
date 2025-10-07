import type { Metadata } from "next";
import type { ReactNode } from "react";
import { estedad, geistSans } from "@/lib/constants";
<<<<<<< HEAD
=======
import { LandingHeader } from "./_components/landing-header";
>>>>>>> be764900ead7799d51eb46dd8942fc2df48bec9a
import "../globals.css";
import { Toaster } from "sonner";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Footer } from "./_components/footer";
<<<<<<< HEAD
import { LandingHeader } from "./_components/landing-header";
=======
>>>>>>> be764900ead7799d51eb46dd8942fc2df48bec9a
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
<<<<<<< HEAD
    <html lang="en" dir="rtl" data-scroll-behavior="smooth">
=======
    <html lang="en" dir="rtl" data-scroll-behavior="smooth" className="dark">
>>>>>>> be764900ead7799d51eb46dd8942fc2df48bec9a
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        <SidebarProvider>
          <SidebarInset dir="rtl">
            <LandingHeader />
            <main className="flex-1 py-18">{children}</main>
            <Footer />
          </SidebarInset>
          <LandingSidebar />
        </SidebarProvider>
        <Toaster />
      </body>
    </html>
  );
}

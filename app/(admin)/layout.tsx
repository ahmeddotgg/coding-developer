import type { Metadata } from "next";
import type { ReactNode } from "react";
import { AdminHeader } from "@/app/(admin)/_components/admin-header";
import { AdminSidebar } from "@/app/(admin)/_components/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { estedad, geistSans } from "@/lib/constants";
import "../globals.css";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  title: {
    template: "%s | Coding Developer",
    default: "Coding Developer",
  },
};

export default async function AdminLayout({
  children,
}: {
  children: ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
<<<<<<< HEAD
    <html lang="en" data-scroll-behavior="smooth" dir="rtl">
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AdminSidebar variant="inset" side="right" />
          <SidebarInset>
            <AdminHeader />
            {children}
          </SidebarInset>
=======
    <html lang="en" data-scroll-behavior="smooth" className="dark">
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <SidebarInset dir="rtl">
            <AdminHeader />
            {children}
          </SidebarInset>
          <AdminSidebar variant="floating" dir="rtl" side="right" />
>>>>>>> be764900ead7799d51eb46dd8942fc2df48bec9a
        </SidebarProvider>
      </body>
    </html>
  );
}

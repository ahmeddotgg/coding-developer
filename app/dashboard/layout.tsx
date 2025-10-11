import type { Metadata } from "next";
import { cookies } from "next/headers";
import type { ReactNode } from "react";
import { AdminHeader } from "@/app/dashboard/_components/admin-header";
import { AdminSidebar } from "@/app/dashboard/_components/admin-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { estedad, geistSans } from "@/lib/constants";
import "../globals.css";

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
    <html lang="en" data-scroll-behavior="smooth" dir="rtl" className="dark">
      <body className={`${geistSans.variable} ${estedad.variable}`}>
        <SidebarProvider defaultOpen={defaultOpen}>
          <AdminSidebar variant="inset" side="right" />
          <SidebarInset>
            <AdminHeader />
            {children}
          </SidebarInset>
        </SidebarProvider>
      </body>
    </html>
  );
}

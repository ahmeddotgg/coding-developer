"use client";

import {
  IconCirclePlus,
  IconDashboard,
  IconSchool,
  IconShoppingCart,
  IconUsers,
} from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar";

const links = [
  {
    title: "لوحة التحكم",
    url: "/dashboard",
    icon: IconDashboard,
  },
  {
    title: "المنتجات",
    url: "/dashboard/products",
    icon: IconShoppingCart,
  },
  {
    title: "اضافة منتج",
    url: "/dashboard/new",
    icon: IconCirclePlus,
  },
  {
    title: "الطلاب",
    url: "/dashboard/students",
    icon: IconUsers,
  },
  {
    title: "المدربين",
    url: "/dashboard/team",
    icon: IconSchool,
  },
];

export function AdminSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpenMobile } = useSidebar();

  return (
    <Sidebar {...props}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu className="space-y-2">
              {links.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    isActive={pathname === item.url}
                    tooltip={item.title}
                    size="lg"
                    asChild
                  >
                    <Link href={item.url} onClick={() => setOpenMobile(false)}>
                      {item.icon && <item.icon />}
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

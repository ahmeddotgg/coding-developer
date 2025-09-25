"use client";

import { IconChartBar, IconDashboard, IconUsers } from "@tabler/icons-react";
import type * as React from "react";
import { NavMain } from "@/app/(admin)/_components/nav-main";
import { Sidebar, SidebarContent } from "@/components/ui/sidebar";

const data = {
  navMain: [
    {
      title: "لوحة التحكم",
      url: "#",
      icon: IconDashboard,
    },
    {
      title: "البيانات",
      url: "#",
      icon: IconChartBar,
    },
    {
      title: "فريق العمل",
      url: "#",
      icon: IconUsers,
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
    </Sidebar>
  );
}

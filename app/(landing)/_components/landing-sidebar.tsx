"use client";

import { Minus, Plus, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  useSidebar,
} from "@/components/ui/sidebar";
import { services } from "./services";

const links = [
  {
    title: "الرئيسية",
    url: "/",
  },
  {
    title: "خدماتنا",
    url: "/services",
    items: services,
  },
  {
    title: "الدورات",
    url: "/courses",
  },
  {
    title: "تواصل معنا",
    url: "/contact-us",
  },
];

export function LandingSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const { setOpenMobile, isMobile } = useSidebar();

  useEffect(() => {
    if (!isMobile) return setOpenMobile(false);
  }, [isMobile, setOpenMobile]);

  if (!isMobile) return null;

  return (
    <Sidebar {...props} collapsible="offcanvas" side="right" dir="rtl">
      <SidebarHeader className="flex flex-row items-center justify-between border-b px-6 py-4">
        <Link href="/" className="w-fit">
          <Image
            src="/GPTlogo.svg"
            alt="logo"
            width={59}
            height={48}
            style={{ width: 59, height: 48 }}
            unoptimized
            priority
          />
        </Link>
        <Button
          onClick={() => setOpenMobile(false)}
          variant="outline"
          size="icon"
        >
          <X className="size-5" />
        </Button>
      </SidebarHeader>

      <SidebarContent className="p-6 pt-0">
        <SidebarGroup>
          <SidebarMenu>
            {links.map((item) => (
              <Collapsible className="group/collapsible" key={item.title}>
                <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton
                      size="lg"
                      className="cursor-pointer font-semibold text-lg"
                      isActive={pathname === item.url}
                    >
                      {item.items?.length ? (
                        <>
                          {item.title}
                          <Plus className="ms-auto group-data-[state=open]/collapsible:hidden" />
                          <Minus className="ms-auto group-data-[state=closed]/collapsible:hidden" />
                        </>
                      ) : (
                        <Link
                          href={item.url}
                          onClick={() => setOpenMobile(false)}
                          className="w-full text-start"
                        >
                          {item.title}
                        </Link>
                      )}
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.items?.length ? (
                    <CollapsibleContent className="CollapsibleContent">
                      <SidebarMenuSub className="space-y-3">
                        {item.items.map((service) => (
                          <Link
                            key={service.id}
                            href={`/services#${service.id}`}
                            className={buttonVariants({
                              variant: "link",
                              size: "default",
                              className: "justify-start text-foreground!",
                            })}
                            onClick={() => setOpenMobile(false)}
                          >
                            <service.icon className="size-4" />
                            {service.title}
                          </Link>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
              </Collapsible>
            ))}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Headroom from "react-headroom";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";
import { services } from "./services";

export const LandingHeader = () => {
  const pathname = usePathname();

  return (
    <Headroom
      onUnpin={() => {
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur();
        }
      }}
    >
      <div className="bg-card shadow">
        <div className="container flex h-20 items-center gap-2 font-semibold sm:gap-6">
          <SidebarTrigger className="min-md:hidden" />
          <Link href="/" className="flex-1 md:flex-none">
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

          <div className="hidden flex-1 md:flex">
            <NavigationMenu>
              <NavigationMenuList dir="rtl">
                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href="/" className={cn(pathname === "/" && "active")}>
                      الرئيسية
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href="/courses"
                      className={cn(pathname === "/courses" && "active")}
                    >
                      الدورات
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger>خدماتنا</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[260px] gap-4" dir="rtl">
                      <li>
                        {services.map((service) => (
                          <NavigationMenuLink key={service.id} asChild>
                            <Link
                              href={`/services#${service.id}`}
                              className="flex-row items-center gap-2"
                            >
                              <service.icon />
                              {service.title}
                            </Link>
                          </NavigationMenuLink>
                        ))}
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link
                      href="/contact-us"
                      className={cn(pathname === "/contact-us" && "active")}
                    >
                      تواصل معنا
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          <div className="hidden items-center gap-4 lg:flex [&>*]:transition-colors">
            <Link href="/sign-in" className="hover:text-primary">
              تسجيل دخول
            </Link>
            <Link
              href="/sign-up"
              className="rounded-full bg-primary px-4 py-2 text-white hover:bg-primary/95"
            >
              انشيء حساب
            </Link>
          </div>

          <Link
            href="/sign-in"
            className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90 lg:hidden"
          >
            ابدأ الان
          </Link>
        </div>
      </div>
    </Headroom>
  );
};

"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Headroom from "react-headroom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import { MobileMenu } from "./mobile-menu";

export const Header = () => {
  const pathname = usePathname();

  return (
    <Headroom>
      <div className="bg-black/5 backdrop-blur-3xl">
        <div className="container flex h-20 items-center gap-2 font-semibold sm:gap-6">
          <MobileMenu />

          <Image
            src="/GPTlogo.svg"
            alt="logo"
            width={62}
            height={80}
            priority
            style={{ height: "auto" }}
            className="ms-auto ms:me-0"
          />

          <div
            className={cn(
              "hidden flex-1 gap-4 md:flex",
              "[&>a]:transition-colors [&>a]:hover:text-primary [&>a]:hover:underline",
              `[&>a.active]:relative [&>a.active]:text-primary [&>a.active]:hover:no-underline`,
            )}
          >
            <Link className={pathname === "/" ? "active" : undefined} href="/">
              الرئيسية
            </Link>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex cursor-pointer items-center gap-1 transition-color hover:text-primary hover:underline data-[state=open]:[&>svg]:rotate-180">
                خدماتنا
                <ChevronDown className="size-4 transition-transform" />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                onCloseAutoFocus={(e) => e.preventDefault()}
                className="w-72 space-y-3 p-4 text-start text-lg"
              >
                <DropdownMenuItem>Web Development</DropdownMenuItem>
                <DropdownMenuItem>Mobile applications</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <Link
              className={pathname === "/courses" ? "active" : undefined}
              href="/courses"
            >
              الدورات
            </Link>
            <Link
              className={pathname === "/diplomas" ? "active" : undefined}
              href="/diplomas"
            >
              الدبلومات
            </Link>
            <Link
              className={pathname === "/contact-us" ? "active" : undefined}
              href="/contact-us"
            >
              تواصل معنا
            </Link>
          </div>

          <div className="hidden items-center gap-4 sm:flex [&>*]:transition-colors">
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
            className="rounded-full bg-primary px-6 py-2 text-white hover:bg-primary/90 sm:hidden"
          >
            ابدأ الان
          </Link>
        </div>
      </div>
    </Headroom>
  );
};

"use client";

import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

export const MobileMenu = () => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    if (isDesktop && open) setOpen(false);
  }, [isDesktop, open]);

  return (
    <Sheet open={open} onOpenChange={setOpen} modal={false}>
      <SheetTrigger asChild className="md:hidden">
        <Button variant="outline" size="icon">
          <Menu className="size-5" />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <Image
            src="/GPTlogo.svg"
            alt="logo"
            width={59}
            height={48}
            style={{ width: 59, height: 48 }}
            unoptimized
            priority
          />
          <SheetTitle className="sr-only" />
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col items-start gap-5 [&>a.active]:bg-primary/70 [&>a.active]:font-semibold [&>a.active]:text-background [&>a]:block [&>a]:w-full [&>a]:text-start">
          <SheetClose asChild>
            <Link
              href="/"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                pathname === "/" ? "active" : undefined,
              )}
            >
              الرئيسية
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/services"
              className={cn(
                buttonVariants({
                  variant: "ghost",
                }),
                pathname === "/services" ? "active" : undefined,
              )}
            >
              خدماتنا
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/courses"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === "/courses" ? "active" : undefined,
              )}
            >
              الدورات
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/diplomas"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === "/diplomas" ? "active" : undefined,
              )}
            >
              الدبلومات
            </Link>
          </SheetClose>

          <SheetClose asChild>
            <Link
              href="/contact-us"
              className={cn(
                buttonVariants({ variant: "ghost" }),
                pathname === "/contact-us" ? "active" : undefined,
              )}
            >
              تواصل معنا
            </Link>
          </SheetClose>
        </div>
      </SheetContent>
    </Sheet>
  );
};

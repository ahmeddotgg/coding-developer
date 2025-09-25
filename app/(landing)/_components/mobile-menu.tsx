"use client";

import { ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
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
          <SheetTitle />
          <SheetDescription></SheetDescription>
        </SheetHeader>

        <div className="flex flex-col items-start gap-5 [&>a.active]:bg-primary/70 [&>a]:block [&>a]:w-full [&>a]:text-start">
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

          <Collapsible className="w-full">
            <CollapsibleTrigger
              className={cn(
                buttonVariants({ variant: "ghost" }),
                "flex min-w-full items-center justify-between data-[state=open]:[&>svg]:rotate-180",
              )}
            >
              خدماتنا
              <ChevronDown className="size-6 transition-transform" />
            </CollapsibleTrigger>
            <CollapsibleContent
              className="CollapsibleContent space-y-3 p-6 text-sm"
              dir="ltr"
            >
              <SheetClose asChild>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === "/services" ? "active" : undefined,
                  )}
                >
                  Web Development
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  href="/services"
                  className={cn(
                    buttonVariants({ variant: "ghost" }),
                    pathname === "/services" ? "active" : undefined,
                  )}
                >
                  Mobile Applications
                </Link>
              </SheetClose>
            </CollapsibleContent>
          </Collapsible>

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

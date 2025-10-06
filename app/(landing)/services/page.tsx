import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services } from "../_components/services";

export const metadata: Metadata = {
  title: "الخدمات",
};

export default function ServeicesPage() {
  return (
    <div className="container space-y-18">
      <h1 className="text-center font-bold text-4xl">خدماتنا</h1>
      <div className="space-y-22 md:space-y-44 md:py-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex flex-col-reverse gap-4 md:flex-row md:gap-8 md:even:flex-row-reverse"
            id={service.id}
          >
            <section className="space-y-8 text-balance md:max-w-[40ch]">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-gradient-to-b from-primary/40 to-blue-400 p-2 text-background md:p-4">
                  <service.icon className="size-8" strokeWidth={3} />
                </div>
                <h2 className="font-semibold text-2xl md:text-4xl">
                  {service.title}
                </h2>
              </div>
              <p className="text-muted-foreground">{service.subTitle}</p>
              <ul className="me-5 list-disc">
                {service.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button size="lg">تواصل معنا</Button>
            </section>
            <Image
              src={service.img}
              alt={service.subTitle}
              width={1080}
              height={1024}
              className="aspect-video flex-1 overflow-hidden rounded-lg object-cover shadow-2xl"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

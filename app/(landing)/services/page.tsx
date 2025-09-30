import type { Metadata } from "next";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { services } from "../_components/services";

export const metadata: Metadata = {
  title: "الخدمات",
};

export default function ServeicesPage() {
  return (
    <div className="container space-y-12">
      <h1 className="text-center font-bold text-4xl">خدماتنا</h1>
      <div className="scroll-pt-40 space-y-36">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex gap-8 even:flex-row-reverse"
            id={service.id}
          >
            <section className="flex-1 space-y-8">
              <div className="flex items-center gap-3">
                <div className="rounded-md bg-gradient-to-b from-primary/40 to-blue-400 p-4 text-background">
                  <service.icon className="size-8" strokeWidth={3} />
                </div>
                <h2 className="font-semibold text-4xl">{service.title}</h2>
              </div>
              <p className="max-w-[40ch] text-muted-foreground">
                {service.subTitle}
              </p>
              <ul className="me-5 list-disc">
                {service.description.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <Button size="lg">اعرف المزيد</Button>
            </section>
            <section className="relative flex-1 overflow-hidden rounded-lg shadow-2xl">
              <Image
                src={service.img}
                alt={service.subTitle}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 33vw"
                className="object-cover"
              />
            </section>
          </div>
        ))}
      </div>
    </div>
  );
}

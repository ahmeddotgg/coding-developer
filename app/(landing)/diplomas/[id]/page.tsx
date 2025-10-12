import { IconCashBanknote } from "@tabler/icons-react";
import parse from "html-react-parser";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { readProducts } from "@/lib/api";
import { cn } from "@/lib/utils";
import CourseCard from "../../_components/card";

export default async function DiplomaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const products = await readProducts();

  const diploma = products.find((c) => c.id === Number(id));

  if (!diploma) return "Not Found";

  return (
    <>
      <div className="container space-y-8 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-8 md:space-y-0">
        <div className="space-y-8 md:col-start-2 md:row-start-1">
          <Image
            src={diploma.image}
            height={250}
            width={350}
            alt={diploma.title}
            className="w-full rounded-lg object-cover"
            loading="lazy"
          />
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-2 text-muted-foreground">
                <Clock className="size-5" />
                {diploma.duration}
              </p>

              <div className="flex items-center gap-2">
                <IconCashBanknote className="text-muted-foreground" />
                <div className="flex items-center gap-2">
                  <h2
                    className={cn(
                      "font-semibold text-lg",
                      diploma.discount &&
                        "text-muted-foreground text-sm line-through",
                    )}
                  >
                    {diploma.price}
                  </h2>

                  {diploma.discount && (
                    <h2 className={cn("font-bold text-2xl text-primary")}>
                      {diploma.discount}
                    </h2>
                  )}
                </div>
              </div>
            </div>
            <Button
              size="lg"
              className="w-full bg-gradient-to-l from-primary to-indigo-500 text-background hover:text-background"
            >
              سجل الأن
            </Button>
          </div>
        </div>
        <div className="space-y-6 md:col-start-1 md:row-start-1">
          <h1 className="text-balance font-bold text-2xl md:text-4xl">
            {diploma?.title}
          </h1>
          <div className="prose prose-sm">{parse(diploma.description)}</div>
        </div>
      </div>
      <div className="container space-y-6 pt-16">
        <h4 className="font-semibold text-lg">تصفح ايضاً</h4>
        <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 min-[630px]:grid-cols-2">
          {products
            .filter(
              (product) =>
                product.type === "دبلومة" && product.id !== Number(id),
            )
            .slice(0, 3)
            .map((product) => (
              <CourseCard
                id={product.id}
                category={product.category}
                description={product.description}
                duration={product.duration}
                image={product.image}
                title={product.title}
                key={product.id}
                type="diploma"
              />
            ))}
        </div>
      </div>
    </>
  );
}

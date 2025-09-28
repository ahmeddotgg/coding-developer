import { IconCashBanknote } from "@tabler/icons-react";
import { Clock } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { diplomas } from "../../_components/data";

export default async function DiplomaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const diploma = diplomas.find((c) => c.id === Number(id));

  if (!diploma) return "Not Found";

  return (
    <div className="container grid grid-cols-2 gap-4">
      <div className="space-y-8">
        <h1 className="max-w-[40ch] font-bold text-4xl">{diploma?.title}</h1>
        <div>
          <p>🎯 تفاصيل الدبلومة:</p>
          <p>{diploma.description}</p>
        </div>
      </div>
      <div className="space-y-3 overflow-hidden rounded-2xl bg-background shadow-2xl">
        <Image
          src={diploma.image}
          height={250}
          width={350}
          alt={diploma.title}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="space-y-3 p-4">
          <p className="text-muted-foreground text-sm">
            <Clock className="ms-2 inline-flex size-3.8" />
            {diploma.duration}
          </p>

          <div className="flex items-center gap-2">
            <IconCashBanknote className="text-muted-foreground" />
            <div className="flex items-center gap-2">
              <h2
                className={cn(
                  "font-semibold text-lg",
                  diploma.discountPrice &&
                    "text-muted-foreground text-sm line-through",
                )}
              >
                {diploma.price}
              </h2>

              {diploma.discountPrice && (
                <h2 className={cn("font-bold text-2xl text-primary")}>
                  {diploma.discountPrice}
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

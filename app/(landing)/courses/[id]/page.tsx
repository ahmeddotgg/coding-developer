import { IconCashBanknote } from "@tabler/icons-react";
import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courses } from "../../_components/data";

export default async function CourcePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const course = courses.find((c) => c.id === Number(id));

  if (!course) return "Not Found";

  return (
    <div className="container grid grid-cols-2 gap-4">
      <div className="space-y-8">
        <h1 className="max-w-[40ch] font-bold text-4xl">{course?.title}</h1>
        <div>
          <p>🎯 تفاصيل الدورة:</p>
          <p>{course.description}</p>
        </div>
      </div>
      <div className="space-y-3 overflow-hidden rounded-2xl bg-background shadow-2xl">
        <Image
          src={course.image}
          height={250}
          width={350}
          alt={course.title}
          className="w-full rounded-lg object-cover"
          loading="lazy"
        />
        <div className="space-y-3 p-4">
          <p className="text-muted-foreground text-sm">
            <Clock className="ms-2 inline-flex size-3.8" />
            {course.duration}
          </p>

          <div className="flex items-center gap-2">
            <IconCashBanknote className="text-muted-foreground" />
            <div className="flex items-center gap-2">
              <h2
                className={cn(
                  "font-semibold text-lg",
                  course.discountPrice &&
                    "text-muted-foreground text-sm line-through",
                )}
              >
                {course.price}
              </h2>

              {course.discountPrice && (
                <h2 className={cn("font-bold text-2xl text-primary")}>
                  {course.discountPrice}
                </h2>
              )}
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
    </div>
  );
}

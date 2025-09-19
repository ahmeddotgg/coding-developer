import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import type { Course } from "@/lib/db";

export const NewCources = async () => {
  const courses: Course[] = [];

  return (
    <div className="container space-y-16 py-22">
      <h2 className="flex flex-col items-center justify-center gap-2 font-bold text-4xl">
        اجدد الدورات
        <Image src="/vector.svg" alt="vector doodle" width={120} height={20} />
      </h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {courses.map((cource: Course) => (
          <div
            key={cource.id}
            className="flex h-full flex-col gap-4 rounded-xl border"
          >
            <Image
              src={cource.image}
              alt={cource.title}
              width={500}
              height={500}
              className="h-full w-full rounded-2xl object-cover"
            />

            <div className="space-y-1 p-4">
              <p className="text-muted-foreground text-sm">
                <Clock className="ms-2 inline-flex size-3.5" />
                {cource.duration}
              </p>
              <h2 className="font-semibold text-lg">{cource.title}</h2>
              <div className="my-4 line-clamp-2">
                <p>{cource.description}</p>
              </div>

              <Button className="w-full cursor-pointer rounded-full bg-gradient-to-l from-primary to-indigo-500">
                سجل الأن
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

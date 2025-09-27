import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { courses } from "./data";

export const NewCources = async () => {
  return (
    <div className="container space-y-16 py-22">
      <h2 className="text-center font-bold text-4xl">اجدد الدورات</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {courses.map((cource) => (
          <div
            key={cource.id}
            className="hover:-translate-y-2 flex h-full flex-col gap-4 rounded-xl border shadow transition-transform"
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

              <Link
                href={`/courses/${cource.id}`}
                className={cn(
                  buttonVariants(),
                  "w-full cursor-pointer rounded-full bg-gradient-to-l from-primary to-indigo-500",
                )}
              >
                سجل الأن
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

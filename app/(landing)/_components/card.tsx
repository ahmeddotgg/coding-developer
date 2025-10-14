import parse from "html-react-parser";
import { Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface Props {
  id: number;
  title: string;
  description: string;
  duration: string;
  category: string;
  image: string;
  price: number;
}

export default function CourseCard({
  id,
  title,
  image,
  description,
  duration,
}: Props) {
  return (
    <div className="hover:-translate-y-2 grid grid-rows-[12rem_1fr] gap-4 overflow-hidden rounded-2xl border-2 bg-gray-50 text-black shadow-2xl transition-transform">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-full w-full object-cover"
      />

      <div className="flex flex-col gap-2 px-6 py-3">
        <p className="flex items-center gap-1 text-muted-foreground text-sm">
          <Clock className="size-3.5" strokeWidth={2.8} />
          {duration}
        </p>
        <h2 className="flex-1 font-semibold text-lg">{title}</h2>
        <div className="mb-2.5 line-clamp-2 text-sm">{parse(description)}</div>

        <Link
          href={`/courses/${id}`}
          className={cn(
            buttonVariants(),
            "w-full cursor-pointer rounded-full bg-gradient-to-l from-primary to-indigo-500 font-semibold text-white hover:text-background",
          )}
        >
          سجل الأن
        </Link>
      </div>
    </div>
  );
}

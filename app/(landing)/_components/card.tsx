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
  type: "course" | "diploma";
}

export default function CourseCard({
  id,
  title,
  image,
  description,
  duration,
  type,
}: Props) {
  return (
    <div className="hover:-translate-y-2 flex h-full flex-col gap-4 rounded-xl border shadow transition-transform">
      <Image
        src={image}
        alt={title}
        width={500}
        height={500}
        className="h-full w-full rounded-2xl object-cover"
      />

      <div className="space-y-1 p-4">
        <p className="text-muted-foreground text-sm">
          <Clock className="ms-2 inline-flex size-3.5" />
          {duration}
        </p>
        <h2 className="font-semibold text-lg">{title}</h2>
        <div className="my-4 line-clamp-2">
          <p>{description}</p>
        </div>

        <Link
          href={type === "course" ? `/courses/${id}` : `/diplomas/${id}`}
          className={cn(
            buttonVariants(),
            "w-full cursor-pointer rounded-full bg-gradient-to-bl from-primary to-indigo-400 font-semibold text-background hover:text-background",
          )}
        >
          سجل الأن
        </Link>
      </div>
    </div>
  );
}

import { ArrowUpLeft, CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="space-y-8">
      <div className="container grid grid-cols-1 items-center justify-items-center gap-4 space-y-14 py-4 md:grid-cols-2 md:py-22">
        <div className="fade-in slide-in-from-right-10 flex animate-in flex-col justify-center space-y-6 text-balance text-center duration-1000 md:text-start">
          <h1 className="font-bold text-5xl leading-16 min-[545px]:text-6xl min-[545px]:leading-22">
            خطوتك الأولى نحو احتراف{" "}
            <span className="text-primary">البرمجة.</span>
          </h1>
          <p>
            خطوتك نحو المستقبل تبدأ هنا: تعلم تطوير الويب، الموبايل، والبرمجة
            الحديثة بأسلوب ممتع واحترافي، كورسات و تدريبات عملية وجهاً لوجه مع
            خبراء في مجال تطوير البرمجيات.
          </p>
          <div className="flex flex-col items-center justify-center gap-2 md:justify-start min-[400px]:flex-row min-[400px]:[&>button]:w-fit">
            <Button
              className="group w-full cursor-pointer bg-gradient-to-l from-primary to-indigo-500 min-[400px]:px-12!"
              size="lg"
            >
              أبدا الان
              <CircleChevronLeft className="group-hover:-translate-x-2 size-5 transition-transform" />
            </Button>
            <Button
              className="w-full cursor-pointer"
              variant="outline"
              size="lg"
            >
              تصفح الدورات
              <ArrowUpLeft className="size-5" />
            </Button>
          </div>
        </div>
        <Image
          src="hero.svg"
          alt="students"
          width={500}
          height={600}
          priority
          className="fade-in slide-in-from-top-10 animate-in duration-1000"
        />
      </div>
    </div>
  );
};

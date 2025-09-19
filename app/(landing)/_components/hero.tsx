import { ArrowUpLeft, CircleChevronLeft } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <div className="space-y-8">
      <div className="container grid grid-cols-1 gap-4 space-y-14 py-4 md:grid-cols-2 md:py-22">
        <div className="flex flex-col justify-center space-y-6 text-balance text-center md:text-start">
          <h1 className="font-bold text-6xl leading-22">
            خطوتك الأولى نحو احتراف{" "}
            <span className="text-primary">البرمجة.</span>
          </h1>
          <p>
            خطوتك نحو المستقبل تبدأ هنا: تعلم تطوير الويب، الموبايل، والبرمجة
            الحديثة بأسلوب ممتع واحترافي، كورسات و تدريبات عملية وجهاً لوجه مع
            خبراء في مجال تطوير البرمجيات.
          </p>
          <div className="flex items-center justify-center gap-2 md:justify-start">
            <Button className="group w-fit px-12!" size="lg">
              أبدا الان
              <CircleChevronLeft className="group-hover:-translate-x-2 size-5 transition-transform" />
            </Button>
            <Button className="w-fit" variant="outline" size="lg">
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
        />
      </div>
    </div>
  );
};

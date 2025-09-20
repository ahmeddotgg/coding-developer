import { Clock } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export const NewCources = async () => {
  const courses = [
    {
      id: 1,
      title: "كورس أساسيات البرمجة باستخدام C++",
      description:
        "تعلم أساسيات البرمجة، البرمجة الكائنية، هياكل البيانات، ومهارات حل المشكلات باستخدام لغة C++.",
      price: 3000,
      discountPrice: 2000,
      duration: "شهرين",
      category: "Programming Fundamentals",
      image: "/cources-images/c++.png",
    },
    {
      id: 2,
      title: "Frontend Development",
      description:
        "كورس متخصص في تطوير واجهات المستخدم باستخدام HTML, CSS, Bootstrap, Tailwind, JavaScript, وReact.",
      price: 5000,
      discountPrice: 4000,
      duration: "3 شهور",
      category: "Frontend",
      image: "/cources-images/frontend.png",
    },
    {
      id: 3,
      title: "Backend Development",
      description:
        "كورس متخصص في تطوير السيرفر باستخدام PHP, MySQL, Laravel 12 مع تطبيقات عملية.",
      price: 5000,
      discountPrice: 4000,
      duration: "3 شهور",
      category: "Backend",
      image: "/cources-images/backend.jpg",
    },
    {
      id: 4,
      title: "كورس الأطفال (4 مستويات)",
      description:
        "رحلة تعليمية للأطفال تبدأ بـ Scratch Jr ثم Scratch وتصميم الألعاب البسيطة، يليها أساسيات تصميم المواقع بمستوى مبسط وتنتهي بمشروع عملي وشهادة.",
      price: 3000,
      discountPrice: 1500,
      duration: "شهرين + شهرين تدريب مجاني",
      category: "Kids",
      image: "/cources-images/scratch.png",
    },
  ];

  return (
    <div className="container space-y-16 py-22">
      <h2 className="font-bold text-4xl">اجدد الدورات</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {courses.map((cource) => (
          <div
            key={cource.id}
            className="hover:-translate-y-2 flex h-full flex-col gap-4 rounded-xl border transition-transform"
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

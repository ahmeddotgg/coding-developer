import Image from "next/image";

const items = [
  {
    title: "مدربين بخبرة فعلية في السوق.",
    image: "/coach.svg",
  },
  {
    title: "تعليم عملي 100%، مش مجرد نظري.",
    image: "/teach.svg",
  },
  {
    title: "مجموعات صغيرة لضمان التفاعل.",
    image: "/group.svg",
  },
  {
    title: "مشاريع واقعية تبني بورتفوليوك.",
    image: "/project.svg",
  },
];

export const ChooseUs = () => {
  return (
    <div className="bg-indigo-400/20 py-22">
      <div className="container space-y-16">
        <h2 className="font-bold text-4xl">لماذا نحن!</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="hover:-translate-y-2 grid grid-rows-[15rem_auto] gap-6 rounded-2xl border-2 bg-white p-4 transition-transform"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="mx-auto size-full max-w-[350px]"
              />

              <h2 className="text-center font-semibold text-2xl">
                {item.title}
              </h2>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

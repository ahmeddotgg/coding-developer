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
    <div className="bg-indigo-400/30 py-22">
      <div className="container space-y-16">
        <h2 className="flex flex-col items-center justify-center gap-2 font-bold text-4xl">
          لماذا نحن!
          <Image
            src="/vector.svg"
            alt="vector doodle"
            width={120}
            height={20}
          />
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {items.map((item) => (
            <div
              key={item.title}
              className="grid grid-rows-[15rem_auto] gap-6 rounded-2xl bg-card p-4"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={800}
                height={800}
                className="size-full"
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

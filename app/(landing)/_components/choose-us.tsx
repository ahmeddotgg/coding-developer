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
    <div className="py-22">
      <div className="container space-y-12">
        <h2 className="text-center font-bold text-4xl">لماذا نحن؟</h2>

        <div className="flex flex-col gap-4 min-[910px]:flex-row">
          <div className="w-full rounded-2xl bg-neutral-950 min-[910px]:w-fit">
            <video
              controls
              className="mx-auto w-full max-w-[370px] rounded-2xl"
              preload="true"
            >
              <track kind="captions" />
              <source src="coding-developer.mp4" type="video/mp4" />
            </video>
          </div>

          <div className="grid flex-1 gap-4 min-[440px]:grid-cols-2 min-[940px]:grid-cols-1">
            {items.map((item) => (
              <div
                key={item.title}
                className="hover:-translate-y-1 flex flex-col items-center justify-between gap-8 rounded-2xl border bg-gradient-to-tl from-gray-50 to-sky-600/20 p-4 text-center text-black shadow-sm transition-transform min-[940px]:flex-row min-[940px]:text-start dark:bg-gray-50"
              >
                <div>
                  <h2 className="max-w-[12ch] text-balance font-semibold text-2xl">
                    {item.title}
                  </h2>
                </div>
                <Image
                  src={item.image}
                  alt={item.title}
                  width={250}
                  height={250}
                  style={{ width: "auto", height: "auto" }}
                  unoptimized
                  className="min-[940px]:max-w-[220px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

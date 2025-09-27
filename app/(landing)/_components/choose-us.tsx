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
    <div className="bg-indigo-200/60 py-22">
      <div className="container space-y-12">
        <h2 className="text-center font-bold text-4xl">لماذا نحن؟</h2>
        <div className="overflow-hidden rounded-2xl bg-foreground">
          <video width="320" height="240" controls className="mx-auto">
            <track kind="captions" />
            <source src="coding-developer.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="hover:-translate-y-2 flex flex-col gap-4 rounded-2xl bg-white p-4 shadow transition-transform md:flex-row"
            >
              <div>
                <h2 className="line-clamp-2 font-semibold text-lg">
                  {item.title}
                </h2>
              </div>
              <Image
                src={item.image}
                alt={item.title}
                width={700}
                height={700}
                className="me-auto flex-1 md:max-w-[170px]"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

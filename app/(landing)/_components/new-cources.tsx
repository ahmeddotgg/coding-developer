import { readProducts } from "@/lib/api";
import CourseCard from "./card";

export const NewCources = async () => {
  const products = await readProducts();

  return (
    <div className="container space-y-16 py-22">
      <h2 className="text-center font-bold text-4xl">اجدد الدورات</h2>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 md:grid-cols-3 min-[630px]:grid-cols-2">
        {products
          .sort((a, b) => Number(b.id) - Number(a.id))
          .slice(0, 3)
          .map((product) => (
            <CourseCard {...product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

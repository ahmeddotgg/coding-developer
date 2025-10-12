import type { Metadata } from "next";
import { readProducts } from "@/lib/api";
import CourseCard from "../_components/card";

export const metadata: Metadata = {
  title: "الدبلومات",
};

export default async function DiplomasPage() {
  const products = await readProducts();

  return (
    <div className="container space-y-18">
      <h1 className="text-center font-bold text-4xl">الدبلومات</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {products
          .filter((product) => product.type === "دبلومة")
          .map((product) => (
            <CourseCard
              id={product.id}
              category={product.category}
              description={product.description}
              duration={product.duration}
              image={product.image}
              title={product.title}
              key={product.id}
              type="diploma"
            />
          ))}
      </div>
    </div>
  );
}

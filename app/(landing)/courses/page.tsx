import type { Metadata } from "next";
import { readProducts } from "@/lib/api";
import CourseCard from "../_components/card";

export const metadata: Metadata = {
  title: "الدورات",
};

export default async function CoursesPage() {
  const products = await readProducts();

  return (
    <div className="container space-y-18 py-8 sm:py-24">
      <h1 className="text-center font-bold text-4xl">الدورات</h1>
      <div className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-3 min-[630px]:grid-cols-2">
        {products.map((product) => (
          <CourseCard {...product} key={product.id} />
        ))}
      </div>
    </div>
  );
}

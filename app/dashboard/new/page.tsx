import type { Metadata } from "next";
import { ProductForm } from "../_components/product-form";

export const metadata: Metadata = {
  title: "اضافة منتج",
};

export default function New() {
  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 sm:space-y-12 sm:px-8 sm:py-18">
      <h1 className="text-start font-bold text-3xl">أضافة منتج</h1>
      <ProductForm />
    </div>
  );
}

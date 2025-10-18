import type { Metadata } from "next";
import { readProducts } from "@/lib/api";
import { columns } from "./_components/columns";
import { ProductsTable } from "./_components/table";

export const metadata: Metadata = {
  title: "المنتجات",
};

export default async function ProductsPage() {
  const products = await readProducts();

  return (
    <div className="mx-auto w-full max-w-4xl space-y-6 px-4 py-8 sm:space-y-12 sm:px-8 sm:py-18">
      <h1 className="text-start font-bold text-3xl">قائمة المنتجات</h1>
      <ProductsTable columns={columns} data={products} />
    </div>
  );
}

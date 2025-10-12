import { create } from "zustand";
import type { ProductFormValues } from "@/lib/types";

export interface Product extends Omit<ProductFormValues, "image"> {
  id: number;
  image: string;
}

interface ProductState {
  products: Product[];
  addProduct: (data: ProductFormValues) => Promise<Product>;
  fetchProducts: () => Promise<void>;
}

export const useProductStore = create<ProductState>((set) => ({
  products: [],

  addProduct: async (data) => {
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      if (key === "image" && Array.isArray(value)) {
        formData.append("image", value[0]);
      } else {
        formData.append(key, String(value));
      }
    });

    const res = await fetch("/api/products", {
      method: "POST",
      body: formData,
    });

    if (!res.ok) {
      const error = await res.json();
      throw new Error(error.message || "Failed to add product");
    }

    const newProduct = await res.json();
    set((state) => ({ products: [...state.products, newProduct] }));
    return newProduct;
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const products = await res.json();
    set({ products });
  },
}));

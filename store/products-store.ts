// store/useProductStore.ts

import { create } from "zustand";
import type { Product } from "@/lib/types";

type ProductStore = {
  products: Product[];
  loading: boolean;
  error: string | null;

  fetchProducts: () => Promise<void>;
  addProduct: (product: Product) => Promise<void>;
  updateProduct: (product: Product) => Promise<void>;
  deleteProduct: (id: number) => Promise<void>;
};

export const useProductStore = create<ProductStore>((set, get) => ({
  products: [],
  loading: false,
  error: null,

  // 🔹 Fetch all
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      set({ products: data, loading: false });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message, loading: false });
      }
    }
  },

  // 🔹 Add
  addProduct: async (product) => {
    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const created = await res.json();
      set({ products: [...get().products, created] });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      }
    }
  },

  // 🔹 Update
  updateProduct: async (product) => {
    try {
      const res = await fetch("/api/products", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(product),
      });
      const updated = await res.json();
      set({
        products: get().products.map((p) =>
          p.id === updated.id ? updated : p,
        ),
      });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      }
    }
  },

  // 🔹 Delete
  deleteProduct: async (id) => {
    try {
      await fetch("/api/products", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });
      set({ products: get().products.filter((p) => p.id !== id) });
    } catch (err) {
      if (err instanceof Error) {
        set({ error: err.message });
      }
    }
  },
}));

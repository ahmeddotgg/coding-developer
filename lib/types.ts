import type * as z from "zod";
import type { ProductFormSchema } from "./schema";

export type ProductFormValues = z.infer<typeof ProductFormSchema>;
export type StoredProduct = Omit<z.infer<typeof ProductFormSchema>, "image"> & {
  id: number;
  image: string;
};

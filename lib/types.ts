import type * as z from "zod";
import type { ProductFormSchema } from "./schema";

export type ProductFormValues = z.infer<typeof ProductFormSchema>;

export type Product = z.infer<typeof ProductFormSchema> & { id: number };

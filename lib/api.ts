import { promises as fs } from "node:fs";
import path from "node:path";
import type { StoredProduct } from "./types";

const dataFile = path.join(process.cwd(), "data/products.json");

export async function readProducts(): Promise<StoredProduct[]> {
  try {
    const data = await fs.readFile(dataFile, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

export async function writeProducts(products: StoredProduct[]) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2), "utf8");
}

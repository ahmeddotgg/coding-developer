import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import type { z } from "zod";
import { ProductFormSchema } from "@/lib/schema";

type StoredProduct = Omit<z.infer<typeof ProductFormSchema>, "image"> & {
  id: number;
  image: string;
};

const uploadDir = path.join(process.cwd(), "public/uploads");
const dataFile = path.join(process.cwd(), "data/products.json");

async function readProducts(): Promise<StoredProduct[]> {
  try {
    const data = await fs.readFile(dataFile, "utf8");
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function writeProducts(products: StoredProduct[]) {
  await fs.mkdir(path.dirname(dataFile), { recursive: true });
  await fs.writeFile(dataFile, JSON.stringify(products, null, 2), "utf8");
}

export async function POST(req: Request) {
  await fs.mkdir(uploadDir, { recursive: true });

  const form = await req.formData();

  const file = form.get("image") as File | null;
  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const filename = `${Date.now()}-${file.name}`;
  const filepath = path.join(uploadDir, filename);
  await fs.writeFile(filepath, buffer);

  const publicPath = `/uploads/${filename}`;

  // Collect other fields
  const fields = Object.fromEntries(form.entries());

  const parsed = {
    ...fields,
    price: Number(fields.price),
    discount: Number(fields.discount) || undefined,
    image: [file],
  };

  const validation = ProductFormSchema.safeParse(parsed);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }

  const newProduct: StoredProduct = {
    id: Date.now(),
    ...validation.data,
    image: publicPath,
  };

  const products = await readProducts();
  products.push(newProduct);
  await writeProducts(products);

  return NextResponse.json(newProduct, { status: 201 });
}

export async function GET() {
  const products = await readProducts();
  return NextResponse.json(products);
}

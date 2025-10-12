import { promises as fs } from "node:fs";
import path from "node:path";
import { NextResponse } from "next/server";
import { readProducts, writeProducts } from "@/lib/api";
import { ProductFormSchema } from "@/lib/schema";
import type { StoredProduct } from "@/lib/types";

const uploadDir = path.join(process.cwd(), "public/uploads");

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

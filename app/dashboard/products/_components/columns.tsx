"use client";

import type { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import type { StoredProduct } from "@/lib/types";

export const columns: ColumnDef<StoredProduct>[] = [
  {
    accessorKey: "image",
    header: "الغلاف",
    size: 80,
    cell: ({ row }) => (
      <div className="flex items-center">
        <Image
          src={row.getValue("image")}
          alt={`${row.original.title}`}
          width={80}
          height={60}
          className="rounded-xs"
          unoptimized
        />
      </div>
    ),
  },
  {
    accessorKey: "title",
    header: "اسم المنتج",
    size: 280,
    cell: ({ row }) => (
      <div className="truncate font-medium">{row.getValue("title")}</div>
    ),
  },
];

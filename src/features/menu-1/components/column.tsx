import { useState } from "react";
import type { ColumnDef } from "@tanstack/react-table";
import {
  ArrowUpDown,
  Star,
  MoreHorizontal,
  Edit2,
  Trash2,
  Eye,
} from "lucide-react";
import type { Product } from "../../../data/data-product";
import { Button } from "../../../components/ui/button";

export const columns: ColumnDef<Product>[] = [
  {
    id: "no",
    header: "No",
    cell: ({ row }) => <span className="font-bold">{row.index + 1}</span>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "ID",
    cell: ({ row }) => (
      <div className="font-mono text-gray-600">{row.getValue("id")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "Product Name",
    cell: ({ row }) => (
      <div className="font-bold text-black">{row.getValue("title")}</div>
    ),
  },
  {
    accessorKey: "description",
    header: "Description",
    cell: ({ row }) => (
      <div className="max-w-[250px] truncate text-sm text-gray-600">
        {row.getValue("description") || "-"}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "category",
    header: "Category",
    cell: ({ row }) => (
      <span className="inline-block border-2 border-black bg-blue-300 px-2 py-1 text-xs font-bold">
        {row.getValue("category")}
      </span>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="default"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="border-0 p-0 font-bold hover:bg-transparent"
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const price = Number.parseFloat(row.getValue("price"));
      return (
        <div className="font-bold text-green-600">${price.toFixed(2)}</div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const numA = Number.parseFloat(rowA.getValue("price"));
      const numB = Number.parseFloat(rowB.getValue("price"));
      return numA > numB ? 1 : numA < numB ? -1 : 0;
    },
  },
  {
    accessorKey: "rating",
    header: ({ column }) => {
      return (
        <Button
          variant="default"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="border-0 p-0 font-bold hover:bg-transparent"
        >
          Rating
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => {
      const rating = Number.parseFloat(row.getValue("rating"));
      return (
        <div className="flex items-center">
          <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
          <span className="font-bold">{rating.toFixed(1)}</span>
        </div>
      );
    },
    sortingFn: (rowA, rowB) => {
      const numA = Number.parseFloat(rowA.getValue("rating"));
      const numB = Number.parseFloat(rowB.getValue("rating"));
      return numA > numB ? 1 : numA < numB ? -1 : 0;
    },
  },
  {
    accessorKey: "stock",
    header: "Stock",
    cell: ({ row }) => (
      <div
        className={`font-bold ${(row.getValue("stock") as number) > 0 ? "text-green-600" : "text-red-600"}`}
      >
        {row.getValue("stock")}
      </div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "brand",
    header: "Brand",
    cell: ({ row }) => <div className="font-bold">{row.getValue("brand")}</div>,
    enableSorting: false,
  },
  {
    id: "actions",
    header: () => <div className="text-center font-bold">Actions</div>,
    enableHiding: false,
    cell: ({ row }) => {
      const [isOpen, setIsOpen] = useState(false);

      return (
        <div className="relative flex justify-center">
          <div className="relative">
            <Button
              variant="default"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="h-8 w-8 p-0"
            >
              <MoreHorizontal className="h-4 w-4" />
              <span className="sr-only">Open menu</span>
            </Button>
            {isOpen && (
              <div className="absolute right-0 z-50 mt-2 min-w-[180px] border-2 border-black bg-white shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <div className="border-b-2 border-black bg-yellow-100 px-3 py-2 text-sm font-bold">
                  Product Actions
                </div>

                <div className="p-1">
                  <div className="flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-blue-50">
                    <Edit2 className="mr-2 h-4 w-4 text-blue-600" />
                    Edit Product
                  </div>

                  <div className="flex cursor-pointer items-center px-3 py-2 text-sm text-red-600 hover:bg-red-50">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </div>
                </div>
                <div className="mx-1 h-px bg-black"></div>
                <div className="p-1">
                  <div className="flex cursor-pointer items-center px-3 py-2 text-sm hover:bg-gray-50">
                    <Eye className="mr-2 h-4 w-4 text-gray-600" />
                    View Details
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      );
    },
  },
];

"use client";

import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../widgets/products/DeleteDialog";
import EditDialog from "../../../../widgets/products/EditDialog";
import ViewDialog from "../../../../widgets/products/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import { deleteProduct, updateProduct } from "@/app/actions/productActions";

export type Product = {
  id: number;
  product_name: string;
  department: string;
  price: string;
  photo?: string;
};

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original.photo || "/path/to/default-image.jpg"}
        alt={row.original.product_name}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    ),
  },
  {
    accessorFn: (row) => row.product_name,
    id: "product_name",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Product Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.original.product_name}</div>
    ),
  },
  {
    accessorFn: (row) => row.price,
    id: "price",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Price
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.original.price}</div>,
  },
  {
    accessorKey: "department",
    header: () => <div className="text-center">Department</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.department}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteProduct(row.original.id);
          toast.success("Product deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateProduct(row.original.id, formData);
          toast.success("Product updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View Product Details"
            desc="Product details:"
            data={[
              { label: "Product Name", value: row.original.product_name },
              { label: "Department", value: row.original.department },
            ]}
          />
          <EditDialog
            title="Edit Product"
            desc="Update the product details below:"
            initialData={{
              product_name: row.original.product_name,
              department: row.original.department,
              price: row.original.price,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete a Product"
            desc="Are you sure you want to delete this product?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

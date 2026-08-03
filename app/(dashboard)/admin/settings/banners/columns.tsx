"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";

import Image from "next/image";

import DeleteDialog from "../../../../../widgets/banners/DeleteDialog";
import EditDialog from "../../../../../widgets/banners/EditDialog";
import ViewDialog from "@/widgets/banners/ViewDialog";

import { deleteBanner, updateBanner } from "@/app/actions/bannerActions";

import { getErrorMessages } from "@/lib/errorUtils";

export type Banner = {
  id: number;

  title: string;

  subtitle: string | null;

  image: string;

  category: "ADMISSION" | "EVENT" | "NEWS" | "PROMOTION" | "GENERAL";

  primaryButtonText: string | null;

  primaryButtonLink: string | null;

  secondaryButtonText: string | null;

  secondaryButtonLink: string | null;

  priority: number;

  isActive: boolean;

  startDate: Date | null;

  endDate: Date | null;

  createdAt: Date;
};

export const columns: ColumnDef<Banner>[] = [
  {
    accessorFn: (row) => row.title,

    id: "title",

    header: ({ column }) => (
      <Button
        variant="ghost"
        onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
      >
        Title
        <ArrowUpDown className="ml-2 h-4 w-4" />
      </Button>
    ),

    cell: ({ row }) => (
      <div className="flex items-center gap-3">
        <Image
          src={row.original.image}
          alt={row.original.title}
          width={80}
          height={45}
          className="
        rounded-md
        object-cover
        "
        />

        <div>
          <p className="font-semibold">{row.original.title}</p>

          {row.original.subtitle && (
            <p
              className="
            text-xs
            text-gray-500
            max-w-xs
            truncate
            "
            >
              {row.original.subtitle}
            </p>
          )}
        </div>
      </div>
    ),
  },

  {
    accessorKey: "category",

    header: () => <div className="text-center">Category</div>,

    cell: ({ row }) => (
      <div className="text-center">
        <span
          className="
px-3
py-1
rounded-full
text-xs
bg-purple-100
text-purple-700
"
        >
          {row.original.category}
        </span>
      </div>
    ),
  },

  {
    accessorKey: "priority",

    header: () => <div className="text-center">Priority</div>,

    cell: ({ row }) => (
      <div className="text-center">{row.original.priority}</div>
    ),
  },

  {
    accessorKey: "isActive",

    header: () => <div className="text-center">Status</div>,

    cell: ({ row }) => (
      <div className="text-center">
        <span
          className={`
px-3
py-1
rounded-full
text-xs

${
  row.original.isActive
    ? "bg-green-100 text-green-700"
    : "bg-red-100 text-red-700"
}

`}
        >
          {row.original.isActive ? "Active" : "Inactive"}
        </span>
      </div>
    ),
  },

  {
    accessorKey: "createdAt",

    header: () => <div className="text-center">Date Posted</div>,

    cell: ({ row }) => {
      const date = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium",
      }).format(new Date(row.original.createdAt));

      return <div className="text-center">{date}</div>;
    },
  },

  {
    id: "actions",

    header: () => <div className="text-center">Actions</div>,

    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteBanner(row.original.id);

          toast.success("Banner deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateBanner(row.original.id, formData);

          toast.success("Banner updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div
          className="
flex
justify-center
gap-3
"
        >
          <ViewDialog documentUrl={row.original.image} />

          <EditDialog
            title="Edit Banner"
            desc="Update banner details"
            initialData={{
              title: row.original.title,

              subtitle: row.original.subtitle,

              image: row.original.image,

              category: row.original.category,

              primaryButtonText: row.original.primaryButtonText,

              primaryButtonLink: row.original.primaryButtonLink,

              secondaryButtonText: row.original.secondaryButtonText,

              secondaryButtonLink: row.original.secondaryButtonLink,

              priority: row.original.priority,

              isActive: row.original.isActive,

              startDate: row.original.startDate,

              endDate: row.original.endDate,
            }}
            onConfirm={handleEditConfirm}
          />

          <DeleteDialog
            title="Delete Banner"
            desc="Are you sure you want to delete this banner?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/banners/DeleteDialog";
import EditDialog from "../../../../../widgets/banners/EditDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import { deleteBanner, updateBanner } from "@/app/actions/bannerActions";
import ViewDialog from "@/widgets/banners/ViewDialog";

export type Banner = {
  // Changed type name to Banner
  id: number;
  title: string;
  createdAt: Date;
  link?: string;
};

export const columns: ColumnDef<Banner>[] = [
  {
    accessorFn: (row) => row.title,
    id: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Title
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.original.title}</div>,
  },

  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">Date Posted</div>,
    cell: ({ row }) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium", // E.g., "Jan 14, 2025"
      }).format(new Date(row.original.createdAt));

      return <div className="text-center">{formattedDate}</div>;
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
        <div className="flex justify-center gap-4">
          <ViewDialog documentUrl={row.original.link} />{" "}
          <EditDialog
            title="Edit Banner"
            desc="Update the banner details below:"
            initialData={{
              title: row.original.title,
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

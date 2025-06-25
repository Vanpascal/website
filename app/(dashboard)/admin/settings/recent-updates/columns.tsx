"use client";

import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/recentUpdates/DeleteDialog";
import EditDialog from "../../../../../widgets/recentUpdates/EditDialog";
import ViewDialog from "../../../../../widgets/recentUpdates/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import {
  deleteRecentUpdate,
  updaterecentUpdate,
} from "@/app/actions/recentUpdatesActions";

export type RecentUpdates = {
  id: number;
  title: string;
  photo: string | null; // Allow null
  content: string | null; // Allow null
  createdAt: Date;
  date: Date;
};

export const columns: ColumnDef<RecentUpdates>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original.photo || "/path/to/default-image.jpg"}
        alt={row.original.title}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    ),
  },
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
          await deleteRecentUpdate(row.original.id);
          toast.success("Recent update deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updaterecentUpdate(row.original.id, formData);
          toast.success("Updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View Update"
            desc="Update details:"
            data={[
              { label: "Title", value: row.original.title },
              {
                label: "Posted On",
                value: new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(row.original.createdAt)),
              },
            ]}
          />
          <EditDialog
            title="Edit Update"
            desc="Update the Update details below:"
            initialData={{
              title: row.original.title,
              content: row.original.content ?? "",
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete a Update"
            desc="Are you sure you want to delete this update?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

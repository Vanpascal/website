"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/announcements/DeleteDialog";
import EditDialog from "../../../../../widgets/announcements/EditDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import {} from "@/app/actions/announcementActions";
import ViewDialog from "@/widgets/announcements/ViewDialog";
import { deleteDocument, updateDocument } from "@/app/actions/documentActions";

export type Announcement = {
  id: number;
  title: string;
  createdAt: Date;
  link?: string;
};

export const columns: ColumnDef<Announcement>[] = [
  {
    accessorFn: (row) => row.title,
    id: "title",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          className="font-bold"
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
    header: () => <div className="text-center font-bold">Uploaded On</div>,
    cell: ({ row }) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium", // E.g., "Jan 14, 2025"
      }).format(new Date(row.original.createdAt));

      return <div className="text-center">{formattedDate}</div>;
    },
  },
  {
    id: "actions",
    header: () => <div className="text-center font-bold">Actions</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteDocument(row.original.id);
          toast.success("Document deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateDocument(row.original.id, formData);
          toast.success("Document updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog documentUrl={row.original.link} />
          <EditDialog
            title="Edit Document"
            desc="Update the Document details below:"
            initialData={{
              title: row.original.title,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete Document"
            desc="Are you sure you want to delete this Document?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

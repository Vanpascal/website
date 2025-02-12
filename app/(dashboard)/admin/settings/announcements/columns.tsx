"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/announcements/DeleteDialog";
import EditDialog from "../../../../../widgets/announcements/EditDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import {
  deleteAnnouncement,
  updateAnnouncement,
} from "@/app/actions/announcementActions";
import ViewDialog from "@/widgets/announcements/ViewDialog";

export type Announcement = {
  id: number;
  title: string;
  link: string | null;
  createdAt: Date;
  views: number;
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
        dateStyle: "medium",
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
          await deleteAnnouncement(row.original.id);
          toast.success("Announcement deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateAnnouncement(row.original.id, formData);
          toast.success("Announcement updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog documentUrl={row.original.link} />
          <EditDialog
            title="Edit Announcement"
            desc="Update the announcement details below:"
            initialData={{
              title: row.original.title,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete Announcement"
            desc="Are you sure you want to delete this announcement?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

"use client";

import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/comments/DeleteDialog";
import EditDialog from "../../../../../widgets/comments/EditDialog";
import ViewDialog from "../../../../../widgets/comments/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import { deleteComment, updateComment } from "@/app/actions/commentsActions";

export type Comments = {
  id: number;
  author: string;
  content: string;
  whoComment: string;
  createdAt: Date;
  photo?: string | null;
};

export const columns: ColumnDef<Comments>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) =>
      row.original.photo ? (
        <Image
          src={row.original.photo}
          alt={row.original.author}
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
      ) : (
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>
      ),
  },

  {
    accessorFn: (row) => row.author,
    id: "author",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Author
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => <div className="text-center">{row.original.author}</div>,
  },
  {
    accessorKey: "content",
    header: () => <div className="text-center">Contents</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.content}</div>
    ),
  },
  {
    accessorKey: "whocomment",
    header: () => <div className="text-center">Who Commented</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.whoComment}</div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: () => <div className="text-center">Day Commented</div>,
    cell: ({ row }) => {
      const formattedDate = new Intl.DateTimeFormat("en-US", {
        dateStyle: "medium", // E.g., "Jan 14, 2025"
        timeStyle: "short", // E.g., "5:34 PM"
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
          await deleteComment(row.original.id);
          toast.success("Comment deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateComment(row.original.id, formData);
          toast.success("Comment updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View Comment"
            desc="Comment details:"
            data={[
              { label: "Author", value: row.original.author },
              { label: "Who Commented", value: row.original.whoComment },
              {
                label: "Posted On",
                value: new Intl.DateTimeFormat("en-US", {
                  dateStyle: "medium",
                }).format(new Date(row.original.createdAt)),
              },
            ]}
          />
          <EditDialog
            title="Edit Comment"
            desc="Update the comment details below:"
            initialData={{
              author: row.original.author,
              content: row.original.content,
              whocomment: row.original.whoComment,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete a Comment"
            desc="Are you sure you want to delete this comment?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

"use client";

import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../widgets/courses/DeleteDialog";
import EditDialog from "../../../../widgets/courses/EditDialog";
import ViewDialog from "../../../../widgets/courses/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import { deleteCourse, updateCourse } from "@/app/actions/coursesActions";

export type Comments = {
  id: number;
  coursename: string;
  duration: string;
  courseType: string;
  description: string;
  createdAt: Date;
  photo?: string | null;
};

export const columns: ColumnDef<Comments>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original.photo || "/path/to/default-image.jpg"}
        alt={row.original.coursename}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    ),
  },
  {
    accessorFn: (row) => row.coursename,
    id: "coursename",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Course Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">{row.original.coursename}</div>
    ),
  },
  {
    accessorKey: "courseType",
    header: () => <div className="text-center">Course Type</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.courseType}</div>
    ),
  },
  {
    accessorKey: "description",
    header: () => <div className="text-center">Course Descriptions</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.description}</div>
    ),
  },
  {
    accessorKey: "duration",
    header: () => <div className="text-center">Course Duration</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.duration}</div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteCourse(row.original.id);
          toast.success("Course deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateCourse(row.original.id, formData);
          toast.success("Course updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View Course Details"
            desc="Course details:"
            data={[
              { label: "Course Name", value: row.original.coursename },
              { label: "Type", value: row.original.courseType },
              { label: "Duration", value: row.original.duration },
              { label: "Description", value: row.original.description },
              {
                label: "Date created",
                value: row.original.createdAt.toISOString(),
              },
            ]}
          />
          <EditDialog
            title="Edit Course"
            desc="Update the course details below:"
            initialData={{
              coursename: row.original.coursename,
              courseType: row.original.courseType,
              duration: row.original.duration,
              description: row.original.description,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete a course"
            desc="Are you sure you want to delete this course?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

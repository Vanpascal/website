"use client";

import Image from "next/legacy/image";
import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../../widgets/staff/DeleteDialog";
import EditDialog from "../../../../../widgets/staff/EditDialog";
import ViewDialog from "../../../../../widgets/staff/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";
import { deleteEmployee, updateEmployee } from "@/app/actions/staffActions";

export type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  category: string;
  position: string | null;
  photo: string | null;
  createdAt: Date;
  updatedAt: Date;
  department: string | null;
};

export const columns: ColumnDef<Employee>[] = [
  {
    accessorKey: "photo",
    header: "Photo",
    cell: ({ row }) => (
      <Image
        src={row.original.photo || "/path/to/default-image.jpg"}
        alt={`${row.original.firstname} ${row.original.lastname}`}
        width={40}
        height={40}
        className="rounded-full object-cover"
      />
    ),
  },
  {
    accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    id: "fullname",
    header: ({ column }) => {
      return (
        <Button
          className="font-bold"
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Full Name
          <ArrowUpDown className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    cell: ({ row }) => (
      <div className="text-center">
        {`${row.original.firstname} ${row.original.lastname}`}
      </div>
    ),
  },
  {
    accessorKey: "category",
    header: () => <div className="text-center font-bold">Unit Level</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.category}</div>
    ),
  },
  {
    accessorKey: "position",
    header: () => <div className="text-center font-bold">Position</div>,
    cell: ({ row }) => (
      <div className="text-center">{row.original.position}</div>
    ),
  },
  {
    accessorKey: "email",
    header: () => <div className="text-center font-bold">Email</div>,
    cell: ({ row }) => <div className="text-center">{row.original.email}</div>,
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-center font-bold">Phone</div>,
    cell: ({ row }) => <div className="text-center">{row.original.phone}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-center font-bold">Actions</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteEmployee(row.original.id);
          toast.success("Employee deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (formData: FormData) => {
        try {
          await updateEmployee(row.original.id, formData);
          toast.success("Employee updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View Employee"
            desc="Employee details:"
            data={[
              { label: "First Name", value: row.original.firstname },
              { label: "Last Name", value: row.original.lastname },
              { label: "Category", value: row.original.category },
              { label: "Email", value: row.original.email },
              { label: "Phone", value: row.original.phone },
            ]}
          />
          <EditDialog
            title="Edit Employee"
            desc="Update the Employee details below:"
            initialData={{
              firstname: row.original.firstname,
              lastname: row.original.lastname,
              email: row.original.email,
              phone: row.original.phone,
              category: row.original.category,
              position: row.original.position ?? "",
              department: row.original.department ?? "",
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete Employee"
            desc="Are you sure you want to delete this Employee?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

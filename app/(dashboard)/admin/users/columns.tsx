"use client";

import { Button } from "@/components/ui/button";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpDown } from "lucide-react";
import { updateUser, deleteUser } from "@/app/actions/userActions";
import { toast } from "react-toastify";
import DeleteDialog from "../../../../widgets/users/DeleteDialog";
import EditDialog from "../../../../widgets/users/EditDialog";
import ViewDialog from "../../../../widgets/users/ViewDialog";
import { getErrorMessages } from "@/lib/errorUtils";

export type Users = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
};

export const columns: ColumnDef<Users>[] = [
  {
    accessorFn: (row) => `${row.firstname} ${row.lastname}`,
    id: "fullname",
    header: ({ column }) => {
      return (
        <Button
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
    accessorKey: "email",
    header: () => <div className="text-center">Email</div>,
    cell: ({ row }) => <div className="text-center">{row.original.email}</div>,
  },
  {
    accessorKey: "phone",
    header: () => <div className="text-center">Phone</div>,
    cell: ({ row }) => <div className="text-center">{row.original.phone}</div>,
  },
  {
    id: "actions",
    header: () => <div className="text-center">Actions</div>,
    cell: ({ row }) => {
      const handleDelete = async () => {
        try {
          await deleteUser(row.original.id);
          toast.success("User deleted successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      const handleEditConfirm = async (data: {
        firstname: string;
        lastname: string;
        email: string;
        phone: string;
      }) => {
        const formData = new FormData();
        formData.append("firstname", data.firstname);
        formData.append("lastname", data.lastname);
        formData.append("email", data.email);
        formData.append("phone", data.phone);

        try {
          await updateUser(row.original.id, formData);
          toast.success("User updated successfully!");
        } catch (error) {
          toast.error(getErrorMessages(error));
        }
      };

      return (
        <div className="flex justify-center gap-4">
          <ViewDialog
            title="View User"
            desc="User details:"
            data={[
              { label: "First Name", value: row.original.firstname },
              { label: "Last Name", value: row.original.lastname },
              { label: "Email", value: row.original.email },
              { label: "Phone", value: row.original.phone },
            ]}
          />
          <EditDialog
            title="Edit User"
            desc="Update the user details below:"
            initialData={{
              firstname: row.original.firstname,
              lastname: row.original.lastname,
              email: row.original.email,
              phone: row.original.phone,
            }}
            onConfirm={handleEditConfirm}
          />
          <DeleteDialog
            title="Delete User"
            desc="Are you sure you want to delete this user?"
            onConfirm={handleDelete}
          />
        </div>
      );
    },
  },
];

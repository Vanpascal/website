"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const userActions_1 = require("@/app/actions/userActions");
const react_toastify_1 = require("react-toastify");
const DeleteDialog_1 = __importDefault(require("../../../../widgets/users/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../widgets/users/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../widgets/users/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
exports.columns = [
    {
        accessorFn: (row) => `${row.firstname} ${row.lastname}`,
        id: "fullname",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Full Name
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => (<div className="text-center">
        {`${row.original.firstname} ${row.original.lastname}`}
      </div>),
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
                    await (0, userActions_1.deleteUser)(row.original.id);
                    react_toastify_1.toast.success("User deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (data) => {
                const formData = new FormData();
                formData.append("firstname", data.firstname);
                formData.append("lastname", data.lastname);
                formData.append("email", data.email);
                formData.append("phone", data.phone);
                try {
                    await (0, userActions_1.updateUser)(row.original.id, formData);
                    react_toastify_1.toast.success("User updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View User" desc="User details:" data={[
                    { label: "First Name", value: row.original.firstname },
                    { label: "Last Name", value: row.original.lastname },
                    { label: "Email", value: row.original.email },
                    { label: "Phone", value: row.original.phone },
                ]}/>
          <EditDialog_1.default title="Edit User" desc="Update the user details below:" initialData={{
                    firstname: row.original.firstname,
                    lastname: row.original.lastname,
                    email: row.original.email,
                    phone: row.original.phone,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete User" desc="Are you sure you want to delete this user?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

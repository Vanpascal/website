"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const image_1 = __importDefault(require("next/legacy/image"));
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const react_toastify_1 = require("react-toastify");
const DeleteDialog_1 = __importDefault(require("../../../../../widgets/staff/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../../widgets/staff/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../../widgets/staff/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const staffActions_1 = require("@/app/actions/staffActions");
exports.columns = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => (<image_1.default src={row.original.photo || "/path/to/default-image.jpg"} alt={`${row.original.firstname} ${row.original.lastname}`} width={40} height={40} className="rounded-full object-cover"/>),
    },
    {
        accessorFn: (row) => `${row.firstname} ${row.lastname}`,
        id: "fullname",
        header: ({ column }) => {
            return (<button_1.Button className="font-bold" variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Full Name
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => (<div className="text-center">
        {`${row.original.firstname} ${row.original.lastname}`}
      </div>),
    },
    {
        accessorKey: "category",
        header: () => <div className="text-center font-bold">Unit Level</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.category}</div>),
    },
    {
        accessorKey: "position",
        header: () => <div className="text-center font-bold">Position</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.position}</div>),
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
            var _a, _b;
            const handleDelete = async () => {
                try {
                    await (0, staffActions_1.deleteEmployee)(row.original.id);
                    react_toastify_1.toast.success("Employee deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, staffActions_1.updateEmployee)(row.original.id, formData);
                    react_toastify_1.toast.success("Employee updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View Employee" desc="Employee details:" data={[
                    { label: "First Name", value: row.original.firstname },
                    { label: "Last Name", value: row.original.lastname },
                    { label: "Category", value: row.original.category },
                    { label: "Email", value: row.original.email },
                    { label: "Phone", value: row.original.phone },
                ]}/>
          <EditDialog_1.default title="Edit Employee" desc="Update the Employee details below:" initialData={{
                    firstname: row.original.firstname,
                    lastname: row.original.lastname,
                    email: row.original.email,
                    phone: row.original.phone,
                    category: row.original.category,
                    position: (_a = row.original.position) !== null && _a !== void 0 ? _a : "",
                    department: (_b = row.original.department) !== null && _b !== void 0 ? _b : "",
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete Employee" desc="Are you sure you want to delete this Employee?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

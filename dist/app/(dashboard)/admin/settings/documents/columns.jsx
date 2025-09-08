"use strict";
"use client";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.columns = void 0;
const button_1 = require("@/components/ui/button");
const lucide_react_1 = require("lucide-react");
const react_toastify_1 = require("react-toastify");
const DeleteDialog_1 = __importDefault(require("../../../../../widgets/announcements/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../../widgets/announcements/EditDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const ViewDialog_1 = __importDefault(require("@/widgets/announcements/ViewDialog"));
const documentActions_1 = require("@/app/actions/documentActions");
exports.columns = [
    {
        accessorFn: (row) => row.title,
        id: "title",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")} className="font-bold">
          Title
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
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
                    await (0, documentActions_1.deleteDocument)(row.original.id);
                    react_toastify_1.toast.success("Document deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, documentActions_1.updateDocument)(row.original.id, formData);
                    react_toastify_1.toast.success("Document updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default documentUrl={row.original.link}/>
          <EditDialog_1.default title="Edit Document" desc="Update the Document details below:" initialData={{
                    title: row.original.title,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete Document" desc="Are you sure you want to delete this Document?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

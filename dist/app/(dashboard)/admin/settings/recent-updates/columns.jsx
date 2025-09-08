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
const DeleteDialog_1 = __importDefault(require("../../../../../widgets/recentUpdates/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../../widgets/recentUpdates/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../../widgets/recentUpdates/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const recentUpdatesActions_1 = require("@/app/actions/recentUpdatesActions");
exports.columns = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => (<image_1.default src={row.original.photo || "/path/to/default-image.jpg"} alt={row.original.title} width={40} height={40} className="rounded-full object-cover"/>),
    },
    {
        accessorFn: (row) => row.title,
        id: "title",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Title
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
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
            var _a;
            const handleDelete = async () => {
                try {
                    await (0, recentUpdatesActions_1.deleteRecentUpdate)(row.original.id);
                    react_toastify_1.toast.success("Recent update deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, recentUpdatesActions_1.updaterecentUpdate)(row.original.id, formData);
                    react_toastify_1.toast.success("Updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View Update" desc="Update details:" data={[
                    { label: "Title", value: row.original.title },
                    {
                        label: "Posted On",
                        value: new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                        }).format(new Date(row.original.createdAt)),
                    },
                ]}/>
          <EditDialog_1.default title="Edit Update" desc="Update the Update details below:" initialData={{
                    title: row.original.title,
                    content: (_a = row.original.content) !== null && _a !== void 0 ? _a : "",
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete a Update" desc="Are you sure you want to delete this update?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

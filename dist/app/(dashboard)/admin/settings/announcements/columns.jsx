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
const announcementActions_1 = require("@/app/actions/announcementActions");
const ViewDialog_1 = __importDefault(require("@/widgets/announcements/ViewDialog"));
exports.columns = [
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
                    await (0, announcementActions_1.deleteAnnouncement)(row.original.id);
                    react_toastify_1.toast.success("Announcement deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, announcementActions_1.updateAnnouncement)(row.original.id, formData);
                    react_toastify_1.toast.success("Announcement updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default documentUrl={row.original.link}/>
          <EditDialog_1.default title="Edit Announcement" desc="Update the announcement details below:" initialData={{
                    title: row.original.title,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete Announcement" desc="Are you sure you want to delete this announcement?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

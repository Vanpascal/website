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
const DeleteDialog_1 = __importDefault(require("../../../../../widgets/comments/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../../widgets/comments/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../../widgets/comments/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const commentsActions_1 = require("@/app/actions/commentsActions");
exports.columns = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => row.original.photo ? (<image_1.default src={row.original.photo} alt={row.original.author} width={40} height={40} className="rounded-full object-cover"/>) : (<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
          <span className="text-gray-500">No Image</span>
        </div>),
    },
    {
        accessorFn: (row) => row.author,
        id: "author",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Author
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => <div className="text-center">{row.original.author}</div>,
    },
    {
        accessorKey: "content",
        header: () => <div className="text-center">Contents</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.content}</div>),
    },
    {
        accessorKey: "whocomment",
        header: () => <div className="text-center">Who Commented</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.whoComment}</div>),
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
                    await (0, commentsActions_1.deleteComment)(row.original.id);
                    react_toastify_1.toast.success("Comment deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, commentsActions_1.updateComment)(row.original.id, formData);
                    react_toastify_1.toast.success("Comment updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View Comment" desc="Comment details:" data={[
                    { label: "Author", value: row.original.author },
                    { label: "Who Commented", value: row.original.whoComment },
                    {
                        label: "Posted On",
                        value: new Intl.DateTimeFormat("en-US", {
                            dateStyle: "medium",
                        }).format(new Date(row.original.createdAt)),
                    },
                ]}/>
          <EditDialog_1.default title="Edit Comment" desc="Update the comment details below:" initialData={{
                    author: row.original.author,
                    content: row.original.content,
                    whocomment: row.original.whoComment,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete a Comment" desc="Are you sure you want to delete this comment?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

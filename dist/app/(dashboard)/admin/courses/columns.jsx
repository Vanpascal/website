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
const DeleteDialog_1 = __importDefault(require("../../../../widgets/courses/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../widgets/courses/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../widgets/courses/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const coursesActions_1 = require("@/app/actions/coursesActions");
exports.columns = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => (<image_1.default src={row.original.photo || "/path/to/default-image.jpg"} alt={row.original.coursename} width={40} height={40} className="rounded-full object-cover"/>),
    },
    {
        accessorFn: (row) => row.coursename,
        id: "coursename",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Course Name
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => (<div className="text-center">{row.original.coursename}</div>),
    },
    {
        accessorKey: "courseType",
        header: () => <div className="text-center">Course Type</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.courseType}</div>),
    },
    {
        accessorKey: "description",
        header: () => <div className="text-center">Course Descriptions</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.description}</div>),
    },
    {
        accessorKey: "duration",
        header: () => <div className="text-center">Course Duration</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.duration}</div>),
    },
    {
        id: "actions",
        header: () => <div className="text-center">Actions</div>,
        cell: ({ row }) => {
            const handleDelete = async () => {
                try {
                    await (0, coursesActions_1.deleteCourse)(row.original.id);
                    react_toastify_1.toast.success("Course deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, coursesActions_1.updateCourse)(row.original.id, formData);
                    react_toastify_1.toast.success("Course updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View Course Details" desc="Course details:" data={[
                    { label: "Course Name", value: row.original.coursename },
                    { label: "Type", value: row.original.courseType },
                    { label: "Duration", value: row.original.duration },
                    { label: "Description", value: row.original.description },
                    {
                        label: "Date created",
                        value: row.original.createdAt.toISOString(),
                    },
                ]}/>
          <EditDialog_1.default title="Edit Course" desc="Update the course details below:" initialData={{
                    coursename: row.original.coursename,
                    courseType: row.original.courseType,
                    duration: row.original.duration,
                    description: row.original.description,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete a course" desc="Are you sure you want to delete this course?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

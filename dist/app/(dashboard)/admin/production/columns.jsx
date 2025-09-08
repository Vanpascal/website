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
const DeleteDialog_1 = __importDefault(require("../../../../widgets/products/DeleteDialog"));
const EditDialog_1 = __importDefault(require("../../../../widgets/products/EditDialog"));
const ViewDialog_1 = __importDefault(require("../../../../widgets/products/ViewDialog"));
const errorUtils_1 = require("@/lib/errorUtils");
const productActions_1 = require("@/app/actions/productActions");
exports.columns = [
    {
        accessorKey: "photo",
        header: "Photo",
        cell: ({ row }) => (<image_1.default src={row.original.photo || "/path/to/default-image.jpg"} alt={row.original.product_name} width={40} height={40} className="rounded-full object-cover"/>),
    },
    {
        accessorFn: (row) => row.product_name,
        id: "product_name",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Product Name
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => (<div className="text-center">{row.original.product_name}</div>),
    },
    {
        accessorFn: (row) => row.price,
        id: "price",
        header: ({ column }) => {
            return (<button_1.Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}>
          Price
          <lucide_react_1.ArrowUpDown className="ml-2 h-4 w-4"/>
        </button_1.Button>);
        },
        cell: ({ row }) => <div className="text-center">{row.original.price}</div>,
    },
    {
        accessorKey: "department",
        header: () => <div className="text-center">Department</div>,
        cell: ({ row }) => (<div className="text-center">{row.original.department}</div>),
    },
    {
        id: "actions",
        header: () => <div className="text-center">Actions</div>,
        cell: ({ row }) => {
            const handleDelete = async () => {
                try {
                    await (0, productActions_1.deleteProduct)(row.original.id);
                    react_toastify_1.toast.success("Product deleted successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            const handleEditConfirm = async (formData) => {
                try {
                    await (0, productActions_1.updateProduct)(row.original.id, formData);
                    react_toastify_1.toast.success("Product updated successfully!");
                }
                catch (error) {
                    react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
                }
            };
            return (<div className="flex justify-center gap-4">
          <ViewDialog_1.default title="View Product Details" desc="Product details:" data={[
                    { label: "Product Name", value: row.original.product_name },
                    { label: "Department", value: row.original.department },
                ]}/>
          <EditDialog_1.default title="Edit Product" desc="Update the product details below:" initialData={{
                    product_name: row.original.product_name,
                    department: row.original.department,
                    price: row.original.price,
                }} onConfirm={handleEditConfirm}/>
          <DeleteDialog_1.default title="Delete a Product" desc="Are you sure you want to delete this product?" onConfirm={handleDelete}/>
        </div>);
        },
    },
];

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddProducts;
const react_1 = require("react");
const ActionModal_1 = __importDefault(require("@/widgets/ActionModal"));
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const button_1 = require("@/components/ui/button");
const errorUtils_1 = require("@/lib/errorUtils");
const form_1 = require("@/components/ui/form");
const select_1 = require("@/components/ui/select");
const input_1 = require("@/components/ui/input");
const react_toastify_1 = require("react-toastify");
const productActions_1 = require("@/app/actions/productActions");
const formSchema = zod_2.z.object({
    product_name: zod_2.z
        .string()
        .min(2, { message: "Product name should be at least 2 characters long." })
        .max(50, { message: "Product name should not exceed 50 characters." })
        .trim(),
    department: zod_2.z.string().min(1, { message: "Department is required." }).trim(),
    price: zod_2.z
        .string()
        .refine((val) => !isNaN(parseFloat(val)), {
        message: "Price must be a valid number.",
    })
        .refine((val) => parseFloat(val) > 0, {
        message: "Price must be greater than 0.",
    }),
});
function AddProducts() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            product_name: "",
            department: "",
            price: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("product_name", values.product_name);
        formData.append("department", values.department);
        formData.append("price", values.price);
        const photoInput = document.querySelector('input[name="photo"]');
        if ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            const photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 5 * 1024 * 1024;
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 5MB");
                return;
            }
            formData.append("photo", photoFile);
        }
        try {
            await (0, productActions_1.createProduct)(formData);
            react_toastify_1.toast.success("Product added successfully!");
        }
        catch (error) {
            react_toastify_1.toast.error((0, errorUtils_1.getErrorMessages)(error));
        }
        finally {
            form.reset();
            setOpen(false);
        }
    }
    return (<div className="grid gap-4">
      <ActionModal_1.default title="Add a Product" desc="Fill in the details to add a new product." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add Product
          </button_1.Button>}>
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <form_1.FormField control={form.control} name="product_name" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Product Name</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Product name" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="department" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Department</form_1.FormLabel>
                    <select_1.Select onValueChange={field.onChange} defaultValue={field.value}>
                      <form_1.FormControl>
                        <select_1.SelectTrigger>
                          <select_1.SelectValue placeholder="Select a department"/>
                        </select_1.SelectTrigger>
                      </form_1.FormControl>
                      <select_1.SelectContent>
                        <select_1.SelectItem value="Carpentry">Carpentry</select_1.SelectItem>
                        <select_1.SelectItem value="Tailoring">Tailoring</select_1.SelectItem>
                        <select_1.SelectItem value="Printing">Printing</select_1.SelectItem>
                        <select_1.SelectItem value="Welding">Welding</select_1.SelectItem>
                      </select_1.SelectContent>
                    </select_1.Select>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>
            <form_1.FormField control={form.control} name="price" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Price</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="Enter price (e.g., 50.00)" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>
            <form_1.FormItem>
              <form_1.FormLabel>Photo</form_1.FormLabel>
              <form_1.FormControl>
                <input_1.Input type="file" name="photo"/>
              </form_1.FormControl>
              <form_1.FormMessage />
            </form_1.FormItem>

            {isLoading ? (<button_1.Button className="w-full" disabled>
                Submitting...
              </button_1.Button>) : (<button_1.Button type="submit" className="w-full">
                Submit
              </button_1.Button>)}
          </form>
        </form_1.Form>
      </ActionModal_1.default>
    </div>);
}

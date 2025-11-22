"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditDialog;
const alert_dialog_1 = require("@/components/ui/alert-dialog");
const select_1 = require("@/components/ui/select");
const form_1 = require("@/components/ui/form");
const react_hook_form_1 = require("react-hook-form");
const zod_1 = require("@hookform/resolvers/zod");
const zod_2 = require("zod");
const react_1 = require("react");
const button_1 = require("@/components/ui/button");
const fa_1 = require("react-icons/fa");
const input_1 = require("@/components/ui/input");
const react_toastify_1 = require("react-toastify");
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
function EditDialog({ title, desc, initialData, onConfirm, }) {
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: initialData,
    });
    const isLoading = form.formState.isSubmitting;
    (0, react_1.useEffect)(() => {
        form.reset(initialData);
    }, [initialData, form]);
    async function onSubmit(values) {
        var _a;
        const photoInput = document.querySelector('input[name="photo"]');
        let photoFile;
        if ((_a = photoInput === null || photoInput === void 0 ? void 0 : photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 5 * 1024 * 1024;
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 5MB");
                return;
            }
        }
        const formData = new FormData();
        formData.append("product_name", values.product_name);
        formData.append("department", values.department);
        formData.append("price", values.price);
        if (photoFile) {
            formData.append("photo", photoFile);
        }
        onConfirm(formData);
    }
    return (<alert_dialog_1.AlertDialog>
      <alert_dialog_1.AlertDialogTrigger asChild>
        <button_1.Button variant="ghost" className="h-10 w-10 p-0 hover:bg-yellow-200 focus:outline-none transition-colors" title="Edit Course">
          <fa_1.FaEdit className="h-6 w-6 text-green-500"/>
        </button_1.Button>
      </alert_dialog_1.AlertDialogTrigger>
      <alert_dialog_1.AlertDialogContent>
        <alert_dialog_1.AlertDialogHeader>
          <alert_dialog_1.AlertDialogTitle>{title}</alert_dialog_1.AlertDialogTitle>
          <alert_dialog_1.AlertDialogDescription>{desc}</alert_dialog_1.AlertDialogDescription>
        </alert_dialog_1.AlertDialogHeader>
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
              </button_1.Button>) : (<alert_dialog_1.AlertDialogFooter>
                <alert_dialog_1.AlertDialogCancel>Cancel</alert_dialog_1.AlertDialogCancel>
                <alert_dialog_1.AlertDialogAction type="submit">
                  Save Changes
                </alert_dialog_1.AlertDialogAction>
              </alert_dialog_1.AlertDialogFooter>)}
          </form>
        </form_1.Form>
      </alert_dialog_1.AlertDialogContent>
    </alert_dialog_1.AlertDialog>);
}

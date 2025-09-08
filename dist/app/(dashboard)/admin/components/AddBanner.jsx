"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddBanner;
const react_1 = require("react");
const ActionModal_1 = __importDefault(require("@/widgets/ActionModal"));
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const button_1 = require("@/components/ui/button");
const errorUtils_1 = require("@/lib/errorUtils");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const react_toastify_1 = require("react-toastify");
const bannerActions_1 = require("@/app/actions/bannerActions"); // Changed to bannerActions
const formSchema = zod_2.z.object({
    title: zod_2.z
        .string()
        .min(2, {
        message: "Title should be at least 2 characters long.",
    })
        .max(100, {
        message: "Title should not exceed 100 characters.",
    })
        .trim(),
});
function AddBanner() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            title: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("title", values.title);
        const photoInput = document.querySelector('input[name="photo"]');
        if ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            const photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 5MB");
                return;
            }
            formData.append("photo", photoFile);
        }
        try {
            await (0, bannerActions_1.createBanner)(formData);
            react_toastify_1.toast.success("Banner created successfully!");
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
      <ActionModal_1.default title="Add Banner" desc="Fill in the details to add a new banner." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add Banner
          </button_1.Button>}>
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <form_1.FormField control={form.control} name="title" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Title</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="Your title here" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <form_1.FormItem>
              <form_1.FormLabel>Photo</form_1.FormLabel>
              <form_1.FormControl>
                <input_1.Input type="file" name="photo" accept="image/*" placeholder="Upload a photo"/>
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddRecentUpdate;
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
const textarea_1 = require("@/components/ui/textarea");
const recentUpdatesActions_1 = require("@/app/actions/recentUpdatesActions");
const formSchema = zod_2.z.object({
    title: zod_2.z
        .string()
        .min(2, {
        message: "Title should be at least 5 characters long.",
    })
        .max(50, {
        message: "Title should not exceed 100 characters.",
    })
        .trim()
        .refine((val) => val.length > 0, {
        message: "Title cannot be blank or contain only spaces.",
    }),
    content: zod_2.z
        .string()
        .min(50, {
        message: "Content should be at least 50 characters long.",
    })
        .trim()
        .refine((val) => val.length > 0, {
        message: "Content cannot be blank or contain only spaces.",
    }),
});
function AddRecentUpdate() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            title: "",
            content: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("content", values.content);
        const photoInput = document.querySelector('input[name="photo"]');
        if ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            const photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 1 * 1024 * 1024;
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 1MB");
                return;
            }
            formData.append("photo", photoFile);
        }
        try {
            await (0, recentUpdatesActions_1.createRecentUpdate)(formData);
            react_toastify_1.toast.success("Recent update created successfully!");
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
      <ActionModal_1.default title="Add a comment" desc="Fill in the details to add a new comment." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add Update
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

            <form_1.FormField control={form.control} name="content" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel> Content</form_1.FormLabel>
                  <form_1.FormControl>
                    <textarea_1.Textarea placeholder="Write your content here..." {...field}/>
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

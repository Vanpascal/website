"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = EditDialog;
const alert_dialog_1 = require("@/components/ui/alert-dialog");
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
        const documentInput = document.querySelector('input[name="document"]');
        let documentFile;
        if ((_a = documentInput === null || documentInput === void 0 ? void 0 : documentInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            documentFile = documentInput.files[0];
            const MAX_FILE_SIZE = 5 * 1024 * 1024;
            if (documentFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Document size should not exceed 5MB");
                return;
            }
        }
        const formData = new FormData();
        formData.append("title", values.title);
        if (documentFile) {
            formData.append("document", documentFile);
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
            <form_1.FormField control={form.control} name="title" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Title</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="Your title here" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <form_1.FormItem>
              <form_1.FormLabel>Document</form_1.FormLabel>
              <form_1.FormControl>
                <input_1.Input type="file" name="document" accept=".pdf" placeholder="PDF Only"/>
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

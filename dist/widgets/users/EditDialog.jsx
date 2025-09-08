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
const formSchema = zod_2.z.object({
    firstname: zod_2.z.string().min(2, {
        message: "First name should be at least 2 characters long.",
    }),
    lastname: zod_2.z.string().min(2, {
        message: "Last name should be at least 2 characters long.",
    }),
    email: zod_2.z.string().email(),
    phone: zod_2.z.string().min(10, {
        message: "Phone number should be at least 10 digits long.",
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
        const formData = {
            firstname: values.firstname,
            lastname: values.lastname,
            email: values.email,
            phone: values.phone,
        };
        onConfirm(formData);
    }
    return (<alert_dialog_1.AlertDialog>
      <alert_dialog_1.AlertDialogTrigger asChild>
        <button_1.Button variant="ghost" className="h-10 w-10 p-0 hover:bg-yellow-100 focus:outline-none transition-colors" title="Edit User">
          <fa_1.FaEdit className="h-6 w-6 text-yellow-500"/>
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
              <form_1.FormField control={form.control} name="firstname" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>First Name</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Your first name" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="lastname" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Last Name</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Your last name" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="email" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Email</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Your email" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="phone" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Phone</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Your phone number" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>

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

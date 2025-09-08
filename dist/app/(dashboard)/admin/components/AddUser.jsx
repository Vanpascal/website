"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddUser;
const react_1 = require("react");
const ActionModal_1 = __importDefault(require("@/widgets/ActionModal"));
const zod_1 = require("@hookform/resolvers/zod");
const react_hook_form_1 = require("react-hook-form");
const zod_2 = require("zod");
const button_1 = require("@/components/ui/button");
const userActions_1 = require("@/app/actions/userActions");
const errorUtils_1 = require("@/lib/errorUtils");
const form_1 = require("@/components/ui/form");
const input_1 = require("@/components/ui/input");
const react_toastify_1 = require("react-toastify"); // Only import the toast
const formSchema = zod_2.z.object({
    firstname: zod_2.z
        .string()
        .min(2, {
        message: "First name should be at least 2 characters long.",
    })
        .max(50, {
        message: "First name should not exceed 50 characters.",
    }),
    lastname: zod_2.z
        .string()
        .min(2, {
        message: "Last name should be at least 2 characters long.",
    })
        .max(50, {
        message: "Last name should not exceed 50 characters.",
    }),
    email: zod_2.z.string().email(),
    phone: zod_2.z
        .string()
        .min(10, {
        message: "Phone number should be at least 10 digits long.",
    })
        .max(15, {
        message: "Phone number should not exceed 15 digits.",
    }),
    password: zod_2.z.string().min(8, {
        message: "Password should be at least 8 characters long.",
    }),
});
function AddUser() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            firstname: "",
            lastname: "",
            email: "",
            phone: "",
            password: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        // Create a FormData object
        const formData = new FormData();
        formData.append("firstname", values.firstname);
        formData.append("lastname", values.lastname);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("password", values.password);
        try {
            await (0, userActions_1.createUser)(formData);
            react_toastify_1.toast.success("User created successfully!");
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
      <ActionModal_1.default title="Add New User" desc="Fill in the details to add a new user." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add New User
          </button_1.Button>}>
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
            <form_1.FormField control={form.control} name="password" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Password</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input type="password" placeholder="Your password here" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

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

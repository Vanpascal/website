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
const staffActions_1 = require("@/app/actions/staffActions");
const errorUtils_1 = require("@/lib/errorUtils");
const form_1 = require("@/components/ui/form");
const select_1 = require("@/components/ui/select");
const input_1 = require("@/components/ui/input");
const react_toastify_1 = require("react-toastify");
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
    department: zod_2.z
        .string()
        .min(2, {
        message: "Department should be at least 4 characters long.",
    })
        .max(50, {
        message: "Department should not exceed 50 characters.",
    }),
    category: zod_2.z
        .string()
        .min(2, {
        message: "Category should be at least 4 characters long.",
    })
        .max(50, {
        message: "Category should not exceed 50 characters.",
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
            category: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("firstname", values.firstname);
        formData.append("lastname", values.lastname);
        formData.append("email", values.email);
        formData.append("phone", values.phone);
        formData.append("category", values.category);
        formData.append("department", values.department);
        const photoInput = document.querySelector('input[name="photo"]');
        // Check if a photo is uploaded
        if ((_a = photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            const photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 1 * 1024 * 1024;
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 1MB");
                return;
            }
            // Append the photo to the form data
            formData.append("photo", photoFile);
        }
        try {
            await (0, staffActions_1.createEmployee)(formData);
            react_toastify_1.toast.success("Employee created successfully!");
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
      <ActionModal_1.default title="Add New Employee" desc="Fill in the details to add a new Employee." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add Employee
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

              <form_1.FormField control={form.control} name="category" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Category</form_1.FormLabel>
                    <select_1.Select onValueChange={field.onChange} defaultValue={field.value}>
                      <form_1.FormControl>
                        <select_1.SelectTrigger>
                          <select_1.SelectValue placeholder="Select a category level"/>
                        </select_1.SelectTrigger>
                      </form_1.FormControl>
                      <select_1.SelectContent>
                        <select_1.SelectItem value="Management">Management</select_1.SelectItem>
                        <select_1.SelectItem value="Staff">Instructor</select_1.SelectItem>
                        <select_1.SelectItem value="Non-Teaching Staff">Non-Teaching Staff</select_1.SelectItem>
                        <select_1.SelectItem value="Production">Production</select_1.SelectItem>
                      </select_1.SelectContent>
                    </select_1.Select>
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
                        <select_1.SelectItem value="Management">Management</select_1.SelectItem>
                        <select_1.SelectItem value="Carpentry">Carpentry</select_1.SelectItem>
                        <select_1.SelectItem value="Masonry">Masonry</select_1.SelectItem>
                        <select_1.SelectItem value="Electrical">Electrical</select_1.SelectItem>
                        <select_1.SelectItem value="Tailoring">Tailoring</select_1.SelectItem>
                        <select_1.SelectItem value="Plumbing">Plumbing</select_1.SelectItem>
                        <select_1.SelectItem value="Motor Vehicle Mechanics">
                          Motor Vehicle Mechanics
                        </select_1.SelectItem>
                        <select_1.SelectItem value="Printing">Printing</select_1.SelectItem>
                        <select_1.SelectItem value="Welding">Welding</select_1.SelectItem>
                        <select_1.SelectItem value="Information & Communication Technology">Information & Communication Technology</select_1.SelectItem>
                        <select_1.SelectItem value="Job Service Office ">Job Service Office </select_1.SelectItem>
                      </select_1.SelectContent>
                    </select_1.Select>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>
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

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddCourses;
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
const textarea_1 = require("@/components/ui/textarea");
const coursesActions_1 = require("@/app/actions/coursesActions");
const formSchema = zod_2.z.object({
    coursename: zod_2.z
        .string()
        .min(2, {
        message: "Your name should be at least 2 characters long.",
    })
        .max(50, {
        message: "Your name should not exceed 50 characters.",
    })
        .trim()
        .refine((val) => val.length > 0, {
        message: "Author name cannot be blank or contain only spaces.",
    }),
    duration: zod_2.z
        .string()
        .min(3, {
        message: "Comments should be at least 3 characters long.",
    })
        .trim()
        .refine((val) => val.length > 0, {
        message: "Content cannot be blank or contain only spaces.",
    }),
    courseType: zod_2.z
        .string()
        .trim()
        .refine((val) => val.length > 0, {
        message: "Content cannot be blank or contain only spaces",
    }),
    description: zod_2.z
        .string()
        .min(8, {
        message: "Your position should be at least eight characters long.",
    })
        .trim()
        .refine((val) => val.length > 0, {
        message: "Who commented cannot be blank or contain only spaces.",
    }),
});
function AddCourses() {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            coursename: "",
            duration: "",
            courseType: "",
            description: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("coursename", values.coursename);
        formData.append("duration", values.duration);
        formData.append("courseType", values.courseType);
        formData.append("description", values.description);
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
            await (0, coursesActions_1.createCourse)(formData);
            react_toastify_1.toast.success("Course created successfully!");
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
      <ActionModal_1.default title="Add a course" desc="Fill in the details to add a new course." open={open} setOpen={setOpen} trigger={<button_1.Button className="bg-green-700 hover:bg-green-500">
            Add Course
          </button_1.Button>}>
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <form_1.FormField control={form.control} name="coursename" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Course Name</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Course name" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
              <form_1.FormField control={form.control} name="courseType" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Course Type</form_1.FormLabel>
                    <select_1.Select onValueChange={field.onChange} defaultValue={field.value}>
                      <form_1.FormControl>
                        <select_1.SelectTrigger>
                          <select_1.SelectValue placeholder="Select a course type (Long or short)"/>
                        </select_1.SelectTrigger>
                      </form_1.FormControl>
                      <select_1.SelectContent>
                        <select_1.SelectItem value="Long Course">Long Course</select_1.SelectItem>
                        <select_1.SelectItem value="Short Course">
                          Short Course
                        </select_1.SelectItem>
                      </select_1.SelectContent>
                    </select_1.Select>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>
            <form_1.FormField control={form.control} name="duration" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Duration</form_1.FormLabel>
                  <form_1.FormControl>
                    <input_1.Input placeholder="Eg. 3 years etc" {...field}/>
                  </form_1.FormControl>
                  <form_1.FormMessage />
                </form_1.FormItem>)}/>

            <form_1.FormField control={form.control} name="description" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Course Descreption</form_1.FormLabel>
                  <form_1.FormControl>
                    <textarea_1.Textarea placeholder="Write about course here..." {...field}/>
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

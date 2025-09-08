"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = AddComment;
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
const commentsActions_1 = require("@/app/actions/commentsActions");
const textarea_1 = require("@/components/ui/textarea");
const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;
const formSchema = zod_2.z.object({
    author: zod_2.z
        .string()
        .min(2, { message: "Your name should be at least 2 characters long." })
        .max(50, { message: "Your name should not exceed 50 characters." })
        .trim()
        .regex(/^[A-Za-z\s\-']+$/, {
        message: "Name can only contain letters, spaces, hyphens, and apostrophes.",
    })
        .refine((val) => /\s/.test(val), {
        message: "Please enter your full name (first and last).",
    })
        .refine((val) => !emojiRegex.test(val), {
        message: "Emoji characters are not allowed in the name.",
    }),
    content: zod_2.z
        .string()
        .min(100, { message: "Comment should be at least 100 characters long." })
        .max(1000, { message: "Comment is too long." })
        .trim()
        .refine((val) => /[a-zA-Z]/.test(val), {
        message: "Comment must include letters.",
    })
        .refine((val) => !/(.)\1{3,}/.test(val), {
        message: "Do not use repeated characters.",
    })
        .refine((val) => !emojiRegex.test(val), {
        message: "Emoji characters are not allowed in the comment.",
    }),
    whocomment: zod_2.z
        .string()
        .min(8, { message: "Your position should be at least 8 characters." })
        .max(100, { message: "Position is too long." })
        .trim()
        .refine((val) => /[a-zA-Z]/.test(val), {
        message: "Position must include letters.",
    })
        .refine((val) => !/(.)\1{4,}/.test(val), {
        message: "Do not use repeated characters.",
    })
        .refine((val) => !emojiRegex.test(val), {
        message: "Emoji characters are not allowed in the position.",
    }),
});
function AddComment({ onCommentAdded }) {
    const [open, setOpen] = (0, react_1.useState)(false);
    const form = (0, react_hook_form_1.useForm)({
        resolver: (0, zod_1.zodResolver)(formSchema),
        defaultValues: {
            author: "",
            content: "",
            whocomment: "",
        },
    });
    const isLoading = form.formState.isSubmitting;
    async function onSubmit(values) {
        var _a;
        const formData = new FormData();
        formData.append("author", values.author);
        formData.append("content", values.content);
        formData.append("whocomment", values.whocomment);
        const photoInput = document.querySelector('input[name="photo"]');
        if ((_a = photoInput === null || photoInput === void 0 ? void 0 : photoInput.files) === null || _a === void 0 ? void 0 : _a.length) {
            const photoFile = photoInput.files[0];
            const MAX_FILE_SIZE = 1 * 1024 * 1024;
            if (photoFile.size > MAX_FILE_SIZE) {
                react_toastify_1.toast.error("Photo size should not exceed 1MB");
                return;
            }
            formData.append("photo", photoFile);
        }
        try {
            await (0, commentsActions_1.createComment)(formData);
            react_toastify_1.toast.success("Comment created successfully!");
            // ✅ Refresh testimonials after submission
            if (onCommentAdded) {
                onCommentAdded();
            }
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
            Add Comment
          </button_1.Button>}>
        <form_1.Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <form_1.FormField control={form.control} name="author" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Author</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Your full name here" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>

              <form_1.FormField control={form.control} name="whocomment" render={({ field }) => (<form_1.FormItem>
                    <form_1.FormLabel>Who Comment</form_1.FormLabel>
                    <form_1.FormControl>
                      <input_1.Input placeholder="Eg. Former Student, Former employee, Salesian etc" {...field}/>
                    </form_1.FormControl>
                    <form_1.FormMessage />
                  </form_1.FormItem>)}/>
            </div>

            <form_1.FormField control={form.control} name="content" render={({ field }) => (<form_1.FormItem>
                  <form_1.FormLabel>Comment Content</form_1.FormLabel>
                  <form_1.FormControl>
                    <textarea_1.Textarea placeholder="Write your comment here..." {...field}/>
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

            <button_1.Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </button_1.Button>
          </form>
        </form_1.Form>
      </ActionModal_1.default>
    </div>);
}

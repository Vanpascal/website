import { useState } from "react";
import ActionModal from "@/widgets/ActionModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { getErrorMessages } from "@/lib/errorUtils";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { createComment } from "@/app/actions/commentsActions";
import { Textarea } from "@/components/ui/textarea";

// 🟡 Optional prop to trigger refresh
interface AddCommentProps {
  onCommentAdded?: () => void;
}

const emojiRegex = /[\p{Emoji_Presentation}\p{Extended_Pictographic}]/u;

const formSchema = z.object({
  author: z
    .string()
    .min(2, { message: "Your name should be at least 2 characters long." })
    .max(50, { message: "Your name should not exceed 50 characters." })
    .trim()
    .regex(/^[A-Za-z\s\-']+$/, {
      message:
        "Name can only contain letters, spaces, hyphens, and apostrophes.",
    })
    .refine((val) => /\s/.test(val), {
      message: "Please enter your full name (first and last).",
    })
    .refine((val) => !emojiRegex.test(val), {
      message: "Emoji characters are not allowed in the name.",
    }),

  content: z
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

  whocomment: z
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

export default function AddComment({ onCommentAdded }: AddCommentProps) {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      author: "",
      content: "",
      whocomment: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("author", values.author);
    formData.append("content", values.content);
    formData.append("whocomment", values.whocomment);

    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    if (photoInput?.files?.length) {
      const photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 1 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 1MB");
        return;
      }

      formData.append("photo", photoFile);
    }

    try {
      await createComment(formData);
      toast.success("Comment created successfully!");

      // ✅ Refresh testimonials after submission
      if (onCommentAdded) {
        onCommentAdded();
      }
    } catch (error) {
      toast.error(getErrorMessages(error));
    } finally {
      form.reset();
      setOpen(false);
    }
  }

  return (
    <div className="grid gap-4">
      <ActionModal
        title="Add a comment"
        desc="Fill in the details to add a new comment."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Comment
          </Button>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="author"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Author</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name here" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="whocomment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Who Comment</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Eg. Former Student, Former employee, Salesian etc"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Comment Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your comment here..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input type="file" name="photo" />
              </FormControl>
              <FormMessage />
            </FormItem>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Submitting..." : "Submit"}
            </Button>
          </form>
        </Form>
      </ActionModal>
    </div>
  );
}

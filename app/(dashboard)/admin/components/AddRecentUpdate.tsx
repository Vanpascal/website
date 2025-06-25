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
import { Textarea } from "@/components/ui/textarea";
import { createRecentUpdate } from "@/app/actions/recentUpdatesActions";

const formSchema = z.object({
  title: z
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

  content: z
    .string()
    .min(50, {
      message: "Content should be at least 50 characters long.",
    })
    .trim()
    .refine((val) => val.length > 0, {
      message: "Content cannot be blank or contain only spaces.",
    }),
});

export default function AddRecentUpdate() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);

    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    if (photoInput.files?.length) {
      const photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 1 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 1MB");
        return;
      }

      formData.append("photo", photoFile);
    }

    try {
      await createRecentUpdate(formData);
      toast.success("Recent update created successfully!");
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
            Add Update
          </Button>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Your title here" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel> Content</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write your content here..."
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

            {isLoading ? (
              <Button className="w-full" disabled>
                Submitting...
              </Button>
            ) : (
              <Button type="submit" className="w-full">
                Submit
              </Button>
            )}
          </form>
        </Form>
      </ActionModal>
    </div>
  );
}

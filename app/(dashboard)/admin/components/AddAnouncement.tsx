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
import { createAnnouncement } from "@/app/actions/announcementActions";

const formSchema = z.object({
  title: z
    .string()
    .min(2, {
      message: "Title should be at least 2 characters long.",
    })
    .max(100, {
      message: "Title should not exceed 100 characters.",
    })
    .trim(),
});

export default function AddAnnouncement() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("title", values.title);

    const documentInput = document.querySelector(
      'input[name="document"]'
    ) as HTMLInputElement;

    if (documentInput.files?.length) {
      const documentFile = documentInput.files[0];

      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (documentFile.size > MAX_FILE_SIZE) {
        toast.error("Document size should not exceed 5MB");
        return;
      }

      formData.append("document", documentFile);
    }

    try {
      await createAnnouncement(formData);
      toast.success("Announcement created successfully!");
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
        title="Add Announcement"
        desc="Fill in the details to add a new announcement."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Announcement
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

            <FormItem>
              <FormLabel>Document</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  name="document"
                  accept=".pdf"
                  placeholder="PDF Only"
                />
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

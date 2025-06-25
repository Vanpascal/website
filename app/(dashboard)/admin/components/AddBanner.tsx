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
import { createBanner } from "@/app/actions/bannerActions"; // Changed to bannerActions

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

export default function AddBanner() {
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

    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    if (photoInput.files?.length) {
      const photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 5MB");
        return;
      }

      formData.append("photo", photoFile);
    }

    try {
      await createBanner(formData);
      toast.success("Banner created successfully!");
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
        title="Add Banner"
        desc="Fill in the details to add a new banner."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Banner
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
              <FormLabel>Photo</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  name="photo"
                  accept="image/*"
                  placeholder="Upload a photo"
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

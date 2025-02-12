import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FaEdit } from "react-icons/fa";
import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";

interface EditDialogProps {
  title: string;
  desc: string;
  initialData: {
    title: string;
    link?: string;
  };
  onConfirm: (data: FormData) => void;
}

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
export default function EditDialog({
  title,
  desc,
  initialData,
  onConfirm,
}: EditDialogProps) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData,
  });

  const isLoading = form.formState.isSubmitting;

  useEffect(() => {
    form.reset(initialData);
  }, [initialData, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    let photoFile: File | undefined;

    if (photoInput?.files?.length) {
      photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 1 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 1MB");
        return;
      }
    }

    const formData = new FormData();
    formData.append("title", values.title);
    if (photoFile) {
      formData.append("photo", photoFile);
    }
    onConfirm(formData);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 p-0 hover:bg-yellow-200 focus:outline-none transition-colors"
          title="Edit Banner"
        >
          <FaEdit className="h-6 w-6 text-green-500" />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter banner title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Image</FormLabel>
              <FormControl>
                <Input
                  type="file"
                  name="photo"
                  accept="image/*"
                  placeholder="Upload banner image"
                />
              </FormControl>
              <FormMessage />
            </FormItem>

            {isLoading ? (
              <Button className="w-full" disabled>
                Submitting...
              </Button>
            ) : (
              <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction type="submit">
                  Save Changes
                </AlertDialogAction>
              </AlertDialogFooter>
            )}
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

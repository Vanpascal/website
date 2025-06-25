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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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
import { Textarea } from "@/components/ui/textarea"; // Assuming a Textarea component exists
import { toast } from "react-toastify";

interface EditDialogProps {
  title: string;
  desc: string;
  initialData: {
    title: string;
    content: string;
    photo?: string;
  };
  onConfirm: (data: FormData) => void;
}
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

      const MAX_FILE_SIZE = 5 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 5MB");
        return;
      }
    }

    const formData = new FormData();
    formData.append("title", values.title);
    formData.append("content", values.content);
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
          title="Edit Course"
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

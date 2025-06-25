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
    coursename: string;
    courseType: string;
    duration: string;
    description: string;
    photo?: string;
  };
  onConfirm: (data: FormData) => void;
}

const formSchema = z.object({
  coursename: z
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

  duration: z
    .string()
    .min(3, {
      message: "Comments should be at least 3 characters long.",
    })
    .trim()
    .refine((val) => val.length > 0, {
      message: "Content cannot be blank or contain only spaces.",
    }),

  courseType: z
    .string()
    .trim()
    .refine((val) => val.length > 0, {
      message: "Content cannot be blank or contain only spaces",
    }),

  description: z
    .string()
    .min(8, {
      message: "Your position should be at least eight characters long.",
    })
    .trim()
    .refine((val) => val.length > 0, {
      message: "Who commented cannot be blank or contain only spaces.",
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

      const MAX_FILE_SIZE = 1 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 1MB");
        return;
      }
    }

    const formData = new FormData();
    formData.append("coursename", values.coursename);
    formData.append("duration", values.duration);
    formData.append("courseType", values.courseType);
    formData.append("description", values.description);
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
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="coursename"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Course name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="courseType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Course Type</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a course type (Long or short)" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Long Course">Long Course</SelectItem>
                        <SelectItem value="Short Course">
                          Short Course
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="duration"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Duration</FormLabel>
                  <FormControl>
                    <Input placeholder="Eg. 3 years etc" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course Descreption</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Write about course here..."
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

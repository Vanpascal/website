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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { toast } from "react-toastify";
import { Textarea } from "@/components/ui/textarea";
import { createCourse } from "@/app/actions/coursesActions";

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

export default function AddCourses() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      coursename: "",
      duration: "",
      courseType: "",
      description: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("coursename", values.coursename);
    formData.append("duration", values.duration);
    formData.append("courseType", values.courseType);
    formData.append("description", values.description);

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
      await createCourse(formData);
      toast.success("Course created successfully!");
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
        title="Add a course"
        desc="Fill in the details to add a new course."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Course
          </Button>
        }
      >
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

import { useState } from "react";
import ActionModal from "@/widgets/ActionModal";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { createEmployee } from "@/app/actions/staffActions";
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

const formSchema = z.object({
  firstname: z
    .string()
    .min(2, {
      message: "First name should be at least 2 characters long.",
    })
    .max(50, {
      message: "First name should not exceed 50 characters.",
    }),
  lastname: z
    .string()
    .min(2, {
      message: "Last name should be at least 2 characters long.",
    })
    .max(50, {
      message: "Last name should not exceed 50 characters.",
    }),
  email: z.string().email(),
  phone: z
    .string()
    .min(10, {
      message: "Phone number should be at least 10 digits long.",
    })
    .max(15, {
      message: "Phone number should not exceed 15 digits.",
    }),
  department: z
    .string()
    .min(2, {
      message: "Department should be at least 4 characters long.",
    })
    .max(50, {
      message: "Department should not exceed 50 characters.",
    }),
  category: z
    .string()
    .min(2, {
      message: "Category should be at least 4 characters long.",
    })
    .max(50, {
      message: "Category should not exceed 50 characters.",
    }),
});

export default function AddUser() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      category: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("firstname", values.firstname);
    formData.append("lastname", values.lastname);
    formData.append("email", values.email);
    formData.append("phone", values.phone);
    formData.append("category", values.category);
    formData.append("department", values.department);

    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    // Check if a photo is uploaded
    if (photoInput.files?.length) {
      const photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 1 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 1MB");
        return;
      }

      // Append the photo to the form data
      formData.append("photo", photoFile);
    }

    try {
      await createEmployee(formData);
      toast.success("Employee created successfully!");
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
        title="Add New Employee"
        desc="Fill in the details to add a new Employee."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Employee
          </Button>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your first name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Your phone number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a category level" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Management">Management</SelectItem>
                        <SelectItem value="Staff">Instructor</SelectItem>
                        <SelectItem value="Non-Teaching Staff">Non-Teaching Staff</SelectItem>
                        <SelectItem value="Production">Production</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="department"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Department</FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a department" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Management">Management</SelectItem>
                        <SelectItem value="Carpentry">Carpentry</SelectItem>
                        <SelectItem value="Masonry">Masonry</SelectItem>
                        <SelectItem value="Electrical">Electrical</SelectItem>
                        <SelectItem value="Tailoring">Tailoring</SelectItem>
                        <SelectItem value="Plumbing">Plumbing</SelectItem>
                        <SelectItem value="Motor Vehicle Mechanics">
                          Motor Vehicle Mechanics
                        </SelectItem>
                        <SelectItem value="Printing">Printing</SelectItem>
                        <SelectItem value="Welding">Welding</SelectItem>
                        <SelectItem value="Information & Communication Technology">Information & Communication Technology</SelectItem>
                        <SelectItem value="Job Service Office ">Job Service Office </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
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

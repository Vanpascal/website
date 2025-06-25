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

interface EditDialogProps {
  title: string;
  desc: string;
  initialData: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  };
  onConfirm: (data: {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
  }) => void;
}

const formSchema = z.object({
  firstname: z.string().min(2, {
    message: "First name should be at least 2 characters long.",
  }),
  lastname: z.string().min(2, {
    message: "Last name should be at least 2 characters long.",
  }),
  email: z.string().email(),
  phone: z.string().min(10, {
    message: "Phone number should be at least 10 digits long.",
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
    const formData = {
      firstname: values.firstname,
      lastname: values.lastname,
      email: values.email,
      phone: values.phone,
    };

    onConfirm(formData);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="h-10 w-10 p-0 hover:bg-yellow-100 focus:outline-none transition-colors"
          title="Edit User"
        >
          <FaEdit className="h-6 w-6 text-yellow-500" />
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
            </div>

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

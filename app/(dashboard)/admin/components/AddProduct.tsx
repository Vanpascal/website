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
import { createProduct } from "@/app/actions/productActions";

const formSchema = z.object({
  product_name: z
    .string()
    .min(2, { message: "Product name should be at least 2 characters long." })
    .max(50, { message: "Product name should not exceed 50 characters." })
    .trim(),
  department: z.string().min(1, { message: "Department is required." }).trim(),
  price: z
    .string()
    .refine((val) => !isNaN(parseFloat(val)), {
      message: "Price must be a valid number.",
    })
    .refine((val) => parseFloat(val) > 0, {
      message: "Price must be greater than 0.",
    }),
});

export default function AddProducts() {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      product_name: "",
      department: "",
      price: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();
    formData.append("product_name", values.product_name);
    formData.append("department", values.department);
    formData.append("price", values.price);

    const photoInput = document.querySelector(
      'input[name="photo"]'
    ) as HTMLInputElement;

    if (photoInput.files?.length) {
      const photoFile = photoInput.files[0];

      const MAX_FILE_SIZE = 5 * 1024 * 1024;
      if (photoFile.size > MAX_FILE_SIZE) {
        toast.error("Photo size should not exceed 5MB");
        return;
      }

      formData.append("photo", photoFile);
    }

    try {
      await createProduct(formData);
      toast.success("Product added successfully!");
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
        title="Add a Product"
        desc="Fill in the details to add a new product."
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Product
          </Button>
        }
      >
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="product_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Product Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Product name" {...field} />
                    </FormControl>
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
                        <SelectItem value="Carpentry">Carpentry</SelectItem>
                        <SelectItem value="Tailoring">Tailoring</SelectItem>
                        <SelectItem value="Printing">Printing</SelectItem>
                        <SelectItem value="Welding">Welding</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter price (e.g., 50.00)" {...field} />
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

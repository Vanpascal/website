"use client";

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
} from "@/components/ui/form";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import { Button } from "@/components/ui/button";

import { FaEdit } from "react-icons/fa";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";

import { z } from "zod";

import { useEffect, useState } from "react";

import { toast } from "react-toastify";

interface EditDialogProps {
  title: string;

  desc: string;

  initialData: {
    title: string;

    subtitle?: string | null;

    image: string;

    category: string;

    primaryButtonText?: string | null;

    primaryButtonLink?: string | null;

    secondaryButtonText?: string | null;

    secondaryButtonLink?: string | null;

    priority: number;

    isActive: boolean;

    startDate?: Date | null;

    endDate?: Date | null;
  };

  onConfirm: (data: FormData) => void;
}

const formSchema = z.object({
  title: z.string().min(2),

  subtitle: z.string().optional(),

  category: z.string(),

  primaryButtonText: z.string().optional(),

  primaryButtonLink: z.string().optional(),

  secondaryButtonText: z.string().optional(),

  secondaryButtonLink: z.string().optional(),

  priority: z.string(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),
});

export default function EditDialog({
  title,

  desc,

  initialData,

  onConfirm,
}: EditDialogProps) {
  const [photo, setPhoto] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      title: initialData.title,

      subtitle: initialData.subtitle ?? "",

      category: initialData.category,

      primaryButtonText: initialData.primaryButtonText ?? "",

      primaryButtonLink: initialData.primaryButtonLink ?? "",

      secondaryButtonText: initialData.secondaryButtonText ?? "",

      secondaryButtonLink: initialData.secondaryButtonLink ?? "",

      priority: String(initialData.priority),

      startDate: initialData.startDate
        ? new Date(initialData.startDate).toISOString().substring(0, 10)
        : "",

      endDate: initialData.endDate
        ? new Date(initialData.endDate).toISOString().substring(0, 10)
        : "",
    },
  });

  useEffect(() => {
    form.reset({
      title: initialData.title,

      subtitle: initialData.subtitle ?? "",

      category: initialData.category,

      primaryButtonText: initialData.primaryButtonText ?? "",

      primaryButtonLink: initialData.primaryButtonLink ?? "",

      secondaryButtonText: initialData.secondaryButtonText ?? "",

      secondaryButtonLink: initialData.secondaryButtonLink ?? "",

      priority: String(initialData.priority),

      startDate: initialData.startDate
        ? new Date(initialData.startDate).toISOString().substring(0, 10)
        : "",

      endDate: initialData.endDate
        ? new Date(initialData.endDate).toISOString().substring(0, 10)
        : "",
    });
  }, [initialData, form]);

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    if (photo) {
      if (photo.size > 5 * 1024 * 1024) {
        toast.error("Image must be below 5MB");

        return;
      }

      formData.append("photo", photo);
    }

    onConfirm(formData);
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          variant="ghost"
          className="
h-10
w-10
p-0
hover:bg-yellow-200
"
        >
          <FaEdit
            className="
h-6
w-6
text-green-500
"
          />
        </Button>
      </AlertDialogTrigger>

      <AlertDialogContent className="max-w-2xl">
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>

          <AlertDialogDescription>{desc}</AlertDialogDescription>
        </AlertDialogHeader>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
space-y-5
"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>

                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="subtitle"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Subtitle</FormLabel>

                  <FormControl>
                    <Textarea {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>

                  <Select value={field.value} onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>

                    <SelectContent>
                      <SelectItem value="ADMISSION">Admission</SelectItem>

                      <SelectItem value="EVENT">Event</SelectItem>

                      <SelectItem value="NEWS">News</SelectItem>

                      <SelectItem value="PROMOTION">Promotion</SelectItem>

                      <SelectItem value="GENERAL">General</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            <FormItem>
              <FormLabel>Change Image</FormLabel>

              <Input
                type="file"
                accept="image/*"
                onChange={(e) => setPhoto(e.target.files?.[0] ?? null)}
              />
            </FormItem>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="primaryButtonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Button</FormLabel>

                    <Input {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryButtonLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Link</FormLabel>

                    <Input {...field} />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="secondaryButtonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary Button</FormLabel>

                    <Input {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secondaryButtonLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary Link</FormLabel>

                    <Input {...field} />
                  </FormItem>
                )}
              />
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <FormField
                control={form.control}
                name="priority"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Priority</FormLabel>

                    <Input type="number" {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start</FormLabel>

                    <Input type="date" {...field} />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End</FormLabel>

                    <Input type="date" {...field} />
                  </FormItem>
                )}
              />
            </div>

            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>

              <AlertDialogAction type="submit" disabled={isLoading}>
                {isLoading ? "Saving..." : "Save Changes"}
              </AlertDialogAction>
            </AlertDialogFooter>
          </form>
        </Form>
      </AlertDialogContent>
    </AlertDialog>
  );
}

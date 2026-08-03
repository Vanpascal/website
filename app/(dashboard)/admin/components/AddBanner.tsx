"use client";

import { useState } from "react";

import ActionModal from "@/widgets/ActionModal";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Button } from "@/components/ui/button";

import { toast } from "react-toastify";

import { createBanner } from "@/app/actions/bannerActions";

import { getErrorMessages } from "@/lib/errorUtils";

const formSchema = z.object({
  title: z.string().min(3).max(100).trim(),

  subtitle: z.string().max(300).optional(),

  category: z.enum(["ADMISSION", "EVENT", "NEWS", "PROMOTION", "GENERAL"]),

  primaryButtonText: z.string().optional(),

  primaryButtonLink: z.string().optional(),

  secondaryButtonText: z.string().optional(),

  secondaryButtonLink: z.string().optional(),

  priority: z.string().optional(),

  startDate: z.string().optional(),

  endDate: z.string().optional(),
});

export default function AddBanner() {
  const [open, setOpen] = useState(false);

  const [photo, setPhoto] = useState<File | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),

    defaultValues: {
      title: "",
      subtitle: "",
      category: "GENERAL",

      primaryButtonText: "",
      primaryButtonLink: "",

      secondaryButtonText: "",
      secondaryButtonLink: "",

      priority: "0",

      startDate: "",
      endDate: "",
    },
  });

  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    if (!photo) {
      toast.error("Please upload banner image");

      return;
    }

    if (photo.size > 5 * 1024 * 1024) {
      toast.error("Image size should not exceed 5MB");

      return;
    }

    const formData = new FormData();

    Object.entries(values).forEach(([key, value]) => {
      if (value) {
        formData.append(key, value);
      }
    });

    formData.append("photo", photo);

    formData.append("isActive", "true");

    try {
      await createBanner(formData);

      toast.success("Banner created successfully");

      form.reset();

      setPhoto(null);

      setOpen(false);
    } catch (error) {
      toast.error(getErrorMessages(error));
    }
  }

  return (
    <div className="grid gap-4">
      <ActionModal
        title="Add Banner"
        desc="Create homepage hero banner"
        open={open}
        setOpen={setOpen}
        trigger={
          <Button className="bg-green-700 hover:bg-green-500">
            Add Banner
          </Button>
        }
      >
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="
space-y-6
"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Title</FormLabel>

                  <FormControl>
                    <Input
                      placeholder="September Intake Applications Open"
                      {...field}
                    />
                  </FormControl>

                  <FormMessage />
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
                    <Textarea
                      placeholder="Apply now for technical courses at Don Bosco Iringa"
                      {...field}
                    />
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
              <FormLabel>Banner Image</FormLabel>

              <Input
                type="file"
                accept="image/*"
                onChange={(e) => {
                  setPhoto(e.target.files?.[0] ?? null);
                }}
              />
            </FormItem>

            <div className="grid md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="primaryButtonText"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Button</FormLabel>

                    <FormControl>
                      <Input placeholder="Apply Now" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="primaryButtonLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Primary Link</FormLabel>

                    <FormControl>
                      <Input placeholder="/apply" {...field} />
                    </FormControl>
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

                    <FormControl>
                      <Input placeholder="Courses" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="secondaryButtonLink"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Secondary Link</FormLabel>

                    <FormControl>
                      <Input placeholder="/courses" {...field} />
                    </FormControl>
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

                    <FormControl>
                      <Input type="number" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="startDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Start Date</FormLabel>

                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="endDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>End Date</FormLabel>

                    <FormControl>
                      <Input type="date" {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <Button type="submit" disabled={isLoading} className="w-full">
              {isLoading ? "Submitting..." : "Create Banner"}
            </Button>
          </form>
        </Form>
      </ActionModal>
    </div>
  );
}

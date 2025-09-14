"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

import { z } from "zod";

const cardSchema = z.object({
  name: z.string().min(2, "Name is required"),
  number: z.string().length(16, "Card number must be 16 digits"),
  expiry: z.string().regex(/^\d{2}\/\d{2}$/, "Enter expiration as MM/YY"),
  cvv: z.string().min(3).max(4, "CVV must be 3 or 4 digits"),
  purpose: z.string().min(1, "Purpose is required"),
});

const mobileSchema = z.object({
  provider: z.enum(["m-pesa", "airtel-money"], {
    errorMap: () => ({ message: "Select a valid provider" }),
  }),
  phone: z
    .string()
    .regex(/^255\d{9}$/, "Phone must start with 255 and have 12 digits"),
  amount: z
    .string()
    .regex(/^\d+$/, "Amount must be a number")
    .refine((val) => Number(val) >= 100, {
      message: "Minimum amount is 100 TZS",
    }),
  purpose: z.string().min(1, "Purpose is required"),
});

interface DonateFormProps {
  selectedMethod: "card" | "mobile";
  setValue: any;
  onSubmit: (data: any) => void;
  serverError: string | null;
}

const InputField = ({ label, name, register, error }: any) => (
  <div className="relative">
    <Label className="absolute -top-3 left-3 bg-white px-1 text-gray-600 text-sm">
      {label}
    </Label>
    <Input {...register(name)} className="pt-4" />
    {error && <p className="text-red-600 text-sm mt-1">{error.message}</p>}
  </div>
);

const DonateForm: React.FC<DonateFormProps> = ({
  selectedMethod,
  setValue,
  onSubmit,
  serverError,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      selectedMethod === "card" ? cardSchema : mobileSchema
    ),
  });

  return (
    <Card className="hover:shadow-lg transition-shadow duration-300">
      <CardContent className="p-6 space-y-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <h2 className="text-xl font-bold text-purple-900 mb-2">
            {selectedMethod === "card" ? "Card Information" : "Mobile Money"}
          </h2>

          {selectedMethod === "card" ? (
            <>
              <InputField
                label="Cardholder Name"
                name="name"
                register={register}
                error={errors.name}
              />
              <InputField
                label="Card Number"
                name="number"
                register={register}
                error={errors.number}
              />
              <div className="grid grid-cols-2 gap-4">
                <InputField
                  label="Expiry (MM/YY)"
                  name="expiry"
                  register={register}
                  error={errors.expiry}
                />
                <InputField
                  label="CVV"
                  name="cvv"
                  register={register}
                  error={errors.cvv}
                />
              </div>
              <InputField
                label="Donation For"
                name="purpose"
                register={register}
                error={errors.purpose}
              />
            </>
          ) : (
            <>
              <div className="space-y-2">
                <Label>Mobile Money Provider</Label>
                <Select
                  onValueChange={(val) => setValue("provider", val)}
                  defaultValue=""
                >
                  <SelectTrigger>
                    <SelectValue placeholder="Select Provider" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="m-pesa">M-Pesa</SelectItem>
                    <SelectItem value="airtel-money">Airtel Money</SelectItem>
                  </SelectContent>
                </Select>
                {errors.provider && (
                  <p className="text-red-600 text-sm">
                    {errors.provider?.message as string}
                  </p>
                )}
              </div>
              <InputField
                label="Phone Number"
                name="phone"
                register={register}
                error={errors.phone}
              />
              <InputField
                label="Amount (TZS)"
                name="amount"
                register={register}
                error={errors.amount}
              />
              <InputField
                label="Donation For"
                name="purpose"
                register={register}
                error={errors.purpose}
              />
            </>
          )}

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-900 to-purple-700 hover:scale-105 transition-transform duration-300"
          >
            Donate Now ❤️
          </Button>
          {serverError && (
            <p className="text-red-600 text-center">{serverError}</p>
          )}
        </form>
      </CardContent>
    </Card>
  );
};

export default DonateForm;

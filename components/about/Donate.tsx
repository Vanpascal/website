"use client";

import React, { useState } from "react";
import Image from "next/image";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Schemas (same as before)
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

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState<"card" | "mobile">(
    "card"
  );
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(
      selectedMethod === "card" ? cardSchema : mobileSchema
    ),
  });

  const onSubmit = async (data: any) => {
    setServerError(null);
    console.log("📤 Submitting donation form:", data);

    if (selectedMethod === "card") {
      alert("Card payments coming soon. Thank you!");
      reset();
      return;
    }

    // Normalize phone to last 9 digits
    let rawPhone = data.phone.trim();
    if (rawPhone.startsWith("255")) rawPhone = rawPhone.slice(3);
    else if (rawPhone.startsWith("0")) rawPhone = rawPhone.slice(1);

    if (!/^\d{9}$/.test(rawPhone)) {
      setServerError("Phone number must have 9 digits after trimming prefix.");
      return;
    }

    const formattedData = {
      ...data,
      phone: rawPhone,
    };

    setLoading(true);
    try {
      const res = await fetch("/api/mobile-payments/airtel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.error || "Payment failed");
        return;
      }

      alert("Payment initiated successfully! Thank you for your donation.");
      reset();
    } catch (error) {
      console.error("⚠️ Network or unexpected error:", error);
      setServerError("Network error. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      {/* Banner Section */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[300px]">
          <Image
            src="/images/long.jpg"
            alt="Donation Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Make a Donation
          </h1>
          <p className="text-yellow-400 mt-2">
            Support our mission by donating through your preferred payment
            method.
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
          {/* Left Panel */}
          <Card className="lg:w-1/2 bg-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">
                Why Donate?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Your generous donation helps us continue our mission to serve
                those in need and spread hope and love. As the Bible says:
              </p>
              <blockquote className="italic text-purple-700 border-l-4 border-purple-900 pl-4">
                &quot;Each of you should give what you have decided in your
                heart to give, not reluctantly or under compulsion, for God
                loves a cheerful giver.&quot; - 2 Corinthians 9:7
              </blockquote>
              <p>
                Thank you for supporting our work and joining us in creating a
                better future.
              </p>
            </CardContent>
          </Card>

          {/* Right Panel */}
          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={selectedMethod === "card" ? "default" : "outline"}
                onClick={() => setSelectedMethod("card")}
                disabled={loading}
              >
                Pay with Card
              </Button>
              <Button
                variant={selectedMethod === "mobile" ? "default" : "outline"}
                onClick={() => setSelectedMethod("mobile")}
                disabled={loading}
              >
                Pay with Mobile Money
              </Button>
            </div>

            <Card>
              <CardContent className="p-6 space-y-6">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <h2 className="text-xl font-bold text-purple-900 mb-2">
                    {selectedMethod === "card"
                      ? "Card Information"
                      : "Mobile Money"}
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
                          onValueChange={(value) => setValue("provider", value)}
                          defaultValue=""
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Provider" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="m-pesa">M-Pesa</SelectItem>
                            <SelectItem value="airtel-money">
                              Airtel Money
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.provider && (
                          <p className="text-sm text-red-600">
                            {errors.provider.message as string}
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
                        label="Amount"
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

                  {serverError && (
                    <p className="text-sm text-red-600">{serverError}</p>
                  )}

                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? "Processing..." : "Pay Now"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

const InputField = ({ label, name, register, error }: any) => (
  <div className="space-y-2">
    <Label htmlFor={name}>{label}</Label>
    <Input id={name} {...register(name)} placeholder={label} />
    {error && <p className="text-sm text-red-600">{error.message}</p>}
  </div>
);

export default Donate;

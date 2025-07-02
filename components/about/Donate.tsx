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
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Spinner from "../ui/spinner";

// Schemas
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
  const [serverError, setServerError] = useState<string | null>(null);
  const [transactionId, setTransactionId] = useState<string | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [dialogMessage, setDialogMessage] = useState<string>("Processing...");
  const [dialogStatus, setDialogStatus] = useState<
    "processing" | "pin" | "done"
  >("processing");

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

  const pollPaymentStatus = async (txnId: string) => {
    let attempts = 0;
    const maxAttempts = 15;

    const interval = setInterval(async () => {
      try {
        const res = await fetch(
          `/api/mobile-payments/status?transactionId=${txnId}`
        );
        const data = await res.json();

        if (data.status === "SUCCESSFUL") {
          clearInterval(interval);
          setDialogMessage("✅ Payment successful! Thank you.");
          setDialogStatus("done");
          setTimeout(() => setDialogOpen(false), 3000);
        } else if (data.status === "FAILED") {
          clearInterval(interval);
          setDialogMessage("❌ Payment failed. Please try again.");
          setDialogStatus("done");
          setTimeout(() => setDialogOpen(false), 3000);
        } else if (++attempts >= maxAttempts) {
          clearInterval(interval);
          setDialogMessage("⏳ Timeout. Please check your phone.");
          setDialogStatus("done");
          setTimeout(() => setDialogOpen(false), 3000);
        }
      } catch (err) {
        console.error("Polling error:", err);
      }
    }, 3000);
  };

  const onSubmit = async (data: any) => {
    setServerError(null);
    setDialogOpen(true);
    setDialogStatus("processing");
    setDialogMessage("⏳ Processing your payment...");

    if (selectedMethod === "card") {
      alert("Card payments coming soon. Thank you!");
      reset();
      setDialogOpen(false);
      return;
    }

    let rawPhone = data.phone.trim();
    if (rawPhone.startsWith("255")) rawPhone = rawPhone.slice(3);
    else if (rawPhone.startsWith("0")) rawPhone = rawPhone.slice(1);

    if (!/^\d{9}$/.test(rawPhone)) {
      setServerError("Phone number must have 9 digits after trimming prefix.");
      setDialogOpen(false);
      return;
    }

    const formattedData = { ...data, phone: rawPhone };

    try {
      const res = await fetch("/api/mobile-payments/airtel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formattedData),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.error || "Payment failed");
        setDialogMessage("❌ Error: " + (result.error || "Payment failed"));
        setDialogStatus("done");
        setTimeout(() => setDialogOpen(false), 3000);
        return;
      }

      const txnId = result.payment.mobilepayments.airtelTxnId;
      setTransactionId(txnId);
      setDialogMessage("📲 Enter your Airtel PIN to complete payment...");
      setDialogStatus("pin");
      pollPaymentStatus(txnId);
      reset();
    } catch (error) {
      console.error("Network error:", error);
      setServerError("Network error. Please try again.");
      setDialogMessage("❌ Network error.");
      setDialogStatus("done");
      setTimeout(() => setDialogOpen(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <Dialog open={dialogOpen}>
        <DialogContent className="text-center space-y-4">
          <DialogHeader>
            <DialogTitle>Processing Payment</DialogTitle>
          </DialogHeader>
          <Spinner />
          <p className="text-sm text-gray-600">{dialogMessage}</p>
        </DialogContent>
      </Dialog>

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
          <Card className="lg:w-1/2 bg-purple-100">
            <CardHeader>
              <CardTitle className="text-3xl text-purple-900">
                Why Donate?
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-gray-700">
              <p>
                Your generous donation helps us continue our mission to serve
                those in need.
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

          <div className="lg:w-1/2 mt-10 lg:mt-0">
            <div className="flex justify-center space-x-4 mb-6">
              <Button
                variant={selectedMethod === "card" ? "default" : "outline"}
                onClick={() => setSelectedMethod("card")}
              >
                Pay with Card
              </Button>
              <Button
                variant={selectedMethod === "mobile" ? "default" : "outline"}
                onClick={() => setSelectedMethod("mobile")}
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
                  <Button type="submit" className="w-full">
                    Pay Now
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

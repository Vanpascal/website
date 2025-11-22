"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Spinner from "../ui/spinner";
import DonateForm from "./DonateForm";

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

  // Handle payment submission
  const handleSubmit = async (data: any) => {
    setServerError(null);
    setDialogOpen(true);
    setDialogStatus("processing");
    setDialogMessage("⏳ Processing your payment...");

    if (selectedMethod === "card") {
      alert("Card payments coming soon. Thank you!");
      setDialogOpen(false);
      return;
    }

    // Mobile money formatting
    let rawPhone = data.phone.trim();
    if (rawPhone.startsWith("255")) rawPhone = rawPhone.slice(3);
    else if (rawPhone.startsWith("0")) rawPhone = rawPhone.slice(1);
    if (!/^\d{9}$/.test(rawPhone)) {
      setServerError("Phone number must have 9 digits after trimming prefix.");
      setDialogOpen(false);
      return;
    }

    try {
      const res = await fetch("/api/mobile-payments/airtel", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, phone: rawPhone }),
      });
      const result = await res.json();
      if (!res.ok) {
        setServerError(result.error || "Payment failed");
        setDialogMessage("❌ Error: " + (result.error || "Payment failed"));
        setDialogStatus("done");
        setTimeout(() => setDialogOpen(false), 3000);
        return;
      }
      setTransactionId(result.payment.mobilepayments.airtelTxnId);
      setDialogMessage("📲 Enter your Airtel PIN to complete payment...");
      setDialogStatus("pin");
    } catch {
      setServerError("Network error. Please try again.");
      setDialogMessage("❌ Network error.");
      setDialogStatus("done");
      setTimeout(() => setDialogOpen(false), 3000);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Payment Dialog */}
      <Dialog open={dialogOpen}>
        <DialogContent className="text-center space-y-4">
          <DialogHeader>
            <DialogTitle>Processing Payment</DialogTitle>
          </DialogHeader>
          <Spinner />
          <p className="text-sm text-gray-600">{dialogMessage}</p>
        </DialogContent>
      </Dialog>

      {/* Hero Banner */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[300px]">
          <Image
            src="/images/long.jpg"
            alt="Donation Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-white animate-fade-in">
            Make a Donation
          </h1>
          <p className="text-yellow-400 mt-2 animate-fade-in delay-150">
            Support our mission by donating through your preferred payment
            method.
          </p>
        </div>
      </section>

      {/* Main Form Section */}
      <div className="container mx-auto px-6 py-12 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:space-x-12 gap-10">
          {/* Why Donate */}
          <Card className="lg:w-1/2 bg-purple-50 hover:shadow-lg transition-shadow duration-300">
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

          {/* Donation Form */}
          <div className="lg:w-1/2 space-y-6">
            {/* Payment Method Tabs */}
            <div className="flex justify-center space-x-4 mb-4">
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

            <DonateForm
              selectedMethod={selectedMethod}
              setValue={() => {}}
              onSubmit={handleSubmit}
              serverError={serverError}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;

"use client";

import React, { useState } from "react";
import Image from "next/image";

const Donate = () => {
  const [selectedMethod, setSelectedMethod] = useState("card");

  return (
    <div className="bg-gray-50 min-h-screen py-12">
      <section className="relative">
        <div className="relative w-full h-80 md:h-[300px]">
          <Image
            src="/images/long.jpg" // Replace with the actual image path
            alt="Motor Vehicle Mechanics Production Unit"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col space-y-5 items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Make a Donation
          </h1>
          <p className="text-yellow-400">
            Support our mission by donating through your preferred payment
            method.
          </p>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto px-6 py-10 lg:px-20">
        <div className="flex flex-col lg:flex-row lg:items-start lg:space-x-10">
          {/* Encouragement Section */}
          <div className="lg:w-1/2 bg-purple-100 rounded-lg p-6">
            <h2 className="text-3xl font-bold text-purple-900 mb-4">
              Why Donate?
            </h2>
            <p className="text-gray-700 mb-4">
              Your generous donation helps us continue our mission to serve
              those in need and spread hope and love. Together, we can make a
              difference in the lives of many. As the Bible says:
            </p>
            <blockquote className="italic text-purple-700 border-l-4 border-purple-900 pl-4">
              &quot;Each of you should give what you have decided in your heart
              to give, not reluctantly or under compulsion, for God loves a
              cheerful giver.&quot; - 2 Corinthians 9:7
            </blockquote>
            <p className="mt-4 text-gray-700">
              Thank you for supporting our work and joining us in creating a
              better future for everyone.
            </p>
          </div>

          {/* Donation Form Section */}
          <div className="lg:w-1/2">
            {/* Payment Method Selection */}
            <div className="flex justify-center space-x-4 mb-6">
              <button
                onClick={() => setSelectedMethod("card")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedMethod === "card"
                    ? "bg-purple-900 text-white shadow-lg"
                    : "bg-white text-purple-900 border border-purple-900"
                }`}
              >
                Pay with Card
              </button>
              <button
                onClick={() => setSelectedMethod("mobile")}
                className={`px-6 py-3 rounded-lg font-semibold transition ${
                  selectedMethod === "mobile"
                    ? "bg-purple-900 text-white shadow-lg"
                    : "bg-white text-purple-900 border border-purple-900"
                }`}
              >
                Pay with Mobile Money
              </button>
            </div>

            {/* Payment Form */}
            <div className="bg-white rounded-lg shadow-lg p-8 lg:p-12">
              {selectedMethod === "card" ? (
                <form className="space-y-6">
                  {/* Card Payment Form */}
                  <h2 className="text-xl font-bold text-purple-900 mb-6">
                    Card Information
                  </h2>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Cardholder Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Card Number
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div className="flex gap-6">
                    <div className="flex-1">
                      <label className="block font-medium text-gray-700 mb-2">
                        Expiration Date
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                    <div className="flex-1">
                      <label className="block font-medium text-gray-700 mb-2">
                        CVV
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Donation For
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the purpose of your donation"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button className="w-full bg-purple-900 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition">
                    Pay Now
                  </button>
                </form>
              ) : (
                <form className="space-y-6">
                  {/* Mobile Money Form */}
                  <h2 className="text-xl font-bold text-purple-900 mb-6">
                    Mobile Money
                  </h2>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Mobile Money Provider
                    </label>
                    <select className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-purple-500">
                      <option value="m-pesa">M-Pesa</option>
                      <option value="tigo-pesa">Tigo Pesa</option>
                      <option value="airtel-money">Airtel Money</option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., 255712345678"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block font-medium text-gray-700 mb-2">
                      Donation For
                    </label>
                    <input
                      type="text"
                      placeholder="Enter the purpose of your donation"
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button className="w-full bg-purple-900 text-white py-4 rounded-lg font-bold hover:bg-purple-700 transition">
                    Pay Now
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Donate;
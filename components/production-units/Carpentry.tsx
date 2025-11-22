"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchCarpentryProducts } from "@/app/actions/productActions";
import { fetchCarpentryHOD } from "@/app/actions/staffActions";

type Product = {
  id: number;
  name: string;
  price: string;
  image: string;
};

type HOD = {
  firstname: string;
  lastname: string;
  title: string;
  photo: string;
};

function Carpentry() {
  const [products, setProducts] = useState<Product[]>([]);
  const [hod, setHOD] = useState<HOD | null>(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchCarpentryProducts();
        const formattedData: Product[] = data.map((product) => ({
          id: product.id,
          name: product.product_name,
          price: product.price,
          image: product.photo ? product.photo : "/images/default-product.jpg",
        }));
        setProducts(formattedData);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    const getHOD = async () => {
      try {
        const data = await fetchCarpentryHOD();
        if (data.length > 0) {
          const hodData = data[0];
          setHOD({
            firstname: hodData.firstname,
            lastname: hodData.lastname,
            title: hodData.position ?? "Head of Department",
            photo: hodData.photo ? hodData.photo : "/images/default-hod.jpg",
          });
        }
      } catch (error) {
        console.error("Error fetching HOD:", error);
      }
    };

    getProducts();
    getHOD();
  }, []);

  return (
    <div className="bg-gray-100">
      {/* Top Section: Full-Width Production Unit Image */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/images/carpentry.jpg"
            alt="Carpentry Production Unit"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            Carpentry Production Unit
          </h1>
        </div>
      </section>

      {/* Content Section */}
      <div className="container mx-auto py-10 px-6">
        <div className="flex flex-col lg:flex-row items-center lg:items-start lg:justify-between gap-8">
          {/* Left Section: Head of Production Unit */}
          {hod && (
            <div className="flex-shrink-0 text-center">
              <div className="relative w-80 h-80 mx-auto">
                <Image
                  src={hod.photo}
                  alt={`${hod.firstname} ${hod.lastname}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <h3 className="font-semibold text-2xl text-gray-800 mt-4">
                {`${hod.firstname} ${hod.lastname}`}
              </h3>
              <p className="text-gray-600 text-lg">{hod.title}</p>
            </div>
          )}

          <div className="bg-white p-6 rounded-lg shadow-md w-full lg:w-2/3">
            <h2 className="text-2xl font-bold text-purple-900 mb-4">
              About the Production Unit
            </h2>
            <p className="text-gray-700 mb-4 text-lg text-justify">
              The Carpentry Production Unit is a vital part of our technical
              training center, equipping students with practical skills in
              woodworking and craftsmanship. Through hands-on experience, they
              learn to create high-quality furniture and structures tailored to
              client needs.
            </p>

            <h3 className="font-bold text-xl text-gray-800 mb-3">
              Services Offered
            </h3>
            <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
              <li>Custom furniture design and manufacturing</li>
              <li>Cabinet making and installation</li>
              <li>Wooden door and window frame crafting</li>
              <li>Repair and restoration of wooden furniture</li>
              <li>General carpentry services</li>
            </ul>

            {/* Button Below Services */}
            <div className="mt-6 flex justify-end">
              <a
                href="/booking"
                className="px-6 py-3 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-300"
              >
                Make a Booking
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="bg-gray-50 py-10 px-6">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-purple-900 text-center mb-8">
            Our Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden"
              >
                <div className="relative w-full h-48">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {product.name}
                      </h3>
                      <p className="text-gray-600">Price: {product.price}</p>
                    </div>
                    <a
                      href="/cart"
                      className="px-4 py-2 bg-purple-600 text-white font-bold rounded-lg shadow-md hover:bg-purple-700"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carpentry;

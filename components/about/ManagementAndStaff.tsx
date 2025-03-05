"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { fetchEmployees } from "@/app/actions/staffActions";

type Employee = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  category: string;
  position: string | null;
  photo: string | null;
  department: string | null;
};

const ManagementAndStaff = () => {
  const [staffMembers, setStaffMembers] = useState<Employee[]>([]);

  useEffect(() => {
    const getEmployees = async () => {
      try {
        const employees = await fetchEmployees();
        setStaffMembers(employees);
      } catch (error) {
        console.error("Error fetching employees:", error);
      }
    };

    getEmployees();
  }, []);

  return (
    <div className="py-10 bg-gray-100">
      {/* Banner Section */}
      <section className="relative">
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/images/about.jpg"
            alt="About Us Banner"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
            The DBYTC Management Staff
          </h1>
        </div>
      </section>

      {/* Staff Members Grid */}
      <div className="container mx-auto px-4 py-10">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {staffMembers.map((member) => (
            <div
              key={member.id}
              className="bg-white p-6 rounded-lg border shadow-md hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="w-full aspect-square relative">
                <Image
                  src={member.photo || "/images/default.jpg"}
                  alt={`${member.firstname} ${member.lastname}`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-md border"
                />
              </div>
              <h3 className="text-2xl font-semibold text-purple-900 mt-4">
                {member.firstname} {member.lastname}
              </h3>
              <p className="text-lg text-gray-700 mt-1">
                {member.position || "Position not assigned"}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ManagementAndStaff;

import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LongCourses from "@/components/academics/LongCourses";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Long Courses",
  keywords:
    "Long Courses, Vocational Training, Technical Education, Don Bosco Iringa, Skills Training, Career Development",
  description:
    "Explore long-term vocational courses offered at Don Bosco Youth Training Center-Iringa. Gain practical skills and training for a brighter future. Our long courses provide in-depth training designed to equip students with the skills needed for professional excellence.",
  openGraph: {
    title: "Long Courses | Don Bosco Youth Training Center-Iringa",
    description:
      "Explore long-term vocational courses offered at Don Bosco Youth Training Center-Iringa. Gain practical skills and training for a brighter future.",
    url: "https://donboscoiringa.org/programs/long-courses",
    type: "website",
    images: [
      {
        url: "https://donboscoiringa.org/images/long.jpg",
        width: 1200,
        height: 630,
        alt: "Long Courses Banner",
      },
    ],
  },
};

const LongCourse = () => {
  return (
    <div>
      <Header />
      <section className="relative">
        <Image
          src="/images/courses.jpg"
          alt="Long Courses Banner"
          width={1200}
          height={630}
          className="w-full h-80 md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Long Courses Offered
          </h1>
        </div>
      </section>
      <LongCourses />
      <Footer />
    </div>
  );
};

export default LongCourse;

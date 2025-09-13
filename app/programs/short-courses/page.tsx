import Image from "next/image";
import Footer from "@/components/Footer";
import Header from "@/components/Header/Header";
import ShortCourses from "@/components/academics/ShortCourses";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Short Courses",
  description:
    "Discover short-term vocational courses at Don Bosco Youth Training Center-Iringa. Gain essential skills and hands-on training for career advancement. Our short courses are tailored to meet the demands of modern professionals, offering concise and impactful learning.",
  keywords:
    "Short Courses, Vocational Training, Technical Skills, Don Bosco Iringa, Career Development, Hands-on Training",
  openGraph: {
    title: "Short Courses | Don Bosco Youth Training Center-Iringa",
    description:
      "Discover short-term vocational courses at Don Bosco Youth Training Center-Iringa. Gain essential skills and hands-on training for career advancement.",
    url: "https://donboscoiringa.org/programs/short-courses",
    type: "website",
    images: [
      {
        url: "https://donboscoiringa.org/images/short.jpg",
        width: 1200,
        height: 630,
        alt: "Short Courses Banner",
      },
    ],
  },
};

const ShortCourse = () => {
  return (
    <div>
      <Header />
      <section className="relative">
        <Image
          src="/images/courses.jpg"
          alt="Short Courses Banner"
          width={1200}
          height={630}
          className="w-full h-80 md:h-[400px] object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Short Courses Offered
          </h1>
        </div>
      </section>
      <ShortCourses />
      <Footer />
    </div>
  );
};

export default ShortCourse;

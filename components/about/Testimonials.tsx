"use client";

import React, { useEffect, useState, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { fetchComments } from "@/app/actions/commentsActions"; // Adjust path as needed
import Image from "next/image";
import AddComment from "@/app/(dashboard)/admin/components/AddComment";

type Testimonial = {
  message: string;
  name: string;
  whoComment: string;
  photo: string;
};

// Utility to get initials from full name
function getInitials(name: string): string {
  if (!name) return "NA";
  const names = name.trim().split(" ");
  if (names.length === 1) return names[0][0].toUpperCase();
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
}

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  const getTestimonials = useCallback(async () => {
    try {
      const data = await fetchComments();
      const formattedData: Testimonial[] = data.map((comment) => ({
        message: comment.content,
        name: comment.author,
        whoComment: comment.whoComment,
        photo: comment.photo ?? "",
      }));
      setTestimonials(formattedData);
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  }, []);

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  return (
    <section className="py-10 bg-gray-50" aria-label="Testimonials Section">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-2xl font-bold text-purple-900 mb-10">
          Want to share your experience?
        </h2>

        {testimonials.length === 0 ? (
          <p className="text-gray-500 mt-6 text-center">
            No testimonials yet. Be the first to comment!
          </p>
        ) : (
          <Swiper
            pagination={{ clickable: true }}
            navigation={false}
            autoplay={{ delay: 5000 }}
            modules={[Pagination, Navigation, Autoplay]}
            className="w-full mt-8"
          >
            {testimonials.map((testimonial, index) => {
              const initials = getInitials(testimonial.name);
              // Compose the default avatar URL with initials and your colors
              const defaultPhotoUrl = `https://ui-avatars.com/api/?name=${initials}&background=6B46C1&color=fff&size=128&font-size=0.5`;

              return (
                <SwiperSlide key={index}>
                  <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg">
                      <Image
                        src={testimonial.photo || defaultPhotoUrl}
                        alt={`${testimonial.name || "User"}'s picture`}
                        fill
                        style={{ objectFit: "cover" }}
                        className="rounded-full"
                      />
                    </div>

                    <div className="text-left flex-1">
                      <p className="italic text-gray-700 mb-4 break-words word-wrap">
                        &quot;{testimonial.message}&quot;
                      </p>
                      <h4 className="text-xl font-semibold text-purple-900">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-black">
                        {testimonial.whoComment}
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
            <AddComment onCommentAdded={getTestimonials} />
          </Swiper>
        )}
      </div>
    </section>
  );
}

export default Testimonials;

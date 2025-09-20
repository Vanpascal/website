"use client";

import React, { useEffect, useState, useCallback } from "react";
import { fetchComments } from "@/app/actions/commentsActions";
import Image from "next/image";
import AddComment from "@/app/(dashboard)/admin/components/AddComment";
import { motion } from "framer-motion";

type Testimonial = {
  message: string;
  name: string;
  whoComment: string;
  photo: string;
  rating?: number;
};

const getInitials = (name: string) => {
  if (!name) return "NA";
  const names = name.trim().split(" ");
  if (names.length === 1) return names[0][0].toUpperCase();
  return (names[0][0] + names[names.length - 1][0]).toUpperCase();
};

const Star = ({ filled }: { filled: boolean }) => (
  <svg
    className={`w-4 h-4 ${filled ? "text-yellow-400" : "text-gray-300"}`}
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 15l-5.878 3.09L5.5 11.545 1 7.91l6.06-.545L10 2l2.94 5.365 6.06.545-4.5 3.635 1.378 6.545z" />
  </svg>
);

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const initials = getInitials(testimonial.name);
  const defaultPhotoUrl = `https://ui-avatars.com/api/?name=${initials}&background=6B46C1&color=fff&size=128&font-size=0.5`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex flex-col md:flex-row items-center gap-6 p-6 bg-white rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
    >
      <div className="relative w-20 h-20 md:w-28 md:h-28 rounded-full ring-4 ring-purple-300/50 overflow-hidden shadow-md">
        <Image
          src={testimonial.photo || defaultPhotoUrl}
          alt={`${testimonial.name || "User"}'s picture`}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-full"
        />
      </div>
      <div className="flex-1 text-left">
        <p className="italic text-gray-700 mb-3 break-words text-sm md:text-base">
          &quot;{testimonial.message}&quot;
        </p>
        <div className="flex flex-col md:flex-row md:items-center md:gap-3">
          <h4 className="text-lg md:text-xl font-semibold text-purple-900">
            {testimonial.name}
          </h4>
          <p className="text-sm text-gray-500">{testimonial.whoComment}</p>
        </div>
        {testimonial.rating && (
          <div className="flex mt-2">
            {Array.from({ length: 5 }, (_, i) => (
              <Star key={i} filled={i < testimonial.rating!} />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);

  const getTestimonials = useCallback(async () => {
    try {
      setLoading(true);
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
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    getTestimonials();
  }, [getTestimonials]);

  return (
    <section className="py-16 bg-gradient-to-r from-purple-50 to-purple-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-xl md:text-2xl font-bold text-purple-900 mb-12">
          What People Are Saying!
        </h2>

        {loading ? (
          <div className="flex justify-center gap-4 animate-pulse flex-wrap">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-full md:w-80 h-48 bg-gray-200 rounded-3xl"
              />
            ))}
          </div>
        ) : testimonials.length === 0 ? (
          <p className="text-gray-500 mt-6 text-center">
            No testimonials yet. Be the first to comment!
          </p>
        ) : (
          <div className="flex flex-col md:flex-row md:flex-wrap gap-6 justify-center">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} testimonial={testimonial} />
            ))}
          </div>
        )}

        <div className="mt-12">
          <AddComment onCommentAdded={getTestimonials} />
        </div>
      </div>
    </section>
  );
}

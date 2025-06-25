import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { fetchComments } from "@/app/actions/commentsActions"; // Adjust the import path as needed
import Image from "next/image";
import AddComment from "@/app/(dashboard)/admin/components/AddComment";


// Define the Testimonial type
type Testimonial = {
  message: string;
  name: string;
  whoComment: string;
  photo: string;
};

function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    const getTestimonials = async () => {
      try {
        const data = await fetchComments(); // Fetch testimonials using fetchComments
        // Transform the data to match the expected state type
        const formattedData: Testimonial[] = data.map((comment) => ({
          message: comment.content,
          name: comment.author,
          whoComment: comment.whoComment,
          photo: comment.photo ? comment.photo : "/images/default-avatar.png", // Provide a default photo if null
        }));
        setTestimonials(formattedData);
      } catch (error) {
        console.error("Error fetching testimonials:", error);
      }
    };

    getTestimonials();
  }, []);

  return (
    <section className="py-10 bg-gray-50">
      <div className="container mx-auto px-4 text-start">
        <h2 className="text-2xl font-bold text-purple-900 mb-10">
          What people say about us
        </h2>
        
        <AddComment /> {/* Include the AddComment component */}

        <Swiper
          pagination={{ clickable: true }}
          navigation={false}
          autoplay={{ delay: 5000 }}
          modules={[Pagination, Navigation, Autoplay]}
          className="w-full"
        >
          {testimonials.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-8 p-8 bg-white rounded-lg shadow-md">
                {/* Testimonial Image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full shadow-lg">
                  <Image
                    src={testimonial.photo}
                    alt={`${testimonial.name}'s picture`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                  />
                </div>

                {/* Testimonial Text */}
                <div className="text-left flex-1">
                  <p className="italic text-gray-700 mb-4 break-words word-wrap">
                    &quot;{testimonial.message}&quot;
                  </p>
                  <h4 className="text-xl font-semibold text-purple-900">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-black">{testimonial.whoComment}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Testimonials;

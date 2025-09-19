"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { PublicationType } from "@/app/actions/publicationActions";

interface PublicationsProps {
  initialPublications: PublicationType[];
}

export default function PublicationsSection({
  initialPublications,
}: PublicationsProps) {
  const [publications, setPublications] = useState<PublicationType[]>(
    initialPublications ?? []
  );

  useEffect(() => {
    console.log("📢 PublicationsSection received props:", initialPublications);
    setPublications(initialPublications ?? []);
  }, [initialPublications]);

  if (!publications || publications.length === 0) {
    return (
      <div className="text-center text-gray-500 py-10">
        No publications yet.
      </div>
    );
  }

  const topPublications = publications.slice(0, 3);
  const remainingPublications = publications.slice(3);

  return (
    <section className="py-12 px-6 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-purple-900 mb-10">
        Latest Publications
      </h2>

      {/* Featured Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-10">
        {topPublications.map((pub, idx) => (
          <motion.div
            key={pub.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="bg-white rounded-3xl shadow-2xl overflow-hidden hover:scale-105 transition-transform duration-300 relative"
          >
            <div className="relative w-full aspect-video">
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-t-3xl"
                src={`https://www.youtube.com/embed/${pub.youtubeId}`}
                title={pub.title}
                allowFullScreen
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg sm:text-xl font-bold text-purple-900 line-clamp-2">
                {pub.title}
              </h3>
              <p className="text-gray-500 text-sm mt-2">
                Published on {new Date(pub.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none rounded-3xl" />
          </motion.div>
        ))}
      </div>

      {/* Carousel for remaining publications */}
      {remainingPublications.length > 0 && (
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={16}
          pagination={{ clickable: true }}
          navigation
          autoplay={{ delay: 6000 }}
          loop
          breakpoints={{
            640: { slidesPerView: 2, spaceBetween: 16 },
            1024: { slidesPerView: 3, spaceBetween: 24 },
          }}
        >
          {remainingPublications.map((pub) => (
            <SwiperSlide key={pub.id}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300 relative"
              >
                <div className="relative w-full aspect-video">
                  <iframe
                    className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                    src={`https://www.youtube.com/embed/${pub.youtubeId}`}
                    title={pub.title}
                    allowFullScreen
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-purple-900 line-clamp-2">
                    {pub.title}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1">
                    Published on {new Date(pub.createdAt).toLocaleDateString()}
                  </p>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl" />
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}

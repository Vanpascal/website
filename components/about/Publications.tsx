"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getAllPublications } from "@/app/actions/publicationActions";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

type Publication = {
  id: number;
  title: string;
  youtubeId: string;
  createdAt: string;
};

export default function PublicationsSection() {
  const [publications, setPublications] = useState<Publication[]>([]);

  useEffect(() => {
    async function getPublications() {
      const data = await getAllPublications();
      setPublications(
        data.map((pub: any) => ({
          id: pub.id,
          title: pub.title,
          youtubeId: pub.youtubeId,
          createdAt:
            pub.createdAt instanceof Date
              ? pub.createdAt.toISOString()
              : pub.createdAt,
        }))
      );
    }
    getPublications();
  }, []);

  if (publications.length === 0) {
    return (
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 mb-10">
            Latest Publications
          </h2>
          <p className="text-gray-500">No publications yet.</p>
        </div>
      </section>
    );
  }

  const firstPublications = publications.slice(0, 3);
  const remainingPublications = publications.slice(3);

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 text-center mb-10">
          Latest Publications
        </h2>

        {/* Featured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {firstPublications.map((pub, idx) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="bg-white rounded-3xl shadow-2xl overflow-hidden relative hover:scale-105 transition-transform duration-300"
            >
              <div className="relative w-full aspect-video">
                <iframe
                  className="absolute top-0 left-0 w-full h-full rounded-t-3xl"
                  src={`https://www.youtube.com/embed/${pub.youtubeId}`}
                  title={pub.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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

        {/* Scrollable carousel */}
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
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:scale-105 hover:shadow-xl transition-transform duration-300"
                >
                  <div className="relative w-full aspect-video">
                    <iframe
                      className="absolute top-0 left-0 w-full h-full rounded-t-2xl"
                      src={`https://www.youtube.com/embed/${pub.youtubeId}`}
                      title={pub.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-purple-900 line-clamp-2">
                      {pub.title}
                    </h3>
                    <p className="text-gray-500 text-sm mt-1">
                      Published on{" "}
                      {new Date(pub.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent pointer-events-none rounded-2xl" />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
}

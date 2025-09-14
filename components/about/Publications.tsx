"use client";

import { useEffect, useState } from "react";

import { motion } from "framer-motion";
import { getAllPublications } from "@/app/actions/publicationActions";

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

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-900 text-center mb-10">
          Latest Publications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {publications.map((pub) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              {/* YouTube Video */}
              <div className="relative w-full h-64">
                <iframe
                  className="w-full h-full"
                  src={`https://www.youtube.com/embed/${pub.youtubeId}`}
                  title={pub.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>

              {/* Title */}
              <div className="p-4">
                <h3 className="text-lg font-semibold text-purple-900">
                  {pub.title}
                </h3>
                <p className="text-gray-500 text-sm mt-1">
                  Published on {new Date(pub.createdAt).toLocaleDateString()}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

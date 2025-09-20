"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { fetchBanners } from "@/app/actions/bannerActions";

type Banner = {
  id: number;
  title: string;
  link: string | null;
  createdAt: Date;
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const stepTime = Math.max(Math.floor(duration / value), 1);
    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= value) clearInterval(timer);
    }, stepTime);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <div className="font-bold text-3xl sm:text-4xl md:text-5xl text-yellow-400">
      {count}+
    </div>
  );
};

export default function HeroCarousel() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    async function getBanners() {
      const data = await fetchBanners();
      setBanners(data);
    }
    getBanners();
  }, []);

  return (
    <div className="relative w-full bg-purple-900">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[600px] lg:h-[650px] overflow-hidden">
        {/* Mobile carousel */}
        <div className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth md:hidden gap-4 py-4 px-4">
          {banners.map((banner) => (
            <div
              key={banner.id}
              className="snap-center flex-shrink-0 w-[90%] h-[50vh] sm:h-[60vh] relative rounded-3xl overflow-hidden shadow-lg"
            >
              <Image
                src={banner.link ?? "/placeholder.jpg"}
                alt={banner.title}
                fill
                className="object-cover w-full h-full brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent p-6 flex flex-col justify-center">
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl font-extrabold text-white drop-shadow-lg"
                >
                  {banner.title}
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                  className="text-gray-200 mt-2 sm:mt-4 text-sm sm:text-lg"
                >
                  Shaping skills, empowering futures – Don Bosco Youth Training
                  Centre.
                </motion.p>
                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="/apply"
                    className="px-4 sm:px-6 py-2 sm:py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/about"
                    className="px-4 sm:px-6 py-2 sm:py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300 text-sm sm:text-base"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop & Tablet */}
        <div className="hidden md:block w-full h-full relative">
          {banners.map((banner, idx) => (
            <motion.div
              key={banner.id}
              initial={{ opacity: idx === 0 ? 1 : 0 }}
              animate={{ opacity: idx === 0 ? 1 : 0 }}
              transition={{ duration: 0.8 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={banner.link ?? "/placeholder.jpg"}
                alt={banner.title}
                fill
                className="object-cover w-full h-full brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent px-16 flex items-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-left text-white max-w-2xl"
                >
                  <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold drop-shadow-lg">
                    {banner.title}
                  </h1>
                  <p className="mt-4 text-gray-200 text-lg md:text-xl">
                    Shaping skills, empowering futures – Don Bosco Youth
                    Training Centre.
                  </p>
                  <div className="mt-6 flex flex-wrap gap-4">
                    <a
                      href="/apply"
                      className="px-6 py-3 bg-gradient-to-r from-yellow-400 to-yellow-500 text-purple-900 font-semibold rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
                    >
                      Apply Now
                    </a>
                    <a
                      href="/about"
                      className="px-6 py-3 border border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
                    >
                      Learn More
                    </a>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative mt-8">
        <div className="container mx-auto bg-purple-900/90 rounded-xl shadow-lg p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={450} />
            <p className="text-gray-200 mt-2">Youth Under Training</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={10} />
            <p className="text-gray-200 mt-2">Technical Courses Offered</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={15} />
            <p className="text-gray-200 mt-2">Qualified Instructors</p>
          </div>
          <div className="hover:scale-105 transition-transform duration-300">
            <AnimatedNumber value={40} />
            <p className="text-gray-200 mt-2">Years of Service Since 1981</p>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence, PanInfo } from "framer-motion";
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
    <div className="font-bold text-3xl sm:text-4xl md:text-5xl text-orange-400">
      {count}+
    </div>
  );
};

export default function HeroCarousel() {
  const [banners, setBanners] = useState<Banner[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function getBanners() {
      const data = await fetchBanners();
      setBanners(data);
    }
    getBanners();
  }, []);

  // Auto-rotate banners every 5 seconds
  useEffect(() => {
    if (banners.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [banners]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    if (offset > 50) {
      setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    } else if (offset < -50) {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }
  };

  const goTo = (index: number) => setActiveIndex(index);
  const prevSlide = () =>
    setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % banners.length);

  if (banners.length === 0) return null;
  const currentBanner = banners[activeIndex];

  return (
    <div className="relative w-full bg-purple-900">
      {/* Hero Section */}
      <div className="relative w-full h-[50vh] sm:h-[60vh] md:h-[600px] lg:h-[650px] overflow-hidden">
        {/* Mobile Carousel */}
        <div className="md:hidden w-full h-full relative overflow-hidden">
          <AnimatePresence>
            <motion.div
              key={currentBanner.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              onDragEnd={handleDragEnd}
              className="absolute inset-0 w-full h-full cursor-grab"
            >
              <Image
                src={currentBanner.link ?? "/placeholder.jpg"}
                alt={currentBanner.title}
                fill
                className="object-cover w-full h-full brightness-90"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4 sm:p-6 flex flex-col justify-end">
                <h1 className="text-xl sm:text-2xl font-extrabold text-white drop-shadow-md leading-snug">
                  {currentBanner.title}
                </h1>
                <div className="mt-3 flex flex-wrap gap-2">
                  <a
                    href="/apply"
                    className="px-3 py-2 sm:px-4 sm:py-2.5 bg-gradient-to-r from-orange-400 to-orange-500 text-purple-900 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 text-xs sm:text-sm"
                  >
                    Apply Now
                  </a>
                  <a
                    href="/admission"
                    className="px-3 py-2 sm:px-4 sm:py-2.5 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-900 transition-all duration-300 text-xs sm:text-sm"
                  >
                    Learn More
                  </a>
                </div>
                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {banners.map((_, idx) => (
                    <button
                      key={idx}
                      className={`w-2 h-2 rounded-full ${
                        idx === activeIndex ? "bg-orange-400" : "bg-white/50"
                      }`}
                      onClick={() => goTo(idx)}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Desktop Carousel */}
        <div className="hidden md:block w-full h-full relative">
          <AnimatePresence>
            {banners.map((banner, idx) =>
              idx === activeIndex ? (
                <motion.div
                  key={banner.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute inset-0 w-full h-full"
                >
                  <Image
                    src={banner.link ?? "/placeholder.jpg"}
                    alt={banner.title}
                    fill
                    className="object-cover w-full h-full brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-10 lg:px-16 pb-10 flex flex-col justify-end">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg leading-snug max-w-3xl">
                      {banner.title}
                    </h1>
                    <div className="mt-4 flex flex-wrap gap-4">
                      <a
                        href="/apply"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 bg-gradient-to-r from-orange-500 to-orange-600 text-purple-900 font-semibold rounded-md shadow-lg hover:scale-105 transition-transform duration-300 text-sm sm:text-base"
                      >
                        Apply Now
                      </a>
                      <a
                        href="/admission"
                        className="px-5 py-2.5 sm:px-6 sm:py-3 border border-white text-white font-semibold rounded-md hover:bg-white hover:text-purple-900 transition-all duration-300 text-sm sm:text-base"
                      >
                        Learn More
                      </a>
                    </div>
                    {/* Dots */}
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
                      {banners.map((_, idx) => (
                        <button
                          key={idx}
                          className={`w-3 h-3 rounded-full ${
                            idx === activeIndex
                              ? "bg-orange-400"
                              : "bg-white/50"
                          }`}
                          onClick={() => goTo(idx)}
                        />
                      ))}
                    </div>
                    {/* Arrows */}
                    <button
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
                      onClick={prevSlide}
                    >
                      &#10094;
                    </button>
                    <button
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/30 p-2 rounded-full hover:bg-black/50 transition"
                      onClick={nextSlide}
                    >
                      &#10095;
                    </button>
                  </div>
                </motion.div>
              ) : null
            )}
          </AnimatePresence>
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

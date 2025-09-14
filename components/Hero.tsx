"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, useInView } from "framer-motion";
import { fetchBanners } from "@/app/actions/bannerActions";

type Banner = {
  id: number;
  title: string;
  link: string | null;
  createdAt: Date;
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 1500;
      const stepTime = Math.max(Math.floor(duration / value), 1);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= value) clearInterval(timer);
      }, stepTime);
    }
  }, [inView, value]);

  return (
    <div
      ref={ref}
      className="font-bold text-3xl sm:text-4xl md:text-5xl"
      style={{ color: "#FFD700" }}
    >
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
      {/* Slider & Content */}
      <div className="relative w-full h-[550px] md:h-[600px] lg:h-[650px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-white",
            bulletActiveClass: "!bg-[#FFD700]",
          }}
          autoplay={{ delay: 6000 }}
          loop
          className="w-full h-full"
        >
          {banners.map((banner) => (
            <SwiperSlide key={banner.id}>
              <div className="relative w-full h-full">
                <Image
                  src={banner.link ?? "/placeholder.jpg"}
                  alt={banner.title}
                  fill
                  className="object-cover w-full h-full brightness-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

                <div className="absolute inset-0 flex items-center px-6 md:px-16 lg:px-24">
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-left text-white max-w-2xl"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight drop-shadow-lg">
                      {banner.title}
                    </h1>
                    <p className="mt-4 text-sm sm:text-lg md:text-xl text-gray-200">
                      Shaping skills, empowering futures – Don Bosco Youth
                      Training Centre.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-4">
                      <a
                        href="/apply"
                        className="px-6 py-3 bg-gradient-to-r from-[#FFD700] to-[#FFC000] text-purple-900 font-semibold rounded-lg shadow-lg hover:from-[#FFC000] hover:to-[#E6AC00] hover:shadow-[0_0_20px_#FFD700] transition-all duration-300"
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
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Stats below slider */}
      <div className="relative mt-8">
        <div className="container mx-auto bg-purple-900/90 rounded-xl shadow-lg p-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          <div>
            <AnimatedNumber value={450} />
            <p className="text-gray-200 mt-2">Youth Under Training</p>
          </div>
          <div>
            <AnimatedNumber value={20} />
            <p className="text-gray-200 mt-2">Courses Offered</p>
          </div>
          <div>
            <AnimatedNumber value={15} />
            <p className="text-gray-200 mt-2">Expert Instructors</p>
          </div>
          <div>
            <AnimatedNumber value={40} />
            <p className="text-gray-200 mt-2">Years of Service Since 1981</p>
          </div>
        </div>
      </div>
    </div>
  );
}

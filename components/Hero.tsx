"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { fetchBanners } from "@/app/actions/bannerActions";

type Banner = {
  id: number;
  title: string;
  link: string | null;
  createdAt: Date;
};

export default function ResponsiveCarousel() {
  const [banners, setBanners] = useState<Banner[]>([]);

  useEffect(() => {
    async function getBanners() {
      const data = await fetchBanners();
      setBanners(data);
    }
    getBanners();
  }, []);

  return (
    <div className="relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="w-full"
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id}>
            <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
              <Image
                src={banner.link ?? "/placeholder.jpg"}
                alt={banner.title}
                layout="fill"
                objectFit="contain"
                className="w-full h-full"
              />
              {/* Gradient Overlay for Better Readability */}
              <div className="absolute bottom-0 w-full h-2/5 bg-gradient-to-t from-black/70 to-transparent">
                <div className="absolute bottom-1 bg-black/40 sm:bg-black/60 text-white text-left px-2 py-1 sm:px-4 sm:py-2 rounded-lg w-[90%] md:w-auto">
                  <h2 className="text-sm sm:text-lg md:text-xl font-semibold">
                    {banner.title}
                  </h2>
                </div>
              </div>

              {/* Left-Aligned Title */}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

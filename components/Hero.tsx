"use client";

import { useState, useEffect } from "react";
import Image from "next/legacy/image";
import { fetchBanners } from "@/app/actions/bannerActions";

const Hero = () => {
  const [banners, setBanners] = useState<{ link: string; title: string }[]>([]);
  const [currentBannerIndex, setCurrentBannerIndex] = useState(0);

  useEffect(() => {
    // Fetch banners on component mount
    const fetchBannerData = async () => {
      try {
        const bannerData = await fetchBanners();

        const validBannerData = bannerData
          .filter((banner) => banner.link !== null)
          .map((banner) => ({ link: banner.link!, title: banner.title }));

        setBanners(validBannerData);
      } catch (error) {
        console.error("Error fetching banners:", error);
      }
    };

    fetchBannerData();
  }, []);

  useEffect(() => {
    if (banners.length > 1) {
      const interval = setInterval(() => {
        setCurrentBannerIndex((prevIndex) => (prevIndex + 1) % banners.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [banners]);

  return (
    <div className="text-justify">
      <section className="relative h-[300px] sm:h-[300px] md:h-[400px] lg:h-[600px] xl:h-[600px] flex flex-col justify-end items-center text-white">
        {banners.map((banner, index) => (
          <Image
            key={index}
            src={banner.link}
            alt={`Banner ${index + 1}`}
            layout="fill"
            objectFit="cover"
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
              index === currentBannerIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Gradient shadow at the bottom */}
        <div className="absolute bottom-0 w-full h-1/4 bg-gradient-to-t from-black to-transparent" />

        {/* Title */}
        {banners.length > 0 && (
          <div className="relative z-10 px-4 py-4 text-center">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-4xl xl:text-5xl font-bold">
              {banners[currentBannerIndex]?.title}
            </h1>
          </div>
        )}
      </section>
    </div>
  );
};

export default Hero;

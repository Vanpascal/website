// components/ResponsiveCarousel.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
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
      <Carousel
        showArrows={true}
        showThumbs={true}
        infiniteLoop={true}
        autoPlay={true}
        interval={5000} // Change slide every 5 seconds (5000 milliseconds)
      >
        {banners.map((banner, index) => (
          <div key={index} className="relative w-full">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src={banner.link ?? "/placeholder.jpg"} // Use a placeholder image if link is null
                alt={banner.title}
                layout="fill"
                objectFit="contain"
                className="object-center"
              />
            </div>
            <div className="w-full text-center mt-2">
              <h2 className="text-blue-800 font-bold">{banner.title}</h2>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
}

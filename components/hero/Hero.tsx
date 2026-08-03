"use client";

import { useEffect, useState } from "react";
import { PanInfo } from "framer-motion";

import { fetchBanners } from "@/app/actions/bannerActions";

import HeroSlider from "./HeroSlider";
import HeroContent from "./HeroContent";
import HeroAnnouncements from "./HeroAnnouncements";
import AnimatedNumber from "./AnimatedNumber";

import { HeroBanner } from "./types";

export default function Hero() {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    async function load() {
      const data = await fetchBanners();
      setBanners(data as HeroBanner[]);
    }

    load();
  }, []);

  useEffect(() => {
    if (banners.length <= 1 || isPaused) return;

    const timer = setInterval(() => {
      setActiveIndex((previous) => (previous + 1) % banners.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [banners.length, isPaused]);

  const nextSlide = () => {
    setActiveIndex((previous) => (previous + 1) % banners.length);
  };

  const previousSlide = () => {
    setActiveIndex((previous) =>
      previous === 0 ? banners.length - 1 : previous - 1,
    );
  };

  const handleDragEnd = (_: unknown, info: PanInfo) => {
    if (info.offset.x < -50) {
      nextSlide();
    }

    if (info.offset.x > 50) {
      previousSlide();
    }
  };

  if (!banners.length) return null;

  const currentBanner = banners[activeIndex];

  return (
    <section
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* HERO IMAGE + CONTENT */}

      <div className="relative">
        <HeroSlider
          banners={banners}
          activeIndex={activeIndex}
          setActiveIndex={setActiveIndex}
          nextSlide={nextSlide}
          previousSlide={previousSlide}
          onDragEnd={handleDragEnd}
        />

        <HeroContent banner={currentBanner} />
      </div>

      {/* STATISTICS */}

      <div
        className="
        relative
        z-30
        -mt-10
        container
        mx-auto
        px-5
        "
      >
        <div
          className="
          grid
          grid-cols-2
          lg:grid-cols-4
          gap-5
          "
        >
          <StatCard value={450} label="Youth Under Training" />

          <StatCard value={10} label="Technical Courses" />

          <StatCard value={15} label="Qualified Instructors" />

          <StatCard value={40} label="Years Of Service" />
        </div>
      </div>

      {/* ANNOUNCEMENTS */}

      <div className="mt-10">
        <HeroAnnouncements />
      </div>
    </section>
  );
}

function StatCard({ value, label }: { value: number; label: string }) {
  return (
    <div
      className="
      bg-purple-900
      rounded-2xl
      shadow-xl
      border
      border-gray-100

      p-5
      sm:p-6

      flex
      items-center
      justify-center

      hover:-translate-y-2
      transition-all
      duration-300
      "
    >
      <AnimatedNumber value={value} label={label} />
    </div>
  );
}

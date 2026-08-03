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

      if (start >= value) {
        clearInterval(timer);
      }
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
    async function loadBanners() {
      const data = await fetchBanners();
      setBanners(data);
    }

    loadBanners();
  }, []);

  useEffect(() => {
    if (!banners.length) return;

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [banners]);

  const handleDragEnd = (_: any, info: PanInfo) => {
    if (info.offset.x > 50) {
      setActiveIndex((prev) => (prev === 0 ? banners.length - 1 : prev - 1));
    }

    if (info.offset.x < -50) {
      setActiveIndex((prev) => (prev + 1) % banners.length);
    }
  };

  const currentBanner = banners[activeIndex];

  if (!currentBanner) return null;

  return (
    <div className="relative w-full bg-purple-900">
      {/* HERO CAROUSEL */}
      <section
        className="
        relative
        w-full
        aspect-[12/5]
        min-h-[420px]
        max-h-[700px]
        overflow-hidden
        "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBanner.id}
            initial={{
              opacity: 0,
              scale: 1,
            }}
            animate={{
              opacity: 1,
              scale: 1.05,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 5,
              ease: "easeOut",
            }}
            drag="x"
            dragConstraints={{
              left: 0,
              right: 0,
            }}
            onDragEnd={handleDragEnd}
            className="
            absolute
            inset-0
            cursor-grab
            "
          >
            <Image
              src={currentBanner.link ?? "/placeholder.jpg"}
              alt={currentBanner.title}
              fill
              priority
              sizes="100vw"
              className="
              object-cover
              object-center
              brightness-90
              "
            />

            {/* Overlay */}
            <div
              className="
              absolute
              inset-0
              bg-gradient-to-r
from-black/75
via-black/40
to-transparent
              "
            />

            {/* Content */}
            <div
              className="
  absolute
  inset-0
  flex
  flex-col
  justify-end
  px-5
  sm:px-10
  md:px-16
  pb-10
  sm:pb-14
  md:pb-16
  "
            >
              <h1
                className="
    max-w-xl
    sm:max-w-2xl
    text-2xl
    sm:text-3xl
    md:text-5xl
    lg:text-6xl
    font-extrabold
    text-white
    leading-tight
    drop-shadow-lg
    "
              >
                {currentBanner.title}
              </h1>

              <div
                className="
    mt-4
    flex
    flex-wrap
    gap-3
    "
              >
                <a
                  href="/apply"
                  className="
      px-5
      py-2.5
      sm:px-6
      sm:py-3
      bg-orange-500
      text-purple-900
      font-bold
      rounded-md
      shadow-lg
      hover:scale-105
      transition
      text-sm
      sm:text-base
      "
                >
                  Apply Now
                </a>

                <a
                  href="/admission"
                  className="
      px-5
      py-2.5
      sm:px-6
      sm:py-3
      border
      border-white
      text-white
      font-semibold
      rounded-md
      hover:bg-white
      hover:text-purple-900
      transition
      text-sm
      sm:text-base
      "
                >
                  Learn More
                </a>
              </div>
            </div>

            {/* Navigation dots */}
            <div
              className="
              absolute
              bottom-6
              left-1/2
              -translate-x-1/2
              flex
              gap-3
              "
            >
              {banners.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`
                  w-3
                  h-3
                  rounded-full
                  ${index === activeIndex ? "bg-orange-400" : "bg-white/50"}
                  `}
                />
              ))}
            </div>

            {/* Desktop arrows */}
            <button
              onClick={() =>
                setActiveIndex(
                  activeIndex === 0 ? banners.length - 1 : activeIndex - 1,
                )
              }
              className="
              hidden
              md:block
              absolute
              left-5
              top-1/2
              -translate-y-1/2
              bg-black/40
              text-white
              p-3
              rounded-full
              "
            >
              ❮
            </button>

            <button
              onClick={() => setActiveIndex((activeIndex + 1) % banners.length)}
              className="
              hidden
              md:block
              absolute
              right-5
              top-1/2
              -translate-y-1/2
              bg-black/40
              text-white
              p-3
              rounded-full
              "
            >
              ❯
            </button>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Stats */}
      <div className="relative mt-8">
        <div
          className="
          container
          mx-auto
          bg-purple-900/90
          rounded-xl
          shadow-lg
          p-8
          grid
          grid-cols-2
          sm:grid-cols-4
          gap-6
          text-center
          "
        >
          <div>
            <AnimatedNumber value={450} />
            <p className="text-gray-200 mt-2">Youth Under Training</p>
          </div>

          <div>
            <AnimatedNumber value={10} />
            <p className="text-gray-200 mt-2">Technical Courses Offered</p>
          </div>

          <div>
            <AnimatedNumber value={15} />
            <p className="text-gray-200 mt-2">Qualified Instructors</p>
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

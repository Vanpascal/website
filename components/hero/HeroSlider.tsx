"use client";

import Image from "next/image";
import { AnimatePresence, motion, PanInfo } from "framer-motion";

import { HeroBanner } from "./types";

interface HeroSliderProps {
  banners: HeroBanner[];
  activeIndex: number;
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
  nextSlide: () => void;
  previousSlide: () => void;
  onDragEnd: (_: unknown, info: PanInfo) => void;
}

export default function HeroSlider({
  banners,
  activeIndex,
  setActiveIndex,
  nextSlide,
  previousSlide,
  onDragEnd,
}: HeroSliderProps) {
  if (!banners.length) return null;

  const currentBanner = banners[activeIndex];

  return (
    <section
      className="
      relative
      w-full
      aspect-[16/9]

      min-h-[520px]
      sm:min-h-[560px]
      md:min-h-[650px]
      lg:min-h-[720px]

      overflow-hidden
      "
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentBanner.id}
          className="
          absolute
          inset-0
          cursor-grab
          "
          drag="x"
          dragConstraints={{
            left: 0,
            right: 0,
          }}
          onDragEnd={onDragEnd}
          initial={{
            opacity: 0,
            scale: 1.05,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1,
            ease: "easeOut",
          }}
        >
          <Image
            src={currentBanner.image}
            alt={currentBanner.title}
            fill
            priority
            sizes="
            100vw
            "
            className="
            object-cover

            object-center

            md:object-[65%_center]

            lg:object-[70%_center]

            "
          />

          {/* Desktop / Tablet Gradient */}

          <div
            className="
            absolute
            inset-0

            bg-gradient-to-r

            from-black/90

            via-black/55

            to-black/10


            sm:from-black/85

            md:from-black/80

            lg:from-black/75

            "
          />

          {/* Bottom mobile readability layer */}

          <div
            className="
            absolute
            inset-x-0
            bottom-0
            h-1/2

            bg-gradient-to-t
            from-black/70
            to-transparent

            md:hidden

            "
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation dots */}

      {banners.length > 1 && (
        <div
          className="
            absolute
            bottom-8
            left-1/2
            -translate-x-1/2

            flex
            gap-3

            z-20
            "
        >
          {banners.map((banner, index) => (
            <button
              key={banner.id}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`
                    
                    rounded-full
                    transition-all
                    duration-300


                    ${
                      activeIndex === index
                        ? "w-10 h-3 bg-orange-500"
                        : "w-3 h-3 bg-white/50 hover:bg-white"
                    }

                    `}
            />
          ))}
        </div>
      )}

      {/* Desktop arrows */}

      {banners.length > 1 && (
        <>
          <button
            onClick={previousSlide}
            aria-label="Previous banner"
            className="
            hidden
            lg:flex

            absolute
            left-6
            top-1/2
            -translate-y-1/2

            z-20

            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-white/10
            backdrop-blur-md

            text-white
            text-2xl

            hover:bg-orange-500
            hover:scale-110

            transition

            "
          >
            ❮
          </button>

          <button
            onClick={nextSlide}
            aria-label="Next banner"
            className="
            hidden
            lg:flex

            absolute
            right-6
            top-1/2
            -translate-y-1/2

            z-20

            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-white/10
            backdrop-blur-md

            text-white
            text-2xl

            hover:bg-orange-500
            hover:scale-110

            transition

            "
          >
            ❯
          </button>
        </>
      )}
    </section>
  );
}

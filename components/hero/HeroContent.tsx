"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { HeroBanner } from "./types";

interface HeroContentProps {
  banner: HeroBanner;
}

const categoryStyles: Record<string, string> = {
  ADMISSION: "bg-orange-500 text-white",
  EVENT: "bg-blue-600 text-white",
  NEWS: "bg-green-600 text-white",
  PROMOTION: "bg-purple-700 text-white",
  GENERAL: "bg-gray-700 text-white",
};

export default function HeroContent({ banner }: HeroContentProps) {
  return (
    <div
      className="
      absolute
      inset-0
      z-10
      flex
      items-center
      "
    >
      <div
        className="
        container
        mx-auto
        px-6
        sm:px-8
        lg:px-12
        "
      >
        <motion.div
          key={banner.id}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25 }}
            className="
            mt-5
            text-white
            font-extrabold
            leading-tight
            tracking-tight

            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl

            drop-shadow-xl
            "
          >
            {banner.title}
          </motion.h1>

          {/* Subtitle */}
          {banner.subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="
              mt-6
              max-w-2xl
              text-gray-100
              leading-relaxed

              text-base
              sm:text-lg
              md:text-xl
              "
            >
              {banner.subtitle}
            </motion.p>
          )}

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="
            mt-8
            flex
            flex-wrap
            gap-4
            "
          >
            {banner.primaryButtonText && banner.primaryButtonLink && (
              <Link
                href={banner.primaryButtonLink}
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-lg

                  bg-orange-500
                  hover:bg-orange-600

                  px-7
                  py-3.5

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:scale-105
                  "
              >
                {banner.primaryButtonText}
              </Link>
            )}

            {banner.secondaryButtonText && banner.secondaryButtonLink && (
              <Link
                href={banner.secondaryButtonLink}
                className="
                  inline-flex
                  items-center
                  justify-center

                  rounded-lg

                  border-2
                  border-white

                  bg-white/10
                  backdrop-blur-md

                  px-7
                  py-3.5

                  font-semibold
                  text-white

                  transition-all
                  duration-300

                  hover:bg-white
                  hover:text-purple-900
                "
              >
                {banner.secondaryButtonText}
              </Link>
            )}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

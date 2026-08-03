"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Megaphone,
  CalendarDays,
  Newspaper,
  GraduationCap,
  Sparkles,
} from "lucide-react";

import { HeroAnnouncement } from "./types";

interface HeroAnnouncementsProps {
  announcements?: HeroAnnouncement[];
}

const announcementStyles: Record<
  string,
  {
    color: string;
    icon: React.ReactNode;
  }
> = {
  ADMISSION: {
    color: "bg-orange-500",
    icon: <GraduationCap size={14} />,
  },

  EVENT: {
    color: "bg-blue-600",
    icon: <CalendarDays size={14} />,
  },

  NEWS: {
    color: "bg-green-600",
    icon: <Newspaper size={14} />,
  },

  NOTICE: {
    color: "bg-purple-700",
    icon: <Megaphone size={14} />,
  },

  PROMOTION: {
    color: "bg-red-600",
    icon: <Sparkles size={14} />,
  },
};

export default function HeroAnnouncements({
  announcements = [],
}: HeroAnnouncementsProps) {
  const defaultAnnouncements: HeroAnnouncement[] = [
    {
      id: 1,
      title: "2027 Intake Applications Are Now Open",
      type: "ADMISSION",
      link: "/apply",
      isActive: true,
      startDate: null,
      endDate: null,
      createdAt: new Date(),
    },

    {
      id: 2,
      title: "New Short Courses Available",
      type: "NEWS",
      link: "/courses",
      isActive: true,
      startDate: null,
      endDate: null,
      createdAt: new Date(),
    },
  ];

  const items = announcements.length ? announcements : defaultAnnouncements;

  return (
    <section
      className="
relative

z-30

container

mx-auto

px-4

sm:px-6

lg:px-8

"
    >
      <div
        className="

mt-6

rounded-xl

border

bg-white/95

shadow-lg

backdrop-blur-md

overflow-hidden

"
      >
        <div
          className="

flex

items-center

gap-4

px-4

py-3

"
        >
          {/* Label */}

          <div
            className="

shrink-0

flex

items-center

gap-2

font-bold

text-purple-900

"
          >
            <Megaphone size={18} />
            <span
              className="
hidden
sm:inline
"
            >
              Latest
            </span>
            Updates
          </div>

          {/* Moving announcements */}

          <div
            className="

flex-1

overflow-hidden

"
          >
            <motion.div
              className="

flex

gap-12

whitespace-nowrap

"
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                repeat: Infinity,

                duration: 30,

                ease: "linear",
              }}
              whileHover={{
                animationPlayState: "paused",
              }}
            >
              {[...items, ...items].map((item, index) => (
                <Link
                  key={`${item.id}-${index}`}
                  href={item.link || "#"}
                  className="

flex

items-center

gap-3

hover:opacity-75

transition

"
                >
                  <span
                    className={`

flex

items-center

gap-1

rounded-full

px-3

py-1

text-xs

font-bold

text-white

${announcementStyles[item.type]?.color}

`}
                  >
                    {announcementStyles[item.type]?.icon}

                    {item.type}
                  </span>

                  <span
                    className="

text-gray-700

font-medium

"
                  >
                    {item.title}
                  </span>
                </Link>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

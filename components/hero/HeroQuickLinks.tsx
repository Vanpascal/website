"use client";

import Link from "next/link";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Download,
  Phone,
} from "lucide-react";

import { HeroQuickLink } from "./types";

const quickLinks: HeroQuickLink[] = [
  {
    title: "Apply Now",
    description: "Start your application process",
    href: "/apply",
    icon: "graduation",
  },

  {
    title: "Courses",
    description: "Explore technical programs",
    href: "/courses",
    icon: "book",
  },

  {
    title: "Admission",
    description: "Requirements and procedures",
    href: "/admission",
    icon: "users",
  },

  {
    title: "Prospectus",
    description: "Download institution guide",
    href: "/downloads/prospectus",
    icon: "download",
  },

  {
    title: "Student Portal",
    description: "Access student services",
    href: "/portal",
    icon: "file",
  },

  {
    title: "Contact Us",
    description: "Get in touch with us",
    href: "/contact",
    icon: "phone",
  },
];

const icons = {
  graduation: GraduationCap,

  book: BookOpen,

  users: Users,

  download: Download,

  file: FileText,

  phone: Phone,
};

export default function HeroQuickLinks() {
  return (
    <section
      className="
      relative
      z-20
      -mt-10
      px-4
      "
    >
      <div
        className="
        container
        mx-auto

        grid

        grid-cols-2
        md:grid-cols-3
        lg:grid-cols-6

        gap-4

        "
      >
        {quickLinks.map((item) => (
          <Link
            key={item.title}
            href={item.href}
            className="
              group

              bg-white

              rounded-xl

              shadow-lg

              p-5

              text-center

              border

              hover:border-orange-400

              hover:-translate-y-2

              transition-all

              duration-300
              "
          >
            <div
              className="
                mx-auto

                flex
                items-center
                justify-center

                w-12
                h-12

                rounded-full

                bg-purple-100

                text-purple-900

                group-hover:bg-orange-500

                group-hover:text-white

                transition

                "
            >
              {(() => {
                const Icon = icons[item.icon as keyof typeof icons];

                return <Icon size={25} />;
              })()}
            </div>

            <h3
              className="
                mt-4

                font-bold

                text-purple-900

                text-sm

                "
            >
              {item.title}
            </h3>

            <p
              className="
                mt-2

                text-xs

                text-gray-600

                hidden
                sm:block

                "
            >
              {item.description}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  suffix?: string;
  label?: string;
}

export default function AnimatedNumber({
  value,
  duration = 1500,
  suffix = "+",
  label,
}: AnimatedNumberProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = value / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [value, duration]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
      flex
      flex-col
      items-center
      justify-center
      "
    >
      <div
        className="
        text-4xl
        sm:text-5xl
        md:text-6xl
        font-extrabold
        text-orange-500
        tracking-tight
        "
      >
        {count}
        <span className="text-orange-500">{suffix}</span>
      </div>

      {label && (
        <p
          className="
          mt-3
          text-sm
          sm:text-base
          font-semibold
          tracking-wider
          text-white
          text-center
          "
        >
          {label}
        </p>
      )}
    </motion.div>
  );
}

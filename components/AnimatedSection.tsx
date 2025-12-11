"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ReactNode } from "react";

interface AnimatedSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
  sectionProps?: Record<string, any>;
}

export default function AnimatedSection({
  children,
  sectionProps = {},
  ...rest
}: AnimatedSectionProps) {
  return (
    <motion.section {...sectionProps} {...rest}>
      {children}
    </motion.section>
  );
}

"use client";
import { motion, useInView } from "motion/react";
import * as React from "react";

export function WordsPullUp({
  text,
  className = "",
}: {
  text: string;
  className?: string;
}) {
    const pullupVariant = {
        initial: { y: 40, opacity: 0 },
        animate: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.8,
            ease: [0.17, 0.55, 0.55, 1] as [number, number, number, number],
        },
        },
    };

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.p
      ref={ref}
      variants={pullupVariant}
      initial="initial"
      animate={isInView ? "animate" : ""}
      className={className}
    >
      {text}
    </motion.p>
  );
}

"use client";
import { motion } from "motion/react";

const sentence = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delay: 0.1,
      staggerChildren: 0.2,
    },
  },
};

const wordVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.3 },
  },
};

const emphasize = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: [1.2, 1],
    color: ["#000000", "#636B2F"],
    transition: { duration: 2, ease: "easeOut" },
  },
};

interface HeroTextProps {
  content: string;
  emphasis: string;
  className?: string;
}

export default function HeroText({
  content,
  emphasis,
  className,
}: HeroTextProps) {
  const words = content.split(" ");

  return (
    <motion.h1
      className={className ? className : ""}
      variants={sentence}
      initial="hidden"
      animate="visible"
    >
      {words.map((word, index) => (
        <motion.span
          key={index}
          variants={
            word.replace(/[.,!?]/g, "") === emphasis ? emphasize : wordVariant
          }
          className="inline-block mr-2"
        >
          {word}
        </motion.span>
      ))}
    </motion.h1>
  );
}

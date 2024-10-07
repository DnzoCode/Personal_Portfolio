import { motion, useScroll, useSpring } from "framer-motion";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { useRef } from "react";
import { useParallax } from "../hooks/parallax";
export default function AboutMe() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  console.log(scrollYProgress);
  return (
    <motion.section
      className="bg-dark-primary w-full h-[200vh] transition"
      ref={ref}
    >
      <div className="w-full h-full text-center flex flex-col items-center justify-start relative">
        <div className="w-full sticky top-0">
          <TextHoverEffect text="I AM" />
        </div>
        <motion.div className="text-whte text-2xl bg-white">Holaaa</motion.div>
      </div>
    </motion.section>
  );
}

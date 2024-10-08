import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { useRef } from "react";

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
  });
  const x = useTransform(scrollYProgress, [0, 1], ["-100vw", "0vw"]);
  const spingX = useSpring(x);
  return (
    <motion.section className="bg-dark-primary w-full h-[300vh] transition">
      <motion.div className="w-full h-full text-center flex flex-col items-center justify-start relative">
        <div className="h-[200vh] w-full " ref={ref}>
          <div className="w-full sticky top-1">
            <TextHoverEffect text="I AM" />
          </div>
        </div>
        <div className="h-screen w-full bg-red-300"></div>
      </motion.div>
    </motion.section>
  );
}

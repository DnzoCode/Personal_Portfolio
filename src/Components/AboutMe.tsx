import {
  motion,
  MotionStyle,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { TextHoverEffect } from "./ui/text-hover-effect";
import React, { useRef } from "react";
import { cn } from "../util/class-merge.utility";
import { BackgroundBeams } from "./ui/background-beams";

type InfoCardProps = {
  children: React.ReactNode;
  style?: React.CSSProperties | MotionStyle;
  className?: string;
};
function InfoCard({ children, style, className }: InfoCardProps) {
  return (
    <motion.div
      style={{
        ...style,
      }}
      className={cn(
        "bg-card-primary h-80 bg-opacity-30 backdrop-blur-lg ",
        className
      )}
    >
      {children}
    </motion.div>
  );
}

export default function AboutMe() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(scrollYProgress, [0, 0.1], ["-100%", "50%"]);
  const y = useTransform(scrollYProgress, [0, 0.1], ["50%", "-50%"]);

  const springX = useSpring(x, {
    stiffness: 100,
    damping: 20,
  });
  const springY = useSpring(y, {
    stiffness: 100,
    damping: 20,
  });
  return (
    <motion.section className="bg-dark-primary w-full h-[400vh] transition">
      <motion.div className="w-full h-full text-center flex flex-col items-center justify-start relative">
        <BackgroundBeams />
        <div className="h-[300vh] w-full " ref={ref}>
          <div className="w-full sticky top-1">
            <TextHoverEffect text="I AM" />
          </div>
          <div className="flex items-center justify-between w-full sticky top-80 overflow-hidden gap-4">
            <motion.div
              style={{
                x: springX,
                // flexBasis: "30%",
                minWidth: "150px", // Mínimo ancho
                maxWidth: "45%", // Máximo ancho
                // opacity: scrollYProgress,
              }}
              className="flex-1  rounded-r-xl"
            >
              <InfoCard children={<></>} className="rounded-r-xl" />
            </motion.div>
            <motion.div
              style={{
                x: springY,
                // flexBasis: "70%",
                minWidth: "150px", // Mínimo ancho
                maxWidth: "45%", // Máximo ancho
                // opacity: scrollYProgress,
              }}
              className="flex-1 rounded-r-xl"
            >
              <InfoCard children={<></>} className="rounded-l-xl" />
            </motion.div>
          </div>
        </div>
        <div className="h-screen w-full bg-red-300"></div>
      </motion.div>
    </motion.section>
  );
}

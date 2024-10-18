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
import PersonalInfo from "./PersonalInfo";
import Experience from "./Experience";
import Tecnologies from "./Tecnologies";
import { useMediaQuery } from "@uidotdev/usehooks";

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
  const isSmallDevice = useMediaQuery("only screen and (max-width : 768px)");
  const isMediumDevice = useMediaQuery(
    "only screen and (min-width : 769px) and (max-width : 992px)"
  );
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  const x = useTransform(
    scrollYProgress,
    [0, isSmallDevice ? 0.2 : 0.5],
    ["-500%", isSmallDevice || isMediumDevice ? "0%" : "50%"]
  );
  const y = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["500%", isSmallDevice || isMediumDevice ? "0%" : "-50%"]
  );

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
        {/* <BackgroundBeams /> */}
        <div className="h-[200vh] w-full " ref={ref}>
          <div className="w-full sticky top-1">
            <TextHoverEffect text="I AM" />
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between w-full sticky top-80 overflow-hidden gap-4">
            <motion.div
              style={{
                x: springX,
                // flexBasis: "30%",
                minWidth:
                  isSmallDevice || isMediumDevice
                    ? "100%"
                    : isLargeDevice || isExtraLargeDevice
                    ? "150px"
                    : "150px", // Mínimo ancho
                maxWidth: isSmallDevice ? "100%" : "45%", // Máximo ancho
                // opacity: scrollYProgress,
              }}
              className="flex-1 w-full md:min-w-full rounded-r-xl "
            >
              <InfoCard
                children={<PersonalInfo />}
                className="rounded-r-xl !bg-none bg-opacity-0 "
              />
            </motion.div>
            <motion.div
              style={{
                x: springY,
                // flexBasis: "70%",
                minWidth:
                  isSmallDevice || isMediumDevice
                    ? "100%"
                    : isLargeDevice || isExtraLargeDevice
                    ? "150px"
                    : "150px", // Mínimo ancho
                maxWidth: isSmallDevice ? "100%" : "45%", // Máximo ancho
                // opacity: scrollYProgress,
              }}
              className="flex-1  w-full  rounded-r-xl"
            >
              <InfoCard
                children={<Tecnologies />}
                className={`rounded-l-xl !bg-none bg-opacity-0 ${
                  isSmallDevice || isMediumDevice ? "!h-auto" : ""
                }`}
              />
            </motion.div>
          </div>
        </div>
        <div className="h-[200vh] w-full bg-gradient-to-b  from-transparent to-black">
          <Experience />
        </div>
      </motion.div>
    </motion.section>
  );
}

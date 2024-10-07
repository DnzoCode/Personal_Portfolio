import LostRobotViewer from "./LostRobotViewer";
import { FlipWords } from "./ui/flip-words";
import PurpleWave from "/purple_wave.svg";
import { motion } from "framer-motion";

export default function Header() {
  const words: string[] = [
    "experiences",
    "solutions",
    "seamless",
    "efficient",
    "customized",
    "personalized",
    "modern",
    "scalable",
  ];
  return (
    <header className="h-screen w-screen mx-auto bg-dark-primary relative overflow-hidden bg-square_bg">
      <img
        src={PurpleWave}
        alt="purple_wave"
        loading="eager"
        width={400}
        className="absolute blur-3xl top-[-12rem] right-[-10rem]"
      />

      <div className="w-full flex h-full items-center justify-evenly">
        <motion.h1
          initial={{ translateX: -100 }}
          animate={{ translateX: 0 }}
          transition={{
            type: "keyframes",
            stiffness: 260,
            damping: 28,
          }}
          className="text-8xl font-extrabold text-white w-1/3 text-center"
        >
          Hi!, Im <span className="text-purple-primary">Daniel</span>
        </motion.h1>
        <LostRobotViewer className="!w-1/3" />
        <motion.span
          initial={{ translateX: 100 }}
          animate={{ translateX: 0 }}
          transition={{
            type: "keyframes",
            stiffness: 260,
            damping: 28,
          }}
          className="bg-gradient-to-r from-violet-700 to-purple-400 bg-clip-text text-transparent w-1/3 text-7xl font-extrabold flex flex-col items-center"
        >
          Design
          <FlipWords words={words} className="text-white" />
        </motion.span>
      </div>
    </header>
  );
}

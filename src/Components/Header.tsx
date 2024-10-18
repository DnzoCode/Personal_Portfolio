import LostRobotViewer from "./LostRobotViewer";
import { FlipWords } from "./ui/flip-words";
import PurpleWave from "/purple_wave.svg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { LinkPreview } from "./ui/link-preview";
import { LuMouse } from "react-icons/lu";
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
    <header className="h-screen w-full mx-auto bg-dark-primary relative overflow-hidden bg-square_bg">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-dark-primary"></div>
      <motion.div
        initial={{ translateY: -100 }}
        animate={{ translateY: 0 }}
        transition={{
          type: "keyframes",
          stiffness: 260,
          damping: 28,
        }}
        className="absolute top-10 w-full hidden md:flex items-center justify-center gap-4"
      >
        <LuMouse className="text-purple-card text-5xl" />
        <h4 className="bg-gradient-to-b from-violet-700 to-purple-400 bg-clip-text text-transparent font-bold text-center">
          scroll down to
          <br />
          <span className="font-extrabold">see the magic</span>
        </h4>
      </motion.div>
      <motion.div
        initial={{ translateY: 100 }}
        animate={{ translateY: 0 }}
        transition={{
          type: "keyframes",
          stiffness: 260,
          damping: 28,
        }}
        className="absolute bottom-10 w-full flex items-center justify-center z-10"
      >
        <div className="w-3/5 flex items-center justify-center space-x-8 text-3xl py-4 rounded-xl ">
          <LinkPreview
            url="https://github.com/DnzoCode"
            className="font-bold text-white"
            aria="Navigate to Githbu"
          >
            <FaGithub className="cursor-pointer" />
          </LinkPreview>
          <LinkPreview
            url="https://www.linkedin.com/in/daniel-rodriguez-40514a263"
            className="font-bold text-white"
            aria="Navigate to Linkedin"
          >
            <CiLinkedin className="cursor-pointer" />
          </LinkPreview>
        </div>
      </motion.div>
      <img
        src={PurpleWave}
        alt="purple_wave"
        loading="eager"
        width={400}
        className="absolute blur-3xl top-[-12rem] right-[-10rem]"
      />

      <div className="w-full flex flex-col md:flex-row h-full items-center justify-evenly transition-all">
        <motion.h1
          initial={{ translateX: -100 }}
          animate={{ translateX: 0 }}
          transition={{
            type: "keyframes",
            stiffness: 260,
            damping: 28,
          }}
          className="text-8xl font-extrabold text-white w-full md:w-1/3 text-center"
        >
          Hi!, Im <span className="text-purple-primary">Daniel ;)</span>
        </motion.h1>

        <LostRobotViewer className="w-full md:!w-1/3" />
        <motion.div
          className=" w-full md:w-1/3 flex flex-col items-center"
          initial={{ translateX: 100 }}
          animate={{ translateX: 0 }}
          transition={{
            type: "keyframes",
            stiffness: 260,
            damping: 28,
          }}
        >
          <motion.span className="bg-gradient-to-r from-violet-700 to-purple-400 bg-clip-text text-transparent text-7xl font-extrabold text-center">
            Design
            <br />
            <FlipWords words={words} className="text-white" />
          </motion.span>
        </motion.div>
      </div>
    </header>
  );
}

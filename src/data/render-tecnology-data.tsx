import { FaReact } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import { BiLogoDjango } from "react-icons/bi";
import { TbBrandTypescript } from "react-icons/tb";
import { IoLogoJavascript } from "react-icons/io";
import { FaJava } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { DiMysql } from "react-icons/di";
import { SiMongodb } from "react-icons/si";
import { FaDocker } from "react-icons/fa";
import { MdPhp } from "react-icons/md";
import { FaLinux } from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { FaVuejs } from "react-icons/fa";
import { FaAngular } from "react-icons/fa";
import { IoLogoIonic } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaFigma } from "react-icons/fa";
import { SiSpringboot } from "react-icons/si";
import { FaAndroid } from "react-icons/fa";
import { FaApple } from "react-icons/fa";

type Teconlogies = {
  icon: React.ReactElement;
  className?: string;
};

export const tecnlogies: Teconlogies[] = [
  {
    icon: <TbBrandTypescript className="text-8xl text-white" />,
    className:
      "col-span-2 row-span-2 lg:row-span-4 lg:row-span-4 hover:bg-gradient-to-br from-sky-700 to-sky-90 ",
  },
  {
    icon: <FaLaravel className="text-3xl  text-white" />,
    className:
      "col-span-2 row-span-1 md:row-span-1 hover:bg-gradient-to-br from-transparent to-red-600 ",
  },
  {
    icon: <MdPhp className="text-5xl text-white" />,
    className:
      "col-span-2 row-span-1 md:row-span-1 hover:bg-gradient-to-br from-transparent to-violet-600 ",
  },
  {
    icon: <IoLogoJavascript className="text-5xl text-white" />,
    className:
      "col-span-1 row-span-4 hover:bg-gradient-to-br from-amber-400 to-amber-600",
  },
  {
    icon: <FaReact className="text-5xl text-white" />,
    className:
      "col-span-2 row-span-2 hover:bg-gradient-to-br from-transparent to-blue-600 ",
  },
  {
    icon: <FaVuejs className="text-5xl text-white" />,
    className:
      "col-span-1 row-span-3 hover:bg-gradient-to-br from-transparent to-emerald-600 ",
  },
  {
    icon: <SiMongodb className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-green-500 ",
  },
  {
    icon: <SiNestjs className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-red-800 ",
  },
  {
    icon: <FaAngular className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-rose-600 ",
  },
  {
    icon: <IoLogoIonic className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-blue-300 ",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-blue-700 ",
  },

  {
    icon: <FaPython className="text-5xl text-white" />,
    className:
      "col-span-1 row-span-2 hover:bg-gradient-to-br from-blue-400/50 to-yellow-300/50 ",
  },
  {
    icon: <BiLogoDjango className="text-5xl text-white" />,
    className:
      "col-span-2 row-span-1 hover:bg-gradient-to-br from-transparent to-green-800 ",
  },
  {
    icon: <FaDocker className="text-5xl text-white" />,
    className:
      "col-span-1 row-span-2 hover:bg-gradient-to-br from-blue-100/50 to-blue-600 ",
  },
  {
    icon: <FaJava className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-blue-100/50 to-red-600/30 ",
  },
  {
    icon: <FaLinux className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-zinc-500 ",
  },
  {
    icon: <SiSpringboot className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-green-600 ",
  },
  {
    icon: <DiMysql className="text-5xl text-white" />,
    className:
      "col-span-2 hover:bg-gradient-to-br from-blue-300/50 to-orange-600/50 ",
  },
  {
    icon: <FaAndroid className="text-5xl text-white" />,
    className:
      "col-span-1 hover:bg-gradient-to-br from-transparent to-green-300 ",
  },
  {
    icon: <FaApple className="text-5xl text-white" />,
    className:
      "col-span-2 md:col-span-2 lg:col-span-1 hover:bg-gradient-to-br from-transparent to-white",
  },
  {
    icon: <FaFigma className="text-5xl text-white" />,
    className:
      "col-span-2 md:col-span-2 lg:col-span-1 hover:bg-gradient-to-br from-blue-400 to-amber-600 ",
  },
];

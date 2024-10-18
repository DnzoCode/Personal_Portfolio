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
    className: "col-span-2 row-span-4",
  },
  {
    icon: <FaLaravel className="text-5xl text-white" />,
    className: "col-span-2",
  },
  {
    icon: <MdPhp className="text-5xl text-white" />,
    className: "col-span-2",
  },
  {
    icon: <IoLogoJavascript className="text-5xl text-white" />,
    className: "col-span-1 row-span-4",
  },
  {
    icon: <FaReact className="text-5xl text-white" />,
    className: "col-span-2 row-span-2",
  },
  {
    icon: <FaVuejs className="text-5xl text-white" />,
    className: "col-span-1 row-span-3",
  },
  {
    icon: <SiMongodb className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <SiNestjs className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <FaAngular className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <IoLogoIonic className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <RiTailwindCssFill className="text-5xl text-white" />,
    className: "col-span-1",
  },

  {
    icon: <FaPython className="text-5xl text-white" />,
    className: "col-span-1 row-span-2",
  },
  {
    icon: <BiLogoDjango className="text-5xl text-white" />,
    className: "col-span-2 row-span-1",
  },
  {
    icon: <FaDocker className="text-5xl text-white" />,
    className: "col-span-1 row-span-2",
  },
  {
    icon: <FaJava className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <FaLinux className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <SiSpringboot className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <DiMysql className="text-5xl text-white" />,
    className: "col-span-2",
  },
  {
    icon: <FaAndroid className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <FaApple className="text-5xl text-white" />,
    className: "col-span-1",
  },
  {
    icon: <FaFigma className="text-5xl text-white" />,
    className: "col-span-1",
  },
];

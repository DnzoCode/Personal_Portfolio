import { cn } from "../util/class-merge.utility";
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

const RenderTecnology = ({
  title,
  icon,
  className,
}: {
  title?: string;
  icon: React.ReactElement;
  className?: string;
}) => {
  return (
    <div className={cn("flex items-center justify-center", className)}>
      <span className={title ? "" : "hidden"}>{title}</span>
      {icon}
    </div>
  );
};
export default function Tecnologies() {
  return (
    <div className="grid grid-cols-10 grid-rows-6 p-4">
      <RenderTecnology icon={<FaReact className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaLaravel className="text-5xl text-white" />} />
      <RenderTecnology
        icon={<BiLogoDjango className="text-5xl text-white" />}
      />
      <RenderTecnology
        icon={<TbBrandTypescript className="text-5xl text-white" />}
      />
      <RenderTecnology
        icon={<IoLogoJavascript className="text-5xl text-white" />}
      />
      <RenderTecnology icon={<FaJava className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaPython className="text-5xl text-white" />} />
      <RenderTecnology icon={<DiMysql className="text-5xl text-white" />} />
      <RenderTecnology icon={<SiMongodb className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaDocker className="text-5xl text-white" />} />
      <RenderTecnology icon={<MdPhp className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaLinux className="text-5xl text-white" />} />
      <RenderTecnology icon={<SiNestjs className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaVuejs className="text-5xl text-white" />} />
      <RenderTecnology icon={<FaAngular className="text-5xl text-white" />} />
      <RenderTecnology icon={<IoLogoIonic className="text-5xl text-white" />} />
      <RenderTecnology
        icon={<RiTailwindCssFill className="text-5xl text-white" />}
      />
      <RenderTecnology icon={<FaFigma className="text-5xl text-white" />} />
    </div>
  );
}

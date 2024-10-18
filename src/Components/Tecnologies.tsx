import { cn } from "../util/class-merge.utility";
import { tecnlogies } from "../data/render-tecnology-data";
import { useState } from "react";
import { useMediaQuery } from "@uidotdev/usehooks";

const RenderTecnology = ({
  title,
  icon,
  className,
  hovered,
  setHovered,
  index,
}: {
  title?: string;
  icon: React.ReactElement;
  className?: string;
  hovered: number | null;
  setHovered: React.Dispatch<React.SetStateAction<number | null>>;
  index: number;
}) => {
  return (
    <div
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "flex items-center justify-center border rounded transition-all group",
        className,
        hovered !== null && hovered !== index && "blur-sm scale-[0.98]"
      )}
    >
      <span className={title ? "" : "hidden"}>{title}</span>
      {icon}
    </div>
  );
};
export default function Tecnologies() {
  const isLargeDevice = useMediaQuery(
    "only screen and (min-width : 993px) and (max-width : 1200px)"
  );
  const isExtraLargeDevice = useMediaQuery(
    "only screen and (min-width : 1201px)"
  );
  const [hovered, setHovered] = useState<number | null>(null);
  return (
    <div className="grid grid-cols-4 md:grid-cols-4 lg:grid-cols-10 grid-rows-6 p-4 gap-2 w-full h-full group">
      <div className="flex flex-col items-center justify-center  col-span-4 md:col-span-4 lg:col-span-3 row-span-6 rounded-lg bg-gradient-to-br from-violet-700/10 to-purple-900 px-4 lg:pb-4 group ">
        <h2
          className="text-white font-extrabold uppercase text-2xl lg:text-4xl text-center md:text-right group-hover:translate-x-1 transition"
          style={{
            writingMode:
              isLargeDevice || isExtraLargeDevice ? "vertical-rl" : "inherit",
          }}
        >
          Tecnologies
        </h2>
      </div>
      {tecnlogies.map((tecnology, i) => (
        <RenderTecnology
          key={i}
          index={i}
          icon={tecnology.icon}
          className={tecnology.className}
          hovered={hovered}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
}

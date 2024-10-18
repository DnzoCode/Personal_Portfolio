import { cn } from "../util/class-merge.utility";
import { tecnlogies } from "../data/render-tecnology-data";

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
    <div
      className={cn(
        "flex items-center justify-center border rounded",
        className
      )}
    >
      <span className={title ? "" : "hidden"}>{title}</span>
      {icon}
    </div>
  );
};
export default function Tecnologies() {
  return (
    <div className="grid grid-cols-10 grid-rows-6 p-4 gap-2 w-full h-full">
      <div className="flex flex-col justify-end col-span-3 row-span-6 rounded-lg bg-gradient-to-br from-violet-700/10 to-purple-900 px-4 pb-4 group ">
        <h2 className="text-white font-extrabold uppercase text-2xl text-right group-hover:translate-x-1 transition">
          Tecnologies
        </h2>
      </div>
      {tecnlogies.map((tecnology, i) => (
        <RenderTecnology
          key={i}
          icon={tecnology.icon}
          className={tecnology.className}
        />
      ))}
    </div>
  );
}

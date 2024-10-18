import personalData from "../data/personal_info.json";
import { IPersonalInfo } from "../models/personal-info.model";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import { cn } from "../util/class-merge.utility";

export default function PersonalInfo() {
  const personalInfo: IPersonalInfo = personalData.personal_info;

  return (
    <div className="w-full h-full flex items-center justify-between">
      <div className="h-full w-16 flex items-center justify-center px-4 text-nowrap">
        <h1
          className="text-6xl bg-gradient-to-r from-violet-500 to-purple-400 bg-clip-text text-transparent text-center rotate-180 font-extrabold "
          style={{
            writingMode: "vertical-rl",
          }}
        >
          FULL STACK
        </h1>
      </div>
      <BentoGrid className="w-full h-full md:auto-rows-[6rem]">
        {personalInfo.soft_skills.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            className={cn(
              i === 0 ? "col-span-2" : "",
              i === 4 ? "row-span-2" : "",
              i == 5 ? "col-span-2" : "",
              "bg-transparent p-0 text-center justify-center overflow-hidden !hover:shadow-none"
            )}
            contentClassName="flex items-center justify-center"
            titleClassName={cn(
              "!text-white text-left uppercase font-extrabold",
              i == 0 ? "text-4xl md:text-5xl text " : "",
              i == 1 ? "text-2xl" : "",
              i == 2 ? "text-3xl font-light" : "",
              i == 3 ? "text-2xl font-light" : "",
              i == 4 ? "text-xl text font-light" : "",
              i == 5 ? "text-5xl md:text-6xl" : ""
            )}
            style={{
              writingMode: i == 4 ? "vertical-rl" : "inherit",
            }}
          />
        ))}
      </BentoGrid>
    </div>
  );
}

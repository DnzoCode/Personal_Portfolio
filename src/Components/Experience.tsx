import { motion } from "framer-motion";
import { Timeline } from "./ui/timeline";
import { dataTimeLine } from "../data/time_line-data";

export default function Experience() {
  return (
    <div className="flex flex-col justify-start w-full relative">
      <motion.h2
        whileInView={{
          y: 20,
        }}
        className="text-8xl font-bold  mt-14 bg-gradient-to-r from-violet-950 to-purple-900 bg-clip-text text-transparent"
      >
        Experience
      </motion.h2>
      <Timeline data={dataTimeLine} />
    </div>
  );
}

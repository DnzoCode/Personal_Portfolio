import LostRobotViewer from "./LostRobotViewer";
import { FlipWords } from "./ui/flip-words";

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
    <header className="h-screen w-screen mx-auto bg-dark-primary relative overflow-x-hidden">
      <div className="w-full flex h-full items-center justify-evenly">
        <h1 className="text-7xl font-extrabold text-white w-1/3 text-center">
          Hi!, Im <span className="text-purple-primary">Daniel</span>
        </h1>
        <LostRobotViewer className="!w-1/3" />
        <span className="bg-gradient-to-r from-violet-700 to-purple-400 bg-clip-text text-transparent w-1/3 text-7xl font-extrabold">
          Design <br />
          <FlipWords words={words} className="text-white" />
        </span>
      </div>
    </header>
  );
}

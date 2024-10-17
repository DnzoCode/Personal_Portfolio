import { ShootingStars } from "./ui/shooting-stars";
import { StarsBackground } from "./ui/stars-background";

export default function Footer() {
  return (
    <footer className="w-full relative h-60 bg-black flex flex-col justify-between">
      <div></div>
      <div className="h-16 flex items-center justify-center w-full text-white gap-2">
        <span>Daniel Rodriguez</span>
        <span>Copyright | {new Date().getFullYear()}</span>
      </div>
      <ShootingStars />
      <StarsBackground />
    </footer>
  );
}

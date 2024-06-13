import Image from "next/image";
import styles from "@/app/globals.css";

export default function Glitch() {
  return (
      <nav className="w-full h-[60px] bg-black bg-opacity-30 backdrop-blur drop-shadow flex items-center p-2  text-xl font-thin fixed top-0 left-0 z-50">
      <span>RUET CSE • <span className="text-cyan-300">23</span></span>
      </nav>
  );
}

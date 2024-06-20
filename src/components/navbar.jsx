import Image from "next/image";
import styles from "@/app/globals.css";
import Link from "next/link";

export default function Glitch() {
  return (
      <nav className="w-full h-[60px] bg-black bg-opacity-30 backdrop-blur drop-shadow flex items-center justify-between p-2  text-xl font-extralight fixed top-0 left-0 z-[900] ">
      <span><span className="text-cyan-500 font-normal">{"</>"}</span> RUET CSE • <span className="text-cyan-300">23</span></span>
         <div>
              <Link className="py-2 px-4 rounded text-cyan-300 hover:bg-cyan-300 hover:text-white duration-300 text-lg" href="/login">Login</Link>
         </div>
      </nav>
  );
}

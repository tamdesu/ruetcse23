import styles from "@/app/globals.css";
import Glitch from "@/components/glitch";
import ProjectsWrapper from "@/components/projectsWrapper";

export default function Home() {
  return (
    <>
      <Glitch />
      <div className="app-div fixed top-0 left-0 bg-[#050d1f] backdrop-blur bg-opacity-90 w-screen h-screen overflow-y-scroll overflow-x-hidden pt-[66px] px-4">
        
        <ProjectsWrapper />

      </div>
    </>

  );
}
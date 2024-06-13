import styles from "@/app/globals.css";
import Glitch from "@/components/glitch";
import Empty from "@/components/empty";
import Navbar from "@/components/navbar";
import Motto from "@/components/motto";

export default function Home() {
  return (
    <>
      
      <Glitch />
      <div className=" bg-opacity-50 fixed top-0 left-0 bg-black w-screen h-screen overflow-y-scroll overflow-x-hidden">
        <Navbar />
        <Empty />
        <Motto />
      </div>
    </>
    
  );
}

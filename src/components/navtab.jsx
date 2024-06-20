"use client"

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import SideNav from "./sidenav";

import {useState} from "react"
export default function NavTab() {
  const [open, setOpen] = useState(false);
  const [width, setWidth] = useState("0");
  const [margin, setMargin] = useState("-ml-[350px]");
  function toggleNav(){
    setOpen(!open);
    
    nav(open)
  }
  function nav(isOpen){
    if(isOpen){
      setWidth("3/4");
      setMargin("ml-[0px]")
    }
    else{
      setWidth("0");
      setMargin("-ml-[350px]")
    }
  }
  return (
    <>
    <div className="w-[50px] h-[50px] rounded bg-black fixed right-4 bottom-5 z-[60] text-white flex justify-center items-center bg-opacity-40" onClick={toggleNav}>
      <FontAwesomeIcon icon={faBars} />
    </div>
    <SideNav width={width} margin={margin}/>
    </>
  );
}

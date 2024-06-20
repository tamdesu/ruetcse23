import "@/app/globals.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faHouse, faUser, faBook, faLaptop, faBell} from "@fortawesome/free-solid-svg-icons"
export default function SideNav({width, margin}) {
  return (
    <div className={`w-${width} max-w-[350px] h-full rounded-lg bg-[#111] fixed top-0 left-0 z-[9990] text-white backdrop-blur overflow-x-hidden pt-[30px] px-4 ${margin} duration-300`} >
      <span><span className="text-cyan-500 font-normal">{"</>"}</span> RUET CSE • <span className="text-cyan-300">23</span></span>
      <br />
      <br />
      <br />
      <ul className="text-xl font-extralight uppercase">
        <li className="mb-4 bg-[#161616] p-4 rounded-lg flex items-center"> 
          <span >
            <FontAwesomeIcon icon={faHouse} style={{color:"#00FFFF"}} className="mr-4" />
          </span>
          Home
        </li>
        <li className="mb-4 bg-[#161616] p-4 rounded-lg flex items-center"> 
          <span style={{ color: '#00FFFF' }}>
            <FontAwesomeIcon icon={faUser} className="mr-4" />
          </span>
          Students
        </li>
        <li className="mb-4 bg-[#161616] p-4 rounded-lg flex items-center"> 
          <span style={{ color: '#00FFFF' }}>
            <FontAwesomeIcon icon={faLaptop} className="mr-4" />
          </span>
          Projects
        </li>
        <li className="mb-4 bg-[#161616] p-4 rounded-lg flex items-center"> 
          <span style={{ color: '#00FFFF' }}>
            <FontAwesomeIcon icon={faBook} className="mr-4" />
          </span>
          Resources
        </li>
        <li className="mb-4 bg-[#161616] p-4 rounded-lg flex items-center"> 
          <span style={{ color: '#00FFFF' }}>
            <FontAwesomeIcon icon={faBell} className="mr-4" />
          </span>
          Announcements
        </li>
      </ul>
    </div>
  );
}

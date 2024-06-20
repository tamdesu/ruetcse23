import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretUp, faCaretDown} from "@fortawesome/free-solid-svg-icons"
export default function ProjectTile({title, description, date}) {
  return (
        <>
            <div className="w-full h-[300px] max-h-1/2 flex flex-col justify-between items-center p-px bg-gradient-to-br from-cyan-300 via-gray-900 via-gray-900 via-gray-900 to-cyan-300 rounded">
                <div className="w-full max-w-full h-full flex flex-col p-4 bg-gray-900 rounded">
                    <div className="w-full h-[60px] flex flex-row items-center">
                        <div className="bg-gray-400 w-[50px] h-[50px] rounded-full mr-3">
                        </div>
                        <div className="w-full flex flex-col">
                            <h1 className="font-light text-cyan-300 text-lg sm:text-lg uppercase">
                                {title}
                            </h1>
                            <span className="text-xs text-gray-500">{date}</span>
                        </div>
                    </div>     

                    <div className="flex-grow text-gray-300 text-sm sm:text-base mt-2">
                        <p className="font-light">{description}...</p>                   
                    </div>

                    <div className="h-[20px] flex flex-row justify-end">
                        <button className="text-green-300 text-xl mx-4"><span><FontAwesomeIcon className="text-red-300" icon={faCaretUp} /></span></button>
                         <button className="text-red-300 text-xl"><span><FontAwesomeIcon className="text-red-300" icon={faCaretDown} /></span></button>
                    </div>
                </div>          
            </div>
        </>
  );
}

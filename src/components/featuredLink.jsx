import Link from "next/link";

export default function FeaturedLink({title, description, date}) {
    const datePart = date.split("/");
  return (
        <>
            <div className="w-[350px] max-w-full h-[300px] max-h-1/2 flex flex-col justify-between items-center p-px bg-gradient-to-br from-cyan-300 via-gray-900 via-gray-900 via-gray-900  to-cyan-300 rounded">
                <div className="w-full max-w-full h-full flex flex-col justify-between p-4 bg-gray-900 rounded">
                <div className="w-full flex flex-col">
                  <h1 className="font-extralight text-cyan-300 text-lg sm:text-3xl uppercase">{title}</h1>
                  <span className="w-3/4 sm:w-2/3 p-px bg-gradient-to-r  from-cyan-300 to-gray-900 "></span>
                </div>     
                    
                <div className="font-light text-gray-300 text-lg sm:text-xl">
                    <div className="w-[70px] h-[70px] border-r border-cyan-300 float-left mr-3 flex flex-col items-center justify-center">
                    <h1 className="font-extrabold text-gray-300 text-3xl sm:text-4xl ">{datePart[0]}</h1>
                    <span className="font-extrabold text-gray-300 text-sm sm:text-sm">06/24</span>
                        
                    </div>
                       <p className=""> {description.substring(0, 120)}...</p>                   
                </div>
                        <div className="flex flex-row justify-end">
                            <Link className="font-extralight text-cyan-300 text-base sm:text-lg uppercase text-right" href={`/${title.toLowerCase()}`}>See All {"->"}</Link> 
                        </div>
                   
                </div>          
            </div>
        </>
         
         
  );
}

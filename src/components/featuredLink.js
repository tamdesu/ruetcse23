import Link from "next/link";

export default function FeaturedLink({title, description}) {
  return (
        <>
            <div className="w-[350px] max-w-full h-[300px] max-h-1/2 flex flex-col justify-between items-center p-px bg-gradient-to-br from-cyan-300 via-gray-900 via-gray-900 via-gray-900  to-cyan-300 rounded">
                <div className="w-full max-w-full h-full flex flex-col justify-between p-2 bg-gray-900 rounded">
                <div className="w-full flex flex-col justify-between">
                  <h1 className="font-extralight text-cyan-300 text-lg sm:text-3xl uppercase">{title}</h1>
                  <span className="w-3/4 sm:w-2/3 p-px bg-gradient-to-r  from-cyan-300 to-gray-900 "></span>
                </div>
                <br />
                
                <span className="font-light text-gray-300 text-base sm:text-lg">
                {description}
                </span>
                        <Link className="font-extralight text-cyan-300 text-base sm:text-lg uppercase text-right" href="/#">See More {"->"}</Link> 
                </div>          
            </div>
        </>
         
         
  );
}

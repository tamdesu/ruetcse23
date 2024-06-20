import FeaturedLink from "./featuredLink";

export default function Featured() {
  return (
          <div className="w-screen h-auto flex flex-col justify-between items-center p-8 bg-[#050d1f] bg-opacity-80 backdrop-blur ">
                <h1 className="text-3xl sm:text-5xl font-thin tracking-widest text-cyan-300">F E A T U R E D</h1>
                <br />
                <span className="w-3/4 sm:w-1/2 p-px bg-gradient-to-r from-gray-900 via-cyan-300 to-gray-900 "></span>
                  <br />
                  <br />
                  
                <div className="w-full h-auto flex justify-center items-center">
                        <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-y-8 place-center">
                                <div className="w-full h-full flex justify-center items-center">
                                        <FeaturedLink title="Projects" description={"@User just posted a new project 'Hangman in c++'. Heyo I have made the popular game called hangman in c++ without using any external graphic library. This game is"} date="14/06/24"/>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                        <FeaturedLink title="Announcement" description={"Orientation for the session: 2023-2024 will be held on 31/07/2024 at CUET, KUET & RUET"} date="01/06/24"/>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                        <FeaturedLink title="Students" description={"@User just signed up in the website!"} date="13/06/24"/>
                                </div>
                                <div className="w-full flex justify-center items-center">
                                        <FeaturedLink title="Resources" description={"@User just uploaded a note about OOP in c++ in the website"} date="14/06/24"/>
                                </div>
                        </div>
                </div>
                
          </div>

  );
}

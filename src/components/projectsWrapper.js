import ProjectTile from "./projectTile";

export default function ProjectsWrapper() {
  return (
      <div className="app-div fixed top-0 left-0 w-screen h-screen overflow-y-scroll overflow-x-hidden pt-[66px] px-4">
        <div className="w-full flex flex-col justify-between">
          <h1 className="text-2xl sm:text-5xl font-thin tracking-widest text-cyan-300">PROJECTS</h1>
          <span className="w-3/4 sm:w-1/2 p-px bg-gradient-to-r from-cyan-300 to-gray-900 "></span>
        </div>
        <br />
        <div className="w-full h-auto flex justify-center items-center">
                      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 gap-8 place-center">
                              <div className="w-full h-full flex justify-center items-center">
                                      <ProjectTile title="@User" description={"@User just posted a new project 'Hangman in c++'. Heyo I have made the popular game called hangman in c++ without using any external graphic library. This game is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse lo"} date="14/06/24"/>
                              </div>
                            <div className="w-full h-full flex justify-center items-center">
                                    <ProjectTile title="Projects" description={"@User just posted a new project 'Hangman in c++'. Heyo I have made the popular game called hangman in c++ without using any external graphic library. This game is lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo conse lo"} date="14/06/24"/>
                            </div>
                      </div>
              </div>
      </div>

  );
}
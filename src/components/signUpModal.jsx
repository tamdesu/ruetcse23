import Link from "next/link"

export default function SignUpModal() {
  return (
          <div className="w-[98%] max-w-[800px] h-auto flex flex-col justify-between items-center p-8 bg-[#050d1f] bg-opacity-80 backdrop-blur rounded-lg overflow-y-scroll ">
                <h1 className="text-xl sm:text-3xl font-light text-cyan-300 mb-2">Sign Up</h1>
                <span className="w-3/4 sm:w-1/2 h-[1px] bg-gradient-to-r from-gray-900 via-cyan-300 to-gray-900 "></span>
                <br />
                <form className="flex flex-col justify-between items-center" >
                    <input type="file" className="hidden" id="pfp-upload"/>
                    <label htmlFor="pfp-upload">
                        <div className="flex flex-col justify-between items-center cursor-pointer">
                            <div className="w-[70px] h-[70px] bg-gray-800 rounded-lg  flex justify-center items-center">
                                <span className="text-6xl text-white font-thin">
                                    +
                                </span>
                            </div>
                                <span className="text-xs text-gray-300 mt-2">Your Profile Picture</span>
                        </div>
                    </label>
                    
                    <br />
                    <input required type="text" placeholder="Your Full Name" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 "/>
                    <br />
                    <input required type="text" placeholder="Your Admission Roll" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 "/>
                    <br />
                    <input required type="email" placeholder="Your Email" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 "/>
                     <br />
                    <input required type="password" placeholder="Your Password" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 text-cyan-300"/>
                     <br />
                    <input required type="password" placeholder="Confirm Password" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 text-cyan-300"/>
                     <br />
                    
                     <br />
                     <br />
                    <input type="submit" value="Sign Up" className="bg-cyan-300 bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded backdrop-blur uppercase"/>              
                </form>
              <br />
              <br />
              <span className="text-xs">Already registered? <Link className="text-cyan-300" href="/login">Login</Link></span>
          </div>

  );
}

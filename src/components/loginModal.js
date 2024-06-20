import Link from "next/link"

export default function LoginModal() {
  return (
          <div className="w-full max-w-[350px] h-auto flex flex-col justify-between items-center p-8 bg-[#050d1f] bg-opacity-80 backdrop-blur rounded-lg">
                <h1 className="text-xl sm:text-3xl font-light text-cyan-300 mb-2">Login</h1>
                <span className="w-3/4 sm:w-1/2 h-[1px] bg-gradient-to-r from-gray-900 via-cyan-300 to-gray-900 "></span>
                <br />
                <form className="flex flex-col justify-between items-center" >
                    <input required type="email" placeholder="Your Email" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 "/>
                     <br />
                    <input required type="password" placeholder="Your Password" className="bg-transparent p-2 focus:outline-none border-b border-cyan-300 text-cyan-300"/>
                    
                     <br />
                    <div className="w-full flex items-center">
                        
                        <input type="checkbox" className="appearance-none p-[7px] bg-gray-500 rounded checked:bg-cyan-300 checked:border-white mr-2 cursor-pointer"/>
                        <span className="text-xs">Remember me</span>
                    </div>
                     <br />
                    <input type="submit" value="Login" className="bg-cyan-300 bg-opacity-10 hover:bg-opacity-20 px-4 py-2 rounded backdrop-blur uppercase cursor-pointer"/>              
                </form>
              <br />
              <br />
              <span className="text-xs">Not registered yet? <Link className="text-cyan-300" href="/signup">Sign Up</Link></span>
          </div>

  );
}

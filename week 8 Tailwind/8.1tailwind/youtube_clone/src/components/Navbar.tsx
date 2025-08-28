import Searchbar from "./Searchbar";
import { FaMicrophone } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import Image from "next/image";



function Navbar() {
    return (
        <div className="flex justify-between  items-center relative top-[2px ] h-[3rem] mb-2">

           <div className=" flex gap-5 font-semibold">
                <div className="w-[2rem] flex justify-center items-center h-[2rem] ml-4   cursor-pointer rounded-full hover:bg-search ">
                    <AiOutlineMenu className="text-lg     "/>
                </div>
                <a href="/" className="flex items-center gap-1">
                <Image src="/Youtube.png" width={24} height={24} alt="Yt"  className=" flex " />
                <div className="font-semibold">YOUTUBE</div>
                </a>
           </div>
            <div className="flex items-center gap-2 mt-1 -translate-x-10">
                <Searchbar />
                <div className="ml-2  bg-search/70 rounded-full p-3 hover:bg-search">
                    <FaMicrophone className=" " />
                </div>
            </div>
            
            <div className="inline-flex items-center mr-2">
                icon
            </div>
        </div>
    )
}
export default Navbar;



// Learnings f you are dynamically loading the logo or fetching it from an external source, ensure that the data is available during server-side rendering (SSR).

// Solution:
// Preload the image or handle fallback loading.
// Use next/image for optimized image handling.
// Example with next/image:

// jsx
// Copy
// Edit
// import Image from "next/image";

// <Image src="/logo.png" alt="Logo" width={40} height={40} />
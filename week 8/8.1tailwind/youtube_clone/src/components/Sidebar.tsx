import { IoMdHome } from "react-icons/io";
import { useRouter } from "next/router"; 
import { SiYoutubeshorts } from "react-icons/si";
import { MdSubscriptions } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
function Sidebar(){
    const router= useRouter();
    return(
        <div>
            <div className="ml-1 text-xl  pointer ">
            <div className="w-[3.5rem] h-[4rem] rounded-xl flex justify-center items-center hover:bg-search">
                <IoMdHome  className="cursor-pointer text-xl rounded-full  hover:bg-search_border"/>
            </div>
            <div className="w-[3.5rem] h-[4rem] rounded-xl flex justify-center items-center hover:bg-search">
                <SiYoutubeshorts  className="cursor-pointer text-xl rounded-full  hover:bg-search_border"/>
            </div>
            <div className="w-[3.5rem] h-[4rem] rounded-xl flex justify-center items-center hover:bg-search">
                <MdSubscriptions className="cursor-pointer text-xl rounded-full  hover:bg-search_border" />
            </div>
           <div
  className="w-[3.5rem] h-[4rem] rounded-xl flex justify-center items-center hover:bg-search cursor-pointer"
        onClick={() => {
         
         router.push(`/video/signup`);
         }}
>
  <CgProfile className="text-xl rounded-full hover:bg-search_border" />
</div>
            </div>
        </div>
    )
}
export default Sidebar;
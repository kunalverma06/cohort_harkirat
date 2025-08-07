import { IoSearch } from "react-icons/io5";
function Searchbar() {
    return (
        <div className="flex  relative ">
            <div className=" group flex  " >  {/* Allowing focus on this div */}
                
            <div className=" flex group-focus-within:border-black group-focus-within:-ml-[48px] ">
                <div className=" text-md rounded-l-full rounded-r-none bg-background2 item-centre    flex items-center justify-center 
            w-0 z-0 text-black group-focus-within:w-12 group-focus-within:border-[1px] group-focus-within:border-r-0 
            group-focus-within:border-search_border2 -mx-1 ">
                    <IoSearch className="text-white " />
                </div>
            
                <input
                    type="text"
                    placeholder="Search"
                    className="Search_bar  bg-background2 border-[1px] border-search_border group-focus-within:border-search_border2 focus:outline-none hidden
                    sm:block sm:rounded-l-full sm:rounded-r-none p-1 w-[450px] h-[2.3rem] text-white  group-focus-within:rounded-l-none  
                    "
                />
                </div>
            </div>
            {/* <button className="bg-red-500 text-white p-1 rounded-md">Search */}
            <div className="  text-lg rounded-full py-1 sm:rounded-r-full sm:rounded-l-none bg-search item-centre w-12 cursor-pointer text-black flex items-center justify-center">
                <IoSearch className="text-white " />
            </div>
        </div>
    )
}
export default Searchbar;
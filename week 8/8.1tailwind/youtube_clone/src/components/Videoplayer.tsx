import dynamic from "next/dynamic";
import { Videos } from "../Video"
import { useRouter } from "next/router";
import { use } from "react";
import Videogrid from "./Videogrid";
import Recommedation from "./Recommendation";
import { AiOutlineLike } from "react-icons/ai";
import { GrDislike } from "react-icons/gr";
// Dynamically import ReactPlayer with SSR disabled
const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });



function VideoPlayer() {
  const router = useRouter();
  const id = router.query.id;
  // Get video by id
  const video = Videos.find((video) => video.id === Number(id));
  return (
    <div className=" grid grid-cols-12 ">

      <div className="translate-x-[4rem] mt-4 col-span-8  rounded-lg overflow-hidden">
        <ReactPlayer
          url={video?.link} //explaination is given below
          controls
          width="765px"
          height="435px"
        ></ReactPlayer>
        <div className="text-xl mt-1 text-[18px]">{video?.title}</div>
        <div className="flex w-[48rem] justify-between  mt-1">
          <div className="flex gap-2">
            <img className="w-[2rem] rounded-full" src={video?.image} />
            <div >
              <div className=" font-medium text-[14px] tracking-wider">{video?.Channelname}
                <div className="text-[11.5px] font-thin"> {video?.subscriber} subscribers</
                div>


              </div>

            </div>
            <div className="rounded-2xl w-[5rem] ml-[2rem] h-[2rem]  bg-white text-black flex justify-center items-center cursor-pointer hover:bg-gray-400 ">
              <div className="text-[12px] font-semibold   ">Subscribe</div>
            </div>
          </div>

          <div className="flex ">
            <div className="flex h-[1.8rem] bg-search/70 hover:bg-search_border w-[4rem] justify-center items-center border rounded-xl rounded-r-none ">
              <AiOutlineLike className="w-4 h-4" />
              <div className="text-sm">52k</div>
            </div>

            <div className="flex justify-center bg-search/70 hover:bg-search_border items-center h-[1.8rem] w-[3rem]  border rounded-xl rounded-l-none ">
              <GrDislike />
            </div>
          </div>
        </div>
      </div >
      <div className="col-span-4" ><Recommedation /></div>
    </div>
  );
}

export default VideoPlayer;


// Using video?.link (with the optional chaining operator ?.) instead of video.link is a defensive programming technique to prevent runtime errors when the video object is undefined or null.

// Here’s why video?.link is used in your code:
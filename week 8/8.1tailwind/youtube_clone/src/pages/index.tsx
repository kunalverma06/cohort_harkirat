import Image from "next/image";
import localFont from "next/font/local";
import Videocard from "@/components/Videocard";
import VideoPage from "@/components/VideoPage";
import Homecomponent from "@/components/Home";

export default function Home() {
  return (
    <div>
     
      {/* <Navbar/>
      <div className="flex">
        <Sidebar/>
        <Videogrid/>
      </div> */}
      <Homecomponent/>
      
    </div>
  );
}

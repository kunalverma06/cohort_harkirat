import Navbar from "./Navbar";
import Videogrid from "@/components/Videogrid";
import Sidebar from "./Sidebar";
// import VideoPlayer from "./Videoplayer";
// import Videocard from "./Videoplayer";
import VideoPage from "./VideoPage";

function Home() {
    return (
        <div>
            <Navbar />
            <div className="flex">
                <Sidebar />
                <Videogrid />
                
            </div>
            <div>
                {/* <Videocard /> */}
            </div>
        </div>
    )
}
export default Home;
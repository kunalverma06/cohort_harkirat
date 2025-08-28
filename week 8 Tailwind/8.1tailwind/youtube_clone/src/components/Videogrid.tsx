import Videocard from "./Videocard";
import Router, { useRouter } from "next/router";
import { Videos } from "../Video"; //

function Videogrid() {

    const router = useRouter();
    const id = router.query;
    return (
     
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 pl-[20px] w-[100rem] absoulte">
            {Videos.map(video =>
                <div>
                    <Videocard
                        id={video.id} 
                        title={video.title}
                        image={video.image}
                        thumb={video.thumb}
                        name={video.Channelname}
                        views={video.views}
                        duration={video.duration}></Videocard>

                </div>)}
        </div>
    )
}
export default Videogrid;
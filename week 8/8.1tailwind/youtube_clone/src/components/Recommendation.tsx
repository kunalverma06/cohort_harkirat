import {Videos} from "../Video"
import RecommendationCard from "./RecommendationCard";
function Recommedation(props: any){
    return(
        <div className="grid grid-cols-1 gap-y-2 ">
        {Videos.map(video =>
            <div>
                 <RecommendationCard
                        id={video.id} 
                        title={video.title}
                        image={video.image}
                        thumb={video.thumb}
                        name={video.Channelname}
                        views={video.views}
                        duration={video.duration}></RecommendationCard>

                </div>
           
        )}
    </div>
    )

}
export default Recommedation;
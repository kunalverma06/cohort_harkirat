import Router, { useRouter } from "next/router";
function RecommendationCard(props: any) {
    const router = useRouter();
  return (
    <div className="w-[400px]" onClick={()=>{
        router.push(`/video/${props.id}`);
    }}> 
    <div className="grid grid-cols-12 translate-x-5 gap-2 top-7 relative ">
        <div className="col-span-5 cursor-pointer ">
            <img src={props.thumb} className="rounded-lg "></img>    

        </div>
        <div className="col-span-5 cursor-pointer">
            <div className="text-sm ">{props.title}</div>
            <p className="text-[0.85rem] text-gray-400">{props.name}</p>
            <div className="flex gap-2">
                <p className="text-[0.80rem] text-gray-400">{props.views}    </p>
                <p className="text-[0.83rem] text-gray-400">{props.duration}</p>
            </div>

        </div>
    </div>
    </div>
)}
export default RecommendationCard;
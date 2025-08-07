import { useRouter } from "next/router";

function Videocard(props: any){
    const router= useRouter();
    return(
        <div className="cursor-pointer" onClick={() => {
                        router.push(`/video/${props.id}`);
                    }}>

            <div className="p-2 transition-all duration-300   cursor-pointer w-[380px]  antialiased ">

                <img src={props.thumb} className="w-[370px]  rounded-lg hover:rounded-none duration-500 hover:scale-[99.5%] shadow-md"></img>
                
                <div className="grid grid-cols-12  pt-2  ">
                    <div className="col-span-1  px-[1px] ">
                        <img src={props.image} className="rounded-full w-8 h-8 " />
                    </div>
                    <div className="col-span-11 translate-x-2 ">
                        <h4>{props.title}</h4>
                        <p className="text-[0.85rem] text-gray-400">{props.name}</p>
                        <div className="flex gap-2">
                            <p className="text-[0.80rem] text-gray-400">{props.views}    </p>
                            <p className="text-[0.83rem] text-gray-400">{props.duration}</p>
                        </div>
                        {/* <p className="text-xs text-gray-400">1 week ago</p> */}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Videocard;
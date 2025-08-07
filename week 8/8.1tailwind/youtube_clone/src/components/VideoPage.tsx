// import { useRouter } from "next/router";
// import { Videos } from "../Video";

// const Videopage=()=>{
//     const router = useRouter();
//     const id = router.query.id;

//     const video = Videos.find((video)=>video.id===Number(id));
//     console.log(video);
   
//     return(
//         <div>
//             {/* <video src="https://youtu.be/ovnXKFPXBVo?si=Usb5a3ZkLCCYLHaQ"  width="100%" controls height="400px"></video> */}
//             <h1>{video?.title}</h1>
//         </div>
//     )
// }
// export default Videopage;
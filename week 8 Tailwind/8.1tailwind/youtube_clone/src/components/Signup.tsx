import { useRouter } from "next/router";

function Form(){
    return(
    <div className="w-screen h-screen flex justify-center bg-gray-600" >
    <div className="items-center justify-center relative top-[5rem] ">
        <div className="p-5 border-rounded text-black "><input placeholder="Enter your gmail" className="rounded-xl px-[1rem] py-[10px]"></input></div>
        <div className="p-5 border-rounded text-black "><input placeholder="Password" className="rounded-xl px-[1rem] py-[10px]"></input></div>
        
            <div className="flex  justify-center items-center bg-red-500 rounded-xl w-[5rem] h-[2rem] ml-[5rem] p-[1.5rem] hover:cursor-pointer">
                <div className="p-5 border-rounded  " >Signin</div>
            </div>
        </div>
    </div>

    )
}
export default Form